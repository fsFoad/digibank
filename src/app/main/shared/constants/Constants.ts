export interface AccountSummary {
  title: string;
  accountNumber: string;
  balance: number;
  blockedAmount: number;
  openingDate: number;
  openingBranch: string;
  dateOfLastTurnover: number;
}

export interface Tashilat {
  remaining: number;
  relevantUnit: string;
  branch: string;
  tashilatType: string;
  fileNumber: string;
  amount: number;
  date: number;
  accumulationPaymentObligation: number;
  installmentsPaid: number;
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
  ];
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
  ];
  static acItems = [
    {value: '000', label: '-'},
    {value: '111', label: 'حساب قرض‌الحسنه 25-1000000589-240'},
    {value: '222', label: 'حساب جاری 65-1000000145-340'},
    {value: '444', label: 'حساب جاری 25-1000500148-340'},
    {value: '333', label: 'حساب کوتاه‌مدت 01-1006580523-440'},
  ];
  static tashilats: Tashilat[] = [
    {
      remaining: 8465215749,
      relevantUnit: 'شرکت هولدینگ',
      branch: 'بازار',
      tashilatType: 'مضاربه',
      fileNumber: '139932-621',
      amount: 750000000,
      date: 13980116,
      accumulationPaymentObligation: 220000,
      installmentsPaid: 1000000000
    },
    {
      remaining: 5100000,
      relevantUnit: 'شرکت تابعه1',
      branch: 'دولت',
      tashilatType: 'فروش اقساطی',
      fileNumber: '139911-760',
      amount: 500000000,
      date: 13990424,
      accumulationPaymentObligation: 1000000,
      installmentsPaid: 5000000
    },
    {
      remaining: 1548254962,
      relevantUnit: 'شرکت تابعه2',
      branch: 'میدان آرژانتین',
      tashilatType: 'خرید دین',
      fileNumber: '139910-220',
      amount: 2700000000,
      date: 13990217,
      accumulationPaymentObligation: 0,
      installmentsPaid: 1400000000
    },
    {
      remaining: 643700000,
      relevantUnit: 'شرکت تابعه3',
      branch: 'میرداماد',
      tashilatType: 'خرید دین',
      fileNumber: '139908-129',
      amount: 4000000000,
      date: 14000828,
      accumulationPaymentObligation: 0,
      installmentsPaid: 2000000000
    },
  ];
  static organizationalUnit = [
    {value: '0', label: '-'},
    {value: '1', label: 'شرکت هلدینگ'},
    {value: '2', label: 'شرکت تابعه ۱'},
    {value: '3', label: 'شرکت تابعه ۲'},
    {value: '4', label: 'شرکت تابعه ۳'},
  ];
  static shenasnameType = [
    {value: '0', label: '-'},
    {value: '1', label: 'المثنی'},

  ];
  static signType = [
    {value: '0', label: '-'},
    {value: '1', label: 'نمونه امضاء'},
    {value: '2', label: 'اثر انگشت'},
    {value: '3', label: 'مهر'},
  ];
  static postOrganization = [
    {value: '0', label: '-'},
    {value: '2', label: 'مدیر عامل'},
    {value: '1', label: 'رئیس هیئت مدیره'},
    {value: '3', label: 'نایب رئیس هیات مدیره'},
  ];

  static contactTypes = [
    {value: '0', label: '-'},
    {value: '1', label: 'محل کار'},
    {value: '2', label: 'محل سکونت'},
  ];
  static statusZinaf = [
    {value: '0', label: '-'},
    {value: '1', label: 'فعال'},
    {value: '2', label: 'غیر فعال'},
  ];
  static noMalekiat = [
    {value: '0', label: '-'},
    {value: '1', label: 'خصوصی'},

  ];
  static bankNameList = [
    {label: '-', value: '0'},
    {label: 'ملی', value: '1'},
    {label: 'ملت', value: '2'},
    {label: 'صادرات', value: '3'},
    {label: 'پاسارگاد', value: '4'},
    {label: 'تجارت', value: '5'},
  ];
  static availableRoles = [
    {value: '0', label: '-'},
    {value: '1', label: '1-کارمند'},
    {value: '2', label: '2-مشتری'},
    {value: '3', label: '3-نمایندگی کارگزاری'},
    {value: '4', label: '4-تامین کننده'},
  ];
  static availableRolespickList = [
    {value: '1', label: '1-کارمند'},
    {value: '2', label: '2-مشتری'},
    {value: '3', label: '3-نمایندگی کارگزاری'},
    {value: '4', label: '4-تامین کننده'},
  ];
  static codeHoze = [
    {value: '0', label: '-'},
    {value: '1', label: '142'},
    {value: '2', label: '703'},
  ];
  static HavaleInternetiStatus = [
    {value: '000', label: '-'},
    {value: '111', label: 'ثبت اولیه'},
    {value: '222', label: 'در انتظار تایید'},
    {value: '333', label: 'ارسال شده به بانک'},
    {value: '444', label: 'تایید نهایی'},
    {value: '555', label: 'خطا دار'},
    {value: '666', label: 'لغو شده'},
  ];
  static referralType = [
    {value: '000', label: '-'},
    {value: '111', label: 'عادی'},
    {value: '222', label: 'دستور پرداخت'},

  ];
  static forItems = [
    {value: '000', label: '-'},
    {value: '111', label: 'حقوق'},
    {value: '222', label: 'تسویه حساب مالی'},
    {value: '333', label: 'پرداخت ویزه'},
    {value: '444', label: 'سایر پرداخت ها'},

  ];
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
  static contactTypeGroups = [
    {label: '-', value: '0'},
    // { label: 'نشانی', value: '1' },
    {label: 'تلفن ثابت محل کار', value: '1'},
    {label: 'تلفن ثابت محل سکونت', value: '2'},
    {label: 'تلفن همراه', value: '3'},
    {label: 'دورنگار', value: '4'},
    {label: 'پست الکترونیک', value: '5'},
    {label: 'صندوق پستی', value: '6'},
    {label: 'آدرس وب سایت', value: '7'},
    {label: 'آدرس شبکه اجتماعی تلگرام', value: '8'},
    {label: 'آدرس شبکه اجتماعی واتس اپ', value: '9'},
    {label: 'آدرس شبکه اجتماعی اینستاگرام', value: '10'},
    {label: 'آدرس شبکه اجتماعی لینکدین', value: '11'},
    {label: 'آدرس شبکه اجتماعی سایر', value: '12'},

  ];
  static mantaghe = [
    {label: '-', value: '0'},
    {label: 'منطقه1', value: '1'},
    {label: 'منطقه2', value: '2'},
    {label: 'منطقه3', value: '3'},
    {label: 'منطقه4', value: '4'},
    {label: 'منطقه5', value: '5'},
    {label: 'منطقه6', value: '6'},
    {label: 'منطقه7', value: '7'},
    {label: 'منطقه8', value: '8'},
    {label: 'منطقه9', value: '9'},
  ];
  static countryList = [
    {label: '-', value: null},
    {label: 'ایران', value: '1'},
    // {label: 'انگلیس', value: '2'},
    // {label: 'عربستان', value: '3'},
  ];
  static provinceList = [
    {label: '-', value: '0'},
    {label: 'تهران', value: '1', countryvalue: '1'},
    {label: 'اصفهان', value: '2', countryvalue: '1'},
    {label: 'فارس', value: '3', countryvalue: '1'},
    {label: 'خراسان رضوی', value: '4', countryvalue: '1'},
    {label: 'قم', value: '5', countryvalue: '1'},
    {label: 'کرمان', value: '6', countryvalue: '1'},
  ];
  static cityList = [
    {label: '-', value: '0'},
    {label: 'تهران', value: '1', provincevalue: '1'},
    {label: 'قم', value: '2', provincevalue: '5'},
    {label: 'اصفهان', value: '3', provincevalue: '2'},
    {label: 'شیراز', value: '4', provincevalue: '3'},
    {label: 'مشهد', value: '5', provincevalue: '4'},
    {label: 'کرمان', value: '6', provincevalue: '6'},
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
  static nahveTasarofs = [
    {label: '-', value: '0'},
    {label: 'ملکی', value: '1'},
    {label: 'استیجاری', value: '2'},
    {label: 'وقفی', value: '3'},
  ];
  static eduMaghta = [
    {label: '-', value: '0'},
    {label: 'دکتری', value: '1'},
    {label: 'کارشناسی ارشد', value: '2'},
    {label: 'کارشناسی', value: '3'},
    {label: 'کاردانی', value: '4'},
    {label: 'دیپلم', value: '5'},
    {label: 'سیکل', value: '6'},
  ];
  static eduReshte = [
    {value: '0', label: '-'},
    {value: '1', label: 'کامپیوتر'},
    {value: '2', label: 'مدیریت'},

  ];
  static recruitmentType = [
    {value: '0', label: '-'},
    {value: '1', label: 'دائم'},
    {value: '2', label: 'آزمایشی'},

  ];
  static vahed = [
    {value: '0', label: '-'},
    {value: '1', label: 'مدیریت'},
    {value: '2', label: 'فناوری'},

  ];
  static post = [
    {value: '0', label: '-'},
    {value: '1', label: 'مدیر عامل'},
    {value: '2', label: 'معمار سیستم'},

  ];

  static eduGraesh = [
    {label: '-', value: '0'},
    {label: 'سخت افزار', value: '1'},
    {label: 'کار آفرینی', value: '2'},

  ];
  static eduMoaseseType = [
    {label: '-', value: '0'},
    {label: 'دولتی', value: '1'},
    {label: 'آزاد', value: '2'},
    {label: 'غیر انتفاعی', value: '3'},
    {label: 'پیام نور', value: '4'},
    {label: 'کارو دانش', value: '5'},

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
