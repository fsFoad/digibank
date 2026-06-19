import { AfterViewInit, Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

/**
 * appViewMode
 * وقتی مقدارش true باشد، کل محتوای داخل المان میزبان را به حالت «نمایش»
 * (read-only / دیسیبل) می‌برد: تعامل با ماوس و کیبورد را می‌بندد، ظاهر دیسیبل می‌دهد
 * و روی کنترل‌های فرمِ نیتیو خاصیت disabled می‌گذارد.
 *
 * استثناء: هر المانی که کلاس «view-mode-keep» داشته باشد (یا فرزندش باشد) دیسیبل
 * نمی‌شود و کلیک‌پذیر می‌ماند؛ مثل دکمه‌های ناوبری «ادامه» و «مرحله قبل».
 *
 * استفاده:
 *   <div [appViewMode]="viewMode"><app-some-editor></app-some-editor></div>
 *   <div class="bottom-buttons view-mode-keep"> ... دکمه‌های ناوبری ... </div>
 */
@Directive({
  selector: '[appViewMode]'
})
export class ViewModeDirective implements AfterViewInit, OnChanges {
  @Input('appViewMode') viewMode = false;

  private readonly keepSelector = '.view-mode-keep';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.apply();
    // برخی کامپوننت‌های PrimeNG با تأخیر رندر می‌شوند؛ یک بار دیگر اعمال می‌کنیم.
    setTimeout(() => this.apply(), 0);
  }

  ngOnChanges(_changes: SimpleChanges): void {
    this.apply();
    // محتوای ادیتور با *ngIf بعد از این چرخه رندر می‌شود؛ پس از رندر دوباره اعمال می‌کنیم
    // تا دکمه‌های ناوبری (view-mode-keep) که دیرتر ساخته می‌شوند هم آزاد بمانند.
    setTimeout(() => this.apply(), 0);
  }

  private apply(): void {
    const host = this.el.nativeElement as HTMLElement;
    if (!host) {
      return;
    }

    if (this.viewMode) {
      this.renderer.setStyle(host, 'pointer-events', 'none');
      this.renderer.setStyle(host, 'opacity', '0.85');
      this.renderer.setStyle(host, 'cursor', 'not-allowed');
      this.renderer.setAttribute(host, 'aria-disabled', 'true');
      this.setControlsDisabled(host, true);
      this.releaseKeptElements(host, true);
    } else {
      this.renderer.removeStyle(host, 'pointer-events');
      this.renderer.removeStyle(host, 'opacity');
      this.renderer.removeStyle(host, 'cursor');
      this.renderer.removeAttribute(host, 'aria-disabled');
      this.setControlsDisabled(host, false);
      this.releaseKeptElements(host, false);
    }
  }

  private setControlsDisabled(host: HTMLElement, disabled: boolean): void {
    const controls = host.querySelectorAll('input, select, textarea, button');
    controls.forEach((node: Element) => {
      // المان‌هایی که داخل ناحیه‌ی «نگه‌دار» هستند را دست نمی‌زنیم.
      if (node.closest(this.keepSelector)) {
        return;
      }
      if (disabled) {
        this.renderer.setAttribute(node, 'disabled', 'true');
        this.renderer.setAttribute(node, 'tabindex', '-1');
      } else {
        this.renderer.removeAttribute(node, 'disabled');
        this.renderer.removeAttribute(node, 'tabindex');
      }
    });
  }

  // المان‌های دارای کلاس view-mode-keep را با وجود pointer-events:none میزبان، کلیک‌پذیر نگه می‌دارد.
  private releaseKeptElements(host: HTMLElement, viewMode: boolean): void {
    const kept = host.querySelectorAll(this.keepSelector);
    kept.forEach((node: Element) => {
      if (viewMode) {
        this.renderer.setStyle(node, 'pointer-events', 'auto');
        this.renderer.setStyle(node, 'cursor', 'pointer');
      } else {
        this.renderer.removeStyle(node, 'pointer-events');
        this.renderer.removeStyle(node, 'cursor');
      }
    });
  }
}
