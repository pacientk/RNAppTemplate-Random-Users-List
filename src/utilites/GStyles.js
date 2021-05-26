// const FONTS = {
//     Regular: 'Assistant-Regular',
//     Light: 'Assistant-Light',
//     ExtraLight: 'Assistant-ExtraLight',
//     Bold: 'Assistant-Bold',
//     SemiBold: 'Assistant-SemiBold',
//     ExtraBold: 'Assistant-ExtraBold',
// };

const COLORS = {
    $navy_blue: 'rgb(2, 6, 126)',
    $blue: 'rgb(53, 42, 255)',
    $lightish_blue: 'rgb(69,101,246)',
    $lighter_purple: 'rgb(162,64,247)',
    $ship_grey: 'rgb(74, 68, 83)',
    $spun_pearl: 'rgb(175, 168, 186)',
    $topaz: 'rgb(122, 116, 133)',
    $darkish_green: 'rgb(35, 128, 47)',
    $red: 'rgb(222, 0, 0)',
    $light_periwinkle: 'rgb(217, 224, 253)',
    $mercury: 'rgb(235, 233, 233)',
    $gray: 'rgb(233, 233, 233)',
    $yellow_orange: 'rgb(255, 190, 61)',
    $orangish_brown: 'rgb(184,94,6)',
    $light_gray: 'rgb(251,249,249)',
    $alto: 'rgb(220,219,219)',
    $pale_lilac: 'rgb(228,223,255)',
    $ios_blue: 'rgb(0,122,255)',
    $ios_red: 'rgb(255,59,48)',

    $black: 'rgb(0,0,0)',
    $black_5: 'rgba(0,0,0,.05)',
    $black_10: 'rgba(0,0,0,.1)',
    $black_20: 'rgba(0,0,0,.2)',
    $black_30: 'rgba(0,0,0,.3)',
    $black_40: 'rgba(0,0,0,.4)',
    $black_50: 'rgba(0,0,0,.5)',
    $black_60: 'rgba(0,0,0,.6)',
    $black_70: 'rgba(0,0,0,.7)',
    $black_75: 'rgba(0,0,0,.75)',
    $black_80: 'rgba(0,0,0,.8)',
    $black_90: 'rgba(0,0,0,.9)',

    $white: 'rgb(255,255,255)',
    $white_10: 'rgba(255,255,255,.1)',
    $white_20: 'rgba(255,255,255,.2)',
    $white_30: 'rgba(255,255,255,.3)',
    $white_40: 'rgba(255,255,255,.4)',
    $white_50: 'rgba(255,255,255,.5)',
    $white_60: 'rgba(255,255,255,.6)',
    $white_70: 'rgba(255,255,255,.7)',
    $white_80: 'rgba(255,255,255,.8)',
    $white_90: 'rgba(255,255,255,.9)',
};

const LAYOUT = {
    flex: {
        flex: 1,
    },
    flex0: {
        flex: 0,
    },
    flexRow: {
        flexDirection: 'row',
    },
    flexRowRev: {
        flexDirection: 'row-reverse',
    },
    flexColumn: {
        flexDirection: 'column',
    },
    jCenter: {
        justifyContent: 'center',
    },
    jEnd: {
        justifyContent: 'flex-end',
    },
    jStart: {
        justifyContent: 'flex-start',
    },
    jBetween: {
        justifyContent: 'space-between',
    },
    alignEnd: {
        alignItems: 'flex-end',
    },
    alignStart: {
        alignItems: 'flex-start',
    },
    alignCenter: {
        alignItems: 'center',
    },
    alignStretch: {
        alignItems: 'stretch',
    },
    w100: {
        width: '100%',
    },

    noPadding: {
        paddingRight: 0,
        paddingLeft: 0,
        paddingBottom: 0,
        paddingTop: 0,
    },
};

export default {
    // ...FONTS,
    ...COLORS,
    ...LAYOUT,
};
