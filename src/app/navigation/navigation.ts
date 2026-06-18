import {FuseNavigation} from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id: 'applications',
        title: 'ماژول ها',
        translate: 'menu.modules',
        type: 'group',
        children:
            [
            // {
            //     id: 'issueWalletGroup',
            //     title: 'مدیریت ذینفعان',
            //     translate: 'مدیریت ذینفعان',
            //     type: 'collapsable',
            //     icon: 'home',
            //     children: [
            //
            //     ]
            // },
            {
                id: 'managecommercialwallet',
                title: 'مدیریت کیف تجاری',
                translate: '',
                type: 'collapsable',
                icon: 'home',
                children: [
                    {
                        id: 'real',
                        title: 'صدور کیف تجاری',
                        translate: 'issue.commercial.wallet',
                        type: 'item',
                        icon: 'account_balance_wallet',
                        url: '/issue',
                    },
                    // {
                    //     id: 'managecommercialwallet',
                    //     title: 'مدیریت پذیرنده ها',
                    //     translate: '',
                    //     type: 'item',
                    //     icon: 'account_balance_wallet',
                    //     url: '/merchantmanagement',
                    // },
                    // {
                    //     id: 'branchmanagement',
                    //     title: 'مدیریت نمایندگی ها',
                    //     translate: '',
                    //     type: 'item',
                    //     icon: 'account_balance_wallet',
                    //     url: '/branchmanagement',
                    // },
                    // {
                    //     id: 'terminalmanagement',
                    //     title: 'مدیریت ترمینال ها',
                    //     translate: 'terminal.management',
                    //     type: 'item',
                    //     icon: 'account_balance_wallet',
                    //     url: '/terminalmanagement',
                    // },
                ]
            },

            {
                id: 'walletactions',
                title: 'عملیات مالی کیف پول',
                translate: 'wallet.financial.operations',
                type: 'collapsable',
                icon: 'home',
                children: [
                    {
                        id: 'walletCharge',
                        title: 'شارژ',
                        translate: 'charging.wallet',
                        type: 'collapsable',
                        icon: 'home',
                        children: [
                            {
                                id: 'chargewallet',
                                title: 'شارژکیف پول',
                                translate: 'charging.wallet',
                                type: 'item',
                                icon: 'payment',
                                url: '/chargewallet',
                            },
                            // {
                            //     id: 'chargewalletbysegment',
                            //     title: 'شارژکیف سازمانی',
                            //     translate: 'charging.organizational.wallet',
                            //     type: 'item',
                            //     icon: 'payment',
                            //     url: '/chargewalletbysegment',
                            // },
                            // {
                            //     id: 'groupchargewallet',
                            //     title: 'شارژ گروهی',
                            //     translate: 'charging.group',
                            //     type: 'item',
                            //     icon: 'payment',
                            //     url: '/groupchargewallet',
                            // },
                        ]
                    },
                    {
                        id: 'walletBuy',
                        title: 'خرید',
                        translate: 'purchase',
                        type: 'collapsable',
                        icon: 'home',
                        children: [{
                            id: 'purchase',
                            title: 'خرید',
                            translate: 'purchase',
                            type: 'item',
                            icon: 'shopping_basket',
                            url: '/purchasecredit',
                        },]
                    },
                ]
            },
            // {
            //     id: 'settlement',
            //     title: 'تسویه',
            //     translate: 'lbl.settlement',
            //     type: 'collapsable',
            //     icon: 'home',
            //     children: [
            //         {
            //             id: 'createSettlement',
            //             title: 'ایجاد تسویه حساب',
            //             translate: 'lbl.create.settlement',
            //             type: 'item',
            //             icon: 'payment',
            //             url: '/createsettlement',
            //         },
            //         {
            //             id: 'registerSettlement',
            //             title: 'ثبت تسویه حساب',
            //             translate: 'lbl.register.settlement',
            //             type: 'item',
            //             icon: 'payment',
            //             url: '/registersettlement',
            //         },
            //     ]
            // },


            {
                id: 'reportsMenu',
                title: 'گزارشات',
                translate: 'reports',
                type: 'collapsable',
                icon: 'home',
                children: [
            //         {
            //             id: 'reportBalance',
            //             title: 'مانده',
            //             translate: 'remaining',
            //             type: 'collapsable',
            //             icon: 'home',
            //             children: [
            //                 {
            //                     id: 'balance',
            //                     title: 'مانده کیف',
            //                     translate: 'rest.wallet',
            //                     type: 'item',
            //                     icon: 'money',
            //                     url: '/balance',
            //                 },
            //                 {
            //                     id: 'balance',
            //                     title: 'مانده کیف سازمانی',
            //                     translate: 'organizational.wallet.balance',
            //                     type: 'item',
            //                     icon: 'money',
            //                     url: '/balancewithsegment',
            //                 },
            //             ],
            //         },
                    {
                        id: 'reportBill',
                        title: 'صورتحساب',
                        translate: 'bills',
                        type: 'collapsable',
                        icon: 'home',
                        children: [
                            {
                                id: 'reportbillwallet',
                                title: 'صورتحساب کیف پول',
                                translate: 'report.wallet.billing',
                                type: 'item',
                                icon: 'receipt',
                                url: '/reportbillwallet',
                            },
                            // {
                            //     id: 'reportbillsegmentwallet',
                            //     title: 'صورتحساب کیف سازمانی',
                            //     translate: 'report.corporate.wallet.billing',
                            //     type: 'item',
                            //     icon: 'receipt',
                            //     url: '/reportbillsegmentwallet',
                            // },
                        ],
                    },
                ]
            }
            ,
            {
                id: 'basicData',
                title: 'پیکره بندی سامانه',
                translate: 'lbl.system.setting',
                type: 'collapsable',
                icon: 'home',
                children: [
                    // {
                    //     id: 'segmentBasicData',
                    //     title: 'اطلاعات پایه جیب',
                    //     translate: 'basic.wallet.information',
                    //     type: 'collapsable',
                    //     icon: 'home',
                    //     children: [
                    //         {
                    //             id: 'segmentmanagement',
                    //             title: 'مدیریت انواع جیب',
                    //             translate: 'manage.segments',
                    //             type: 'item',
                    //             icon: 'view_carousel',
                    //             url: '/segmentmanagement',
                    //         }, {
                    //             id: 'productsegmentmanagement',
                    //             title: 'مدیریت جیب های محصول',
                    //             translate: 'manage.product.segment',
                    //             type: 'item',
                    //             icon: 'view_carousel',
                    //             url: '/productsegmentmanagement',
                    //         }, {
                    //             id: 'terminalsegmentmanagement',
                    //             title: 'مدیریت جیب های مجاز ترمینال',
                    //             translate: 'manage.authorized.terminal.wallet',
                    //             type: 'item',
                    //             icon: 'view_carousel',
                    //             url: '/terminalsegmentmanagement',
                    //         },
                    //
                    //     ],
                    // },
                    // {
                    //     id: 'segmentBasicData',
                    //     title: 'مدیریت محدودیت ها',
                    //     translate: 'manage.constraints',
                    //     type: 'collapsable',
                    //     icon: 'home',
                    //     children: [
                    //         {
                    //             id: 'limitmanagement',
                    //             title: 'محدودیت های روزانه',
                    //             translate: 'manage.daily.restrictions',
                    //             type: 'item',
                    //             icon: 'open_with',
                    //             url: '/limitmanagement',
                    //         },
                    //         {
                    //             id: 'restrictmanagement',
                    //             title: 'restrictmanagement',
                    //             translate: 'lbl.service.restrictions',
                    //             type: 'item',
                    //             icon: 'pageview',
                    //             url: '/restrictmanagement',
                    //         }
                    //     ]
                    // },
                    // {
                    //     id: 'wageManagement',
                    //     title: 'مدیریت کارمزد',
                    //     translate: 'wage.management',
                    //     type: 'item',
                    //     icon: 'open_in_browser',
                    //     url: '/wagemanagement',
                    // },
                    {
                        id: 'serviceManafement',
                        title: 'مدیریت سرویسها',
                        translate: 'services.management',
                        type: 'item',
                        icon: 'open_in_browser',
                        url: '/servicemangement',
                    }
                    ,
                    // {
                    //     id: 'systemBasicData',
                    //     title: 'اطلاعات پایه سیستم',
                    //     translate: 'basic.system.information',
                    //     type: 'collapsable',
                    //     icon: 'home',
                    //     children: [
                    //          {
                    //             id: 'restrictmanagement',
                    //             title: 'مدیریت ممنوعیت ها',
                    //             translate: 'manage.bans',
                    //             type: 'item',
                    //             icon: 'pageview',
                    //             url: '/restrictmanagement',
                    //         },
                    //     ],
                    // },
                ]
            },
        ]
    }
];
