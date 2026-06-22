import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface CountdownParts {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

/**
 * صفحه‌ی «به‌زودی» با شمارش‌معکوسِ زنده.
 * تاریخِ هدف به‌صورت ثابت در کد تعریف شده است (هیچ ورودی از کاربر گرفته نمی‌شود).
 * برای تغییرِ تاریخِ راه‌اندازی، فقط مقدارِ TARGET_DATE را در پایین ویرایش کنید.
 */
@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.scss'],
})
export class ComingSoonComponent implements OnInit, OnDestroy {
  /** تاریخِ هدفِ راه‌اندازی — هاردکد. فرمت: سال، ماه(0=ژانویه)، روز، ساعت، دقیقه. */
  private static readonly TARGET_DATE = new Date(2026, 8, 22, 0, 0, 0);

  countdown: CountdownParts = { days: '00', hours: '00', minutes: '00', seconds: '00' };
  expired = false;

  email = '';
  subscribed = false;

  private timer: any = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.tick();
    this.timer = setInterval(() => this.tick(), 1000);
  }

  ngOnDestroy(): void {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  subscribe(): void {
    if (this.email) {
      this.subscribed = true;
    }
  }

  goHome(): void {
    this.router.navigate(['/']);
  }

  private tick(): void {
    const diff = ComingSoonComponent.TARGET_DATE.getTime() - Date.now();
    if (diff <= 0) {
      this.countdown = { days: '00', hours: '00', minutes: '00', seconds: '00' };
      this.expired = true;
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
      return;
    }
    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    this.countdown = {
      days: this.pad(days),
      hours: this.pad(hours),
      minutes: this.pad(minutes),
      seconds: this.pad(seconds),
    };
  }

  private pad(n: number): string {
    return n < 10 ? '0' + n : String(n);
  }
}
