import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {navigation} from 'app/navigation/navigation';
import {AppSetting} from '../../../main/shared/services/AppSetting';

import {FuseConfigService} from '@fuse/services/config.service';

@Component({
  selector: 'vertical-layout-1',
  templateUrl: './layout-1.component.html',
  styleUrls: ['./layout-1.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class VerticalLayout1Component implements OnInit, OnDestroy {
  fuseConfig: any;
  navigation: any;
  appSetting = AppSetting;
  items: any;
  // Private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {FuseConfigService} _fuseConfigService
   */
  constructor(
    private _fuseConfigService: FuseConfigService
  ) {
    // Set the defaults
    this.navigation = navigation;

    // Set the private defaults
    this._unsubscribeAll = new Subject();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // Subscribe to config changes
    this._fuseConfigService.config
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((config) => {
        this.fuseConfig = config;
      });

    this.items =
      [
        // {
        //     id: 'dashboard',
        //     label: 'صفحه اصلی',
        //     translate: 'home',
        //     type: 'item',
        //     icon: 'home',
        //     routerLink: '/dashboard',
        // },
        {
          id: 'issueWalletGroup',
          label: ' *مدریت ذینفعان',
          translate: ' *مدریت ذینفعان',
          type: 'collapsable',
          items: [
            {
              id: 'issuepersonalwallet2',
              label: '*ذینفع شخصی',
              translate: '*ذینفع شخصی',
              type: 'collapsable',
              icon: 'account_balance_wallet',
              items: [
                {
                  id: 'real',
                  label: '*تعریف',
                  translate: '*تعریف',
                  type: 'item',
                  icon: 'account_balance_wallet',
                  routerLink: '/person-editor',
                }
              ]
            }, {
              id: 'issuepersonalwallet2',
              label: '*ذینفع سازمانی',
              translate: '*ذینفع سازمانی',
              type: 'collapsable',
              icon: 'account_balance_wallet',
              items: [
                {
                  id: 'real',
                  label: '*تعریف',
                  translate: '*تعریف',
                  type: 'item',
                  icon: 'account_balance_wallet',
                  routerLink: '/organizational-entity-manager',
                }
              ]
            },
            {
              id: 'real',
              label: 'گزارشات',
              translate: 'گزارشات',
              type: 'item',
              icon: 'account_balance_wallet',
            },
          ]
        },
        {
          id: 'managecommercialwallet',
          label: ' *مدیریت حساب',
          translate: ' *مدیریت حساب',
          type: 'collapsable',
          items: [
            {
              id: 'real',
              label: 'لیست حسابها',
              translate: 'لیست حسابها',
              type: 'collapsable',
              items: [
                {
                  id: 'real',
                  label: 'حسابهای ریالی شما',
                  translate: 'حسابهای ریالی شما',
                  type: 'item',
                  icon: 'account_balance_wallet',
                },
                {
                  id: 'real',
                  label: 'حسابهای ارزی شما',
                  translate: 'حسابهای ارزی شما',
                  type: 'item',
                  icon: 'account_balance_wallet',
                },
                {
                  id: 'real',
                  label: 'گردش حسابهای ',
                  translate: 'گردش حسابهای ',
                  type: 'item',
                  icon: 'account_balance_wallet',
                },
                {
                  id: 'real',
                  label: 'گردش ریز انتقال وجوه ',
                  translate: 'گردش ریز انتقال وجوه ',
                  type: 'item',
                  icon: 'account_balance_wallet',
                },
                {
                  id: 'real',
                  label: 'دریافت فایل صورتحسابها',
                  translate: 'دریافت فایل صورتحسابها',
                  type: 'item',
                  icon: 'account_balance_wallet',
                },
                {
                  id: 'real',
                  label: 'گزارش منابع سپرده ',
                  translate: 'گزارش منابع سپرده ',
                  type: 'item',
                  icon: 'account_balance_wallet',
                },
              ]
            },
            {
              id: 'real',
              label: '*حواله بانکی',
              translate: '*حواله بانکی',
              type: 'collapsable',
              items: [
                {
                  id: 'real',
                  label: 'ثبت حواله های اینترنتی',
                  translate: 'ثبت حواله های اینترنتی',
                  type: 'item',
                  icon: 'account_balance_wallet',
                },
                {
                  id: 'real',
                  label: 'کارتابل حواله های اینترنتی',
                  translate: 'کارتابل حواله های اینترنتی',
                  type: 'item',
                  icon: 'account_balance_wallet',
                },
                {
                  id: 'real',
                  label: 'گزارش حواله های اینترنتی ',
                  translate: 'گزارش حواله های اینترنتی ',
                  type: 'item',
                  icon: 'account_balance_wallet',
                },
                {
                  id: 'reportBankTransfer',
                  label: '*گزارش حواله های اینترنتی (مالی)',
                  translate: '*گزارش حواله های اینترنتی (مالی)',
                  type: 'item',
                  routerLink: '/reportBankTransfer',
                },
                {
                  id: 'real',
                  label: 'گزارش حسابهای ذینعان',
                  translate: 'گزارش حسابهای ذینعان',
                  type: 'item',
                  icon: 'account_balance_wallet',
                },
              ]
            },

            {
              id: 'bills',
              label: '*صورت حساب ',
              translate: '*صورت حساب ',
              type: 'item',
              routerLink: '/bills',
            },
            {
              id: 'oldBill',
              label: '*صورت حساب قدیمی ',
              translate: '*صورت حساب قدیمی ',
              type: 'item',
              routerLink: '/oldBill',
            }
          ]
        },

        {
          id: 'walletactions',
          label: '*مدیریت پرداخت',
          translate: '*مدیریت پرداخت',
          type: 'collapsable',
          items: [
            {
              id: 'walletBuy',
              label: '*مدیریت حواله ساتنا',
              translate: '*مدیریت حواله ساتنا',
              type: 'collapsable',
              items: [
                {
                  id: 'groupGhabz',
                  label: '*ثبت حواله ساتنا (مالی)',
                  translate: '*ثبت حواله ساتنا (مالی)',
                  type: 'item',
                  routerLink: '/santaRegisterTransfer',
                },
                {
                  id: 'groupGhabz',
                  label: 'ثبت حواله ساتنا',
                  translate: 'ثبت حواله ساتنا',
                  type: 'item',
                  // routerLink: '/groupGhabz',
                },
                {
                  id: 'groupGhabz',
                  label: 'کارتابل حواله ساتنا',
                  translate: 'کارتابل حواله ساتنا',
                  type: 'item',
                  // routerLink: '/groupGhabz',
                },
                {
                  id: 'groupGhabz',
                  label: 'گزارش حواله ساتنا',
                  translate: 'گزارش حواله ساتنا',
                  type: 'item',
                  // routerLink: '/groupGhabz',
                },
              ]
            }, {
              id: 'walletBuy',
              label: '*مدیریت حواله پایا',
              translate: '*مدیریت حواله پایا',
              type: 'collapsable',
              items: [
                {
                  id: 'registerPayaTransfer',
                  label: '*ثبت حواله پایا (مالی)',
                  translate: '*ثبت حواله پایا (مالی)',
                  type: 'item',
                  routerLink: '/registerPayaTransfer',
                },
                {
                  id: 'bankpayaCharge',
                  label: 'ثبت حواله پایا',
                  translate: 'ثبت حواله پایا',
                  type: 'item',
                  // routerLink: '/bankpayaCharge',
                },
                {
                  id: 'cardBoardPaya',
                  label: '*کارتابل حواله پایا',
                  translate: '*کارتابل حواله پایا',
                  type: 'item',
                  routerLink: '/cardBoardPaya',
                },
                {
                  id: 'regularPayaRegisterTransfer',
                  label: '*ثبت حواله پایا منظم',
                  translate: '*ثبت حواله پایا منظم',
                  type: 'item',
                  routerLink: '/regularPayaRegisterTransfer',
                },
                {
                  id: 'bankpayaCharge',
                  label: 'کارتابل حواله پایا منطم',
                  translate: 'کارتابل حواله پایا منطم',
                  type: 'item',
                  // routerLink: '/bankpayaCharge',
                },
                {
                  id: 'bankpayaCharge',
                  label: 'ثبت حواله پایا گروهی',
                  translate: 'ثبت حواله پایا گروهی',
                  type: 'item',
                  // routerLink: '/bankpayaCharge',
                },
                {
                  id: 'payaTakTransfer',
                  label: '*ثبت حواله پایا تک مرحله ای',
                  translate: '*ثبت حواله پایا تک مرحله ای',
                  type: 'item',
                  routerLink: '/payaTakTransfer',
                },
                {
                  id: 'bankpayaCharge',
                  label: 'کارتابل حواله پایا گروهی',
                  translate: 'کارتابل حواله پایا گروهی',
                  type: 'item',
                  // routerLink: '/bankpayaCharge',
                },
                {
                  id: 'bankpayaCharge',
                  label: 'گزارش حواله پایا',
                  translate: 'گزارش حواله پایا',
                  type: 'item',
                  // routerLink: '/bankpayaCharge',
                },
                {
                  id: 'bankpayaCharge',
                  label: 'گزارش حواله های گروهی',
                  translate: 'گزارش حواله های گروهی',
                  type: 'item',
                  // routerLink: '/bankpayaCharge',
                },
                {
                  id: 'reportPayaBank',
                  label: '*گزارش وضعیت حواله های بانک پرداخت',
                  translate: '*گزارش وضعیت حواله های بانک پرداخت',
                  type: 'item',
                  routerLink: '/reportPayaBank',
                },
              ]
            },
            {
              id: 'walletBuy',
              label: 'مدیریت قبوض',
              translate: 'مدیریت قبوض',
              type: 'collapsable',
              items: [
                {
                  id: 'banckPayaGhabz',
                  label: '*پرداخت قبوض',
                  translate: '*پرداخت قبوض',
                  type: 'item',
                  routerLink: '/banckPayaGhabz',
                },
                {
                  id: 'bankpayaCharge',
                  label: 'کارتابل پرداخت قبوض',
                  translate: 'کارتابل پرداخت قبوض',
                  type: 'item',
                  // routerLink: '/bankpayaCharge',
                },
                {
                  id: 'bankpayaCharge',
                  label: 'پرداخت گروهی قبوض',
                  translate: 'پرداخت گروهی قبوض',
                  type: 'item',
                  // routerLink: '/bankpayaCharge',
                },
                {
                  id: 'reportGhabz',
                  label: '*گزارش پرداخت قبوض',
                  translate: '*گزارش پرداخت قبوض',
                  type: 'item',
                  routerLink: '/reportGhabz',
                },
              ]
            },
            {
              id: 'walletBuy',
              label: 'مدیریت واریز ویژه',
              translate: 'مدیریت واریز ویژه',
              type: 'collapsable',
              items: [
                {
                  id: 'bankpayaCharge',
                  label: 'بارگذاری فایل',
                  translate: 'بارگذاری فایل',
                  type: 'item',
                  // routerLink: '/bankpayaCharge',
                },
                {
                  id: 'bankpayaCharge',
                  label: 'ثبت اطلاعات',
                  translate: 'ثبت اطلاعات',
                  type: 'item',
                  // routerLink: '/bankpayaCharge',
                },
                {
                  id: 'bankpayaCharge',
                  label: 'مشاهده و ویرایش اطلاعات',
                  translate: 'مشاهده و ویرایش اطلاعات',
                  type: 'item',
                  // routerLink: '/bankpayaCharge',
                },
                {
                  id: 'bankpayaCharge',
                  label: 'گزارش فایل های بارگذاری شده',
                  translate: 'گزارش فایل های بارگذاری شده',
                  type: 'item',
                  // routerLink: '/bankpayaCharge',
                },
              ]
            },
            {
              id: 'walletBuy',
              label: '*شارژ ',
              translate: '*شارژ ',
              type: 'collapsable',
              items: [
                {
                  id: 'bankpayaCharge',
                  label: '*ثبت دستور بانک پرداخت شارژ سیم کارت',
                  translate: '*ثبت دستور بانک پرداخت شارژ سیم کارت',
                  type: 'item',
                  routerLink: '/bankpayaCharge',
                },
              ]
            },
            {
              id: 'Real',
              label: '*مدیریت شناسه',
              translate: '*مدیریت شناسه',
              type: 'collapsable',
              items: [
                {
                  id: 'searchYekta',
                  label: '*جستجو کد تراکنش یکتا',
                  translate: '*جستجو کد تراکنش یکتا',
                  type: 'collapsable',
                  routerLink: '/searchYekta',
                },
                {
                  id: 'yektaList',
                  label: '*لیست کد تراکنش یکتا',
                  translate: '*لیست کد تراکنش یکتا',
                  type: 'collapsable',
                  routerLink: '/yektaList',
                },
                {
                  id: 'createYekta',
                  label: '*تولید کد یکتا',
                  translate: '*تولید کد یکتا',
                  type: 'collapsable',
                  routerLink: '/createYekta',
                },
              ]
            },
            {
              id: 'Real',
              label: '*گزارشات',
              translate: '*گزارشات',
              type: 'collapsable',
              items: [
                {
                  id: 'reportYektaVarriz',
                  label: '*گزارش واریز',
                  translate: '*گزارش واریز',
                  type: 'collapsable',
                  routerLink: '/reportYektaVarriz',
                },
              ]
            },
          ]
        },
        {
          id: 'walletBuy',
          label: '* مدیریت تسهیلات ',
          translate: '*مدیریت تسهیلات ',
          type: 'collapsable',

          items: [
            {
              id: 'walletBuy',
              label: '*تسهیلات سازمان ',
              translate: '*تسهیلات سازمان ',
              type: 'collapsable',

              items: [
                {
                  id: 'purchase',
                  label: 'درخواست تسهیلات',
                  translate: 'درخواست تسهیلات',
                  type: 'item',


                },
                {
                  id: 'tashilatList',
                  label: '*اطلاعات تسهیلات دریافتی سازمان',
                  translate: '*اطلاعات تسهیلات دریافتی سازمان',
                  type: 'item',
                  routerLink: '/tashilatList',

                },
              ]
            },
            {
              id: 'walletBuy',
              label: 'تسهیلات کارکنان ',
              translate: 'تسهیلات کارکنان ',
              type: 'collapsable',
              items: [
                {
                  id: 'purchase',
                  label: 'صدور مجوز مشاهده تسهیلات کارکنان',
                  translate: 'صدور مجوز مشاهده تسهیلات کارکنان',
                  type: 'item',


                },
                {
                  id: 'purchase',
                  label: 'اطلاعات تسهیلات دریافتی کارکنان',
                  translate: 'اطلاعات تسهیلات دریافتی کارکنان',
                  type: 'item',


                },
              ]
            },
            {
              id: 'walletBuy',
              label: 'مدیریت اعتبار',
              translate: 'مدیریت اعتبار',
              type: 'collapsable',
              items: [
                {
                  id: 'purchase',
                  label: 'تعریف اعتبار',
                  translate: 'تعریف اعتبار',
                  type: 'item',
                },
                {
                  id: 'purchase',
                  label: 'تخصیص اعتبار',
                  translate: 'تخصیص اعتبار',
                  type: 'item',
                },
              ]
            }
          ]
        }, {
        id: 'walletBuy',
        label: ' *مدیریت اوراق بهادار ',
        translate: '*مدیریت اوراق بهادار ',
        type: 'collapsable',

        items: [
          {
            id: 'walletBuy',
            label: '*چک عادی / صیاد',
            translate: '*چک عادی / صیاد ',
            type: 'collapsable',
            items: [
              {
                id: 'purchase',
                label: 'صدور چک',
                translate: 'صدور چک',
                type: 'item',


              },
              {
                id: 'purchase',
                label: 'چاپ چک',
                translate: 'چاپ چک',
                type: 'item',


              },
              {
                id: 'purchase',
                label: 'اطلاعات چک های صادره',
                translate: 'اطلاعات چک های صادره',
                type: 'item',


              },
              {
                id: 'inquiryCheck',
                label: '*استعلام وضعیت چک ',
                translate: '*استعلام وضعیت چک ',
                type: 'item',
                routerLink: '/inquiryCheck',
              },
              {
                id: 'reportCheckBardasht',
                label: '*گزارش برداشت چک ',
                translate: '*گزارش برداشت چک ',
                type: 'item',
                routerLink: '/reportCheckBardasht',
              },
              {
                id: 'submitCheck',
                label: '*تاییدیه الکترونیکی چک ',
                translate: '*تاییدیه الکترونیکی چک ',
                type: 'item',
                routerLink: '/submitCheck',
              },
            ]
          }, {
            id: 'walletBuy',
            label: 'چکاوک ',
            translate: 'چکاوک ',
            type: 'collapsable',
            items: [
              {
                id: 'purchase',
                label: 'واگذاری چک ',
                translate: 'واگذاری چک ',
                type: 'item',


              },
              {
                id: 'purchase',
                label: 'اسکن تصویر چک ',
                translate: 'اسکن تصویر چک ',
                type: 'item',


              },
              {
                id: 'purchase',
                label: 'ارسال  به چکاوک ',
                translate: 'ارسال  به چکاوک ',
                type: 'item',


              },
              {
                id: 'purchase',
                label: 'اطلاعات واگذاری اسناد ',
                translate: 'اطلاعات واگذاری اسناد ',
                type: 'item',


              },
              {
                id: 'purchase',
                label: 'گزارش تجمیعی واگذاری اسناد کلر ',
                translate: 'گزارش تجمیعی واگذاری اسناد کلر ',
                type: 'item',


              },
            ]
          },
          {
            id: 'walletBuy',
            label: '*کلرینگ ',
            translate: '*کلرینگ ',
            type: 'collapsable',
            items: [
              {
                id: 'submitClear',
                label: '*اسناد واگذاری ',
                translate: '*اسناد واگذاری ',
                type: 'item',
                routerLink: '/submitClear',
              },
              {
                id: 'reportClear',
                label: '*گزارش اسناد واگذاری ',
                translate: '*گزارش اسناد واگذاری ',
                type: 'item',
                routerLink: '/reportClear',
              },
            ]
          },
          {
            id: 'walletBuy',
            label: '*گواهی سپرده ',
            translate: '*گواهی سپرده ',
            type: 'collapsable',
            items: [
              {
                id: 'reportClear',
                label: '*لیست گواهی سپرده ',
                translate: '*لیست گواهی سپرده ',
                type: 'item',
                routerLink: '/reportClear',
              },
            ]
          },
          {
            id: 'walletBuy',
            label: '*وراق مشارکت ',
            translate: '*اوراق مشارکت ',
            type: 'collapsable',
            items: [
              {
                id: 'reportClear',
                label: '*لیست اوراق مشارکت',
                translate: '*لیست اوراق مشارکت',
                type: 'item',
                routerLink: '/reportClear',
              },
            ]
          },
          {
            id: 'walletBuy',
            label: 'گزارشات ',
            translate: 'گزارشات ',
            type: 'collapsable',

            items: []
          },
        ]
      },
        {
          id: 'walletBuy',
          label: '* مدیریت کارت و کیف پول ',
          translate: '*مدیریت کارت و کیف پول ',
          type: 'collapsable',
          items: [
            {
              id: 'walletBuy',
              label: ' *کیف پول ',
              translate: '*کیف پول ',
              type: 'collapsable',
              items: [
                {
                  id: '/creatWallet',
                  label: '*تعریف کیف پول',
                  translate: ' *تعریف کیف پول',
                  type: 'item',
                  routerLink: '//creatWallet',
                },
                {
                  id: 'chargAmountWallet',
                  label: '*شارژ کیف پول',
                  translate: ' *شارژ کیف پول',
                  type: 'item',

                  routerLink: '/chargAmountWallet',
                },
                {
                  id: 'walletBuy',
                  label: 'شارژ گروهی کیف پول',
                  translate: ' شارژ گروهی کیف پول',
                  type: 'item',

                },
                {
                  id: 'ensedadWallet',
                  label: '*انسداد کیف پول',
                  translate: ' *انسداد کیف پول',
                  type: 'item',
                  routerLink: '/ensedadWallet',
                },
              ]
            },
            {
              id: 'walletBuy',
              label: ' *بن کارت ',
              translate: '*بن کارت ',
              type: 'collapsable',

              items: [
                {
                  id: 'registerBonCard',
                  label: '*صدور بن کارت ',
                  translate: '*صدور بن کارت ',
                  type: 'item',
                  routerLink: '/registerBonCard',
                },
                {
                  id: 'ensedadBonCard',
                  label: '*انسداد بن کارت ',
                  translate: '*انسداد بن کارت ',
                  type: 'item',

                  routerLink: '/ensedadBonCard',
                },
                {
                  id: 'rafeEnsedadBonCard',
                  label: '*رفع انسداد بن کارت ',
                  translate: '*رفع انسداد بن کارت ',
                  type: 'item',

                  routerLink: '/rafeEnsedadBonCard',
                },
              ]
            },
            {
              id: 'walletBuy',
              label: ' هدیه کارت ',
              translate: 'هدیه کارت ',
              type: 'collapsable',
              items: [
                {
                  id: 'purchase',
                  label: 'صدور هدیه کارت بانام/ بی نام ',
                  translate: 'صدور هدیه کارت بانام/ بی نام ',
                  type: 'item',

                },
                {
                  id: 'purchase',
                  label: 'انسداد هدیه کارت ',
                  translate: 'انسداد هدیه کارت ',
                  type: 'item',

                },
                {
                  id: 'purchase',
                  label: 'رفع انسداد هدیه کارت ',
                  translate: 'رفع انسداد هدیه کارت ',
                  type: 'item',

                },
                {
                  id: 'purchase',
                  label: 'شارژ هدیه کارت  ',
                  translate: 'شارژ هدیه کارت  ',
                  type: 'item',

                },
                {
                  id: 'purchase',
                  label: 'شارژ گروهی هدیه کارت  ',
                  translate: 'شارژ گروهی هدیه کارت  ',
                  type: 'item',

                },
                {
                  id: 'purchase',
                  label: 'ابطال گروهي هديه کارتهاي خام منقضي شده  ',
                  translate: 'ابطال گروهي هديه کارتهاي خام منقضي شده  ',
                  type: 'item',

                },
              ]
            },
            {
              id: 'walletBuy',
              label: ' درخواست صدور کارت حقوقی ',
              translate: 'درخواست صدور کارت حقوقی ',
              type: 'item',


            },
            {
              id: 'walletBuy',
              label: ' درخواست صدور کارت مجازی ',
              translate: 'درخواست صدور کارت مجازی ',
              type: 'item',


            },

            {
              id: 'walletBuy',
              label: ' *گزارشات ',
              translate: '*گزارشات ',
              type: 'collapsable',

              items: [
                {
                  id: '/reportStatusWallet',
                  label: '*وضعیت کیف پول',
                  translate: ' *وضعیت کیف پول',
                  type: 'item',
                  routerLink: '//reportStatusWallet',
                },
                {
                  id: 'billsBonCard',
                  label: ' *اطلاعات تراکنش بن کارت ',
                  translate: '*اطلاعات تراکنش بن کارت ',
                  type: 'item',
                  routerLink: '/billsBonCard',
                },
                {
                  id: 'walletBuy',
                  label: ' اطلاعات بن کارت های صادره ',
                  translate: 'اطلاعات بن کارت های صادره ',
                  type: 'item',


                },
                {
                  id: 'walletBuy',
                  label: ' اطلاعات تراکنس کارت ها ',
                  translate: ' اطلاعات تراکنس کارت ها',
                  type: 'item',


                },
                {
                  id: 'walletTransaction',
                  label: '*اطلاعات شارژ کیف پول به تفکیک واحد های تابعه',
                  translate: ' *اطلاعات شارژ کیف پول به تفکیک واحد های تابعه',
                  type: 'item',

                  routerLink: '/walletTransaction',
                },
              ]
            }

          ]
        },
        {
          id: 'walletBuy',
          label: ' مدیریت مالی و حسابداری ',
          translate: 'مدیریت مالی و حسابداری ',
          type: 'collapsable',

          items: [
            {
              id: 'walletBuy',
              label: 'اسناد مالی متناظر با تراکنش‌های بانکی',
              translate: ' اسناد مالی متناظر با تراکنش‌های بانکی',
              type: 'item',


            },
            {
              id: 'walletBuy',
              label: 'اطلاعات واریز های تجمیعی ',
              translate: ' اطلاعات واریز های تجمیعی ',
              type: 'item',


            },
            {
              id: 'walletBuy',
              label: 'اطلاعات برداشت های تجمیعی ',
              translate: ' اطلاعات برداشت های تجمیعی ',
              type: 'item',


            },
            {
              id: 'walletBuy',
              label: 'اطلاعات واریز های ذینفعان ',
              translate: ' اطلاعات واریز های ذینفعان ',
              type: 'item',
            },
            {
              id: 'walletBuy',
              label: 'اطلاعات واریز های ذینفعان ',
              translate: ' اطلاعات واریز های ذینفعان ',
              type: 'item',
            },
            {
              id: 'walletBuy',
              label: 'تعریف سرفصل های مالی ',
              translate: ' تعریف سرفصل های مالی ',
              type: 'item',
            },
            {
              id: 'walletBuy',
              label: 'قالب اسناد مالی ',
              translate: ' قالب اسناد مالی ',
              type: 'item',
            },
            {
              id: 'walletBuy',
              label: 'گزارشات',
              translate: 'گزارشات ',
              type: 'collapsable',
              items: []
            },
          ]
        },
        {
          id: 'walletBuy',
          label: 'گزارشات مدیریتی ',
          translate: 'گزارشات مدیریتی ',
          type: 'collapsable',

          items: [

            {
              id: 'walletBuy',
              label: 'دارایی ها ',
              translate: 'دارایی ها ',
              type: 'collapsable',

              items: [
                {
                  id: 'walletBuy',
                  label: ' مانده حساب',
                  translate: ' مانده حساب',
                  type: 'item',


                },
                {
                  id: 'walletBuy',
                  label: ' صورتحساب',
                  translate: ' صورتحساب ',
                  type: 'item',


                },
                {
                  id: 'walletBuy',
                  label: '  صورتحساب ارزی',
                  translate: '  صورتحساب ارزی',
                  type: 'item',


                },
                {
                  id: 'walletBuy',
                  label: ' اطلاعات آماری مانده حساب',
                  translate: ' اطلاعات آماری مانده حساب',
                  type: 'item',


                },
                {
                  id: 'walletBuy',
                  label: ' اطلاعات روند تغییر مانده ',
                  translate: ' اطلاعات روند تغییر مانده ',
                  type: 'item',


                },
                {
                  id: 'walletBuy',
                  label: ' اطلاعات واریزی ها',
                  translate: ' اطلاعات واریزی ها',
                  type: 'item',


                },
                {
                  id: 'walletBuy',
                  label: ' اطلاعات تجمیعی مانده لحظه ای حساب های بانکی',
                  translate: ' اطلاعات تجمیعی مانده لحظه ای حساب های بانکی',
                  type: 'item',


                }
              ]
            },
            {
              id: 'walletBuy',
              label: 'بدهی ها ',
              translate: 'بدهی ها ',
              type: 'collapsable',

              items: [
                {
                  id: 'walletBuy',
                  label: ' اطلاعات تسهیلات دریافتی به تفکیک واحدهای مربوطه',
                  translate: ' اطلاعات تسهیلات دریافتی به تفکیک واحدهای مربوطه',
                  type: 'item',


                }
              ]
            }
          ]
        },
        {
          id: 'walletBuy',
          label: '*تنظیمات ',
          translate: '*تنظیمات ',
          type: 'collapsable',

          items: [
            {
              id: 'walletBuy',
              label: 'بروزرسانی ها ',
              translate: 'بروزرسانی ها ',
              type: 'collapsable',

              items: [
                {
                  id: 'walletBuy',
                  label: ' به روزرسانی اطلاعات مشتریان',
                  translate: ' به روزرسانی اطلاعات مشتریان',
                  type: 'item',
                },
                {
                  id: 'walletBuy',
                  label: ' به روزرسانی اطلاعات حسابها',
                  translate: 'به روزرسانی اطلاعات حسابها ',
                  type: 'item',


                },
                {
                  id: 'walletBuy',
                  label: ' به روزرسانی اطلاعات چک',
                  translate: 'به روزرسانی اطلاعات چک ',
                  type: 'item',
                },
                {
                  id: 'walletBuy',
                  label: ' به روزرسانی اطلاعات تراکنش ها',
                  translate: 'به روزرسانی اطلاعات تراکنش ها ',
                  type: 'item',
                },
                {
                  id: 'walletBuy',
                  label: ' به روز رسانی اطلاعات تسهیلات',
                  translate: 'به روز رسانی اطلاعات تسهیلات ',
                  type: 'item'
                },
                {
                  id: 'walletBuy',
                  label: ' به روزسانی اطلاعات اوراق بهادار ',
                  translate: 'به روزسانی اطلاعات اوراق بهادار',
                  type: 'item',
                }
              ]
            },

            {
              id: 'walletBuy',
              label: 'مدیریت پیامک ',
              translate: 'مدیریت پیامک ',
              type: 'collapsable',

              items: [
                {
                  id: 'walletBuy',
                  label: ' به روزرسانی سطح دسترسی کاربران ',
                  translate: ' به روزرسانی سطح دسترسی کاربران ',
                  type: 'item',


                },
                {
                  id: 'walletBuy',
                  label: ' به روزرسانی سطح دسترسی کاربران ',
                  translate: ' به روزرسانی سطح دسترسی کاربران ',
                  type: 'item',


                },
              ]
            },
            {
              id: 'walletBuy',
              label: ' *مدیریت پیکره بندی ',
              translate: '*مدیریت پیکره بندی ',
              type: 'collapsable',
              items: [
                {
                  id: 'walletBuy',
                  label: ' پارامتر ها ',
                  translate: 'پارامتر ها ',
                  type: 'collapsable',
                  items: []
                },
                {
                  id: ' cardBoard',
                  label: '*کارتابل ',
                  translate: '*کارتابل ',
                  type: 'item',
                  routerLink: '/cardBoard',
                },
              ]
            },
          ]
        },

      ];

  }

  /**
   * On destroy
   */
  ngOnDestroy()
    :
    void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  };
}
