export interface AccountSummary {
    title: string;
    accountNumber: string;
    balance: number;
    blockedAmount: number;
    openingDate: number;
    openingBranch: string;
    dateOfLastTurnover: number;
  }
export class Constants {
  static acSummaries: AccountSummary[] = [
    {
      title: 'قرض الحسنه اشخاص حقوقی',
      accountNumber: '240-1000000589-25',
      balance: 350_000_000,
      blockedAmount: 41_000,
      dateOfLastTurnover: 14000902,
      openingBranch: 'ونک',
      openingDate: 14000715,
    },
    {
      title: 'جاری اشخاص حقوقی',
      accountNumber: '340-1000000145-65',
      balance: 1_435_000_000,
      blockedAmount: 1_000_500_000,
      dateOfLastTurnover: 14000901,
      openingBranch: 'استانبول',
      openingDate: 14000713,
    },
    {
      title: 'جاری اشخاص حقوقی',
      accountNumber: '340-1000000189-26',
      balance: 58_020_000,
      blockedAmount: 0,
      dateOfLastTurnover: 14000903,
      openingBranch: 'بازار',
      openingDate: 14000712,
    },
    {
      title: 'کوتاه مدت اشخاص حقوقی',
      accountNumber: '440-1006580523-01',
      balance: 140_400_000,
      blockedAmount: 0,
      dateOfLastTurnover: 14000905,
      openingBranch: 'تجریش',
      openingDate: 14000716,
    },
  ]
  static branchNames = [
    'تجریش',
    'بازار',
    'دولت',
    'گاندی',
    'شوش',
    'نلسون ماندلا',
    'سعدی',
    'سئول',
    'صادقیه',
    'توحید',
    'میدان آرژانتین',
    'میرداماد',
  ]
  static acItems = [
    { value: '000', label: '-' },
    { value: '111', label: 'حساب قرض‌الحسنه 25-1000000589-240' },
    { value: '222', label: 'حساب جاری 65-1000000145-340' },
    { value: '444', label: 'حساب جاری 25-1000500148-340' },
    { value: '333', label: 'حساب کوتاه‌مدت 01-1006580523-440' },
  ]
  static organizationalUnit = [
    { value: '000', label: '-' },
    { value: '111', label: 'شرکت هلدینگ' },
    { value: '222', label: 'شرکت تابعه ۱' },
    { value: '444', label: 'شرکت تابعه ۲' },
    { value: '333', label: 'شرکت تابعه ۳' },
  ]
  static HavaleInternetiStatus = [
    { value: '000', label: '-' },
    { value: '111', label: 'ثبت اولیه' },
    { value: '222', label: 'در انتظار تایید' },
    { value: '333', label: 'ارسال شده به بانک' },
    { value: '444', label: 'تایید نهایی' },
    { value: '555', label: 'خطا دار' },
    { value: '666', label: 'لغو شده' },
  ]
  static referralType = [
    { value: '000', label: '-' },
    { value: '111', label: 'عادی' },
    { value: '222', label: 'دستور پرداخت' },

  ]
  static forItems = [
    { value: '000', label: '-' },
    { value: '111', label: 'حقوق' },
    { value: '222', label: 'تسویه حساب مالی' },
    { value: '333', label: 'پرداخت ویزه' },
    { value: '444', label: 'سایر پرداخت ها' },

  ]
  // --------------------------------------------------------------------------------------
  static postalPattern = '\\b(?!(\\d)\\1{3})[13-9]{4}[1346-9][013-9]{5}\\b';
  static phoneNumPattern = '^[0][0-9][0-9]([0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]*$)';
  static mobNumPattern = '^((\\+98-?)|0)?[9][0-9]{9}$';
  static farsilabelMaxLength = 25;
  static farsiFamilyMaxLength = 25;
  static farsiSegmentMaxLength = 50;
  static EnSegmentMaxLength = 100;
  static maxAmountMaxLength = 21;
  static minAmountMaxLength = 21;
  static maxPostalvalue = 10;
  static maxPhoneNumber = 11;
  static maxLicenseNumber = 25;
  static servicelabelMaxLength = 25;
  static serviceEnlabelMaxLength = 50;
  static titleLimitMaxLength = 125;
  static titleRestrictionsMaxLength = 100;
  static wageTitleMaxLength = 125;
  static serviceAffectedIdMaxLength = 26;
  static feeAffectedIdMaxLength = 26;
  static maxToken = 26;
  static nationalvalueLength = 10;
  static shenaseMelliLength = 11;
  static mobileLength = 11;
  static cardNoLength = 16;
  static yearRangeNormal = '1300:1410';
  static optionValueNormal = 'value';
  static optionLabelNormal = 'label';
  static commercialProductId = 1300;
  static commercialProductId2 = 1100;
  static commercialProductId3 = 1200;
  static commercialProductId4 = 1800;
  static LTRDirectionForForDiv = 'ltr';
  static RTLDirectionForForDiv = 'rtl';
  static APPDirection = 'rtl';
  static IsFontIran = false;
  static AppFontClass: string = 'isFontIran';
  static AppWrapperInitializer: boolean = true;
    static notifiSuccess = 'عملیات با موفقیت انجام شد';
    static licenseInfoList = [
        {'label': '-', 'value': null},
        {'label': 'جوازکسب', 'value': 1},
        {'label': 'جوازتاسیس', 'value': 2},
        {'label': 'جوازآموزشی', 'value': 3},
        {'label': 'پروانه تاسیس', 'value': 4},
        {'label': 'مجوز بسته بندی,توزیع,پخش و تولید', 'value': 5},
    ];
    static customerTypes = [
        {label: 'حقیقی', value: '1'},
        {label: 'حقوقی', value: '2'},
    ];
    static citizenshipTypes = [
        {label: 'ایرانی', value: '1'},
        {label: 'غیرایرانی', value: '2'},
    ];
    static genderTypes = [
        {label: '-', value: null},
        {label: 'مرد', value: '1'},
        {label: 'زن', value: '2'},
    ];
    static countryList = [
        {label: '-', value: null},
        {label: 'ایران', value: '1'},
        // {label: 'انگلیس', value: '2'},
        // {label: 'عربستان', value: '3'},
    ];
    static provinceList = [
        {label: '-', value: null},
        {label: 'تهران', value: '1', countryvalue: '1'},
        {label: 'اصفهان', value:'2', countryvalue: '1'},
        {label: 'فارس', value: '3', countryvalue: '1'},
        {label: 'خراسان رضوی', value: '4', countryvalue: '1'},
        {label: 'قم', value: '5', countryvalue: '1'},
        {label: 'کرمان', value: '6', countryvalue: '1'},
    ];
    static cityList = [
        {label: '-', value: null},
        {label: 'تهران', value: '1', provincevalue: '1'},
        {label: 'قم', value: '2', provincevalue: '5'},
        {label: 'اصفهان', value: '3', provincevalue: '2'},
        {label: 'شیراز', value: '4', provincevalue: '3'},
        {label: 'مشهد', value: '5', provincevalue: '4'},
        {label: 'کرمان', value: '6' , provincevalue: '6'},
        {label: 'سیرجان', value: '7', provincevalue: '6'},
        {label: 'رفسنجان', value: '8', provincevalue: '6'},
        {label: 'جیرفت', value: '9', provincevalue: '6'},
        {label: 'بم', value: '10', provincevalue: '6'},
    ];
    static residenceTypes = [
        {label: '-', value: null},
        {label: 'مقیم', value: '1'},
        {label: 'غیرمقیم', value: '2'},
    ];
    static religion = [
        {label: '-', value: null},
        {label: 'اسلام', value: '1'},
        {label: 'مسیح', value: '2'},
        {label: 'یهود', value: '3'},
    ];
    static sect = [
        {label: '-', value: null},
        {label: 'شیعه', value: '1'},
        {label: 'سنی', value: '2'},

    ];
    static howResidence = [
        {label: '-', value: null},
        {label: 'دائم', value: '1'},
        {label: 'موقت', value: '2'},
    ];
    static terminalTypesList = [
        {value: null, label: '-'},
        {value: '1', label: 'پایانه فروش متصل به خط تلفن'},
        {value: '2', label: 'پایانه متصل به خط شبکه'},
        {value: '3', label: 'پایانه متصل به صندوق فروشگاهی'},
        {value: '4', label: 'پایانه فروش سیار'},
        {value: '5', label: 'درگاه پرداخت اینترنتی'},

    ];
    static segmentTypeList = [
        {
            value: null,
            label: '-'
        },
        {
            value: 1,
            label: 'نقدی'
        },
        {
            value: 2,
            label: 'تسهیلات'
        },
        {
            value: 3,
            label: 'اعتبار'
        },
    ];
    static purchaseTypeList = [
        {
            value: null,
            label: '-'
        },
        {
            value: 1,
            label: 'خرید فقط از جیب '
        },
        {
            value: 2,
            label: 'خرید ترکیبی'
        }
    ];
    static chargeTypeList = [
        {
            value: null,
            label: '-'
        },
        {
            value: 1,
            label: 'شارژ افزایشی'
        },
        {
            value: 2,
            label: 'شارژ ثابت'
        }
    ];
    static statusList = [
        {
            value: null,
            label: '-'
        },
        {
            value: 1,
            label: 'فعال'
        },
        {
            value: 2,
            label: 'غیرفعال'
        }
    ];
    static currencyList = [
        {
            value: null,
            label: '-'
        },
        {
            value: 'IRR',
            label: 'IRR'
        }
    ];
    static priorityList = [
        {value: null, label: '-'},
        {value: 1, label: 'اولویت اول'},
        {value: 2, label: 'اولویت دوم'},
        {value: 3, label: 'اولویت سوم'},
        {value: 4, label: 'اولویت چهارم'},
        {value: 5, label: 'اولویت پنجم'},
        {value: 6, label: 'اولویت ششم'},
        {value: 7, label: 'اولویت هفتم'},
        {value: 8, label: 'اولویت هشتم'},
        {value: 9, label: 'اولویت نهم'},
        {value: 10, label: 'اولویت دهم'},

    ];
    static organizationList = [
        {value: null, label: '-'},
        {value: 1, label: 'بانک رسالت'},
        {value: 2, label: 'سازمان توانیر'},
        {value: 3, label: 'وزارت بهداشت،درمان و آموزش پزشکی'},
        {value: 4, label: 'وزارت صنعت، معدن وتجارت'},
    ];


    constructor() {
        // Constants.notifiSuccess =this.translateService.instant('label.http.status.200');

    }
}
