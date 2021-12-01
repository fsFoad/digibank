
export class Constants {
  static acItems = [
    { value: '111', label: 'قرض‌الحسنه 25-1000000589-240' },
    { value: '222', label: 'جاری 65-1000000145-340' },
    { value: '444', label: 'جاری 25-1000500148-340' },
    { value: '333', label: 'کوتاه‌مدت 01-1006580523-440' },
  ]
  // static acItems = [
  //   {name: 'حقیقی', code: '1'},
  //   {name: 'حقوقی', code: '2'},
  // ];
  // --------------------------------------------------------------------------------------
  static postalPattern = '\\b(?!(\\d)\\1{3})[13-9]{4}[1346-9][013-9]{5}\\b';
  static phoneNumPattern = '^[0][0-9][0-9]([0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]*$)';
  static mobNumPattern = '^((\\+98-?)|0)?[9][0-9]{9}$';
  static farsiNameMaxLength = 25;
  static farsiFamilyMaxLength = 25;
  static farsiSegmentMaxLength = 50;
  static EnSegmentMaxLength = 100;
  static maxAmountMaxLength = 21;
  static minAmountMaxLength = 21;
  static maxPostalCode = 10;
  static maxPhoneNumber = 11;
  static maxLicenseNumber = 25;
  static serviceNameMaxLength = 25;
  static serviceEnNameMaxLength = 50;
  static titleLimitMaxLength = 125;
  static titleRestrictionsMaxLength = 100;
  static wageTitleMaxLength = 125;
  static serviceAffectedIdMaxLength = 26;
  static feeAffectedIdMaxLength = 26;
  static maxToken = 26;
  static nationalCodeLength = 10;
  static shenaseMelliLength = 11;
  static mobileLength = 11;
  static cardNoLength = 16;
  static yearRangeNormal = '1300:1410';
  static optionValueNormal = 'code';
  static optionLabelNormal = 'name';
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
        {'name': '-', 'code': null},
        {'name': 'جوازکسب', 'code': 1},
        {'name': 'جوازتاسیس', 'code': 2},
        {'name': 'جوازآموزشی', 'code': 3},
        {'name': 'پروانه تاسیس', 'code': 4},
        {'name': 'مجوز بسته بندی,توزیع,پخش و تولید', 'code': 5},
    ];
    static customerTypes = [
        {name: 'حقیقی', code: '1'},
        {name: 'حقوقی', code: '2'},
    ];
    static citizenshipTypes = [
        {name: 'ایرانی', code: '1'},
        {name: 'غیرایرانی', code: '2'},
    ];
    static genderTypes = [
        {name: '-', code: null},
        {name: 'مرد', code: '1'},
        {name: 'زن', code: '2'},
    ];
    static countryList = [
        {name: '-', code: null},
        {name: 'ایران', code: '1'},
        // {name: 'انگلیس', code: '2'},
        // {name: 'عربستان', code: '3'},
    ];
    static provinceList = [
        {name: '-', code: null},
        {name: 'تهران', code: '1', countryCode: '1'},
        {name: 'اصفهان', code:'2', countryCode: '1'},
        {name: 'فارس', code: '3', countryCode: '1'},
        {name: 'خراسان رضوی', code: '4', countryCode: '1'},
        {name: 'قم', code: '5', countryCode: '1'},
        {name: 'کرمان', code: '6', countryCode: '1'},
    ];
    static cityList = [
        {name: '-', code: null},
        {name: 'تهران', code: '1', provinceCode: '1'},
        {name: 'قم', code: '2', provinceCode: '5'},
        {name: 'اصفهان', code: '3', provinceCode: '2'},
        {name: 'شیراز', code: '4', provinceCode: '3'},
        {name: 'مشهد', code: '5', provinceCode: '4'},
        {name: 'کرمان', code: '6' , provinceCode: '6'},
        {name: 'سیرجان', code: '7', provinceCode: '6'},
        {name: 'رفسنجان', code: '8', provinceCode: '6'},
        {name: 'جیرفت', code: '9', provinceCode: '6'},
        {name: 'بم', code: '10', provinceCode: '6'},
    ];
    static residenceTypes = [
        {name: '-', code: null},
        {name: 'مقیم', code: '1'},
        {name: 'غیرمقیم', code: '2'},
    ];
    static howResidence = [
        {name: '-', code: null},
        {name: 'دائم', code: '1'},
        {name: 'موقت', code: '2'},
    ];
    static terminalTypesList = [
        {code: null, name: '-'},
        {code: '1', name: 'پایانه فروش متصل به خط تلفن'},
        {code: '2', name: 'پایانه متصل به خط شبکه'},
        {code: '3', name: 'پایانه متصل به صندوق فروشگاهی'},
        {code: '4', name: 'پایانه فروش سیار'},
        {code: '5', name: 'درگاه پرداخت اینترنتی'},

    ];
    static segmentTypeList = [
        {
            code: null,
            name: '-'
        },
        {
            code: 1,
            name: 'نقدی'
        },
        {
            code: 2,
            name: 'تسهیلات'
        },
        {
            code: 3,
            name: 'اعتبار'
        },
    ];
    static purchaseTypeList = [
        {
            code: null,
            name: '-'
        },
        {
            code: 1,
            name: 'خرید فقط از جیب '
        },
        {
            code: 2,
            name: 'خرید ترکیبی'
        }
    ];
    static chargeTypeList = [
        {
            code: null,
            name: '-'
        },
        {
            code: 1,
            name: 'شارژ افزایشی'
        },
        {
            code: 2,
            name: 'شارژ ثابت'
        }
    ];
    static statusList = [
        {
            code: null,
            name: '-'
        },
        {
            code: 1,
            name: 'فعال'
        },
        {
            code: 2,
            name: 'غیرفعال'
        }
    ];
    static currencyList = [
        {
            code: null,
            name: '-'
        },
        {
            code: 'IRR',
            name: 'IRR'
        }
    ];
    static priorityList = [
        {code: null, name: '-'},
        {code: 1, name: 'اولویت اول'},
        {code: 2, name: 'اولویت دوم'},
        {code: 3, name: 'اولویت سوم'},
        {code: 4, name: 'اولویت چهارم'},
        {code: 5, name: 'اولویت پنجم'},
        {code: 6, name: 'اولویت ششم'},
        {code: 7, name: 'اولویت هفتم'},
        {code: 8, name: 'اولویت هشتم'},
        {code: 9, name: 'اولویت نهم'},
        {code: 10, name: 'اولویت دهم'},

    ];
    static organizationList = [
        {code: null, name: '-'},
        {code: 1, name: 'بانک رسالت'},
        {code: 2, name: 'سازمان توانیر'},
        {code: 3, name: 'وزارت بهداشت،درمان و آموزش پزشکی'},
        {code: 4, name: 'وزارت صنعت، معدن وتجارت'},
    ];


    constructor() {
        // Constants.notifiSuccess =this.translateService.instant('label.http.status.200');

    }
}
