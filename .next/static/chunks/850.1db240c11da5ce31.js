(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [850],
  {
    75874: function (e, t, n) {
      let i = n(68737);
      e.exports = (i.__esModule ? i : {default: i}).default;
    },
    68737: function (e, t, n) {
      'use strict';
      var i;
      Object.defineProperty(t, '__esModule', {value: !0}),
        Object.defineProperty(t, 'default', {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let r = n(39392),
        s = (i = n(49924)) && i.__esModule ? i : {default: i},
        a = (0, r.cloneDeep)(s.default.theme);
    },
    39392: function (e, t) {
      'use strict';
      Object.defineProperty(t, '__esModule', {value: !0}),
        Object.defineProperty(t, 'cloneDeep', {
          enumerable: !0,
          get: function () {
            return function e(t) {
              return Array.isArray(t)
                ? t.map((t) => e(t))
                : 'object' == typeof t && null !== t
                ? Object.fromEntries(
                    Object.entries(t).map(([t, n]) => [t, e(n)])
                  )
                : t;
            };
          },
        });
    },
    49924: function (e) {
      e.exports = {
        content: [],
        presets: [],
        darkMode: 'media',
        theme: {
          accentColor: ({theme: e}) => ({...e('colors'), auto: 'auto'}),
          animation: {
            none: 'none',
            spin: 'spin 1s linear infinite',
            ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
            pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            bounce: 'bounce 1s infinite',
          },
          aria: {
            busy: 'busy="true"',
            checked: 'checked="true"',
            disabled: 'disabled="true"',
            expanded: 'expanded="true"',
            hidden: 'hidden="true"',
            pressed: 'pressed="true"',
            readonly: 'readonly="true"',
            required: 'required="true"',
            selected: 'selected="true"',
          },
          aspectRatio: {auto: 'auto', square: '1 / 1', video: '16 / 9'},
          backdropBlur: ({theme: e}) => e('blur'),
          backdropBrightness: ({theme: e}) => e('brightness'),
          backdropContrast: ({theme: e}) => e('contrast'),
          backdropGrayscale: ({theme: e}) => e('grayscale'),
          backdropHueRotate: ({theme: e}) => e('hueRotate'),
          backdropInvert: ({theme: e}) => e('invert'),
          backdropOpacity: ({theme: e}) => e('opacity'),
          backdropSaturate: ({theme: e}) => e('saturate'),
          backdropSepia: ({theme: e}) => e('sepia'),
          backgroundColor: ({theme: e}) => e('colors'),
          backgroundImage: {
            none: 'none',
            'gradient-to-t':
              'linear-gradient(to top, var(--tw-gradient-stops))',
            'gradient-to-tr':
              'linear-gradient(to top right, var(--tw-gradient-stops))',
            'gradient-to-r':
              'linear-gradient(to right, var(--tw-gradient-stops))',
            'gradient-to-br':
              'linear-gradient(to bottom right, var(--tw-gradient-stops))',
            'gradient-to-b':
              'linear-gradient(to bottom, var(--tw-gradient-stops))',
            'gradient-to-bl':
              'linear-gradient(to bottom left, var(--tw-gradient-stops))',
            'gradient-to-l':
              'linear-gradient(to left, var(--tw-gradient-stops))',
            'gradient-to-tl':
              'linear-gradient(to top left, var(--tw-gradient-stops))',
          },
          backgroundOpacity: ({theme: e}) => e('opacity'),
          backgroundPosition: {
            bottom: 'bottom',
            center: 'center',
            left: 'left',
            'left-bottom': 'left bottom',
            'left-top': 'left top',
            right: 'right',
            'right-bottom': 'right bottom',
            'right-top': 'right top',
            top: 'top',
          },
          backgroundSize: {auto: 'auto', cover: 'cover', contain: 'contain'},
          blur: {
            0: '0',
            none: '0',
            sm: '4px',
            DEFAULT: '8px',
            md: '12px',
            lg: '16px',
            xl: '24px',
            '2xl': '40px',
            '3xl': '64px',
          },
          borderColor: ({theme: e}) => ({
            ...e('colors'),
            DEFAULT: e('colors.gray.200', 'currentColor'),
          }),
          borderOpacity: ({theme: e}) => e('opacity'),
          borderRadius: {
            none: '0px',
            sm: '0.125rem',
            DEFAULT: '0.25rem',
            md: '0.375rem',
            lg: '0.5rem',
            xl: '0.75rem',
            '2xl': '1rem',
            '3xl': '1.5rem',
            full: '9999px',
          },
          borderSpacing: ({theme: e}) => ({...e('spacing')}),
          borderWidth: {DEFAULT: '1px', 0: '0px', 2: '2px', 4: '4px', 8: '8px'},
          boxShadow: {
            sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
            DEFAULT:
              '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
            md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
            lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
            xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
            '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
            inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
            none: 'none',
          },
          boxShadowColor: ({theme: e}) => e('colors'),
          brightness: {
            0: '0',
            50: '.5',
            75: '.75',
            90: '.9',
            95: '.95',
            100: '1',
            105: '1.05',
            110: '1.1',
            125: '1.25',
            150: '1.5',
            200: '2',
          },
          caretColor: ({theme: e}) => e('colors'),
          colors: ({colors: e}) => ({
            inherit: e.inherit,
            current: e.current,
            transparent: e.transparent,
            black: e.black,
            white: e.white,
            slate: e.slate,
            gray: e.gray,
            zinc: e.zinc,
            neutral: e.neutral,
            stone: e.stone,
            red: e.red,
            orange: e.orange,
            amber: e.amber,
            yellow: e.yellow,
            lime: e.lime,
            green: e.green,
            emerald: e.emerald,
            teal: e.teal,
            cyan: e.cyan,
            sky: e.sky,
            blue: e.blue,
            indigo: e.indigo,
            violet: e.violet,
            purple: e.purple,
            fuchsia: e.fuchsia,
            pink: e.pink,
            rose: e.rose,
          }),
          columns: {
            auto: 'auto',
            1: '1',
            2: '2',
            3: '3',
            4: '4',
            5: '5',
            6: '6',
            7: '7',
            8: '8',
            9: '9',
            10: '10',
            11: '11',
            12: '12',
            '3xs': '16rem',
            '2xs': '18rem',
            xs: '20rem',
            sm: '24rem',
            md: '28rem',
            lg: '32rem',
            xl: '36rem',
            '2xl': '42rem',
            '3xl': '48rem',
            '4xl': '56rem',
            '5xl': '64rem',
            '6xl': '72rem',
            '7xl': '80rem',
          },
          container: {},
          content: {none: 'none'},
          contrast: {
            0: '0',
            50: '.5',
            75: '.75',
            100: '1',
            125: '1.25',
            150: '1.5',
            200: '2',
          },
          cursor: {
            auto: 'auto',
            default: 'default',
            pointer: 'pointer',
            wait: 'wait',
            text: 'text',
            move: 'move',
            help: 'help',
            'not-allowed': 'not-allowed',
            none: 'none',
            'context-menu': 'context-menu',
            progress: 'progress',
            cell: 'cell',
            crosshair: 'crosshair',
            'vertical-text': 'vertical-text',
            alias: 'alias',
            copy: 'copy',
            'no-drop': 'no-drop',
            grab: 'grab',
            grabbing: 'grabbing',
            'all-scroll': 'all-scroll',
            'col-resize': 'col-resize',
            'row-resize': 'row-resize',
            'n-resize': 'n-resize',
            'e-resize': 'e-resize',
            's-resize': 's-resize',
            'w-resize': 'w-resize',
            'ne-resize': 'ne-resize',
            'nw-resize': 'nw-resize',
            'se-resize': 'se-resize',
            'sw-resize': 'sw-resize',
            'ew-resize': 'ew-resize',
            'ns-resize': 'ns-resize',
            'nesw-resize': 'nesw-resize',
            'nwse-resize': 'nwse-resize',
            'zoom-in': 'zoom-in',
            'zoom-out': 'zoom-out',
          },
          divideColor: ({theme: e}) => e('borderColor'),
          divideOpacity: ({theme: e}) => e('borderOpacity'),
          divideWidth: ({theme: e}) => e('borderWidth'),
          dropShadow: {
            sm: '0 1px 1px rgb(0 0 0 / 0.05)',
            DEFAULT: [
              '0 1px 2px rgb(0 0 0 / 0.1)',
              '0 1px 1px rgb(0 0 0 / 0.06)',
            ],
            md: ['0 4px 3px rgb(0 0 0 / 0.07)', '0 2px 2px rgb(0 0 0 / 0.06)'],
            lg: ['0 10px 8px rgb(0 0 0 / 0.04)', '0 4px 3px rgb(0 0 0 / 0.1)'],
            xl: [
              '0 20px 13px rgb(0 0 0 / 0.03)',
              '0 8px 5px rgb(0 0 0 / 0.08)',
            ],
            '2xl': '0 25px 25px rgb(0 0 0 / 0.15)',
            none: '0 0 #0000',
          },
          fill: ({theme: e}) => ({none: 'none', ...e('colors')}),
          flex: {
            1: '1 1 0%',
            auto: '1 1 auto',
            initial: '0 1 auto',
            none: 'none',
          },
          flexBasis: ({theme: e}) => ({
            auto: 'auto',
            ...e('spacing'),
            '1/2': '50%',
            '1/3': '33.333333%',
            '2/3': '66.666667%',
            '1/4': '25%',
            '2/4': '50%',
            '3/4': '75%',
            '1/5': '20%',
            '2/5': '40%',
            '3/5': '60%',
            '4/5': '80%',
            '1/6': '16.666667%',
            '2/6': '33.333333%',
            '3/6': '50%',
            '4/6': '66.666667%',
            '5/6': '83.333333%',
            '1/12': '8.333333%',
            '2/12': '16.666667%',
            '3/12': '25%',
            '4/12': '33.333333%',
            '5/12': '41.666667%',
            '6/12': '50%',
            '7/12': '58.333333%',
            '8/12': '66.666667%',
            '9/12': '75%',
            '10/12': '83.333333%',
            '11/12': '91.666667%',
            full: '100%',
          }),
          flexGrow: {0: '0', DEFAULT: '1'},
          flexShrink: {0: '0', DEFAULT: '1'},
          fontFamily: {
            sans: [
              'ui-sans-serif',
              'system-ui',
              'sans-serif',
              '"Apple Color Emoji"',
              '"Segoe UI Emoji"',
              '"Segoe UI Symbol"',
              '"Noto Color Emoji"',
            ],
            serif: [
              'ui-serif',
              'Georgia',
              'Cambria',
              '"Times New Roman"',
              'Times',
              'serif',
            ],
            mono: [
              'ui-monospace',
              'SFMono-Regular',
              'Menlo',
              'Monaco',
              'Consolas',
              '"Liberation Mono"',
              '"Courier New"',
              'monospace',
            ],
          },
          fontSize: {
            xs: ['0.75rem', {lineHeight: '1rem'}],
            sm: ['0.875rem', {lineHeight: '1.25rem'}],
            base: ['1rem', {lineHeight: '1.5rem'}],
            lg: ['1.125rem', {lineHeight: '1.75rem'}],
            xl: ['1.25rem', {lineHeight: '1.75rem'}],
            '2xl': ['1.5rem', {lineHeight: '2rem'}],
            '3xl': ['1.875rem', {lineHeight: '2.25rem'}],
            '4xl': ['2.25rem', {lineHeight: '2.5rem'}],
            '5xl': ['3rem', {lineHeight: '1'}],
            '6xl': ['3.75rem', {lineHeight: '1'}],
            '7xl': ['4.5rem', {lineHeight: '1'}],
            '8xl': ['6rem', {lineHeight: '1'}],
            '9xl': ['8rem', {lineHeight: '1'}],
          },
          fontWeight: {
            thin: '100',
            extralight: '200',
            light: '300',
            normal: '400',
            medium: '500',
            semibold: '600',
            bold: '700',
            extrabold: '800',
            black: '900',
          },
          gap: ({theme: e}) => e('spacing'),
          gradientColorStops: ({theme: e}) => e('colors'),
          gradientColorStopPositions: {
            '0%': '0%',
            '5%': '5%',
            '10%': '10%',
            '15%': '15%',
            '20%': '20%',
            '25%': '25%',
            '30%': '30%',
            '35%': '35%',
            '40%': '40%',
            '45%': '45%',
            '50%': '50%',
            '55%': '55%',
            '60%': '60%',
            '65%': '65%',
            '70%': '70%',
            '75%': '75%',
            '80%': '80%',
            '85%': '85%',
            '90%': '90%',
            '95%': '95%',
            '100%': '100%',
          },
          grayscale: {0: '0', DEFAULT: '100%'},
          gridAutoColumns: {
            auto: 'auto',
            min: 'min-content',
            max: 'max-content',
            fr: 'minmax(0, 1fr)',
          },
          gridAutoRows: {
            auto: 'auto',
            min: 'min-content',
            max: 'max-content',
            fr: 'minmax(0, 1fr)',
          },
          gridColumn: {
            auto: 'auto',
            'span-1': 'span 1 / span 1',
            'span-2': 'span 2 / span 2',
            'span-3': 'span 3 / span 3',
            'span-4': 'span 4 / span 4',
            'span-5': 'span 5 / span 5',
            'span-6': 'span 6 / span 6',
            'span-7': 'span 7 / span 7',
            'span-8': 'span 8 / span 8',
            'span-9': 'span 9 / span 9',
            'span-10': 'span 10 / span 10',
            'span-11': 'span 11 / span 11',
            'span-12': 'span 12 / span 12',
            'span-full': '1 / -1',
          },
          gridColumnEnd: {
            auto: 'auto',
            1: '1',
            2: '2',
            3: '3',
            4: '4',
            5: '5',
            6: '6',
            7: '7',
            8: '8',
            9: '9',
            10: '10',
            11: '11',
            12: '12',
            13: '13',
          },
          gridColumnStart: {
            auto: 'auto',
            1: '1',
            2: '2',
            3: '3',
            4: '4',
            5: '5',
            6: '6',
            7: '7',
            8: '8',
            9: '9',
            10: '10',
            11: '11',
            12: '12',
            13: '13',
          },
          gridRow: {
            auto: 'auto',
            'span-1': 'span 1 / span 1',
            'span-2': 'span 2 / span 2',
            'span-3': 'span 3 / span 3',
            'span-4': 'span 4 / span 4',
            'span-5': 'span 5 / span 5',
            'span-6': 'span 6 / span 6',
            'span-7': 'span 7 / span 7',
            'span-8': 'span 8 / span 8',
            'span-9': 'span 9 / span 9',
            'span-10': 'span 10 / span 10',
            'span-11': 'span 11 / span 11',
            'span-12': 'span 12 / span 12',
            'span-full': '1 / -1',
          },
          gridRowEnd: {
            auto: 'auto',
            1: '1',
            2: '2',
            3: '3',
            4: '4',
            5: '5',
            6: '6',
            7: '7',
            8: '8',
            9: '9',
            10: '10',
            11: '11',
            12: '12',
            13: '13',
          },
          gridRowStart: {
            auto: 'auto',
            1: '1',
            2: '2',
            3: '3',
            4: '4',
            5: '5',
            6: '6',
            7: '7',
            8: '8',
            9: '9',
            10: '10',
            11: '11',
            12: '12',
            13: '13',
          },
          gridTemplateColumns: {
            none: 'none',
            subgrid: 'subgrid',
            1: 'repeat(1, minmax(0, 1fr))',
            2: 'repeat(2, minmax(0, 1fr))',
            3: 'repeat(3, minmax(0, 1fr))',
            4: 'repeat(4, minmax(0, 1fr))',
            5: 'repeat(5, minmax(0, 1fr))',
            6: 'repeat(6, minmax(0, 1fr))',
            7: 'repeat(7, minmax(0, 1fr))',
            8: 'repeat(8, minmax(0, 1fr))',
            9: 'repeat(9, minmax(0, 1fr))',
            10: 'repeat(10, minmax(0, 1fr))',
            11: 'repeat(11, minmax(0, 1fr))',
            12: 'repeat(12, minmax(0, 1fr))',
          },
          gridTemplateRows: {
            none: 'none',
            subgrid: 'subgrid',
            1: 'repeat(1, minmax(0, 1fr))',
            2: 'repeat(2, minmax(0, 1fr))',
            3: 'repeat(3, minmax(0, 1fr))',
            4: 'repeat(4, minmax(0, 1fr))',
            5: 'repeat(5, minmax(0, 1fr))',
            6: 'repeat(6, minmax(0, 1fr))',
            7: 'repeat(7, minmax(0, 1fr))',
            8: 'repeat(8, minmax(0, 1fr))',
            9: 'repeat(9, minmax(0, 1fr))',
            10: 'repeat(10, minmax(0, 1fr))',
            11: 'repeat(11, minmax(0, 1fr))',
            12: 'repeat(12, minmax(0, 1fr))',
          },
          height: ({theme: e}) => ({
            auto: 'auto',
            ...e('spacing'),
            '1/2': '50%',
            '1/3': '33.333333%',
            '2/3': '66.666667%',
            '1/4': '25%',
            '2/4': '50%',
            '3/4': '75%',
            '1/5': '20%',
            '2/5': '40%',
            '3/5': '60%',
            '4/5': '80%',
            '1/6': '16.666667%',
            '2/6': '33.333333%',
            '3/6': '50%',
            '4/6': '66.666667%',
            '5/6': '83.333333%',
            full: '100%',
            screen: '100vh',
            svh: '100svh',
            lvh: '100lvh',
            dvh: '100dvh',
            min: 'min-content',
            max: 'max-content',
            fit: 'fit-content',
          }),
          hueRotate: {
            0: '0deg',
            15: '15deg',
            30: '30deg',
            60: '60deg',
            90: '90deg',
            180: '180deg',
          },
          inset: ({theme: e}) => ({
            auto: 'auto',
            ...e('spacing'),
            '1/2': '50%',
            '1/3': '33.333333%',
            '2/3': '66.666667%',
            '1/4': '25%',
            '2/4': '50%',
            '3/4': '75%',
            full: '100%',
          }),
          invert: {0: '0', DEFAULT: '100%'},
          keyframes: {
            spin: {to: {transform: 'rotate(360deg)'}},
            ping: {'75%, 100%': {transform: 'scale(2)', opacity: '0'}},
            pulse: {'50%': {opacity: '.5'}},
            bounce: {
              '0%, 100%': {
                transform: 'translateY(-25%)',
                animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
              },
              '50%': {
                transform: 'none',
                animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
              },
            },
          },
          letterSpacing: {
            tighter: '-0.05em',
            tight: '-0.025em',
            normal: '0em',
            wide: '0.025em',
            wider: '0.05em',
            widest: '0.1em',
          },
          lineHeight: {
            none: '1',
            tight: '1.25',
            snug: '1.375',
            normal: '1.5',
            relaxed: '1.625',
            loose: '2',
            3: '.75rem',
            4: '1rem',
            5: '1.25rem',
            6: '1.5rem',
            7: '1.75rem',
            8: '2rem',
            9: '2.25rem',
            10: '2.5rem',
          },
          listStyleType: {none: 'none', disc: 'disc', decimal: 'decimal'},
          listStyleImage: {none: 'none'},
          margin: ({theme: e}) => ({auto: 'auto', ...e('spacing')}),
          lineClamp: {1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6'},
          maxHeight: ({theme: e}) => ({
            ...e('spacing'),
            none: 'none',
            full: '100%',
            screen: '100vh',
            svh: '100svh',
            lvh: '100lvh',
            dvh: '100dvh',
            min: 'min-content',
            max: 'max-content',
            fit: 'fit-content',
          }),
          maxWidth: ({theme: e, breakpoints: t}) => ({
            ...e('spacing'),
            none: 'none',
            xs: '20rem',
            sm: '24rem',
            md: '28rem',
            lg: '32rem',
            xl: '36rem',
            '2xl': '42rem',
            '3xl': '48rem',
            '4xl': '56rem',
            '5xl': '64rem',
            '6xl': '72rem',
            '7xl': '80rem',
            full: '100%',
            min: 'min-content',
            max: 'max-content',
            fit: 'fit-content',
            prose: '65ch',
            ...t(e('screens')),
          }),
          minHeight: ({theme: e}) => ({
            ...e('spacing'),
            full: '100%',
            screen: '100vh',
            svh: '100svh',
            lvh: '100lvh',
            dvh: '100dvh',
            min: 'min-content',
            max: 'max-content',
            fit: 'fit-content',
          }),
          minWidth: ({theme: e}) => ({
            ...e('spacing'),
            full: '100%',
            min: 'min-content',
            max: 'max-content',
            fit: 'fit-content',
          }),
          objectPosition: {
            bottom: 'bottom',
            center: 'center',
            left: 'left',
            'left-bottom': 'left bottom',
            'left-top': 'left top',
            right: 'right',
            'right-bottom': 'right bottom',
            'right-top': 'right top',
            top: 'top',
          },
          opacity: {
            0: '0',
            5: '0.05',
            10: '0.1',
            15: '0.15',
            20: '0.2',
            25: '0.25',
            30: '0.3',
            35: '0.35',
            40: '0.4',
            45: '0.45',
            50: '0.5',
            55: '0.55',
            60: '0.6',
            65: '0.65',
            70: '0.7',
            75: '0.75',
            80: '0.8',
            85: '0.85',
            90: '0.9',
            95: '0.95',
            100: '1',
          },
          order: {
            first: '-9999',
            last: '9999',
            none: '0',
            1: '1',
            2: '2',
            3: '3',
            4: '4',
            5: '5',
            6: '6',
            7: '7',
            8: '8',
            9: '9',
            10: '10',
            11: '11',
            12: '12',
          },
          outlineColor: ({theme: e}) => e('colors'),
          outlineOffset: {0: '0px', 1: '1px', 2: '2px', 4: '4px', 8: '8px'},
          outlineWidth: {0: '0px', 1: '1px', 2: '2px', 4: '4px', 8: '8px'},
          padding: ({theme: e}) => e('spacing'),
          placeholderColor: ({theme: e}) => e('colors'),
          placeholderOpacity: ({theme: e}) => e('opacity'),
          ringColor: ({theme: e}) => ({
            DEFAULT: e('colors.blue.500', '#3b82f6'),
            ...e('colors'),
          }),
          ringOffsetColor: ({theme: e}) => e('colors'),
          ringOffsetWidth: {0: '0px', 1: '1px', 2: '2px', 4: '4px', 8: '8px'},
          ringOpacity: ({theme: e}) => ({DEFAULT: '0.5', ...e('opacity')}),
          ringWidth: {
            DEFAULT: '3px',
            0: '0px',
            1: '1px',
            2: '2px',
            4: '4px',
            8: '8px',
          },
          rotate: {
            0: '0deg',
            1: '1deg',
            2: '2deg',
            3: '3deg',
            6: '6deg',
            12: '12deg',
            45: '45deg',
            90: '90deg',
            180: '180deg',
          },
          saturate: {0: '0', 50: '.5', 100: '1', 150: '1.5', 200: '2'},
          scale: {
            0: '0',
            50: '.5',
            75: '.75',
            90: '.9',
            95: '.95',
            100: '1',
            105: '1.05',
            110: '1.1',
            125: '1.25',
            150: '1.5',
          },
          screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
          },
          scrollMargin: ({theme: e}) => ({...e('spacing')}),
          scrollPadding: ({theme: e}) => e('spacing'),
          sepia: {0: '0', DEFAULT: '100%'},
          skew: {
            0: '0deg',
            1: '1deg',
            2: '2deg',
            3: '3deg',
            6: '6deg',
            12: '12deg',
          },
          space: ({theme: e}) => ({...e('spacing')}),
          spacing: {
            px: '1px',
            0: '0px',
            0.5: '0.125rem',
            1: '0.25rem',
            1.5: '0.375rem',
            2: '0.5rem',
            2.5: '0.625rem',
            3: '0.75rem',
            3.5: '0.875rem',
            4: '1rem',
            5: '1.25rem',
            6: '1.5rem',
            7: '1.75rem',
            8: '2rem',
            9: '2.25rem',
            10: '2.5rem',
            11: '2.75rem',
            12: '3rem',
            14: '3.5rem',
            16: '4rem',
            20: '5rem',
            24: '6rem',
            28: '7rem',
            32: '8rem',
            36: '9rem',
            40: '10rem',
            44: '11rem',
            48: '12rem',
            52: '13rem',
            56: '14rem',
            60: '15rem',
            64: '16rem',
            72: '18rem',
            80: '20rem',
            96: '24rem',
          },
          stroke: ({theme: e}) => ({none: 'none', ...e('colors')}),
          strokeWidth: {0: '0', 1: '1', 2: '2'},
          supports: {},
          data: {},
          textColor: ({theme: e}) => e('colors'),
          textDecorationColor: ({theme: e}) => e('colors'),
          textDecorationThickness: {
            auto: 'auto',
            'from-font': 'from-font',
            0: '0px',
            1: '1px',
            2: '2px',
            4: '4px',
            8: '8px',
          },
          textIndent: ({theme: e}) => ({...e('spacing')}),
          textOpacity: ({theme: e}) => e('opacity'),
          textUnderlineOffset: {
            auto: 'auto',
            0: '0px',
            1: '1px',
            2: '2px',
            4: '4px',
            8: '8px',
          },
          transformOrigin: {
            center: 'center',
            top: 'top',
            'top-right': 'top right',
            right: 'right',
            'bottom-right': 'bottom right',
            bottom: 'bottom',
            'bottom-left': 'bottom left',
            left: 'left',
            'top-left': 'top left',
          },
          transitionDelay: {
            0: '0s',
            75: '75ms',
            100: '100ms',
            150: '150ms',
            200: '200ms',
            300: '300ms',
            500: '500ms',
            700: '700ms',
            1e3: '1000ms',
          },
          transitionDuration: {
            DEFAULT: '150ms',
            0: '0s',
            75: '75ms',
            100: '100ms',
            150: '150ms',
            200: '200ms',
            300: '300ms',
            500: '500ms',
            700: '700ms',
            1e3: '1000ms',
          },
          transitionProperty: {
            none: 'none',
            all: 'all',
            DEFAULT:
              'color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter',
            colors:
              'color, background-color, border-color, text-decoration-color, fill, stroke',
            opacity: 'opacity',
            shadow: 'box-shadow',
            transform: 'transform',
          },
          transitionTimingFunction: {
            DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
            linear: 'linear',
            in: 'cubic-bezier(0.4, 0, 1, 1)',
            out: 'cubic-bezier(0, 0, 0.2, 1)',
            'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
          },
          translate: ({theme: e}) => ({
            ...e('spacing'),
            '1/2': '50%',
            '1/3': '33.333333%',
            '2/3': '66.666667%',
            '1/4': '25%',
            '2/4': '50%',
            '3/4': '75%',
            full: '100%',
          }),
          size: ({theme: e}) => ({
            auto: 'auto',
            ...e('spacing'),
            '1/2': '50%',
            '1/3': '33.333333%',
            '2/3': '66.666667%',
            '1/4': '25%',
            '2/4': '50%',
            '3/4': '75%',
            '1/5': '20%',
            '2/5': '40%',
            '3/5': '60%',
            '4/5': '80%',
            '1/6': '16.666667%',
            '2/6': '33.333333%',
            '3/6': '50%',
            '4/6': '66.666667%',
            '5/6': '83.333333%',
            '1/12': '8.333333%',
            '2/12': '16.666667%',
            '3/12': '25%',
            '4/12': '33.333333%',
            '5/12': '41.666667%',
            '6/12': '50%',
            '7/12': '58.333333%',
            '8/12': '66.666667%',
            '9/12': '75%',
            '10/12': '83.333333%',
            '11/12': '91.666667%',
            full: '100%',
            min: 'min-content',
            max: 'max-content',
            fit: 'fit-content',
          }),
          width: ({theme: e}) => ({
            auto: 'auto',
            ...e('spacing'),
            '1/2': '50%',
            '1/3': '33.333333%',
            '2/3': '66.666667%',
            '1/4': '25%',
            '2/4': '50%',
            '3/4': '75%',
            '1/5': '20%',
            '2/5': '40%',
            '3/5': '60%',
            '4/5': '80%',
            '1/6': '16.666667%',
            '2/6': '33.333333%',
            '3/6': '50%',
            '4/6': '66.666667%',
            '5/6': '83.333333%',
            '1/12': '8.333333%',
            '2/12': '16.666667%',
            '3/12': '25%',
            '4/12': '33.333333%',
            '5/12': '41.666667%',
            '6/12': '50%',
            '7/12': '58.333333%',
            '8/12': '66.666667%',
            '9/12': '75%',
            '10/12': '83.333333%',
            '11/12': '91.666667%',
            full: '100%',
            screen: '100vw',
            svw: '100svw',
            lvw: '100lvw',
            dvw: '100dvw',
            min: 'min-content',
            max: 'max-content',
            fit: 'fit-content',
          }),
          willChange: {
            auto: 'auto',
            scroll: 'scroll-position',
            contents: 'contents',
            transform: 'transform',
          },
          zIndex: {
            auto: 'auto',
            0: '0',
            10: '10',
            20: '20',
            30: '30',
            40: '40',
            50: '50',
          },
        },
        plugins: [],
      };
    },
    34790: function (e, t, n) {
      'use strict';
      n.d(t, {
        GA: function () {
          return ef;
        },
        Gn: function () {
          return K;
        },
        Mb: function () {
          return O;
        },
        eC: function () {
          return l;
        },
        vQ: function () {
          return ea;
        },
      });
      var i = n(78120),
        r = n(47421),
        s = n(59119);
      class a {
        constructor(e, t, n) {
          (this.state = e),
            (this.pos = t),
            (this.explicit = n),
            (this.abortListeners = []);
        }
        tokenBefore(e) {
          let t = (0, s.qz)(this.state).resolveInner(this.pos, -1);
          for (; t && 0 > e.indexOf(t.name); ) t = t.parent;
          return t
            ? {
                from: t.from,
                to: this.pos,
                text: this.state.sliceDoc(t.from, this.pos),
                type: t.type,
              }
            : null;
        }
        matchBefore(e) {
          let t = this.state.doc.lineAt(this.pos),
            n = Math.max(t.from, this.pos - 250),
            i = t.text.slice(n - t.from, this.pos - t.from),
            r = i.search(u(e, !1));
          return r < 0 ? null : {from: n + r, to: this.pos, text: i.slice(r)};
        }
        get aborted() {
          return null == this.abortListeners;
        }
        addEventListener(e, t) {
          'abort' == e && this.abortListeners && this.abortListeners.push(t);
        }
      }
      function o(e) {
        let t = Object.keys(e).join(''),
          n = /\w/.test(t);
        return (
          n && (t = t.replace(/\w/g, '')),
          `[${n ? '\\w' : ''}${t.replace(/[^\w\s]/g, '\\$&')}]`
        );
      }
      function O(e) {
        let t = e.map((e) => ('string' == typeof e ? {label: e} : e)),
          [n, i] = t.every((e) => /^\w+$/.test(e.label))
            ? [/\w*$/, /\w+$/]
            : (function (e) {
                let t = Object.create(null),
                  n = Object.create(null);
                for (let {label: i} of e) {
                  t[i[0]] = !0;
                  for (let e = 1; e < i.length; e++) n[i[e]] = !0;
                }
                let i = o(t) + o(n) + '*$';
                return [RegExp('^' + i), new RegExp(i)];
              })(t);
        return (e) => {
          let r = e.matchBefore(i);
          return r || e.explicit
            ? {from: r ? r.from : e.pos, options: t, validFor: n}
            : null;
        };
      }
      function l(e, t) {
        return (n) => {
          for (
            let t = (0, s.qz)(n.state).resolveInner(n.pos, -1);
            t;
            t = t.parent
          ) {
            if (e.indexOf(t.name) > -1) return null;
            if (t.type.isTop) break;
          }
          return t(n);
        };
      }
      class h {
        constructor(e, t, n) {
          (this.completion = e), (this.source = t), (this.match = n);
        }
      }
      function c(e) {
        return e.selection.main.head;
      }
      function u(e, t) {
        var n;
        let {source: i} = e,
          r = t && '^' != i[0],
          s = '$' != i[i.length - 1];
        return r || s
          ? RegExp(
              `${r ? '^' : ''}(?:${i})${s ? '$' : ''}`,
              null !== (n = e.flags) && void 0 !== n
                ? n
                : e.ignoreCase
                ? 'i'
                : ''
            )
          : e;
      }
      let f = i.q6.define();
      function p(e, t) {
        let n = t.completion.apply || t.completion.label,
          r = t.source;
        if ('string' == typeof n) {
          var s, a, o;
          e.dispatch(
            Object.assign(
              Object.assign(
                {},
                ((s = e.state),
                (a = r.from),
                (o = r.to),
                Object.assign(
                  Object.assign(
                    {},
                    s.changeByRange((e) => {
                      if (e == s.selection.main)
                        return {
                          changes: {from: a, to: o, insert: n},
                          range: i.jT.cursor(a + n.length),
                        };
                      let t = o - a;
                      return !e.empty ||
                        (t &&
                          s.sliceDoc(e.from - t, e.from) != s.sliceDoc(a, o))
                        ? {range: e}
                        : {
                            changes: {from: e.from - t, to: e.from, insert: n},
                            range: i.jT.cursor(e.from - t + n.length),
                          };
                    })
                  ),
                  {userEvent: 'input.complete'}
                ))
              ),
              {annotations: f.of(t.completion)}
            )
          );
        } else n(e, t.completion, r.from, r.to);
      }
      let d = new WeakMap();
      function g(e) {
        if (!Array.isArray(e)) return e;
        let t = d.get(e);
        return t || d.set(e, (t = O(e))), t;
      }
      class m {
        constructor(e) {
          (this.pattern = e),
            (this.chars = []),
            (this.folded = []),
            (this.any = []),
            (this.precise = []),
            (this.byWord = []);
          for (let t = 0; t < e.length; ) {
            let n = (0, i.gm)(e, t),
              r = (0, i.nZ)(n);
            this.chars.push(n);
            let s = e.slice(t, t + r),
              a = s.toUpperCase();
            this.folded.push((0, i.gm)(a == s ? s.toLowerCase() : a, 0)),
              (t += r);
          }
          this.astral = e.length != this.chars.length;
        }
        match(e) {
          if (0 == this.pattern.length) return [0];
          if (e.length < this.pattern.length) return null;
          let {chars: t, folded: n, any: r, precise: s, byWord: a} = this;
          if (1 == t.length) {
            let r = (0, i.gm)(e, 0),
              s = (0, i.nZ)(r),
              a = s == e.length ? 0 : -100;
            if (r == t[0]);
            else {
              if (r != n[0]) return null;
              a += -200;
            }
            return [a, 0, s];
          }
          let o = e.indexOf(this.pattern);
          if (0 == o)
            return [
              e.length == this.pattern.length ? 0 : -100,
              0,
              this.pattern.length,
            ];
          let O = t.length,
            l = 0;
          if (o < 0) {
            for (let s = 0, a = Math.min(e.length, 200); s < a && l < O; ) {
              let a = (0, i.gm)(e, s);
              (a == t[l] || a == n[l]) && (r[l++] = s), (s += (0, i.nZ)(a));
            }
            if (l < O) return null;
          }
          let h = 0,
            c = 0,
            u = !1,
            f = 0,
            p = -1,
            d = -1,
            g = /[a-z]/.test(e),
            m = !0;
          for (
            let r = 0, l = Math.min(e.length, 200), Q = 0;
            r < l && c < O;

          ) {
            let l = (0, i.gm)(e, r);
            o < 0 &&
              (h < O && l == t[h] && (s[h++] = r),
              f < O &&
                (l == t[f] || l == n[f]
                  ? (0 == f && (p = r), (d = r + 1), f++)
                  : (f = 0)));
            let S,
              $ =
                l < 255
                  ? (l >= 48 && l <= 57) || (l >= 97 && l <= 122)
                    ? 2
                    : l >= 65 && l <= 90
                    ? 1
                    : 0
                  : (S = (0, i.bg)(l)) != S.toLowerCase()
                  ? 1
                  : S != S.toUpperCase()
                  ? 2
                  : 0;
            (!r || (1 == $ && g) || (0 == Q && 0 != $)) &&
              (t[c] == l || (n[c] == l && (u = !0))
                ? (a[c++] = r)
                : a.length && (m = !1)),
              (Q = $),
              (r += (0, i.nZ)(l));
          }
          return c == O && 0 == a[0] && m
            ? this.result(-100 + (u ? -200 : 0), a, e)
            : f == O && 0 == p
            ? [-200 - e.length + (d == e.length ? 0 : -100), 0, d]
            : o > -1
            ? [-700 - e.length, o, o + this.pattern.length]
            : f == O
            ? [-900 - e.length, p, d]
            : c == O
            ? this.result(-100 + (u ? -200 : 0) + -700 + (m ? 0 : -1100), a, e)
            : 2 == t.length
            ? null
            : this.result((r[0] ? -700 : 0) + -200 + -1100, r, e);
        }
        result(e, t, n) {
          let r = [e - n.length],
            s = 1;
          for (let e of t) {
            let t = e + (this.astral ? (0, i.nZ)((0, i.gm)(n, e)) : 1);
            s > 1 && r[s - 1] == e
              ? (r[s - 1] = t)
              : ((r[s++] = e), (r[s++] = t));
          }
          return r;
        }
      }
      let Q = i.r$.define({
        combine: (e) =>
          (0, i.BO)(
            e,
            {
              activateOnTyping: !0,
              selectOnOpen: !0,
              override: null,
              closeOnBlur: !0,
              maxRenderedOptions: 100,
              defaultKeymap: !0,
              tooltipClass: () => '',
              optionClass: () => '',
              aboveCursor: !1,
              icons: !0,
              addToOptions: [],
              compareCompletions: (e, t) => e.label.localeCompare(t.label),
              interactionDelay: 75,
            },
            {
              defaultKeymap: (e, t) => e && t,
              closeOnBlur: (e, t) => e && t,
              icons: (e, t) => e && t,
              tooltipClass: (e, t) => (n) => S(e(n), t(n)),
              optionClass: (e, t) => (n) => S(e(n), t(n)),
              addToOptions: (e, t) => e.concat(t),
            }
          ),
      });
      function S(e, t) {
        return e ? (t ? e + ' ' + t : e) : t;
      }
      function $(e, t, n) {
        if (e <= n) return {from: 0, to: e};
        if ((t < 0 && (t = 0), t <= e >> 1)) {
          let e = Math.floor(t / n);
          return {from: e * n, to: (e + 1) * n};
        }
        let i = Math.floor((e - t) / n);
        return {from: e - (i + 1) * n, to: e - i * n};
      }
      class x {
        constructor(e, t) {
          let n;
          (this.view = e),
            (this.stateField = t),
            (this.info = null),
            (this.placeInfo = {
              read: () => this.measureInfo(),
              write: (e) => this.positionInfo(e),
              key: this,
            }),
            (this.space = null),
            (this.currentClass = '');
          let i = e.state.field(t),
            {options: r, selected: s} = i.open,
            a = e.state.facet(Q);
          (this.optionContent =
            ((n = a.addToOptions.slice()),
            a.icons &&
              n.push({
                render(e) {
                  let t = document.createElement('div');
                  return (
                    t.classList.add('cm-completionIcon'),
                    e.type &&
                      t.classList.add(
                        ...e.type
                          .split(/\s+/g)
                          .map((e) => 'cm-completionIcon-' + e)
                      ),
                    t.setAttribute('aria-hidden', 'true'),
                    t
                  );
                },
                position: 20,
              }),
            n.push(
              {
                render(e, t, n) {
                  let i = document.createElement('span');
                  i.className = 'cm-completionLabel';
                  let {label: r} = e,
                    s = 0;
                  for (let e = 1; e < n.length; ) {
                    let t = n[e++],
                      a = n[e++];
                    t > s &&
                      i.appendChild(document.createTextNode(r.slice(s, t)));
                    let o = i.appendChild(document.createElement('span'));
                    o.appendChild(document.createTextNode(r.slice(t, a))),
                      (o.className = 'cm-completionMatchedText'),
                      (s = a);
                  }
                  return (
                    s < r.length &&
                      i.appendChild(document.createTextNode(r.slice(s))),
                    i
                  );
                },
                position: 50,
              },
              {
                render(e) {
                  if (!e.detail) return null;
                  let t = document.createElement('span');
                  return (
                    (t.className = 'cm-completionDetail'),
                    (t.textContent = e.detail),
                    t
                  );
                },
                position: 80,
              }
            ),
            n.sort((e, t) => e.position - t.position).map((e) => e.render))),
            (this.optionClass = a.optionClass),
            (this.tooltipClass = a.tooltipClass),
            (this.range = $(r.length, s, a.maxRenderedOptions)),
            (this.dom = document.createElement('div')),
            (this.dom.className = 'cm-tooltip-autocomplete'),
            this.updateTooltipClass(e.state),
            this.dom.addEventListener('mousedown', (t) => {
              for (let n = t.target, i; n && n != this.dom; n = n.parentNode)
                if (
                  'LI' == n.nodeName &&
                  (i = /-(\d+)$/.exec(n.id)) &&
                  +i[1] < r.length
                ) {
                  p(e, r[+i[1]]), t.preventDefault();
                  return;
                }
            }),
            (this.list = this.dom.appendChild(
              this.createListBox(r, i.id, this.range)
            )),
            this.list.addEventListener('scroll', () => {
              this.info && this.view.requestMeasure(this.placeInfo);
            });
        }
        mount() {
          this.updateSel();
        }
        update(e) {
          var t, n, i;
          let r = e.state.field(this.stateField),
            s = e.startState.field(this.stateField);
          this.updateTooltipClass(e.state),
            r != s &&
              (this.updateSel(),
              (null === (t = r.open) || void 0 === t ? void 0 : t.disabled) !=
                (null === (n = s.open) || void 0 === n ? void 0 : n.disabled) &&
                this.dom.classList.toggle(
                  'cm-tooltip-autocomplete-disabled',
                  !!(null === (i = r.open) || void 0 === i
                    ? void 0
                    : i.disabled)
                ));
        }
        updateTooltipClass(e) {
          let t = this.tooltipClass(e);
          if (t != this.currentClass) {
            for (let e of this.currentClass.split(' '))
              e && this.dom.classList.remove(e);
            for (let e of t.split(' ')) e && this.dom.classList.add(e);
            this.currentClass = t;
          }
        }
        positioned(e) {
          (this.space = e),
            this.info && this.view.requestMeasure(this.placeInfo);
        }
        updateSel() {
          let e = this.view.state.field(this.stateField),
            t = e.open;
          if (
            (((t.selected > -1 && t.selected < this.range.from) ||
              t.selected >= this.range.to) &&
              ((this.range = $(
                t.options.length,
                t.selected,
                this.view.state.facet(Q).maxRenderedOptions
              )),
              this.list.remove(),
              (this.list = this.dom.appendChild(
                this.createListBox(t.options, e.id, this.range)
              )),
              this.list.addEventListener('scroll', () => {
                this.info && this.view.requestMeasure(this.placeInfo);
              })),
            this.updateSelectedOption(t.selected))
          ) {
            this.info && (this.info.remove(), (this.info = null));
            let {completion: n} = t.options[t.selected],
              {info: i} = n;
            if (!i) return;
            let s = 'string' == typeof i ? document.createTextNode(i) : i(n);
            if (!s) return;
            'then' in s
              ? s
                  .then((t) => {
                    t &&
                      this.view.state.field(this.stateField, !1) == e &&
                      this.addInfoPane(t);
                  })
                  .catch((e) =>
                    (0, r.OO)(this.view.state, e, 'completion info')
                  )
              : this.addInfoPane(s);
          }
        }
        addInfoPane(e) {
          let t = (this.info = document.createElement('div'));
          (t.className = 'cm-tooltip cm-completionInfo'),
            t.appendChild(e),
            this.dom.appendChild(t),
            this.view.requestMeasure(this.placeInfo);
        }
        updateSelectedOption(e) {
          var t, n;
          let i,
            r,
            s = null;
          for (
            let t = this.list.firstChild, n = this.range.from;
            t;
            t = t.nextSibling, n++
          )
            n == e
              ? t.hasAttribute('aria-selected') ||
                (t.setAttribute('aria-selected', 'true'), (s = t))
              : t.hasAttribute('aria-selected') &&
                t.removeAttribute('aria-selected');
          return (
            s &&
              ((t = this.list),
              (n = s),
              (i = t.getBoundingClientRect()),
              (r = n.getBoundingClientRect()).top < i.top
                ? (t.scrollTop -= i.top - r.top)
                : r.bottom > i.bottom && (t.scrollTop += r.bottom - i.bottom)),
            s
          );
        }
        measureInfo() {
          let e = this.dom.querySelector('[aria-selected]');
          if (!e || !this.info) return null;
          let t = this.dom.getBoundingClientRect(),
            n = this.info.getBoundingClientRect(),
            i = e.getBoundingClientRect(),
            s = this.space;
          if (!s) {
            let e = this.dom.ownerDocument.defaultView || window;
            s = {left: 0, top: 0, right: e.innerWidth, bottom: e.innerHeight};
          }
          if (
            i.top > Math.min(s.bottom, t.bottom) - 10 ||
            i.bottom < Math.max(s.top, t.top) + 10
          )
            return null;
          let a = this.view.textDirection == r.Nm.RTL,
            o = a,
            O = !1,
            l,
            h = '',
            c = '',
            u = t.left - s.left,
            f = s.right - t.right;
          if (
            (o && u < Math.min(n.width, f)
              ? (o = !1)
              : !o && f < Math.min(n.width, u) && (o = !0),
            n.width <= (o ? u : f))
          )
            (h =
              Math.max(s.top, Math.min(i.top, s.bottom - n.height)) -
              t.top +
              'px'),
              (l = Math.min(400, o ? u : f) + 'px');
          else {
            (O = !0),
              (l = Math.min(400, (a ? t.right : s.right - t.left) - 30) + 'px');
            let e = s.bottom - t.bottom;
            e >= n.height || e > t.top
              ? (h = i.bottom - t.top + 'px')
              : (c = t.bottom - i.top + 'px');
          }
          return {
            top: h,
            bottom: c,
            maxWidth: l,
            class: O
              ? a
                ? 'left-narrow'
                : 'right-narrow'
              : o
              ? 'left'
              : 'right',
          };
        }
        positionInfo(e) {
          this.info &&
            (e
              ? ((this.info.style.top = e.top),
                (this.info.style.bottom = e.bottom),
                (this.info.style.maxWidth = e.maxWidth),
                (this.info.className =
                  'cm-tooltip cm-completionInfo cm-completionInfo-' + e.class))
              : (this.info.style.top = '-1e6px'));
        }
        createListBox(e, t, n) {
          let i = document.createElement('ul');
          (i.id = t),
            i.setAttribute('role', 'listbox'),
            i.setAttribute('aria-expanded', 'true'),
            i.setAttribute('aria-label', this.view.state.phrase('Completions'));
          for (let r = n.from; r < n.to; r++) {
            let {completion: n, match: s} = e[r],
              a = i.appendChild(document.createElement('li'));
            (a.id = t + '-' + r), a.setAttribute('role', 'option');
            let o = this.optionClass(n);
            for (let e of (o && (a.className = o), this.optionContent)) {
              let t = e(n, this.view.state, s);
              t && a.appendChild(t);
            }
          }
          return (
            n.from && i.classList.add('cm-completionListIncompleteTop'),
            n.to < e.length &&
              i.classList.add('cm-completionListIncompleteBottom'),
            i
          );
        }
      }
      function P(e) {
        return (
          100 * (e.boost || 0) +
          (e.apply ? 10 : 0) +
          (e.info ? 5 : 0) +
          (e.type ? 1 : 0)
        );
      }
      class b {
        constructor(e, t, n, i, r, s) {
          (this.options = e),
            (this.attrs = t),
            (this.tooltip = n),
            (this.timestamp = i),
            (this.selected = r),
            (this.disabled = s);
        }
        setSelected(e, t) {
          return e == this.selected || e >= this.options.length
            ? this
            : new b(
                this.options,
                k(t, e),
                this.tooltip,
                this.timestamp,
                e,
                this.disabled
              );
        }
        static build(e, t, n, i, r) {
          let s = (function (e, t) {
            let n = [],
              i = 0;
            for (let r of e)
              if (r.hasResult()) {
                if (!1 === r.result.filter) {
                  let e = r.result.getMatch;
                  for (let t of r.result.options) {
                    let s = [1e9 - i++];
                    if (e) for (let n of e(t)) s.push(n);
                    n.push(new h(t, r, s));
                  }
                } else {
                  let e = new m(t.sliceDoc(r.from, r.to)),
                    i;
                  for (let t of r.result.options)
                    (i = e.match(t.label)) &&
                      (null != t.boost && (i[0] += t.boost),
                      n.push(new h(t, r, i)));
                }
              }
            let r = [],
              s = null,
              a = t.facet(Q).compareCompletions;
            for (let e of n.sort(
              (e, t) => t.match[0] - e.match[0] || a(e.completion, t.completion)
            ))
              s &&
              s.label == e.completion.label &&
              s.detail == e.completion.detail &&
              (null == s.type ||
                null == e.completion.type ||
                s.type == e.completion.type) &&
              s.apply == e.completion.apply
                ? P(e.completion) > P(s) && (r[r.length - 1] = e)
                : r.push(e),
                (s = e.completion);
            return r;
          })(e, t);
          if (!s.length)
            return i && e.some((e) => 1 == e.state)
              ? new b(
                  i.options,
                  i.attrs,
                  i.tooltip,
                  i.timestamp,
                  i.selected,
                  !0
                )
              : null;
          let a = t.facet(Q).selectOnOpen ? 0 : -1;
          if (i && i.selected != a && -1 != i.selected) {
            let e = i.options[i.selected].completion;
            for (let t = 0; t < s.length; t++)
              if (s[t].completion == e) {
                a = t;
                break;
              }
          }
          return new b(
            s,
            k(n, a),
            {
              pos: e.reduce(
                (e, t) => (t.hasResult() ? Math.min(e, t.from) : e),
                1e8
              ),
              create: (e) => new x(e, U),
              above: r.aboveCursor,
            },
            i ? i.timestamp : Date.now(),
            a,
            !1
          );
        }
        map(e) {
          return new b(
            this.options,
            this.attrs,
            Object.assign(Object.assign({}, this.tooltip), {
              pos: e.mapPos(this.tooltip.pos),
            }),
            this.timestamp,
            this.selected,
            this.disabled
          );
        }
      }
      class y {
        constructor(e, t, n) {
          (this.active = e), (this.id = t), (this.open = n);
        }
        static start() {
          return new y(
            v,
            'cm-ac-' + Math.floor(2e6 * Math.random()).toString(36),
            null
          );
        }
        update(e) {
          let {state: t} = e,
            n = t.facet(Q),
            i = (
              n.override || t.languageDataAt('autocomplete', c(t)).map(g)
            ).map((t) =>
              (
                this.active.find((e) => e.source == t) ||
                new X(t, this.active.some((e) => 0 != e.state) ? 1 : 0)
              ).update(e, n)
            );
          i.length == this.active.length &&
            i.every((e, t) => e == this.active[t]) &&
            (i = this.active);
          let r = this.open;
          for (let s of (r && e.docChanged && (r = r.map(e.changes)),
          e.selection ||
          i.some(
            (t) => t.hasResult() && e.changes.touchesRange(t.from, t.to)
          ) ||
          !(function (e, t) {
            if (e == t) return !0;
            for (let n = 0, i = 0; ; ) {
              for (; n < e.length && !e[n].hasResult; ) n++;
              for (; i < t.length && !t[i].hasResult; ) i++;
              let r = n == e.length,
                s = i == t.length;
              if (r || s) return r == s;
              if (e[n++].result != t[i++].result) return !1;
            }
          })(i, this.active)
            ? (r = b.build(i, t, this.id, r, n))
            : r && r.disabled && !i.some((e) => 1 == e.state) && (r = null),
          !r &&
            i.every((e) => 1 != e.state) &&
            i.some((e) => e.hasResult()) &&
            (i = i.map((e) => (e.hasResult() ? new X(e.source, 0) : e))),
          e.effects))
            s.is(C) && (r = r && r.setSelected(s.value, this.id));
          return i == this.active && r == this.open
            ? this
            : new y(i, this.id, r);
        }
        get tooltip() {
          return this.open ? this.open.tooltip : null;
        }
        get attrs() {
          return this.open ? this.open.attrs : w;
        }
      }
      let w = {'aria-autocomplete': 'list'};
      function k(e, t) {
        let n = {
          'aria-autocomplete': 'list',
          'aria-haspopup': 'listbox',
          'aria-controls': e,
        };
        return t > -1 && (n['aria-activedescendant'] = e + '-' + t), n;
      }
      let v = [];
      class X {
        constructor(e, t, n = -1) {
          (this.source = e), (this.state = t), (this.explicitPos = n);
        }
        hasResult() {
          return !1;
        }
        update(e, t) {
          let n = e.isUserEvent('input.type')
              ? 'input'
              : e.isUserEvent('delete.backward')
              ? 'delete'
              : null,
            i = this;
          for (let r of (n
            ? (i = i.handleUserEvent(e, n, t))
            : e.docChanged
            ? (i = i.handleChange(e))
            : e.selection && 0 != i.state && (i = new X(i.source, 0)),
          e.effects))
            if (r.is(Y)) i = new X(i.source, 1, r.value ? c(e.state) : -1);
            else if (r.is(T)) i = new X(i.source, 0);
            else if (r.is(W))
              for (let e of r.value) e.source == i.source && (i = e);
          return i;
        }
        handleUserEvent(e, t, n) {
          return 'delete' != t && n.activateOnTyping
            ? new X(this.source, 1)
            : this.map(e.changes);
        }
        handleChange(e) {
          return e.changes.touchesRange(c(e.startState))
            ? new X(this.source, 0)
            : this.map(e.changes);
        }
        map(e) {
          return e.empty || this.explicitPos < 0
            ? this
            : new X(this.source, this.state, e.mapPos(this.explicitPos));
        }
      }
      class Z extends X {
        constructor(e, t, n, i, r) {
          super(e, 2, t), (this.result = n), (this.from = i), (this.to = r);
        }
        hasResult() {
          return !0;
        }
        handleUserEvent(e, t, n) {
          var i;
          let r = e.changes.mapPos(this.from),
            s = e.changes.mapPos(this.to, 1),
            o = c(e.state);
          if (
            (this.explicitPos < 0 ? o <= r : o < this.from) ||
            o > s ||
            ('delete' == t && c(e.startState) == this.from)
          )
            return new X(
              this.source,
              'input' == t && n.activateOnTyping ? 1 : 0
            );
          let O =
              this.explicitPos < 0 ? -1 : e.changes.mapPos(this.explicitPos),
            l;
          return !(function (e, t, n, i) {
            if (!e) return !1;
            let r = t.sliceDoc(n, i);
            return 'function' == typeof e ? e(r, n, i, t) : u(e, !0).test(r);
          })(this.result.validFor, e.state, r, s)
            ? this.result.update &&
              (l = this.result.update(
                this.result,
                r,
                s,
                new a(e.state, o, O >= 0)
              ))
              ? new Z(
                  this.source,
                  O,
                  l,
                  l.from,
                  null !== (i = l.to) && void 0 !== i ? i : c(e.state)
                )
              : new X(this.source, 1, O)
            : new Z(this.source, O, this.result, r, s);
        }
        handleChange(e) {
          return e.changes.touchesRange(this.from, this.to)
            ? new X(this.source, 0)
            : this.map(e.changes);
        }
        map(e) {
          return e.empty
            ? this
            : new Z(
                this.source,
                this.explicitPos < 0 ? -1 : e.mapPos(this.explicitPos),
                this.result,
                e.mapPos(this.from),
                e.mapPos(this.to, 1)
              );
        }
      }
      let Y = i.Py.define(),
        T = i.Py.define(),
        W = i.Py.define({map: (e, t) => e.map((e) => e.map(t))}),
        C = i.Py.define(),
        U = i.QQ.define({
          create: () => y.start(),
          update: (e, t) => e.update(t),
          provide: (e) => [
            r.hJ.from(e, (e) => e.tooltip),
            r.tk.contentAttributes.from(e, (e) => e.attrs),
          ],
        }),
        _ = r.tk.baseTheme({
          '.cm-tooltip.cm-tooltip-autocomplete': {
            '& > ul': {
              fontFamily: 'monospace',
              whiteSpace: 'nowrap',
              overflow: 'hidden auto',
              maxWidth_fallback: '700px',
              maxWidth: 'min(700px, 95vw)',
              minWidth: '250px',
              maxHeight: '10em',
              height: '100%',
              listStyle: 'none',
              margin: 0,
              padding: 0,
              '& > li': {
                overflowX: 'hidden',
                textOverflow: 'ellipsis',
                cursor: 'pointer',
                padding: '1px 3px',
                lineHeight: 1.2,
              },
            },
          },
          '&light .cm-tooltip-autocomplete ul li[aria-selected]': {
            background: '#17c',
            color: 'white',
          },
          '&light .cm-tooltip-autocomplete-disabled ul li[aria-selected]': {
            background: '#777',
          },
          '&dark .cm-tooltip-autocomplete ul li[aria-selected]': {
            background: '#347',
            color: 'white',
          },
          '&dark .cm-tooltip-autocomplete-disabled ul li[aria-selected]': {
            background: '#444',
          },
          '.cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after':
            {
              content: '"\xb7\xb7\xb7"',
              opacity: 0.5,
              display: 'block',
              textAlign: 'center',
            },
          '.cm-tooltip.cm-completionInfo': {
            position: 'absolute',
            padding: '3px 9px',
            width: 'max-content',
            maxWidth: '400px',
            boxSizing: 'border-box',
          },
          '.cm-completionInfo.cm-completionInfo-left': {right: '100%'},
          '.cm-completionInfo.cm-completionInfo-right': {left: '100%'},
          '.cm-completionInfo.cm-completionInfo-left-narrow': {right: '30px'},
          '.cm-completionInfo.cm-completionInfo-right-narrow': {left: '30px'},
          '&light .cm-snippetField': {backgroundColor: '#00000022'},
          '&dark .cm-snippetField': {backgroundColor: '#ffffff22'},
          '.cm-snippetFieldPosition': {
            verticalAlign: 'text-top',
            width: 0,
            height: '1.15em',
            display: 'inline-block',
            margin: '0 -0.7px -.7em',
            borderLeft: '1.4px dotted #888',
          },
          '.cm-completionMatchedText': {textDecoration: 'underline'},
          '.cm-completionDetail': {marginLeft: '0.5em', fontStyle: 'italic'},
          '.cm-completionIcon': {
            fontSize: '90%',
            width: '.8em',
            display: 'inline-block',
            textAlign: 'center',
            paddingRight: '.6em',
            opacity: '0.6',
            boxSizing: 'content-box',
          },
          '.cm-completionIcon-function, .cm-completionIcon-method': {
            '&:after': {content: "'ƒ'"},
          },
          '.cm-completionIcon-class': {'&:after': {content: "'○'"}},
          '.cm-completionIcon-interface': {'&:after': {content: "'◌'"}},
          '.cm-completionIcon-variable': {
            '&:after': {content: "'\uD835\uDC65'"},
          },
          '.cm-completionIcon-constant': {
            '&:after': {content: "'\uD835\uDC36'"},
          },
          '.cm-completionIcon-type': {'&:after': {content: "'\uD835\uDC61'"}},
          '.cm-completionIcon-enum': {'&:after': {content: "'∪'"}},
          '.cm-completionIcon-property': {'&:after': {content: "'□'"}},
          '.cm-completionIcon-keyword': {
            '&:after': {content: "'\uD83D\uDD11︎'"},
          },
          '.cm-completionIcon-namespace': {'&:after': {content: "'▢'"}},
          '.cm-completionIcon-text': {
            '&:after': {
              content: "'abc'",
              fontSize: '50%',
              verticalAlign: 'middle',
            },
          },
        });
      class R {
        constructor(e, t, n, i) {
          (this.field = e), (this.line = t), (this.from = n), (this.to = i);
        }
      }
      class q {
        constructor(e, t, n) {
          (this.field = e), (this.from = t), (this.to = n);
        }
        map(e) {
          let t = e.mapPos(this.from, -1, i.gc.TrackDel),
            n = e.mapPos(this.to, 1, i.gc.TrackDel);
          return null == t || null == n ? null : new q(this.field, t, n);
        }
      }
      class V {
        constructor(e, t) {
          (this.lines = e), (this.fieldPositions = t);
        }
        instantiate(e, t) {
          let n = [],
            i = [t],
            r = e.doc.lineAt(t),
            a = /^\s*/.exec(r.text)[0];
          for (let r of this.lines) {
            if (n.length) {
              let n = a,
                o = /^\t*/.exec(r)[0].length;
              for (let t = 0; t < o; t++) n += e.facet(s.c);
              i.push(t + n.length - o), (r = n + r.slice(o));
            }
            n.push(r), (t += r.length + 1);
          }
          return {
            text: n,
            ranges: this.fieldPositions.map(
              (e) => new q(e.field, i[e.line] + e.from, i[e.line] + e.to)
            ),
          };
        }
        static parse(e) {
          let t = [],
            n = [],
            i = [],
            r;
          for (let s of e.split(/\r\n?|\n/)) {
            for (; (r = /[#$]\{(?:(\d+)(?::([^}]*))?|([^}]*))\}/.exec(s)); ) {
              let e = r[1] ? +r[1] : null,
                a = r[2] || r[3] || '',
                o = -1;
              for (let n = 0; n < t.length; n++)
                (null != e ? t[n].seq == e : a && t[n].name == a) && (o = n);
              if (o < 0) {
                let n = 0;
                for (
                  ;
                  n < t.length &&
                  (null == e || (null != t[n].seq && t[n].seq < e));

                )
                  n++;
                for (let r of (t.splice(n, 0, {seq: e, name: a}), (o = n), i))
                  r.field >= o && r.field++;
              }
              i.push(new R(o, n.length, r.index, r.index + a.length)),
                (s = s.slice(0, r.index) + a + s.slice(r.index + r[0].length));
            }
            for (let e; (e = /\\([{}])/.exec(s)); )
              for (let t of ((s =
                s.slice(0, e.index) + e[1] + s.slice(e.index + e[0].length)),
              i))
                t.line == n.length && t.from > e.index && (t.from--, t.to--);
            n.push(s);
          }
          return new V(n, i);
        }
      }
      let z = r.p.widget({
          widget: new (class extends r.l9 {
            toDOM() {
              let e = document.createElement('span');
              return (e.className = 'cm-snippetFieldPosition'), e;
            }
            ignoreEvent() {
              return !1;
            }
          })(),
        }),
        j = r.p.mark({class: 'cm-snippetField'});
      class A {
        constructor(e, t) {
          (this.ranges = e),
            (this.active = t),
            (this.deco = r.p.set(
              e.map((e) => (e.from == e.to ? z : j).range(e.from, e.to))
            ));
        }
        map(e) {
          let t = [];
          for (let n of this.ranges) {
            let i = n.map(e);
            if (!i) return null;
            t.push(i);
          }
          return new A(t, this.active);
        }
        selectionInsideField(e) {
          return e.ranges.every((e) =>
            this.ranges.some(
              (t) => t.field == this.active && t.from <= e.from && t.to >= e.to
            )
          );
        }
      }
      let G = i.Py.define({map: (e, t) => e && e.map(t)}),
        I = i.Py.define(),
        E = i.QQ.define({
          create: () => null,
          update(e, t) {
            for (let n of t.effects) {
              if (n.is(G)) return n.value;
              if (n.is(I) && e) return new A(e.ranges, n.value);
            }
            return (
              e && t.docChanged && (e = e.map(t.changes)),
              e &&
                t.selection &&
                !e.selectionInsideField(t.selection) &&
                (e = null),
              e
            );
          },
          provide: (e) =>
            r.tk.decorations.from(e, (e) => (e ? e.deco : r.p.none)),
        });
      function N(e, t) {
        return i.jT.create(
          e.filter((e) => e.field == t).map((e) => i.jT.range(e.from, e.to))
        );
      }
      function J(e) {
        return ({state: t, dispatch: n}) => {
          let i = t.field(E, !1);
          if (!i || (e < 0 && 0 == i.active)) return !1;
          let r = i.active + e,
            s = e > 0 && !i.ranges.some((t) => t.field == r + e);
          return (
            n(
              t.update({
                selection: N(i.ranges, r),
                effects: G.of(s ? null : new A(i.ranges, r)),
              })
            ),
            !0
          );
        };
      }
      let B = ({state: e, dispatch: t}) =>
          !!e.field(E, !1) && (t(e.update({effects: G.of(null)})), !0),
        D = J(1),
        M = J(-1),
        L = [
          {key: 'Tab', run: D, shift: M},
          {key: 'Escape', run: B},
        ],
        F = i.r$.define({combine: (e) => (e.length ? e[0] : L)}),
        H = i.Wl.highest(r.$f.compute([F], (e) => e.facet(F)));
      function K(e, t) {
        let n;
        return Object.assign(Object.assign({}, t), {
          apply:
            ((n = V.parse(e)),
            (e, t, r, s) => {
              let {text: a, ranges: o} = n.instantiate(e.state, r),
                O = {
                  changes: {from: r, to: s, insert: i.xv.of(a)},
                  scrollIntoView: !0,
                  annotations: f.of(t),
                };
              if ((o.length && (O.selection = N(o, 0)), o.length > 1)) {
                let t = new A(o, 0),
                  n = (O.effects = [G.of(t)]);
                void 0 === e.state.field(E, !1) &&
                  n.push(i.Py.appendConfig.of([E, H, ee, _]));
              }
              e.dispatch(e.state.update(O));
            }),
        });
      }
      let ee = r.tk.domEventHandlers({
          mousedown(e, t) {
            let n = t.state.field(E, !1),
              i;
            if (!n || null == (i = t.posAtCoords({x: e.clientX, y: e.clientY})))
              return !1;
            let r = n.ranges.find((e) => e.from <= i && e.to >= i);
            return (
              !!r &&
              r.field != n.active &&
              (t.dispatch({
                selection: N(n.ranges, r.field),
                effects: G.of(
                  n.ranges.some((e) => e.field > r.field)
                    ? new A(n.ranges, r.field)
                    : null
                ),
              }),
              !0)
            );
          },
        }),
        et = {
          brackets: ['(', '[', '{', "'", '"'],
          before: ')]}:;>',
          stringPrefixes: [],
        },
        en = i.Py.define({
          map(e, t) {
            let n = t.mapPos(e, -1, i.gc.TrackAfter);
            return null == n ? void 0 : n;
          },
        }),
        ei = i.Py.define({map: (e, t) => t.mapPos(e)}),
        er = new (class extends i.uU {})();
      (er.startSide = 1), (er.endSide = -1);
      let es = i.QQ.define({
        create: () => i.Xs.empty,
        update(e, t) {
          if (t.selection) {
            let n = t.state.doc.lineAt(t.selection.main.head).from,
              r = t.startState.doc.lineAt(
                t.startState.selection.main.head
              ).from;
            n != t.changes.mapPos(r, -1) && (e = i.Xs.empty);
          }
          for (let n of ((e = e.map(t.changes)), t.effects))
            n.is(en)
              ? (e = e.update({add: [er.range(n.value, n.value + 1)]}))
              : n.is(ei) && (e = e.update({filter: (e) => e != n.value}));
          return e;
        },
      });
      function ea() {
        return [ec, es];
      }
      let eo = '()[]{}<>';
      function eO(e) {
        for (let t = 0; t < eo.length; t += 2)
          if (eo.charCodeAt(t) == e) return eo.charAt(t + 1);
        return (0, i.bg)(e < 128 ? e : e + 1);
      }
      function el(e, t) {
        return e.languageDataAt('closeBrackets', t)[0] || et;
      }
      let eh =
          'object' == typeof navigator && /Android\b/.test(navigator.userAgent),
        ec = r.tk.inputHandler.of((e, t, n, r) => {
          if ((eh ? e.composing : e.compositionStarted) || e.state.readOnly)
            return !1;
          let a = e.state.selection.main;
          if (
            r.length > 2 ||
            (2 == r.length && 1 == (0, i.nZ)((0, i.gm)(r, 0))) ||
            t != a.from ||
            n != a.to
          )
            return !1;
          let o = (function (e, t) {
            let n = el(e, e.selection.main.head),
              r = n.brackets || et.brackets;
            for (let a of r) {
              let o = eO((0, i.gm)(a, 0));
              if (t == a)
                return o == a
                  ? (function (e, t, n, r) {
                      let a = r.stringPrefixes || et.stringPrefixes,
                        o = null,
                        O = e.changeByRange((r) => {
                          if (!r.empty)
                            return {
                              changes: [
                                {insert: t, from: r.from},
                                {insert: t, from: r.to},
                              ],
                              effects: en.of(r.to + t.length),
                              range: i.jT.range(
                                r.anchor + t.length,
                                r.head + t.length
                              ),
                            };
                          let O = r.head,
                            l = ed(e.doc, O),
                            h;
                          if (l == t) {
                            if (eg(e, O))
                              return {
                                changes: {insert: t + t, from: O},
                                effects: en.of(O + t.length),
                                range: i.jT.cursor(O + t.length),
                              };
                            if (ep(e, O)) {
                              let r =
                                n &&
                                e.sliceDoc(O, O + 3 * t.length) == t + t + t;
                              return {
                                range: i.jT.cursor(O + t.length * (r ? 3 : 1)),
                                effects: ei.of(O),
                              };
                            }
                          } else if (
                            n &&
                            e.sliceDoc(O - 2 * t.length, O) == t + t &&
                            (h = em(e, O - 2 * t.length, a)) > -1 &&
                            eg(e, h)
                          )
                            return {
                              changes: {insert: t + t + t + t, from: O},
                              effects: en.of(O + t.length),
                              range: i.jT.cursor(O + t.length),
                            };
                          else if (
                            e.charCategorizer(O)(l) != i.D0.Word &&
                            em(e, O, a) > -1 &&
                            !(function (e, t, n, i) {
                              let r = (0, s.qz)(e).resolveInner(t, -1),
                                a = i.reduce(
                                  (e, t) => Math.max(e, t.length),
                                  0
                                );
                              for (let s = 0; s < 5; s++) {
                                let s = e.sliceDoc(
                                    r.from,
                                    Math.min(r.to, r.from + n.length + a)
                                  ),
                                  o = s.indexOf(n);
                                if (
                                  !o ||
                                  (o > -1 && i.indexOf(s.slice(0, o)) > -1)
                                ) {
                                  let t = r.firstChild;
                                  for (
                                    ;
                                    t &&
                                    t.from == r.from &&
                                    t.to - t.from > n.length + o;

                                  ) {
                                    if (e.sliceDoc(t.to - n.length, t.to) == n)
                                      return !1;
                                    t = t.firstChild;
                                  }
                                  return !0;
                                }
                                let O = r.to == t && r.parent;
                                if (!O) break;
                                r = O;
                              }
                              return !1;
                            })(e, O, t, a)
                          )
                            return {
                              changes: {insert: t + t, from: O},
                              effects: en.of(O + t.length),
                              range: i.jT.cursor(O + t.length),
                            };
                          return {range: (o = r)};
                        });
                      return o
                        ? null
                        : e.update(O, {
                            scrollIntoView: !0,
                            userEvent: 'input.type',
                          });
                    })(e, a, r.indexOf(a + a + a) > -1, n)
                  : (function (e, t, n, r) {
                      let s = null,
                        a = e.changeByRange((a) => {
                          if (!a.empty)
                            return {
                              changes: [
                                {insert: t, from: a.from},
                                {insert: n, from: a.to},
                              ],
                              effects: en.of(a.to + t.length),
                              range: i.jT.range(
                                a.anchor + t.length,
                                a.head + t.length
                              ),
                            };
                          let o = ed(e.doc, a.head);
                          return !o || /\s/.test(o) || r.indexOf(o) > -1
                            ? {
                                changes: {insert: t + n, from: a.head},
                                effects: en.of(a.head + t.length),
                                range: i.jT.cursor(a.head + t.length),
                              }
                            : {range: (s = a)};
                        });
                      return s
                        ? null
                        : e.update(a, {
                            scrollIntoView: !0,
                            userEvent: 'input.type',
                          });
                    })(e, a, o, n.before || et.before);
              if (t == o && ep(e, e.selection.main.from))
                return (function (e, t, n) {
                  let r = null,
                    s = e.selection.ranges.map((t) =>
                      t.empty && ed(e.doc, t.head) == n
                        ? i.jT.cursor(t.head + n.length)
                        : (r = t)
                    );
                  return r
                    ? null
                    : e.update({
                        selection: i.jT.create(s, e.selection.mainIndex),
                        scrollIntoView: !0,
                        effects: e.selection.ranges.map(({from: e}) =>
                          ei.of(e)
                        ),
                      });
                })(e, 0, o);
            }
            return null;
          })(e.state, r);
          return !!o && (e.dispatch(o), !0);
        }),
        eu = ({state: e, dispatch: t}) => {
          if (e.readOnly) return !1;
          let n = el(e, e.selection.main.head).brackets || et.brackets,
            r = null,
            s = e.changeByRange((t) => {
              if (t.empty) {
                var s, a;
                let r;
                let o =
                  ((s = e.doc),
                  (a = t.head),
                  (r = s.sliceString(a - 2, a)),
                  (0, i.nZ)((0, i.gm)(r, 0)) == r.length ? r : r.slice(1));
                for (let r of n)
                  if (r == o && ed(e.doc, t.head) == eO((0, i.gm)(r, 0)))
                    return {
                      changes: {from: t.head - r.length, to: t.head + r.length},
                      range: i.jT.cursor(t.head - r.length),
                    };
              }
              return {range: (r = t)};
            });
          return (
            r ||
              t(
                e.update(s, {scrollIntoView: !0, userEvent: 'delete.backward'})
              ),
            !r
          );
        },
        ef = [{key: 'Backspace', run: eu}];
      function ep(e, t) {
        let n = !1;
        return (
          e.field(es).between(0, e.doc.length, (e) => {
            e == t && (n = !0);
          }),
          n
        );
      }
      function ed(e, t) {
        let n = e.sliceString(t, t + 2);
        return n.slice(0, (0, i.nZ)((0, i.gm)(n, 0)));
      }
      function eg(e, t) {
        let n = (0, s.qz)(e).resolveInner(t + 1);
        return n.parent && n.from == t;
      }
      function em(e, t, n) {
        let r = e.charCategorizer(t);
        if (r(e.sliceDoc(t - 1, t)) != i.D0.Word) return t;
        for (let s of n) {
          let n = t - s.length;
          if (e.sliceDoc(n, t) == s && r(e.sliceDoc(n - 1, n)) != i.D0.Word)
            return n;
        }
        return -1;
      }
    },
    61426: function (e, t, n) {
      'use strict';
      n.d(t, {
        iv: function () {
          return X;
        },
        t$: function () {
          return v;
        },
      });
      var i = n(53105),
        r = n(35524);
      let s = [
        9, 10, 11, 12, 13, 32, 133, 160, 5760, 8192, 8193, 8194, 8195, 8196,
        8197, 8198, 8199, 8200, 8201, 8202, 8232, 8233, 8239, 8287, 12288,
      ];
      function a(e) {
        return (e >= 65 && e <= 90) || (e >= 97 && e <= 122) || e >= 161;
      }
      let o = new i.Jq((e, t) => {
          for (let i = !1, r = 0, s = 0; ; s++) {
            var n;
            let {next: o} = e;
            if (a(o) || 45 == o || 95 == o || (i && (n = o) >= 48 && n <= 57))
              !i && (45 != o || s > 0) && (i = !0),
                r === s && 45 == o && r++,
                e.advance();
            else {
              i &&
                e.acceptToken(40 == o ? 95 : 2 == r && t.canShift(2) ? 2 : 96);
              break;
            }
          }
        }),
        O = new i.Jq((e) => {
          if (s.includes(e.peek(-1))) {
            let {next: t} = e;
            (a(t) ||
              95 == t ||
              35 == t ||
              46 == t ||
              91 == t ||
              58 == t ||
              45 == t) &&
              e.acceptToken(94);
          }
        }),
        l = new i.Jq((e) => {
          if (!s.includes(e.peek(-1))) {
            let {next: t} = e;
            if ((37 == t && (e.advance(), e.acceptToken(1)), a(t))) {
              do e.advance();
              while (a(e.next));
              e.acceptToken(1);
            }
          }
        }),
        h = (0, r.Gv)({
          'AtKeyword import charset namespace keyframes media supports':
            r.pJ.definitionKeyword,
          'from to selector': r.pJ.keyword,
          NamespaceName: r.pJ.namespace,
          KeyframeName: r.pJ.labelName,
          TagName: r.pJ.tagName,
          ClassName: r.pJ.className,
          PseudoClassName: r.pJ.constant(r.pJ.className),
          IdName: r.pJ.labelName,
          'FeatureName PropertyName': r.pJ.propertyName,
          AttributeName: r.pJ.attributeName,
          NumberLiteral: r.pJ.number,
          KeywordQuery: r.pJ.keyword,
          UnaryQueryOp: r.pJ.operatorKeyword,
          'CallTag ValueName': r.pJ.atom,
          VariableName: r.pJ.variableName,
          Callee: r.pJ.operatorKeyword,
          Unit: r.pJ.unit,
          'UniversalSelector NestingSelector': r.pJ.definitionOperator,
          MatchOp: r.pJ.compareOperator,
          'ChildOp SiblingOp, LogicOp': r.pJ.logicOperator,
          BinOp: r.pJ.arithmeticOperator,
          Important: r.pJ.modifier,
          Comment: r.pJ.blockComment,
          ParenthesizedContent: r.pJ.special(r.pJ.name),
          ColorLiteral: r.pJ.color,
          StringLiteral: r.pJ.string,
          ':': r.pJ.punctuation,
          'PseudoOp #': r.pJ.derefOperator,
          '; ,': r.pJ.separator,
          '( )': r.pJ.paren,
          '[ ]': r.pJ.squareBracket,
          '{ }': r.pJ.brace,
        }),
        c = {
          __proto__: null,
          lang: 32,
          'nth-child': 32,
          'nth-last-child': 32,
          'nth-of-type': 32,
          'nth-last-of-type': 32,
          dir: 32,
          'host-context': 32,
          url: 60,
          'url-prefix': 60,
          domain: 60,
          regexp: 60,
          selector: 134,
        },
        u = {
          __proto__: null,
          '@import': 114,
          '@media': 138,
          '@charset': 142,
          '@namespace': 146,
          '@keyframes': 152,
          '@supports': 164,
        },
        f = {__proto__: null, not: 128, only: 128, from: 158, to: 160},
        p = i.WQ.deserialize({
          version: 14,
          states:
            "7WQYQ[OOO#_Q[OOOOQP'#Cd'#CdOOQP'#Cc'#CcO#fQ[O'#CfO$YQXO'#CaO$aQ[O'#ChO$lQ[O'#DPO$qQ[O'#DTOOQP'#Ed'#EdO$vQdO'#DeO%bQ[O'#DrO$vQdO'#DtO%sQ[O'#DvO&OQ[O'#DyO&TQ[O'#EPO&cQ[O'#EROOQS'#Ec'#EcOOQS'#ET'#ETQYQ[OOO&jQXO'#CdO'_QWO'#DaO'dQWO'#EjO'oQ[O'#EjQOQWOOOOQP'#Cg'#CgOOQP,59Q,59QO#fQ[O,59QO'yQ[O'#EWO(eQWO,58{O(mQ[O,59SO$lQ[O,59kO$qQ[O,59oO'yQ[O,59sO'yQ[O,59uO'yQ[O,59vO(xQ[O'#D`OOQS,58{,58{OOQP'#Ck'#CkOOQO'#C}'#C}OOQP,59S,59SO)PQWO,59SO)UQWO,59SOOQP'#DR'#DROOQP,59k,59kOOQO'#DV'#DVO)ZQ`O,59oOOQS'#Cp'#CpO$vQdO'#CqO)cQvO'#CsO*pQtO,5:POOQO'#Cx'#CxO)UQWO'#CwO+UQWO'#CyOOQS'#Eg'#EgOOQO'#Dh'#DhO+ZQ[O'#DoO+iQWO'#EkO&TQ[O'#DmO+wQWO'#DpOOQO'#El'#ElO(hQWO,5:^O+|QpO,5:`OOQS'#Dx'#DxO,UQWO,5:bO,ZQ[O,5:bOOQO'#D{'#D{O,cQWO,5:eO,hQWO,5:kO,pQWO,5:mOOQS-E8R-E8RO$vQdO,59{O,xQ[O'#EYO-VQWO,5;UO-VQWO,5;UOOQP1G.l1G.lO-|QXO,5:rOOQO-E8U-E8UOOQS1G.g1G.gOOQP1G.n1G.nO)PQWO1G.nO)UQWO1G.nOOQP1G/V1G/VO.ZQ`O1G/ZO.tQXO1G/_O/[QXO1G/aO/rQXO1G/bO0YQWO,59zO0_Q[O'#DOO0fQdO'#CoOOQP1G/Z1G/ZO$vQdO1G/ZO0mQpO,59]OOQS,59_,59_O$vQdO,59aO0uQWO1G/kOOQS,59c,59cO0zQ!bO,59eO1SQWO'#DhO1_QWO,5:TO1dQWO,5:ZO&TQ[O,5:VO&TQ[O'#EZO1lQWO,5;VO1wQWO,5:XO'yQ[O,5:[OOQS1G/x1G/xOOQS1G/z1G/zOOQS1G/|1G/|O2YQWO1G/|O2_QdO'#D|OOQS1G0P1G0POOQS1G0V1G0VOOQS1G0X1G0XO2mQtO1G/gOOQO,5:t,5:tO3TQ[O,5:tOOQO-E8W-E8WO3bQWO1G0pOOQP7+$Y7+$YOOQP7+$u7+$uO$vQdO7+$uOOQS1G/f1G/fO3mQXO'#EiO3tQWO,59jO3yQtO'#EUO4nQdO'#EfO4xQWO,59ZO4}QpO7+$uOOQS1G.w1G.wOOQS1G.{1G.{OOQS7+%V7+%VO5VQWO1G/PO$vQdO1G/oOOQO1G/u1G/uOOQO1G/q1G/qO5[QWO,5:uOOQO-E8X-E8XO5jQXO1G/vOOQS7+%h7+%hO5qQYO'#CsO(hQWO'#E[O5yQdO,5:hOOQS,5:h,5:hO6XQtO'#EXO$vQdO'#EXO7VQdO7+%ROOQO7+%R7+%ROOQO1G0`1G0`O7jQpO<<HaO7rQWO,5;TOOQP1G/U1G/UOOQS-E8S-E8SO$vQdO'#EVO7zQWO,5;QOOQT1G.u1G.uOOQP<<Ha<<HaOOQS7+$k7+$kO8SQdO7+%ZOOQO7+%b7+%bOOQS,5:v,5:vOOQS-E8Y-E8YOOQS1G0S1G0SO8ZQtO,5:sOOQS-E8V-E8VOOQO<<Hm<<HmOOQPAN={AN={O9XQdO,5:qOOQO-E8T-E8TOOQO<<Hu<<Hu",
          stateData:
            "9i~O#UOSROS~OUXOXXO]UO^UOtVOxWO!Y`O!ZYO!gZO!i[O!k]O!n^O!t_O#SQO#XSO~OQeOUXOXXO]UO^UOtVOxWO!Y`O!ZYO!gZO!i[O!k]O!n^O!t_O#SdO#XSO~O#P#^P~P!ZO#SiO~O]nO^nOplOtoOxpO|qO!PsO#QrO#XkO~O!RtO~P#kO`zO#RwO#SvO~O#S{O~O#S}O~OQ!WOb!QOf!WOh!WOn!VO#R!TO#S!PO#[!RO~Ob!YO!b![O!e!]O#S!XO!R#_P~Oh!bOn!VO#S!aO~O#S!dO~Ob!YO!b![O!e!]O#S!XO~O!W#_P~P%bO]WX]!UX^WXpWXtWXxWX|WX!PWX!RWX#QWX#XWX~O]!iO~O!W!jO#P#^X!Q#^X~O#P#^X!Q#^X~P!ZOUXOXXO]UO^UOtVOxWO#SQO#XSO~OplO!RtO~O`!sO#RwO#SvO~O!Q#^P~P!ZOb!zO~Ob!{O~Ov!|Oz!}O~OP#PObgXjgX!WgX!bgX!egX#SgXagXQgXfgXhgXngXpgX!VgX#PgX#RgX#[gXvgX!QgX~Ob!YOj#QO!b![O!e!]O#S!XO!W#_P~Ob#TO~Ob!YO!b![O!e!]O#S#UO~Op#YO!`#XO!R#_X!W#_X~Ob#]O~Oj#QO!W#_O~O!W#`O~Oh#aOn!VO~O!R#bO~O!RtO!`#XO~O!RtO!W#eO~O!W!|X#P!|X!Q!|X~P!ZO!W!jO#P#^a!Q#^a~O]nO^nOtoOxpO|qO!PsO#QrO#XkO~Op!za!R!zaa!za~P-bOv#lOz#mO~O]nO^nOtoOxpO#XkO~Op{i|{i!P{i!R{i#Q{ia{i~P.cOp}i|}i!P}i!R}i#Q}ia}i~P.cOp!Oi|!Oi!P!Oi!R!Oi#Q!Oia!Oi~P.cO!Q#nO~Oa#]P~P'yOa#YP~P$vOa#uOj#QO~O!W#wO~Oh#xOo#xO~O]!^Xa![X!`![X~O]#yO~Oa#zO!`#XO~Op#YO!R#_a!W#_a~O!`#XOp!aa!R!aa!W!aaa!aa~O!W$PO~O!Q$TO!q$RO!r$RO#[$QO~Oj#QOp$VO!V$XO!W!Ti#P!Ti!Q!Ti~P$vO!W!|a#P!|a!Q!|a~P!ZO!W!jO#P#^i!Q#^i~Oa#]X~P#kOa$]O~Oj#QOQ!xXa!xXb!xXf!xXh!xXn!xXp!xX#R!xX#S!xX#[!xX~Op$_Oa#YX~P$vOa$aO~Oj#QOv$bO~Oa$cO~O!`#XOp!}a!R!}a!W!}a~Oa$eO~P-bOP#PO!RgX~O!Q$hO!q$RO!r$RO#[$QO~Oj#QOQ!{Xb!{Xf!{Xh!{Xn!{Xp!{X!V!{X!W!{X#P!{X#R!{X#S!{X#[!{X!Q!{X~Op$VO!V$kO!W!Tq#P!Tq!Q!Tq~P$vOj#QOv$lO~OplOa#]a~Op$_Oa#Ya~Oa$oO~P$vOj#QOQ!{ab!{af!{ah!{an!{ap!{a!V!{a!W!{a#P!{a#R!{a#S!{a#[!{a!Q!{a~Oa!yap!ya~P$vOo#[j!Pj~",
          goto: ",`#aPPPPP#bP#k#zP#k$Z#kPP$aPPP$g$p$pP%SP$pP$p%j%|PPP&f&l#kP&rP#kP&xP#kP#k#kPPP'O'b'oPP#bPP'v'v(Q'vP'vP'v'vP#bP#bP#bP(T#bP(W(ZPP#bP#bP(^(m({)R)])c)m)sPPPPPP)y*SP*o*rP+h+k+q+z_aOPcgt!j#hkXOPcglqrst!j!z#]#hkROPcglqrst!j!z#]#hQjSR!mkQxUR!qnQ!qzQ#S!UR#k!sq!WY[!Q!i!{!}#Q#f#m#r#y$V$W$_$d$mp!WY[!Q!i!{!}#Q#f#m#r#y$V$W$_$d$mT$R#b$Sq!UY[!Q!i!{!}#Q#f#m#r#y$V$W$_$d$mp!WY[!Q!i!{!}#Q#f#m#r#y$V$W$_$d$mQ!b]R#a!cQyUR!rnQ!qyR#k!rQ|VR!toQ!OWR!upQuTQ!pmQ#^!_Q#d!fQ#e!gR$f$RSfPtQ!lgQ#g!jR$Y#hZePgt!j#ha!^Z_`!S!Y![#X#YR#V!YR!c]R!e^R#c!eQcOSgPtU!hcg#hR#h!jQ#r!{U$^#r$d$mQ$d#yR$m$_Q$`#rR$n$`QmTS!om$[R$[#oQ$W#fR$j$WQ!kfS#i!k#jR#j!lQ#Z!ZR#}#ZQ$S#bR$g$S_bOPcgt!j#h^TOPcgt!j#hQ!nlQ!vqQ!wrQ!xsQ#o!zR$O#]R#s!{Q!SYQ!`[Q#O!QQ#f!i[#q!{#r#y$_$d$mQ#t!}Q#v#QS$U#f$WQ$Z#mR$i$VR#p!zQhPR!ytQ!_ZQ!g`R#R!SU!ZZ`!SQ!f_Q#W!YQ#[![Q#{#XR#|#Y",
          nodeNames:
            '⚠ Unit VariableName Comment StyleSheet RuleSet UniversalSelector TagSelector TagName NestingSelector ClassSelector ClassName PseudoClassSelector : :: PseudoClassName PseudoClassName ) ( ArgList ValueName ParenthesizedValue ColorLiteral NumberLiteral StringLiteral BinaryExpression BinOp CallExpression Callee CallLiteral CallTag ParenthesizedContent , PseudoClassName ArgList IdSelector # IdName ] AttributeSelector [ AttributeName MatchOp ChildSelector ChildOp DescendantSelector SiblingSelector SiblingOp } { Block Declaration PropertyName Important ; ImportStatement AtKeyword import KeywordQuery FeatureQuery FeatureName BinaryQuery LogicOp UnaryQuery UnaryQueryOp ParenthesizedQuery SelectorQuery selector MediaStatement media CharsetStatement charset NamespaceStatement namespace NamespaceName KeyframesStatement keyframes KeyframeName KeyframeList from to SupportsStatement supports AtRule Styles',
          maxTerm: 108,
          nodeProps: [
            ['openedBy', 17, '(', 48, '{'],
            ['closedBy', 18, ')', 49, '}'],
          ],
          propSources: [h],
          skippedNodes: [0, 3],
          repeatNodeCount: 8,
          tokenData:
            "Lq~R!^OX$}X^%u^p$}pq%uqr)Xrs.Rst/utu6duv$}vw7^wx7oxy9^yz9oz{9t{|:_|}?Q}!O?c!O!P@Q!P!Q@i!Q![Cu![!]Dp!]!^El!^!_$}!_!`E}!`!aF`!a!b$}!b!cG[!c!}$}!}#OHt#O#P$}#P#QIV#Q#R6d#R#T$}#T#UIh#U#c$}#c#dJy#d#o$}#o#pK`#p#q6d#q#rKq#r#sLS#s#y$}#y#z%u#z$f$}$f$g%u$g#BY$}#BY#BZ%u#BZ$IS$}$IS$I_%u$I_$I|$}$I|$JO%u$JO$JT$}$JT$JU%u$JU$KV$}$KV$KW%u$KW&FU$}&FU&FV%u&FV;'S$};'S;=`Lk<%lO$}W%QSOy%^z;'S%^;'S;=`%o<%lO%^W%cSoWOy%^z;'S%^;'S;=`%o<%lO%^W%rP;=`<%l%^~%zh#U~OX%^X^'f^p%^pq'fqy%^z#y%^#y#z'f#z$f%^$f$g'f$g#BY%^#BY#BZ'f#BZ$IS%^$IS$I_'f$I_$I|%^$I|$JO'f$JO$JT%^$JT$JU'f$JU$KV%^$KV$KW'f$KW&FU%^&FU&FV'f&FV;'S%^;'S;=`%o<%lO%^~'mh#U~oWOX%^X^'f^p%^pq'fqy%^z#y%^#y#z'f#z$f%^$f$g'f$g#BY%^#BY#BZ'f#BZ$IS%^$IS$I_'f$I_$I|%^$I|$JO'f$JO$JT%^$JT$JU'f$JU$KV%^$KV$KW'f$KW&FU%^&FU&FV'f&FV;'S%^;'S;=`%o<%lO%^^)[UOy%^z#]%^#]#^)n#^;'S%^;'S;=`%o<%lO%^^)sUoWOy%^z#a%^#a#b*V#b;'S%^;'S;=`%o<%lO%^^*[UoWOy%^z#d%^#d#e*n#e;'S%^;'S;=`%o<%lO%^^*sUoWOy%^z#c%^#c#d+V#d;'S%^;'S;=`%o<%lO%^^+[UoWOy%^z#f%^#f#g+n#g;'S%^;'S;=`%o<%lO%^^+sUoWOy%^z#h%^#h#i,V#i;'S%^;'S;=`%o<%lO%^^,[UoWOy%^z#T%^#T#U,n#U;'S%^;'S;=`%o<%lO%^^,sUoWOy%^z#b%^#b#c-V#c;'S%^;'S;=`%o<%lO%^^-[UoWOy%^z#h%^#h#i-n#i;'S%^;'S;=`%o<%lO%^^-uS!VUoWOy%^z;'S%^;'S;=`%o<%lO%^~.UWOY.RZr.Rrs.ns#O.R#O#P.s#P;'S.R;'S;=`/o<%lO.R~.sOh~~.vRO;'S.R;'S;=`/P;=`O.R~/SXOY.RZr.Rrs.ns#O.R#O#P.s#P;'S.R;'S;=`/o;=`<%l.R<%lO.R~/rP;=`<%l.R_/zYtPOy%^z!Q%^!Q![0j![!c%^!c!i0j!i#T%^#T#Z0j#Z;'S%^;'S;=`%o<%lO%^^0oYoWOy%^z!Q%^!Q![1_![!c%^!c!i1_!i#T%^#T#Z1_#Z;'S%^;'S;=`%o<%lO%^^1dYoWOy%^z!Q%^!Q![2S![!c%^!c!i2S!i#T%^#T#Z2S#Z;'S%^;'S;=`%o<%lO%^^2ZYfUoWOy%^z!Q%^!Q![2y![!c%^!c!i2y!i#T%^#T#Z2y#Z;'S%^;'S;=`%o<%lO%^^3QYfUoWOy%^z!Q%^!Q![3p![!c%^!c!i3p!i#T%^#T#Z3p#Z;'S%^;'S;=`%o<%lO%^^3uYoWOy%^z!Q%^!Q![4e![!c%^!c!i4e!i#T%^#T#Z4e#Z;'S%^;'S;=`%o<%lO%^^4lYfUoWOy%^z!Q%^!Q![5[![!c%^!c!i5[!i#T%^#T#Z5[#Z;'S%^;'S;=`%o<%lO%^^5aYoWOy%^z!Q%^!Q![6P![!c%^!c!i6P!i#T%^#T#Z6P#Z;'S%^;'S;=`%o<%lO%^^6WSfUoWOy%^z;'S%^;'S;=`%o<%lO%^Y6gUOy%^z!_%^!_!`6y!`;'S%^;'S;=`%o<%lO%^Y7QSzQoWOy%^z;'S%^;'S;=`%o<%lO%^X7cSXPOy%^z;'S%^;'S;=`%o<%lO%^~7rWOY7oZw7owx.nx#O7o#O#P8[#P;'S7o;'S;=`9W<%lO7o~8_RO;'S7o;'S;=`8h;=`O7o~8kXOY7oZw7owx.nx#O7o#O#P8[#P;'S7o;'S;=`9W;=`<%l7o<%lO7o~9ZP;=`<%l7o_9cSbVOy%^z;'S%^;'S;=`%o<%lO%^~9tOa~_9{UUPjSOy%^z!_%^!_!`6y!`;'S%^;'S;=`%o<%lO%^_:fWjS!PPOy%^z!O%^!O!P;O!P!Q%^!Q![>T![;'S%^;'S;=`%o<%lO%^^;TUoWOy%^z!Q%^!Q![;g![;'S%^;'S;=`%o<%lO%^^;nYoW#[UOy%^z!Q%^!Q![;g![!g%^!g!h<^!h#X%^#X#Y<^#Y;'S%^;'S;=`%o<%lO%^^<cYoWOy%^z{%^{|=R|}%^}!O=R!O!Q%^!Q![=j![;'S%^;'S;=`%o<%lO%^^=WUoWOy%^z!Q%^!Q![=j![;'S%^;'S;=`%o<%lO%^^=qUoW#[UOy%^z!Q%^!Q![=j![;'S%^;'S;=`%o<%lO%^^>[[oW#[UOy%^z!O%^!O!P;g!P!Q%^!Q![>T![!g%^!g!h<^!h#X%^#X#Y<^#Y;'S%^;'S;=`%o<%lO%^_?VSpVOy%^z;'S%^;'S;=`%o<%lO%^^?hWjSOy%^z!O%^!O!P;O!P!Q%^!Q![>T![;'S%^;'S;=`%o<%lO%^_@VU#XPOy%^z!Q%^!Q![;g![;'S%^;'S;=`%o<%lO%^~@nTjSOy%^z{@}{;'S%^;'S;=`%o<%lO%^~ASUoWOy@}yzAfz{Bm{;'S@};'S;=`Co<%lO@}~AiTOzAfz{Ax{;'SAf;'S;=`Bg<%lOAf~A{VOzAfz{Ax{!PAf!P!QBb!Q;'SAf;'S;=`Bg<%lOAf~BgOR~~BjP;=`<%lAf~BrWoWOy@}yzAfz{Bm{!P@}!P!QC[!Q;'S@};'S;=`Co<%lO@}~CcSoWR~Oy%^z;'S%^;'S;=`%o<%lO%^~CrP;=`<%l@}^Cz[#[UOy%^z!O%^!O!P;g!P!Q%^!Q![>T![!g%^!g!h<^!h#X%^#X#Y<^#Y;'S%^;'S;=`%o<%lO%^XDuU]POy%^z![%^![!]EX!];'S%^;'S;=`%o<%lO%^XE`S^PoWOy%^z;'S%^;'S;=`%o<%lO%^_EqS!WVOy%^z;'S%^;'S;=`%o<%lO%^YFSSzQOy%^z;'S%^;'S;=`%o<%lO%^XFeU|POy%^z!`%^!`!aFw!a;'S%^;'S;=`%o<%lO%^XGOS|PoWOy%^z;'S%^;'S;=`%o<%lO%^XG_WOy%^z!c%^!c!}Gw!}#T%^#T#oGw#o;'S%^;'S;=`%o<%lO%^XHO[!YPoWOy%^z}%^}!OGw!O!Q%^!Q![Gw![!c%^!c!}Gw!}#T%^#T#oGw#o;'S%^;'S;=`%o<%lO%^XHySxPOy%^z;'S%^;'S;=`%o<%lO%^^I[SvUOy%^z;'S%^;'S;=`%o<%lO%^XIkUOy%^z#b%^#b#cI}#c;'S%^;'S;=`%o<%lO%^XJSUoWOy%^z#W%^#W#XJf#X;'S%^;'S;=`%o<%lO%^XJmS!`PoWOy%^z;'S%^;'S;=`%o<%lO%^XJ|UOy%^z#f%^#f#gJf#g;'S%^;'S;=`%o<%lO%^XKeS!RPOy%^z;'S%^;'S;=`%o<%lO%^_KvS!QVOy%^z;'S%^;'S;=`%o<%lO%^ZLXU!PPOy%^z!_%^!_!`6y!`;'S%^;'S;=`%o<%lO%^WLnP;=`<%l$}",
          tokenizers: [O, l, o, 0, 1, 2, 3],
          topRules: {StyleSheet: [0, 4], Styles: [1, 84]},
          specialized: [
            {term: 95, get: (e) => c[e] || -1},
            {term: 56, get: (e) => u[e] || -1},
            {term: 96, get: (e) => f[e] || -1},
          ],
          tokenPrec: 1123,
        });
      var d = n(59119),
        g = n(41113);
      let m = null;
      function Q() {
        if (!m && 'object' == typeof document && document.body) {
          let {style: e} = document.body,
            t = [],
            n = new Set();
          for (let i in e)
            'cssText' == i ||
              'cssFloat' == i ||
              'string' != typeof e[i] ||
              (/[A-Z]/.test(i) &&
                (i = i.replace(/[A-Z]/g, (e) => '-' + e.toLowerCase())),
              n.has(i) || (t.push(i), n.add(i)));
          m = t.sort().map((e) => ({type: 'property', label: e}));
        }
        return m || [];
      }
      let S = [
          'active',
          'after',
          'any-link',
          'autofill',
          'backdrop',
          'before',
          'checked',
          'cue',
          'default',
          'defined',
          'disabled',
          'empty',
          'enabled',
          'file-selector-button',
          'first',
          'first-child',
          'first-letter',
          'first-line',
          'first-of-type',
          'focus',
          'focus-visible',
          'focus-within',
          'fullscreen',
          'has',
          'host',
          'host-context',
          'hover',
          'in-range',
          'indeterminate',
          'invalid',
          'is',
          'lang',
          'last-child',
          'last-of-type',
          'left',
          'link',
          'marker',
          'modal',
          'not',
          'nth-child',
          'nth-last-child',
          'nth-last-of-type',
          'nth-of-type',
          'only-child',
          'only-of-type',
          'optional',
          'out-of-range',
          'part',
          'placeholder',
          'placeholder-shown',
          'read-only',
          'read-write',
          'required',
          'right',
          'root',
          'scope',
          'selection',
          'slotted',
          'target',
          'target-text',
          'valid',
          'visited',
          'where',
        ].map((e) => ({type: 'class', label: e})),
        $ = [
          'above',
          'absolute',
          'activeborder',
          'additive',
          'activecaption',
          'after-white-space',
          'ahead',
          'alias',
          'all',
          'all-scroll',
          'alphabetic',
          'alternate',
          'always',
          'antialiased',
          'appworkspace',
          'asterisks',
          'attr',
          'auto',
          'auto-flow',
          'avoid',
          'avoid-column',
          'avoid-page',
          'avoid-region',
          'axis-pan',
          'background',
          'backwards',
          'baseline',
          'below',
          'bidi-override',
          'blink',
          'block',
          'block-axis',
          'bold',
          'bolder',
          'border',
          'border-box',
          'both',
          'bottom',
          'break',
          'break-all',
          'break-word',
          'bullets',
          'button',
          'button-bevel',
          'buttonface',
          'buttonhighlight',
          'buttonshadow',
          'buttontext',
          'calc',
          'capitalize',
          'caps-lock-indicator',
          'caption',
          'captiontext',
          'caret',
          'cell',
          'center',
          'checkbox',
          'circle',
          'cjk-decimal',
          'clear',
          'clip',
          'close-quote',
          'col-resize',
          'collapse',
          'color',
          'color-burn',
          'color-dodge',
          'column',
          'column-reverse',
          'compact',
          'condensed',
          'contain',
          'content',
          'contents',
          'content-box',
          'context-menu',
          'continuous',
          'copy',
          'counter',
          'counters',
          'cover',
          'crop',
          'cross',
          'crosshair',
          'currentcolor',
          'cursive',
          'cyclic',
          'darken',
          'dashed',
          'decimal',
          'decimal-leading-zero',
          'default',
          'default-button',
          'dense',
          'destination-atop',
          'destination-in',
          'destination-out',
          'destination-over',
          'difference',
          'disc',
          'discard',
          'disclosure-closed',
          'disclosure-open',
          'document',
          'dot-dash',
          'dot-dot-dash',
          'dotted',
          'double',
          'down',
          'e-resize',
          'ease',
          'ease-in',
          'ease-in-out',
          'ease-out',
          'element',
          'ellipse',
          'ellipsis',
          'embed',
          'end',
          'ethiopic-abegede-gez',
          'ethiopic-halehame-aa-er',
          'ethiopic-halehame-gez',
          'ew-resize',
          'exclusion',
          'expanded',
          'extends',
          'extra-condensed',
          'extra-expanded',
          'fantasy',
          'fast',
          'fill',
          'fill-box',
          'fixed',
          'flat',
          'flex',
          'flex-end',
          'flex-start',
          'footnotes',
          'forwards',
          'from',
          'geometricPrecision',
          'graytext',
          'grid',
          'groove',
          'hand',
          'hard-light',
          'help',
          'hidden',
          'hide',
          'higher',
          'highlight',
          'highlighttext',
          'horizontal',
          'hsl',
          'hsla',
          'hue',
          'icon',
          'ignore',
          'inactiveborder',
          'inactivecaption',
          'inactivecaptiontext',
          'infinite',
          'infobackground',
          'infotext',
          'inherit',
          'initial',
          'inline',
          'inline-axis',
          'inline-block',
          'inline-flex',
          'inline-grid',
          'inline-table',
          'inset',
          'inside',
          'intrinsic',
          'invert',
          'italic',
          'justify',
          'keep-all',
          'landscape',
          'large',
          'larger',
          'left',
          'level',
          'lighter',
          'lighten',
          'line-through',
          'linear',
          'linear-gradient',
          'lines',
          'list-item',
          'listbox',
          'listitem',
          'local',
          'logical',
          'loud',
          'lower',
          'lower-hexadecimal',
          'lower-latin',
          'lower-norwegian',
          'lowercase',
          'ltr',
          'luminosity',
          'manipulation',
          'match',
          'matrix',
          'matrix3d',
          'medium',
          'menu',
          'menutext',
          'message-box',
          'middle',
          'min-intrinsic',
          'mix',
          'monospace',
          'move',
          'multiple',
          'multiple_mask_images',
          'multiply',
          'n-resize',
          'narrower',
          'ne-resize',
          'nesw-resize',
          'no-close-quote',
          'no-drop',
          'no-open-quote',
          'no-repeat',
          'none',
          'normal',
          'not-allowed',
          'nowrap',
          'ns-resize',
          'numbers',
          'numeric',
          'nw-resize',
          'nwse-resize',
          'oblique',
          'opacity',
          'open-quote',
          'optimizeLegibility',
          'optimizeSpeed',
          'outset',
          'outside',
          'outside-shape',
          'overlay',
          'overline',
          'padding',
          'padding-box',
          'painted',
          'page',
          'paused',
          'perspective',
          'pinch-zoom',
          'plus-darker',
          'plus-lighter',
          'pointer',
          'polygon',
          'portrait',
          'pre',
          'pre-line',
          'pre-wrap',
          'preserve-3d',
          'progress',
          'push-button',
          'radial-gradient',
          'radio',
          'read-only',
          'read-write',
          'read-write-plaintext-only',
          'rectangle',
          'region',
          'relative',
          'repeat',
          'repeating-linear-gradient',
          'repeating-radial-gradient',
          'repeat-x',
          'repeat-y',
          'reset',
          'reverse',
          'rgb',
          'rgba',
          'ridge',
          'right',
          'rotate',
          'rotate3d',
          'rotateX',
          'rotateY',
          'rotateZ',
          'round',
          'row',
          'row-resize',
          'row-reverse',
          'rtl',
          'run-in',
          'running',
          's-resize',
          'sans-serif',
          'saturation',
          'scale',
          'scale3d',
          'scaleX',
          'scaleY',
          'scaleZ',
          'screen',
          'scroll',
          'scrollbar',
          'scroll-position',
          'se-resize',
          'self-start',
          'self-end',
          'semi-condensed',
          'semi-expanded',
          'separate',
          'serif',
          'show',
          'single',
          'skew',
          'skewX',
          'skewY',
          'skip-white-space',
          'slide',
          'slider-horizontal',
          'slider-vertical',
          'sliderthumb-horizontal',
          'sliderthumb-vertical',
          'slow',
          'small',
          'small-caps',
          'small-caption',
          'smaller',
          'soft-light',
          'solid',
          'source-atop',
          'source-in',
          'source-out',
          'source-over',
          'space',
          'space-around',
          'space-between',
          'space-evenly',
          'spell-out',
          'square',
          'start',
          'static',
          'status-bar',
          'stretch',
          'stroke',
          'stroke-box',
          'sub',
          'subpixel-antialiased',
          'svg_masks',
          'super',
          'sw-resize',
          'symbolic',
          'symbols',
          'system-ui',
          'table',
          'table-caption',
          'table-cell',
          'table-column',
          'table-column-group',
          'table-footer-group',
          'table-header-group',
          'table-row',
          'table-row-group',
          'text',
          'text-bottom',
          'text-top',
          'textarea',
          'textfield',
          'thick',
          'thin',
          'threeddarkshadow',
          'threedface',
          'threedhighlight',
          'threedlightshadow',
          'threedshadow',
          'to',
          'top',
          'transform',
          'translate',
          'translate3d',
          'translateX',
          'translateY',
          'translateZ',
          'transparent',
          'ultra-condensed',
          'ultra-expanded',
          'underline',
          'unidirectional-pan',
          'unset',
          'up',
          'upper-latin',
          'uppercase',
          'url',
          'var',
          'vertical',
          'vertical-text',
          'view-box',
          'visible',
          'visibleFill',
          'visiblePainted',
          'visibleStroke',
          'visual',
          'w-resize',
          'wait',
          'wave',
          'wider',
          'window',
          'windowframe',
          'windowtext',
          'words',
          'wrap',
          'wrap-reverse',
          'x-large',
          'x-small',
          'xor',
          'xx-large',
          'xx-small',
        ]
          .map((e) => ({type: 'keyword', label: e}))
          .concat(
            [
              'aliceblue',
              'antiquewhite',
              'aqua',
              'aquamarine',
              'azure',
              'beige',
              'bisque',
              'black',
              'blanchedalmond',
              'blue',
              'blueviolet',
              'brown',
              'burlywood',
              'cadetblue',
              'chartreuse',
              'chocolate',
              'coral',
              'cornflowerblue',
              'cornsilk',
              'crimson',
              'cyan',
              'darkblue',
              'darkcyan',
              'darkgoldenrod',
              'darkgray',
              'darkgreen',
              'darkkhaki',
              'darkmagenta',
              'darkolivegreen',
              'darkorange',
              'darkorchid',
              'darkred',
              'darksalmon',
              'darkseagreen',
              'darkslateblue',
              'darkslategray',
              'darkturquoise',
              'darkviolet',
              'deeppink',
              'deepskyblue',
              'dimgray',
              'dodgerblue',
              'firebrick',
              'floralwhite',
              'forestgreen',
              'fuchsia',
              'gainsboro',
              'ghostwhite',
              'gold',
              'goldenrod',
              'gray',
              'grey',
              'green',
              'greenyellow',
              'honeydew',
              'hotpink',
              'indianred',
              'indigo',
              'ivory',
              'khaki',
              'lavender',
              'lavenderblush',
              'lawngreen',
              'lemonchiffon',
              'lightblue',
              'lightcoral',
              'lightcyan',
              'lightgoldenrodyellow',
              'lightgray',
              'lightgreen',
              'lightpink',
              'lightsalmon',
              'lightseagreen',
              'lightskyblue',
              'lightslategray',
              'lightsteelblue',
              'lightyellow',
              'lime',
              'limegreen',
              'linen',
              'magenta',
              'maroon',
              'mediumaquamarine',
              'mediumblue',
              'mediumorchid',
              'mediumpurple',
              'mediumseagreen',
              'mediumslateblue',
              'mediumspringgreen',
              'mediumturquoise',
              'mediumvioletred',
              'midnightblue',
              'mintcream',
              'mistyrose',
              'moccasin',
              'navajowhite',
              'navy',
              'oldlace',
              'olive',
              'olivedrab',
              'orange',
              'orangered',
              'orchid',
              'palegoldenrod',
              'palegreen',
              'paleturquoise',
              'palevioletred',
              'papayawhip',
              'peachpuff',
              'peru',
              'pink',
              'plum',
              'powderblue',
              'purple',
              'rebeccapurple',
              'red',
              'rosybrown',
              'royalblue',
              'saddlebrown',
              'salmon',
              'sandybrown',
              'seagreen',
              'seashell',
              'sienna',
              'silver',
              'skyblue',
              'slateblue',
              'slategray',
              'snow',
              'springgreen',
              'steelblue',
              'tan',
              'teal',
              'thistle',
              'tomato',
              'turquoise',
              'violet',
              'wheat',
              'white',
              'whitesmoke',
              'yellow',
              'yellowgreen',
            ].map((e) => ({type: 'constant', label: e}))
          ),
        x = [
          'a',
          'abbr',
          'address',
          'article',
          'aside',
          'b',
          'bdi',
          'bdo',
          'blockquote',
          'body',
          'br',
          'button',
          'canvas',
          'caption',
          'cite',
          'code',
          'col',
          'colgroup',
          'dd',
          'del',
          'details',
          'dfn',
          'dialog',
          'div',
          'dl',
          'dt',
          'em',
          'figcaption',
          'figure',
          'footer',
          'form',
          'header',
          'hgroup',
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
          'hr',
          'html',
          'i',
          'iframe',
          'img',
          'input',
          'ins',
          'kbd',
          'label',
          'legend',
          'li',
          'main',
          'meter',
          'nav',
          'ol',
          'output',
          'p',
          'pre',
          'ruby',
          'section',
          'select',
          'small',
          'source',
          'span',
          'strong',
          'sub',
          'summary',
          'sup',
          'table',
          'tbody',
          'td',
          'template',
          'textarea',
          'tfoot',
          'th',
          'thead',
          'tr',
          'u',
          'ul',
        ].map((e) => ({type: 'type', label: e})),
        P = /^(\w[\w-]*|-\w[\w-]*|)$/,
        b = /^-(-[\w-]*)?$/,
        y = new g.hr(),
        w = ['Declaration'],
        k = (e) => {
          let {state: t, pos: n} = e,
            i = (0, d.qz)(t).resolveInner(n, -1),
            r =
              i.type.isError &&
              i.from == i.to - 1 &&
              '-' == t.doc.sliceString(i.from, i.to);
          if (
            'PropertyName' == i.name ||
            ((r || 'TagName' == i.name) &&
              /^(Block|Styles)$/.test(i.resolve(i.to).name))
          )
            return {from: i.from, options: Q(), validFor: P};
          if ('ValueName' == i.name)
            return {from: i.from, options: $, validFor: P};
          if ('PseudoClassName' == i.name)
            return {from: i.from, options: S, validFor: P};
          if (
            'VariableName' == i.name ||
            ((e.explicit || r) &&
              (function (e, t) {
                var n;
                if (
                  (('(' == e.name || e.type.isError) && (e = e.parent || e),
                  'ArgList' != e.name)
                )
                  return !1;
                let i =
                  null === (n = e.parent) || void 0 === n
                    ? void 0
                    : n.firstChild;
                return (
                  (null == i ? void 0 : i.name) == 'Callee' &&
                  'var' == t.sliceString(i.from, i.to)
                );
              })(i, t.doc))
          )
            return {
              from: 'VariableName' == i.name ? i.from : n,
              options: (function e(t, n) {
                if (n.to - n.from > 4096) {
                  let i = y.get(n);
                  if (i) return i;
                  let r = [],
                    s = new Set(),
                    a = n.cursor(g.vj.IncludeAnonymous);
                  if (a.firstChild())
                    do
                      for (let n of e(t, a.node))
                        s.has(n.label) || (s.add(n.label), r.push(n));
                    while (a.nextSibling());
                  return y.set(n, r), r;
                }
                {
                  let e = [],
                    i = new Set();
                  return (
                    n.cursor().iterate((n) => {
                      var r;
                      if (
                        'VariableName' == n.name &&
                        n.matchContext(w) &&
                        (null === (r = n.node.nextSibling) || void 0 === r
                          ? void 0
                          : r.name) == ':'
                      ) {
                        let r = t.sliceString(n.from, n.to);
                        i.has(r) ||
                          (i.add(r), e.push({label: r, type: 'variable'}));
                      }
                    }),
                    e
                  );
                }
              })(
                t.doc,
                (function (e) {
                  for (let t = e; ; ) {
                    if (t.type.isTop) return t;
                    if (!(t = t.parent)) return e;
                  }
                })(i)
              ),
              validFor: b,
            };
          if ('TagName' == i.name) {
            for (let {parent: e} = i; e; e = e.parent)
              if ('Block' == e.name)
                return {from: i.from, options: Q(), validFor: P};
            return {from: i.from, options: x, validFor: P};
          }
          if (!e.explicit) return null;
          let s = i.resolve(n),
            a = s.childBefore(n);
          return a && ':' == a.name && 'PseudoClassSelector' == s.name
            ? {from: n, options: S, validFor: P}
            : (a && ':' == a.name && 'Declaration' == s.name) ||
              'ArgList' == s.name
            ? {from: n, options: $, validFor: P}
            : 'Block' == s.name || 'Styles' == s.name
            ? {from: n, options: Q(), validFor: P}
            : null;
        },
        v = d.qp.define({
          name: 'css',
          parser: p.configure({
            props: [
              d.uj.add({Declaration: (0, d.tC)()}),
              d.x0.add({Block: d.Dv}),
            ],
          }),
          languageData: {
            commentTokens: {block: {open: '/*', close: '*/'}},
            indentOnInput: /^\s*\}$/,
            wordChars: '-',
          },
        });
      function X() {
        return new d.ri(v, v.data.of({autocomplete: k}));
      }
    },
    13804: function (e, t, n) {
      'use strict';
      n.d(t, {
        dy: function () {
          return er;
        },
      });
      var i = n(53105),
        r = n(35524),
        s = n(41113);
      let a = {
          area: !0,
          base: !0,
          br: !0,
          col: !0,
          command: !0,
          embed: !0,
          frame: !0,
          hr: !0,
          img: !0,
          input: !0,
          keygen: !0,
          link: !0,
          meta: !0,
          param: !0,
          source: !0,
          track: !0,
          wbr: !0,
          menuitem: !0,
        },
        o = {
          dd: !0,
          li: !0,
          optgroup: !0,
          option: !0,
          p: !0,
          rp: !0,
          rt: !0,
          tbody: !0,
          td: !0,
          tfoot: !0,
          th: !0,
          tr: !0,
        },
        O = {
          dd: {dd: !0, dt: !0},
          dt: {dd: !0, dt: !0},
          li: {li: !0},
          option: {option: !0, optgroup: !0},
          optgroup: {optgroup: !0},
          p: {
            address: !0,
            article: !0,
            aside: !0,
            blockquote: !0,
            dir: !0,
            div: !0,
            dl: !0,
            fieldset: !0,
            footer: !0,
            form: !0,
            h1: !0,
            h2: !0,
            h3: !0,
            h4: !0,
            h5: !0,
            h6: !0,
            header: !0,
            hgroup: !0,
            hr: !0,
            menu: !0,
            nav: !0,
            ol: !0,
            p: !0,
            pre: !0,
            section: !0,
            table: !0,
            ul: !0,
          },
          rp: {rp: !0, rt: !0},
          rt: {rp: !0, rt: !0},
          tbody: {tbody: !0, tfoot: !0},
          td: {td: !0, th: !0},
          tfoot: {tbody: !0},
          th: {td: !0, th: !0},
          thead: {tbody: !0, tfoot: !0},
          tr: {tr: !0},
        };
      function l(e) {
        return 9 == e || 10 == e || 13 == e || 32 == e;
      }
      let h = null,
        c = null,
        u = 0;
      function f(e, t) {
        var n;
        let i = e.pos + t;
        if (u == i && c == e) return h;
        let r = e.peek(t);
        for (; l(r); ) r = e.peek(++t);
        let s = '';
        for (
          ;
          45 == (n = r) ||
          46 == n ||
          58 == n ||
          (n >= 65 && n <= 90) ||
          95 == n ||
          (n >= 97 && n <= 122) ||
          n >= 161;

        )
          (s += String.fromCharCode(r)), (r = e.peek(++t));
        return (
          (c = e),
          (u = i),
          (h = s ? s.toLowerCase() : r == p || r == d ? void 0 : null)
        );
      }
      let p = 63,
        d = 33;
      function g(e, t) {
        (this.name = e), (this.parent = t), (this.hash = t ? t.hash : 0);
        for (let t = 0; t < e.length; t++)
          this.hash +=
            (this.hash << 4) + e.charCodeAt(t) + (e.charCodeAt(t) << 8);
      }
      let m = [6, 10, 7, 8, 9],
        Q = new i.IK({
          start: null,
          shift: (e, t, n, i) =>
            m.indexOf(t) > -1 ? new g(f(i, 1) || '', e) : e,
          reduce: (e, t) => (20 == t && e ? e.parent : e),
          reuse(e, t, n, i) {
            let r = t.type.id;
            return 6 == r || 36 == r ? new g(f(i, 1) || '', e) : e;
          },
          hash: (e) => (e ? e.hash : 0),
          strict: !1,
        }),
        S = new i.Jq(
          (e, t) => {
            if (60 != e.next) {
              e.next < 0 && t.context && e.acceptToken(57);
              return;
            }
            e.advance();
            let n = 47 == e.next;
            n && e.advance();
            let i = f(e, 0);
            if (void 0 === i) return;
            if (!i) return e.acceptToken(n ? 14 : 6);
            let r = t.context ? t.context.name : null;
            if (n) {
              if (i == r) return e.acceptToken(11);
              if (r && o[r]) return e.acceptToken(57, -2);
              if (t.dialectEnabled(0)) return e.acceptToken(12);
              for (let e = t.context; e; e = e.parent) if (e.name == i) return;
              e.acceptToken(13);
            } else {
              if ('script' == i) return e.acceptToken(7);
              if ('style' == i) return e.acceptToken(8);
              if ('textarea' == i) return e.acceptToken(9);
              if (a.hasOwnProperty(i)) return e.acceptToken(10);
              r && O[r] && O[r][i] ? e.acceptToken(57, -1) : e.acceptToken(6);
            }
          },
          {contextual: !0}
        ),
        $ = new i.Jq((e) => {
          for (let t = 0, n = 0; ; n++) {
            if (e.next < 0) {
              n && e.acceptToken(58);
              break;
            }
            if (45 == e.next) t++;
            else if (62 == e.next && t >= 2) {
              n > 3 && e.acceptToken(58, -2);
              break;
            } else t = 0;
            e.advance();
          }
        }),
        x = new i.Jq((e, t) => {
          if (47 == e.next && 62 == e.peek(1)) {
            let n =
              t.dialectEnabled(1) ||
              (function (e) {
                for (; e; e = e.parent)
                  if ('svg' == e.name || 'math' == e.name) return !0;
                return !1;
              })(t.context);
            e.acceptToken(n ? 5 : 4, 2);
          } else 62 == e.next && e.acceptToken(4, 1);
        });
      function P(e, t, n) {
        let r = 2 + e.length;
        return new i.Jq((i) => {
          for (let s = 0, a = 0, o = 0; ; o++) {
            if (i.next < 0) {
              o && i.acceptToken(t);
              break;
            }
            if (
              (0 == s && 60 == i.next) ||
              (1 == s && 47 == i.next) ||
              (s >= 2 && s < r && i.next == e.charCodeAt(s - 2))
            )
              s++, a++;
            else if ((2 == s || s == r) && l(i.next)) a++;
            else if (s == r && 62 == i.next) {
              o > a ? i.acceptToken(t, -a) : i.acceptToken(n, -(a - 2));
              break;
            } else if ((10 == i.next || 13 == i.next) && o) {
              i.acceptToken(t, 1);
              break;
            } else s = a = 0;
            i.advance();
          }
        });
      }
      let b = P('script', 54, 1),
        y = P('style', 55, 2),
        w = P('textarea', 56, 3),
        k = (0, r.Gv)({
          'Text RawText': r.pJ.content,
          'StartTag StartCloseTag SelfClosingEndTag EndTag': r.pJ.angleBracket,
          TagName: r.pJ.tagName,
          'MismatchedCloseTag/TagName': [r.pJ.tagName, r.pJ.invalid],
          AttributeName: r.pJ.attributeName,
          'AttributeValue UnquotedAttributeValue': r.pJ.attributeValue,
          Is: r.pJ.definitionOperator,
          'EntityReference CharacterReference': r.pJ.character,
          Comment: r.pJ.blockComment,
          ProcessingInst: r.pJ.processingInstruction,
          DoctypeDecl: r.pJ.documentMeta,
        }),
        v = i.WQ.deserialize({
          version: 14,
          states:
            ",xOVO!rOOO!WQ#tO'#CqO!]Q#tO'#CzO!bQ#tO'#C}O!gQ#tO'#DQO!lQ#tO'#DSO!qOaO'#CpO!|ObO'#CpO#XOdO'#CpO$eO!rO'#CpOOO`'#Cp'#CpO$lO$fO'#DTO$tQ#tO'#DVO$yQ#tO'#DWOOO`'#Dk'#DkOOO`'#DY'#DYQVO!rOOO%OQ&rO,59]O%WQ&rO,59fO%`Q&rO,59iO%hQ&rO,59lO%sQ&rO,59nOOOa'#D^'#D^O%{OaO'#CxO&WOaO,59[OOOb'#D_'#D_O&`ObO'#C{O&kObO,59[OOOd'#D`'#D`O&sOdO'#DOO'OOdO,59[OOO`'#Da'#DaO'WO!rO,59[O'_Q#tO'#DROOO`,59[,59[OOOp'#Db'#DbO'dO$fO,59oOOO`,59o,59oO'lQ#|O,59qO'qQ#|O,59rOOO`-E7W-E7WO'vQ&rO'#CsOOQW'#DZ'#DZO(UQ&rO1G.wOOOa1G.w1G.wO(^Q&rO1G/QOOOb1G/Q1G/QO(fQ&rO1G/TOOOd1G/T1G/TO(nQ&rO1G/WOOO`1G/W1G/WOOO`1G/Y1G/YO(yQ&rO1G/YOOOa-E7[-E7[O)RQ#tO'#CyOOO`1G.v1G.vOOOb-E7]-E7]O)WQ#tO'#C|OOOd-E7^-E7^O)]Q#tO'#DPOOO`-E7_-E7_O)bQ#|O,59mOOOp-E7`-E7`OOO`1G/Z1G/ZOOO`1G/]1G/]OOO`1G/^1G/^O)gQ,UO,59_OOQW-E7X-E7XOOOa7+$c7+$cOOOb7+$l7+$lOOOd7+$o7+$oOOO`7+$r7+$rOOO`7+$t7+$tO)rQ#|O,59eO)wQ#|O,59hO)|Q#|O,59kOOO`1G/X1G/XO*RO7[O'#CvO*dOMhO'#CvOOQW1G.y1G.yOOO`1G/P1G/POOO`1G/S1G/SOOO`1G/V1G/VOOOO'#D['#D[O*uO7[O,59bOOQW,59b,59bOOOO'#D]'#D]O+WOMhO,59bOOOO-E7Y-E7YOOQW1G.|1G.|OOOO-E7Z-E7Z",
          stateData:
            '+s~O!^OS~OUSOVPOWQOXROYTO[]O][O^^O`^Oa^Ob^Oc^Ox^O{_O!dZO~OfaO~OfbO~OfcO~OfdO~OfeO~O!WfOPlP!ZlP~O!XiOQoP!ZoP~O!YlORrP!ZrP~OUSOVPOWQOXROYTOZqO[]O][O^^O`^Oa^Ob^Oc^Ox^O!dZO~O!ZrO~P#dO![sO!euO~OfvO~OfwO~OS|OhyO~OS!OOhyO~OS!QOhyO~OS!SOT!TOhyO~OS!TOhyO~O!WfOPlX!ZlX~OP!WO!Z!XO~O!XiOQoX!ZoX~OQ!ZO!Z!XO~O!YlORrX!ZrX~OR!]O!Z!XO~O!Z!XO~P#dOf!_O~O![sO!e!aO~OS!bO~OS!cO~Oi!dOSgXhgXTgX~OS!fOhyO~OS!gOhyO~OS!hOhyO~OS!iOT!jOhyO~OS!jOhyO~Of!kO~Of!lO~Of!mO~OS!nO~Ok!qO!`!oO!b!pO~OS!rO~OS!sO~OS!tO~Oa!uOb!uOc!uO!`!wO!a!uO~Oa!xOb!xOc!xO!b!wO!c!xO~Oa!uOb!uOc!uO!`!{O!a!uO~Oa!xOb!xOc!xO!b!{O!c!xO~OT~bac!dx{!d~',
          goto: '%p!`PPPPPPPPPPPPPPPPPPPP!a!gP!mPP!yP!|#P#S#Y#]#`#f#i#l#r#x!aP!a!aP$O$U$l$r$x%O%U%[%bPPPPPPPP%hX^OX`pXUOX`pezabcde{}!P!R!UR!q!dRhUR!XhXVOX`pRkVR!XkXWOX`pRnWR!XnXXOX`pQrXR!XpXYOX`pQ`ORx`Q{aQ}bQ!PcQ!RdQ!UeZ!e{}!P!R!UQ!v!oR!z!vQ!y!pR!|!yQgUR!VgQjVR!YjQmWR![mQpXR!^pQtZR!`tS_O`ToXp',
          nodeNames:
            '⚠ StartCloseTag StartCloseTag StartCloseTag EndTag SelfClosingEndTag StartTag StartTag StartTag StartTag StartTag StartCloseTag StartCloseTag StartCloseTag IncompleteCloseTag Document Text EntityReference CharacterReference InvalidEntity Element OpenTag TagName Attribute AttributeName Is AttributeValue UnquotedAttributeValue ScriptText CloseTag OpenTag StyleText CloseTag OpenTag TextareaText CloseTag OpenTag CloseTag SelfClosingTag Comment ProcessingInst MismatchedCloseTag CloseTag DoctypeDecl',
          maxTerm: 67,
          context: Q,
          nodeProps: [
            [
              'closedBy',
              -10,
              1,
              2,
              3,
              7,
              8,
              9,
              10,
              11,
              12,
              13,
              'EndTag',
              6,
              'EndTag SelfClosingEndTag',
              -4,
              21,
              30,
              33,
              36,
              'CloseTag',
            ],
            [
              'openedBy',
              4,
              'StartTag StartCloseTag',
              5,
              'StartTag',
              -4,
              29,
              32,
              35,
              37,
              'OpenTag',
            ],
            [
              'group',
              -9,
              14,
              17,
              18,
              19,
              20,
              39,
              40,
              41,
              42,
              'Entity',
              16,
              'Entity TextContent',
              -3,
              28,
              31,
              34,
              'TextContent Entity',
            ],
          ],
          propSources: [k],
          skippedNodes: [0],
          repeatNodeCount: 9,
          tokenData:
            "#%g!aR!YOX$qXY,QYZ,QZ[$q[]&X]^,Q^p$qpq,Qqr-_rs4ysv-_vw5iwxJ^x}-_}!OKP!O!P-_!P!Q$q!Q![-_![!]!!O!]!^-_!^!_!&W!_!`#$o!`!a&X!a!c-_!c!}!!O!}#R-_#R#S!!O#S#T3V#T#o!!O#o#s-_#s$f$q$f%W-_%W%o!!O%o%p-_%p&a!!O&a&b-_&b1p!!O1p4U-_4U4d!!O4d4e-_4e$IS!!O$IS$I`-_$I`$Ib!!O$Ib$Kh-_$Kh%#t!!O%#t&/x-_&/x&Et!!O&Et&FV-_&FV;'S!!O;'S;:j!&Q;:j;=`4s<%l?&r-_?&r?Ah!!O?Ah?BY$q?BY?Mn!!O?MnO$q!Z$|c`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr$qrs&}sv$qvw+Pwx(tx!^$q!^!_*V!_!a&X!a#S$q#S#T&X#T;'S$q;'S;=`+z<%lO$q!R&bX`P!a`!cpOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&Xq'UV`P!cpOv&}wx'kx!^&}!^!_(V!_;'S&};'S;=`(n<%lO&}P'pT`POv'kw!^'k!_;'S'k;'S;=`(P<%lO'kP(SP;=`<%l'kp([S!cpOv(Vx;'S(V;'S;=`(h<%lO(Vp(kP;=`<%l(Vq(qP;=`<%l&}a({W`P!a`Or(trs'ksv(tw!^(t!^!_)e!_;'S(t;'S;=`*P<%lO(t`)jT!a`Or)esv)ew;'S)e;'S;=`)y<%lO)e`)|P;=`<%l)ea*SP;=`<%l(t!Q*^V!a`!cpOr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!Q*vP;=`<%l*V!R*|P;=`<%l&XW+UYkWOX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+PW+wP;=`<%l+P!Z+}P;=`<%l$q!a,]``P!a`!cp!^^OX&XXY,QYZ,QZ]&X]^,Q^p&Xpq,Qqr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X!_-ljhS`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx!P-_!P!Q$q!Q!^-_!^!_1n!_!a&X!a#S-_#S#T3V#T#s-_#s$f$q$f;'S-_;'S;=`4s<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q[/echSkWOX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!^!_0p!a#S/^#S#T0p#T#s/^#s$f+P$f;'S/^;'S;=`1h<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+PS0uXhSqr0psw0px!P0p!Q!_0p!a#s0p$f;'S0p;'S;=`1b<%l?Ah0p?BY?Mn0pS1eP;=`<%l0p[1kP;=`<%l/^!U1wbhS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!U3SP;=`<%l1n!V3bchS`P!a`!cpOq&Xqr3Vrs&}sv3Vvw0pwx(tx!P3V!P!Q&X!Q!^3V!^!_1n!_!a&X!a#s3V#s$f&X$f;'S3V;'S;=`4m<%l?Ah3V?Ah?BY&X?BY?Mn3V?MnO&X!V4pP;=`<%l3V!_4vP;=`<%l-_!Z5SV!`h`P!cpOv&}wx'kx!^&}!^!_(V!_;'S&};'S;=`(n<%lO&}!_5rjhSkWc!ROX7dXZ8qZ[7d[^8q^p7dqr:crs8qst@Ttw:cwx8qx!P:c!P!Q7d!Q!]:c!]!^/^!^!_=p!_!a8q!a#S:c#S#T=p#T#s:c#s$f7d$f;'S:c;'S;=`?}<%l?Ah:c?Ah?BY7d?BY?Mn:c?MnO7d!Z7ibkWOX7dXZ8qZ[7d[^8q^p7dqr7drs8qst+Ptw7dwx8qx!]7d!]!^9f!^!a8q!a#S7d#S#T8q#T;'S7d;'S;=`:]<%lO7d!R8tVOp8qqs8qt!]8q!]!^9Z!^;'S8q;'S;=`9`<%lO8q!R9`Oa!R!R9cP;=`<%l8q!Z9mYkWa!ROX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+P!Z:`P;=`<%l7d!_:jjhSkWOX7dXZ8qZ[7d[^8q^p7dqr:crs8qst/^tw:cwx8qx!P:c!P!Q7d!Q!]:c!]!^<[!^!_=p!_!a8q!a#S:c#S#T=p#T#s:c#s$f7d$f;'S:c;'S;=`?}<%l?Ah:c?Ah?BY7d?BY?Mn:c?MnO7d!_<echSkWa!ROX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!^!_0p!a#S/^#S#T0p#T#s/^#s$f+P$f;'S/^;'S;=`1h<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+P!V=udhSOp8qqr=prs8qst0ptw=pwx8qx!P=p!P!Q8q!Q!]=p!]!^?T!^!_=p!_!a8q!a#s=p#s$f8q$f;'S=p;'S;=`?w<%l?Ah=p?Ah?BY8q?BY?Mn=p?MnO8q!V?[XhSa!Rqr0psw0px!P0p!Q!_0p!a#s0p$f;'S0p;'S;=`1b<%l?Ah0p?BY?Mn0p!V?zP;=`<%l=p!_@QP;=`<%l:c!_@[ihSkWOXAyXZCTZ[Ay[^CT^pAyqrDrrsCTswDrwxCTx!PDr!P!QAy!Q!]Dr!]!^/^!^!_G|!_!aCT!a#SDr#S#TG|#T#sDr#s$fAy$f;'SDr;'S;=`JW<%l?AhDr?Ah?BYAy?BY?MnDr?MnOAy!ZBOakWOXAyXZCTZ[Ay[^CT^pAyqrAyrsCTswAywxCTx!]Ay!]!^Cu!^!aCT!a#SAy#S#TCT#T;'SAy;'S;=`Dl<%lOAy!RCWUOpCTq!]CT!]!^Cj!^;'SCT;'S;=`Co<%lOCT!RCoOb!R!RCrP;=`<%lCT!ZC|YkWb!ROX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+P!ZDoP;=`<%lAy!_DyihSkWOXAyXZCTZ[Ay[^CT^pAyqrDrrsCTswDrwxCTx!PDr!P!QAy!Q!]Dr!]!^Fh!^!_G|!_!aCT!a#SDr#S#TG|#T#sDr#s$fAy$f;'SDr;'S;=`JW<%l?AhDr?Ah?BYAy?BY?MnDr?MnOAy!_FqchSkWb!ROX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!^!_0p!a#S/^#S#T0p#T#s/^#s$f+P$f;'S/^;'S;=`1h<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+P!VHRchSOpCTqrG|rsCTswG|wxCTx!PG|!P!QCT!Q!]G|!]!^I^!^!_G|!_!aCT!a#sG|#s$fCT$f;'SG|;'S;=`JQ<%l?AhG|?Ah?BYCT?BY?MnG|?MnOCT!VIeXhSb!Rqr0psw0px!P0p!Q!_0p!a#s0p$f;'S0p;'S;=`1b<%l?Ah0p?BY?Mn0p!VJTP;=`<%lG|!_JZP;=`<%lDr!ZJgW!bx`P!a`Or(trs'ksv(tw!^(t!^!_)e!_;'S(t;'S;=`*P<%lO(t!aK^lhS`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx}-_}!OMU!O!P-_!P!Q$q!Q!^-_!^!_1n!_!a&X!a#S-_#S#T3V#T#s-_#s$f$q$f;'S-_;'S;=`4s<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q!aMckhS`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx!P-_!P!Q$q!Q!^-_!^!_1n!_!`&X!`!a! W!a#S-_#S#T3V#T#s-_#s$f$q$f;'S-_;'S;=`4s<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q!T! cX`P!a`!cp!eQOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X!a!!_!ZhSfQ`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx}-_}!O!!O!O!P!!O!P!Q$q!Q![!!O![!]!!O!]!^-_!^!_1n!_!a&X!a!c-_!c!}!!O!}#R-_#R#S!!O#S#T3V#T#o!!O#o#s-_#s$f$q$f$}-_$}%O!!O%O%W-_%W%o!!O%o%p-_%p&a!!O&a&b-_&b1p!!O1p4U!!O4U4d!!O4d4e-_4e$IS!!O$IS$I`-_$I`$Ib!!O$Ib$Je-_$Je$Jg!!O$Jg$Kh-_$Kh%#t!!O%#t&/x-_&/x&Et!!O&Et&FV-_&FV;'S!!O;'S;:j!&Q;:j;=`4s<%l?&r-_?&r?Ah!!O?Ah?BY$q?BY?Mn!!O?MnO$q!a!&TP;=`<%l!!O!V!&achS!a`!cpOq*Vqr!'lrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a!b!Ey!b#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!'uhhS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex}1n}!O!)a!O!P1n!P!Q*V!Q!_1n!_!a*V!a!f1n!f!g!,]!g#W1n#W#X!<y#X#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!)jdhS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex}1n}!O!*x!O!P1n!P!Q*V!Q!_1n!_!a*V!a#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!+TbhS!a`!cp!dPOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!,fdhS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a!q1n!q!r!-t!r#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!-}dhS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a!e1n!e!f!/]!f#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!/fdhS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a!v1n!v!w!0t!w#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!0}dhS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a!{1n!{!|!2]!|#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!2fdhS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a!r1n!r!s!3t!s#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!3}dhS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a!g1n!g!h!5]!h#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!5fchS!a`!cpOq!6qqr!5]rs!7hsv!5]vw!;`wx!9[x!P!5]!P!Q!6q!Q!_!5]!_!`!6q!`!a!:j!a#s!5]#s$f!6q$f;'S!5];'S;=`!<s<%l?Ah!5]?Ah?BY!6q?BY?Mn!5]?MnO!6q!R!6xY!a`!cpOr!6qrs!7hsv!6qvw!8Swx!9[x!`!6q!`!a!:j!a;'S!6q;'S;=`!;Y<%lO!6qq!7mV!cpOv!7hvx!8Sx!`!7h!`!a!8q!a;'S!7h;'S;=`!9U<%lO!7hP!8VTO!`!8S!`!a!8f!a;'S!8S;'S;=`!8k<%lO!8SP!8kO{PP!8nP;=`<%l!8Sq!8xS!cp{POv(Vx;'S(V;'S;=`(h<%lO(Vq!9XP;=`<%l!7ha!9aX!a`Or!9[rs!8Ssv!9[vw!8Sw!`!9[!`!a!9|!a;'S!9[;'S;=`!:d<%lO!9[a!:TT!a`{POr)esv)ew;'S)e;'S;=`)y<%lO)ea!:gP;=`<%l!9[!R!:sV!a`!cp{POr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!R!;]P;=`<%l!6qT!;ebhSOq!8Sqr!;`rs!8Ssw!;`wx!8Sx!P!;`!P!Q!8S!Q!_!;`!_!`!8S!`!a!8f!a#s!;`#s$f!8S$f;'S!;`;'S;=`!<m<%l?Ah!;`?Ah?BY!8S?BY?Mn!;`?MnO!8ST!<pP;=`<%l!;`!V!<vP;=`<%l!5]!V!=SdhS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a#c1n#c#d!>b#d#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!>kdhS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a#V1n#V#W!?y#W#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!@SdhS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a#h1n#h#i!Ab#i#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!AkdhS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a#m1n#m#n!By#n#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!CSdhS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a#d1n#d#e!Db#e#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!DkdhS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a#X1n#X#Y!5]#Y#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!FSchS!a`!cpOq!G_qr!Eyrs!HUsv!Eyvw!Ncwx!Jvx!P!Ey!P!Q!G_!Q!_!Ey!_!a!G_!a!b##T!b#s!Ey#s$f!G_$f;'S!Ey;'S;=`#$i<%l?Ah!Ey?Ah?BY!G_?BY?Mn!Ey?MnO!G_!R!GfY!a`!cpOr!G_rs!HUsv!G_vw!Hpwx!Jvx!a!G_!a!b!Lv!b;'S!G_;'S;=`!N]<%lO!G_q!HZV!cpOv!HUvx!Hpx!a!HU!a!b!Iq!b;'S!HU;'S;=`!Jp<%lO!HUP!HsTO!a!Hp!a!b!IS!b;'S!Hp;'S;=`!Ik<%lO!HpP!IVTO!`!Hp!`!a!If!a;'S!Hp;'S;=`!Ik<%lO!HpP!IkOxPP!InP;=`<%l!Hpq!IvV!cpOv!HUvx!Hpx!`!HU!`!a!J]!a;'S!HU;'S;=`!Jp<%lO!HUq!JdS!cpxPOv(Vx;'S(V;'S;=`(h<%lO(Vq!JsP;=`<%l!HUa!J{X!a`Or!Jvrs!Hpsv!Jvvw!Hpw!a!Jv!a!b!Kh!b;'S!Jv;'S;=`!Lp<%lO!Jva!KmX!a`Or!Jvrs!Hpsv!Jvvw!Hpw!`!Jv!`!a!LY!a;'S!Jv;'S;=`!Lp<%lO!Jva!LaT!a`xPOr)esv)ew;'S)e;'S;=`)y<%lO)ea!LsP;=`<%l!Jv!R!L}Y!a`!cpOr!G_rs!HUsv!G_vw!Hpwx!Jvx!`!G_!`!a!Mm!a;'S!G_;'S;=`!N]<%lO!G_!R!MvV!a`!cpxPOr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!R!N`P;=`<%l!G_T!NhbhSOq!Hpqr!Ncrs!Hpsw!Ncwx!Hpx!P!Nc!P!Q!Hp!Q!_!Nc!_!a!Hp!a!b# p!b#s!Nc#s$f!Hp$f;'S!Nc;'S;=`#!}<%l?Ah!Nc?Ah?BY!Hp?BY?Mn!Nc?MnO!HpT# ubhSOq!Hpqr!Ncrs!Hpsw!Ncwx!Hpx!P!Nc!P!Q!Hp!Q!_!Nc!_!`!Hp!`!a!If!a#s!Nc#s$f!Hp$f;'S!Nc;'S;=`#!}<%l?Ah!Nc?Ah?BY!Hp?BY?Mn!Nc?MnO!HpT##QP;=`<%l!Nc!V##^chS!a`!cpOq!G_qr!Eyrs!HUsv!Eyvw!Ncwx!Jvx!P!Ey!P!Q!G_!Q!_!Ey!_!`!G_!`!a!Mm!a#s!Ey#s$f!G_$f;'S!Ey;'S;=`#$i<%l?Ah!Ey?Ah?BY!G_?BY?Mn!Ey?MnO!G_!V#$lP;=`<%l!Ey!V#$zXiS`P!a`!cpOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X",
          tokenizers: [b, y, w, x, S, $, 0, 1, 2, 3, 4, 5],
          topRules: {Document: [0, 15]},
          dialects: {noMatch: 0, selfClosing: 485},
          tokenPrec: 487,
        });
      function X(e, t) {
        let n = Object.create(null);
        for (let i of e.getChildren(23)) {
          let e = i.getChild(24),
            r = i.getChild(26) || i.getChild(27);
          e &&
            (n[t.read(e.from, e.to)] = r
              ? 26 == r.type.id
                ? t.read(r.from + 1, r.to - 1)
                : t.read(r.from, r.to)
              : '');
        }
        return n;
      }
      function Z(e, t) {
        let n = e.getChild(22);
        return n ? t.read(n.from, n.to) : ' ';
      }
      function Y(e, t, n) {
        let i;
        for (let r of n)
          if (!r.attrs || r.attrs(i || (i = X(e.node.parent.firstChild, t))))
            return {parser: r.parser};
        return null;
      }
      function T(e = [], t = []) {
        let n = [],
          i = [],
          r = [],
          a = [];
        for (let t of e)
          ('script' == t.tag
            ? n
            : 'style' == t.tag
            ? i
            : 'textarea' == t.tag
            ? r
            : a
          ).push(t);
        let o = t.length ? Object.create(null) : null;
        for (let e of t) (o[e.name] || (o[e.name] = [])).push(e);
        return (0, s.FE)((e, t) => {
          let s = e.type.id;
          if (28 == s) return Y(e, t, n);
          if (31 == s) return Y(e, t, i);
          if (34 == s) return Y(e, t, r);
          if (20 == s && a.length) {
            let n = e.node,
              i = n.firstChild,
              r = i && Z(i, t),
              s;
            if (r) {
              for (let e of a)
                if (e.tag == r && (!e.attrs || e.attrs(s || (s = X(n, t))))) {
                  let t = n.lastChild;
                  return {
                    parser: e.parser,
                    overlay: [
                      {from: i.to, to: 37 == t.type.id ? t.from : n.to},
                    ],
                  };
                }
            }
          }
          if (o && 23 == s) {
            let n = e.node,
              i;
            if ((i = n.firstChild)) {
              let e = o[t.read(i.from, i.to)];
              if (e)
                for (let i of e) {
                  if (i.tagName && i.tagName != Z(n.parent, t)) continue;
                  let e = n.lastChild;
                  if (26 == e.type.id) {
                    let t = e.from + 1,
                      n = e.lastChild,
                      r = e.to - (n && n.isError ? 0 : 1);
                    if (r > t)
                      return {parser: i.parser, overlay: [{from: t, to: r}]};
                  } else if (27 == e.type.id)
                    return {
                      parser: i.parser,
                      overlay: [{from: e.from, to: e.to}],
                    };
                }
            }
          }
          return null;
        });
      }
      var W = n(61426),
        C = n(58037),
        U = n(47421),
        _ = n(78120),
        R = n(59119);
      let q = ['_blank', '_self', '_top', '_parent'],
        V = ['ascii', 'utf-8', 'utf-16', 'latin1', 'latin1'],
        z = ['get', 'post', 'put', 'delete'],
        j = [
          'application/x-www-form-urlencoded',
          'multipart/form-data',
          'text/plain',
        ],
        A = ['true', 'false'],
        G = {},
        I = {
          a: {
            attrs: {
              href: null,
              ping: null,
              type: null,
              media: null,
              target: q,
              hreflang: null,
            },
          },
          abbr: G,
          address: G,
          area: {
            attrs: {
              alt: null,
              coords: null,
              href: null,
              target: null,
              ping: null,
              media: null,
              hreflang: null,
              type: null,
              shape: ['default', 'rect', 'circle', 'poly'],
            },
          },
          article: G,
          aside: G,
          audio: {
            attrs: {
              src: null,
              mediagroup: null,
              crossorigin: ['anonymous', 'use-credentials'],
              preload: ['none', 'metadata', 'auto'],
              autoplay: ['autoplay'],
              loop: ['loop'],
              controls: ['controls'],
            },
          },
          b: G,
          base: {attrs: {href: null, target: q}},
          bdi: G,
          bdo: G,
          blockquote: {attrs: {cite: null}},
          body: G,
          br: G,
          button: {
            attrs: {
              form: null,
              formaction: null,
              name: null,
              value: null,
              autofocus: ['autofocus'],
              disabled: ['autofocus'],
              formenctype: j,
              formmethod: z,
              formnovalidate: ['novalidate'],
              formtarget: q,
              type: ['submit', 'reset', 'button'],
            },
          },
          canvas: {attrs: {width: null, height: null}},
          caption: G,
          center: G,
          cite: G,
          code: G,
          col: {attrs: {span: null}},
          colgroup: {attrs: {span: null}},
          command: {
            attrs: {
              type: ['command', 'checkbox', 'radio'],
              label: null,
              icon: null,
              radiogroup: null,
              command: null,
              title: null,
              disabled: ['disabled'],
              checked: ['checked'],
            },
          },
          data: {attrs: {value: null}},
          datagrid: {attrs: {disabled: ['disabled'], multiple: ['multiple']}},
          datalist: {attrs: {data: null}},
          dd: G,
          del: {attrs: {cite: null, datetime: null}},
          details: {attrs: {open: ['open']}},
          dfn: G,
          div: G,
          dl: G,
          dt: G,
          em: G,
          embed: {attrs: {src: null, type: null, width: null, height: null}},
          eventsource: {attrs: {src: null}},
          fieldset: {attrs: {disabled: ['disabled'], form: null, name: null}},
          figcaption: G,
          figure: G,
          footer: G,
          form: {
            attrs: {
              action: null,
              name: null,
              'accept-charset': V,
              autocomplete: ['on', 'off'],
              enctype: j,
              method: z,
              novalidate: ['novalidate'],
              target: q,
            },
          },
          h1: G,
          h2: G,
          h3: G,
          h4: G,
          h5: G,
          h6: G,
          head: {
            children: [
              'title',
              'base',
              'link',
              'style',
              'meta',
              'script',
              'noscript',
              'command',
            ],
          },
          header: G,
          hgroup: G,
          hr: G,
          html: {attrs: {manifest: null}},
          i: G,
          iframe: {
            attrs: {
              src: null,
              srcdoc: null,
              name: null,
              width: null,
              height: null,
              sandbox: [
                'allow-top-navigation',
                'allow-same-origin',
                'allow-forms',
                'allow-scripts',
              ],
              seamless: ['seamless'],
            },
          },
          img: {
            attrs: {
              alt: null,
              src: null,
              ismap: null,
              usemap: null,
              width: null,
              height: null,
              crossorigin: ['anonymous', 'use-credentials'],
            },
          },
          input: {
            attrs: {
              alt: null,
              dirname: null,
              form: null,
              formaction: null,
              height: null,
              list: null,
              max: null,
              maxlength: null,
              min: null,
              name: null,
              pattern: null,
              placeholder: null,
              size: null,
              src: null,
              step: null,
              value: null,
              width: null,
              accept: ['audio/*', 'video/*', 'image/*'],
              autocomplete: ['on', 'off'],
              autofocus: ['autofocus'],
              checked: ['checked'],
              disabled: ['disabled'],
              formenctype: j,
              formmethod: z,
              formnovalidate: ['novalidate'],
              formtarget: q,
              multiple: ['multiple'],
              readonly: ['readonly'],
              required: ['required'],
              type: [
                'hidden',
                'text',
                'search',
                'tel',
                'url',
                'email',
                'password',
                'datetime',
                'date',
                'month',
                'week',
                'time',
                'datetime-local',
                'number',
                'range',
                'color',
                'checkbox',
                'radio',
                'file',
                'submit',
                'image',
                'reset',
                'button',
              ],
            },
          },
          ins: {attrs: {cite: null, datetime: null}},
          kbd: G,
          keygen: {
            attrs: {
              challenge: null,
              form: null,
              name: null,
              autofocus: ['autofocus'],
              disabled: ['disabled'],
              keytype: ['RSA'],
            },
          },
          label: {attrs: {for: null, form: null}},
          legend: G,
          li: {attrs: {value: null}},
          link: {
            attrs: {
              href: null,
              type: null,
              hreflang: null,
              media: null,
              sizes: ['all', '16x16', '16x16 32x32', '16x16 32x32 64x64'],
            },
          },
          map: {attrs: {name: null}},
          mark: G,
          menu: {attrs: {label: null, type: ['list', 'context', 'toolbar']}},
          meta: {
            attrs: {
              content: null,
              charset: V,
              name: [
                'viewport',
                'application-name',
                'author',
                'description',
                'generator',
                'keywords',
              ],
              'http-equiv': [
                'content-language',
                'content-type',
                'default-style',
                'refresh',
              ],
            },
          },
          meter: {
            attrs: {
              value: null,
              min: null,
              low: null,
              high: null,
              max: null,
              optimum: null,
            },
          },
          nav: G,
          noscript: G,
          object: {
            attrs: {
              data: null,
              type: null,
              name: null,
              usemap: null,
              form: null,
              width: null,
              height: null,
              typemustmatch: ['typemustmatch'],
            },
          },
          ol: {
            attrs: {
              reversed: ['reversed'],
              start: null,
              type: ['1', 'a', 'A', 'i', 'I'],
            },
            children: ['li', 'script', 'template', 'ul', 'ol'],
          },
          optgroup: {attrs: {disabled: ['disabled'], label: null}},
          option: {
            attrs: {
              disabled: ['disabled'],
              label: null,
              selected: ['selected'],
              value: null,
            },
          },
          output: {attrs: {for: null, form: null, name: null}},
          p: G,
          param: {attrs: {name: null, value: null}},
          pre: G,
          progress: {attrs: {value: null, max: null}},
          q: {attrs: {cite: null}},
          rp: G,
          rt: G,
          ruby: G,
          samp: G,
          script: {
            attrs: {
              type: ['text/javascript'],
              src: null,
              async: ['async'],
              defer: ['defer'],
              charset: V,
            },
          },
          section: G,
          select: {
            attrs: {
              form: null,
              name: null,
              size: null,
              autofocus: ['autofocus'],
              disabled: ['disabled'],
              multiple: ['multiple'],
            },
          },
          slot: {attrs: {name: null}},
          small: G,
          source: {attrs: {src: null, type: null, media: null}},
          span: G,
          strong: G,
          style: {attrs: {type: ['text/css'], media: null, scoped: null}},
          sub: G,
          summary: G,
          sup: G,
          table: G,
          tbody: G,
          td: {attrs: {colspan: null, rowspan: null, headers: null}},
          template: G,
          textarea: {
            attrs: {
              dirname: null,
              form: null,
              maxlength: null,
              name: null,
              placeholder: null,
              rows: null,
              cols: null,
              autofocus: ['autofocus'],
              disabled: ['disabled'],
              readonly: ['readonly'],
              required: ['required'],
              wrap: ['soft', 'hard'],
            },
          },
          tfoot: G,
          th: {
            attrs: {
              colspan: null,
              rowspan: null,
              headers: null,
              scope: ['row', 'col', 'rowgroup', 'colgroup'],
            },
          },
          thead: G,
          time: {attrs: {datetime: null}},
          title: G,
          tr: G,
          track: {
            attrs: {
              src: null,
              label: null,
              default: null,
              kind: [
                'subtitles',
                'captions',
                'descriptions',
                'chapters',
                'metadata',
              ],
              srclang: null,
            },
          },
          ul: {children: ['li', 'script', 'template', 'ul', 'ol']},
          var: G,
          video: {
            attrs: {
              src: null,
              poster: null,
              width: null,
              height: null,
              crossorigin: ['anonymous', 'use-credentials'],
              preload: ['auto', 'metadata', 'none'],
              autoplay: ['autoplay'],
              mediagroup: ['movie'],
              muted: ['muted'],
              controls: ['controls'],
            },
          },
          wbr: G,
        },
        E = {
          accesskey: null,
          class: null,
          contenteditable: A,
          contextmenu: null,
          dir: ['ltr', 'rtl', 'auto'],
          draggable: ['true', 'false', 'auto'],
          dropzone: ['copy', 'move', 'link', 'string:', 'file:'],
          hidden: ['hidden'],
          id: null,
          inert: ['inert'],
          itemid: null,
          itemprop: null,
          itemref: null,
          itemscope: ['itemscope'],
          itemtype: null,
          lang: [
            'ar',
            'bn',
            'de',
            'en-GB',
            'en-US',
            'es',
            'fr',
            'hi',
            'id',
            'ja',
            'pa',
            'pt',
            'ru',
            'tr',
            'zh',
          ],
          spellcheck: A,
          autocorrect: A,
          autocapitalize: A,
          style: null,
          tabindex: null,
          title: null,
          translate: ['yes', 'no'],
          rel: [
            'stylesheet',
            'alternate',
            'author',
            'bookmark',
            'help',
            'license',
            'next',
            'nofollow',
            'noreferrer',
            'prefetch',
            'prev',
            'search',
            'tag',
          ],
          role: 'alert application article banner button cell checkbox complementary contentinfo dialog document feed figure form grid gridcell heading img list listbox listitem main navigation region row rowgroup search switch tab table tabpanel textbox timer'.split(
            ' '
          ),
          'aria-activedescendant': null,
          'aria-atomic': A,
          'aria-autocomplete': ['inline', 'list', 'both', 'none'],
          'aria-busy': A,
          'aria-checked': ['true', 'false', 'mixed', 'undefined'],
          'aria-controls': null,
          'aria-describedby': null,
          'aria-disabled': A,
          'aria-dropeffect': null,
          'aria-expanded': ['true', 'false', 'undefined'],
          'aria-flowto': null,
          'aria-grabbed': ['true', 'false', 'undefined'],
          'aria-haspopup': A,
          'aria-hidden': A,
          'aria-invalid': ['true', 'false', 'grammar', 'spelling'],
          'aria-label': null,
          'aria-labelledby': null,
          'aria-level': null,
          'aria-live': ['off', 'polite', 'assertive'],
          'aria-multiline': A,
          'aria-multiselectable': A,
          'aria-owns': null,
          'aria-posinset': null,
          'aria-pressed': ['true', 'false', 'mixed', 'undefined'],
          'aria-readonly': A,
          'aria-relevant': null,
          'aria-required': A,
          'aria-selected': ['true', 'false', 'undefined'],
          'aria-setsize': null,
          'aria-sort': ['ascending', 'descending', 'none', 'other'],
          'aria-valuemax': null,
          'aria-valuemin': null,
          'aria-valuenow': null,
          'aria-valuetext': null,
        },
        N =
          'beforeunload copy cut dragstart dragover dragleave dragenter dragend drag paste focus blur change click load mousedown mouseenter mouseleave mouseup keydown keyup resize scroll unload'
            .split(' ')
            .map((e) => 'on' + e);
      for (let e of N) E[e] = null;
      class J {
        constructor(e, t) {
          (this.tags = Object.assign(Object.assign({}, I), e)),
            (this.globalAttrs = Object.assign(Object.assign({}, E), t)),
            (this.allTags = Object.keys(this.tags)),
            (this.globalAttrNames = Object.keys(this.globalAttrs));
        }
      }
      function B(e, t, n = e.length) {
        if (!t) return '';
        let i = t.firstChild,
          r = i && i.getChild('TagName');
        return r ? e.sliceString(r.from, Math.min(r.to, n)) : '';
      }
      function D(e, t = !1) {
        for (let n = e.parent; n; n = n.parent)
          if ('Element' == n.name) {
            if (!t) return n;
            t = !1;
          }
        return null;
      }
      function M(e, t, n) {
        let i = n.tags[B(e, D(t, !0))];
        return (null == i ? void 0 : i.children) || n.allTags;
      }
      function L(e, t) {
        let n = [];
        for (let i = t; (i = D(i)); ) {
          let r = B(e, i);
          if (r && 'CloseTag' == i.lastChild.name) break;
          r &&
            0 > n.indexOf(r) &&
            ('EndTag' == t.name || t.from >= i.firstChild.to) &&
            n.push(r);
        }
        return n;
      }
      J.default = new J();
      let F = /^[:\-\.\w\u00b7-\uffff]*$/;
      function H(e, t, n, i, r) {
        let s = /\s*>/.test(e.sliceDoc(r, r + 5)) ? '' : '>';
        return {
          from: i,
          to: r,
          options: M(e.doc, n, t)
            .map((e) => ({label: e, type: 'type'}))
            .concat(
              L(e.doc, n).map((e, t) => ({
                label: '/' + e,
                apply: '/' + e + s,
                type: 'type',
                boost: 99 - t,
              }))
            ),
          validFor: /^\/?[:\-\.\w\u00b7-\uffff]*$/,
        };
      }
      function K(e, t, n, i) {
        let r = /\s*>/.test(e.sliceDoc(i, i + 5)) ? '' : '>';
        return {
          from: n,
          to: i,
          options: L(e.doc, t).map((e, t) => ({
            label: e,
            apply: e + r,
            type: 'type',
            boost: 99 - t,
          })),
          validFor: F,
        };
      }
      let ee = [
          {
            tag: 'script',
            attrs: (e) => 'text/typescript' == e.type || 'ts' == e.lang,
            parser: C.ev.parser,
          },
          {
            tag: 'script',
            attrs: (e) => 'text/babel' == e.type || 'text/jsx' == e.type,
            parser: C.uh.parser,
          },
          {
            tag: 'script',
            attrs: (e) => 'text/typescript-jsx' == e.type,
            parser: C._v.parser,
          },
          {
            tag: 'script',
            attrs: (e) =>
              !e.type ||
              /^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i.test(
                e.type
              ),
            parser: C.Lz.parser,
          },
          {
            tag: 'style',
            attrs: (e) =>
              (!e.lang || 'css' == e.lang) &&
              (!e.type || /^(text\/)?(x-)?(stylesheet|css)$/i.test(e.type)),
            parser: W.t$.parser,
          },
        ],
        et = [
          {name: 'style', parser: W.t$.parser.configure({top: 'Styles'})},
        ].concat(N.map((e) => ({name: e, parser: C.Lz.parser}))),
        en = R.qp.define({
          name: 'html',
          parser: v.configure({
            props: [
              R.uj.add({
                Element(e) {
                  let t = /^(\s*)(<\/)?/.exec(e.textAfter);
                  return e.node.to <= e.pos + t[0].length
                    ? e.continue()
                    : e.lineIndent(e.node.from) + (t[2] ? 0 : e.unit);
                },
                'OpenTag CloseTag SelfClosingTag': (e) =>
                  e.column(e.node.from) + e.unit,
                Document(e) {
                  if (e.pos + /\s*/.exec(e.textAfter)[0].length < e.node.to)
                    return e.continue();
                  let t = null,
                    n;
                  for (let n = e.node; ; ) {
                    let e = n.lastChild;
                    if (!e || 'Element' != e.name || e.to != n.to) break;
                    t = n = e;
                  }
                  return t &&
                    !(
                      (n = t.lastChild) &&
                      ('CloseTag' == n.name || 'SelfClosingTag' == n.name)
                    )
                    ? e.lineIndent(t.from) + e.unit
                    : null;
                },
              }),
              R.x0.add({
                Element(e) {
                  let t = e.firstChild,
                    n = e.lastChild;
                  return t && 'OpenTag' == t.name
                    ? {from: t.to, to: 'CloseTag' == n.name ? n.from : e.to}
                    : null;
                },
              }),
              R.a0.add({'OpenTag CloseTag': (e) => e.getChild('TagName')}),
            ],
          }),
          languageData: {
            commentTokens: {block: {open: '<!--', close: '-->'}},
            indentOnInput: /^\s*<\/\w+\W$/,
            wordChars: '-._',
          },
        }),
        ei = en.configure({wrap: T(ee, et)});
      function er(e = {}) {
        let t = '',
          n;
        !1 === e.matchClosingTags && (t = 'noMatch'),
          !0 === e.selfClosingTags && (t = (t ? t + ' ' : '') + 'selfClosing'),
          ((e.nestedLanguages && e.nestedLanguages.length) ||
            (e.nestedAttributes && e.nestedAttributes.length)) &&
            (n = T(
              (e.nestedLanguages || []).concat(ee),
              (e.nestedAttributes || []).concat(et)
            ));
        let i = n
          ? en.configure({wrap: n, dialect: t})
          : t
          ? ei.configure({dialect: t})
          : ei;
        return new R.ri(i, [
          ei.data.of({
            autocomplete: (function (e) {
              let {extraTags: t, extraGlobalAttributes: n} = e,
                i = n || t ? new J(t, n) : J.default;
              return (e) =>
                (function (e, t) {
                  let {state: n, pos: i} = t,
                    r = (0, R.qz)(n).resolveInner(i),
                    s = r.resolve(i, -1);
                  for (let e = i, t; r == s && (t = s.childBefore(e)); ) {
                    let n = t.lastChild;
                    if (!n || !n.type.isError || n.from < n.to) break;
                    (r = s = t), (e = n.from);
                  }
                  if ('TagName' == s.name)
                    return s.parent && /CloseTag$/.test(s.parent.name)
                      ? K(n, s, s.from, i)
                      : H(n, e, s, s.from, i);
                  if ('StartTag' == s.name) return H(n, e, s, i, i);
                  if (
                    'StartCloseTag' == s.name ||
                    'IncompleteCloseTag' == s.name
                  )
                    return K(n, s, i, i);
                  if (
                    (t.explicit &&
                      ('OpenTag' == s.name || 'SelfClosingTag' == s.name)) ||
                    'AttributeName' == s.name
                  ) {
                    var a, o;
                    let t, r, O;
                    return (
                      (a = s),
                      (o = 'AttributeName' == s.name ? s.from : i),
                      (O =
                        (r = (t = D(a)) ? e.tags[B(n.doc, t)] : null) && r.attrs
                          ? Object.keys(r.attrs)
                          : []),
                      {
                        from: o,
                        to: i,
                        options: (r && !1 === r.globalAttrs
                          ? O
                          : O.length
                          ? O.concat(e.globalAttrNames)
                          : e.globalAttrNames
                        ).map((e) => ({label: e, type: 'property'})),
                        validFor: F,
                      }
                    );
                  }
                  return 'Is' == s.name ||
                    'AttributeValue' == s.name ||
                    'UnquotedAttributeValue' == s.name
                    ? (function (e, t, n, i, r) {
                        var s;
                        let a =
                            null === (s = n.parent) || void 0 === s
                              ? void 0
                              : s.getChild('AttributeName'),
                          o = [],
                          O;
                        if (a) {
                          let s = e.sliceDoc(a.from, a.to),
                            l = t.globalAttrs[s];
                          if (!l) {
                            let i = D(n),
                              r = i ? t.tags[B(e.doc, i)] : null;
                            l = (null == r ? void 0 : r.attrs) && r.attrs[s];
                          }
                          if (l) {
                            let t = e.sliceDoc(i, r).toLowerCase(),
                              n = '"',
                              s = '"';
                            for (let a of (/^['"]/.test(t)
                              ? ((O = '"' == t[0] ? /^[^"]*$/ : /^[^']*$/),
                                (n = ''),
                                (s = e.sliceDoc(r, r + 1) == t[0] ? '' : t[0]),
                                (t = t.slice(1)),
                                i++)
                              : (O = /^[^\s<>='"]*$/),
                            l))
                              o.push({
                                label: a,
                                apply: n + a + s,
                                type: 'constant',
                              });
                          }
                        }
                        return {from: i, to: r, options: o, validFor: O};
                      })(n, e, s, 'Is' == s.name ? i : s.from, i)
                    : t.explicit &&
                      ('Element' == r.name ||
                        'Text' == r.name ||
                        'Document' == r.name)
                    ? (function (e, t, n, i) {
                        let r = [],
                          s = 0;
                        for (let i of M(e.doc, n, t))
                          r.push({label: '<' + i, type: 'type'});
                        for (let t of L(e.doc, n))
                          r.push({
                            label: '</' + t + '>',
                            type: 'type',
                            boost: 99 - s++,
                          });
                        return {
                          from: i,
                          to: i,
                          options: r,
                          validFor: /^<\/?[:\-\.\w\u00b7-\uffff]*$/,
                        };
                      })(n, e, s, i)
                    : null;
                })(i, e);
            })(e),
          }),
          !1 !== e.autoCloseTags ? ea : [],
          (0, C.eJ)().support,
          (0, W.iv)().support,
        ]);
      }
      let es = new Set(
          'area base br col command embed frame hr img input keygen link meta param source track wbr menuitem'.split(
            ' '
          )
        ),
        ea = U.tk.inputHandler.of((e, t, n, i) => {
          if (
            e.composing ||
            e.state.readOnly ||
            t != n ||
            ('>' != i && '/' != i) ||
            !ei.isActiveAt(e.state, t, -1)
          )
            return !1;
          let {state: r} = e,
            s = r.changeByRange((t) => {
              var n, s, a;
              let {head: o} = t,
                O = (0, R.qz)(r).resolveInner(o, -1),
                l;
              if (
                (('TagName' == O.name || 'StartTag' == O.name) &&
                  (O = O.parent),
                '>' == i && 'OpenTag' == O.name)
              ) {
                if (
                  (null ===
                    (s =
                      null === (n = O.parent) || void 0 === n
                        ? void 0
                        : n.lastChild) || void 0 === s
                    ? void 0
                    : s.name) != 'CloseTag' &&
                  (l = B(r.doc, O.parent, o)) &&
                  !es.has(l)
                ) {
                  let t = '>' === e.state.doc.sliceString(o, o + 1),
                    n = `${t ? '' : '>'}</${l}>`;
                  return {
                    range: _.jT.cursor(o + 1),
                    changes: {from: o + (t ? 1 : 0), insert: n},
                  };
                }
              } else if ('/' == i && 'OpenTag' == O.name) {
                let t = O.parent,
                  n = null == t ? void 0 : t.parent;
                if (
                  t.from == o - 1 &&
                  (null === (a = n.lastChild) || void 0 === a
                    ? void 0
                    : a.name) != 'CloseTag' &&
                  (l = B(r.doc, n, o)) &&
                  !es.has(l)
                ) {
                  let t = '>' === e.state.doc.sliceString(o, o + 1),
                    n = `/${l}${t ? '' : '>'}`,
                    i = o + n.length + (t ? 1 : 0);
                  return {range: _.jT.cursor(i), changes: {from: o, insert: n}};
                }
              }
              return {range: t};
            });
          return (
            !s.changes.empty &&
            (e.dispatch(s, {userEvent: 'input.type', scrollIntoView: !0}), !0)
          );
        });
    },
    58037: function (e, t, n) {
      'use strict';
      n.d(t, {
        eJ: function () {
          return _;
        },
        Lz: function () {
          return Z;
        },
        uh: function () {
          return W;
        },
        _v: function () {
          return C;
        },
        ev: function () {
          return T;
        },
      });
      var i = n(53105),
        r = n(35524);
      let s = [
          9, 10, 11, 12, 13, 32, 133, 160, 5760, 8192, 8193, 8194, 8195, 8196,
          8197, 8198, 8199, 8200, 8201, 8202, 8232, 8233, 8239, 8287, 12288,
        ],
        a = new i.IK({
          start: !1,
          shift: (e, t) => (3 == t || 4 == t || 305 == t ? e : 306 == t),
          strict: !1,
        }),
        o = new i.Jq(
          (e, t) => {
            let {next: n} = e;
            (125 == n || -1 == n || t.context) &&
              t.canShift(303) &&
              e.acceptToken(303);
          },
          {contextual: !0, fallback: !0}
        ),
        O = new i.Jq(
          (e, t) => {
            let {next: n} = e,
              i;
            !(s.indexOf(n) > -1) &&
              (47 != n || (47 != (i = e.peek(1)) && 42 != i)) &&
              125 != n &&
              59 != n &&
              -1 != n &&
              !t.context &&
              t.canShift(302) &&
              e.acceptToken(302);
          },
          {contextual: !0}
        ),
        l = new i.Jq(
          (e, t) => {
            let {next: n} = e;
            if ((43 == n || 45 == n) && (e.advance(), n == e.next)) {
              e.advance();
              let n = !t.context && t.canShift(1);
              e.acceptToken(n ? 1 : 2);
            }
          },
          {contextual: !0}
        ),
        h = (0, r.Gv)({
          'get set async static': r.pJ.modifier,
          'for while do if else switch try catch finally return throw break continue default case':
            r.pJ.controlKeyword,
          'in of await yield void typeof delete instanceof':
            r.pJ.operatorKeyword,
          'let var const function class extends': r.pJ.definitionKeyword,
          'import export from': r.pJ.moduleKeyword,
          'with debugger as new': r.pJ.keyword,
          TemplateString: r.pJ.special(r.pJ.string),
          super: r.pJ.atom,
          BooleanLiteral: r.pJ.bool,
          this: r.pJ.self,
          null: r.pJ.null,
          Star: r.pJ.modifier,
          VariableName: r.pJ.variableName,
          'CallExpression/VariableName TaggedTemplateExpression/VariableName':
            r.pJ.function(r.pJ.variableName),
          VariableDefinition: r.pJ.definition(r.pJ.variableName),
          Label: r.pJ.labelName,
          PropertyName: r.pJ.propertyName,
          PrivatePropertyName: r.pJ.special(r.pJ.propertyName),
          'CallExpression/MemberExpression/PropertyName': r.pJ.function(
            r.pJ.propertyName
          ),
          'FunctionDeclaration/VariableDefinition': r.pJ.function(
            r.pJ.definition(r.pJ.variableName)
          ),
          'ClassDeclaration/VariableDefinition': r.pJ.definition(
            r.pJ.className
          ),
          PropertyDefinition: r.pJ.definition(r.pJ.propertyName),
          PrivatePropertyDefinition: r.pJ.definition(
            r.pJ.special(r.pJ.propertyName)
          ),
          UpdateOp: r.pJ.updateOperator,
          LineComment: r.pJ.lineComment,
          BlockComment: r.pJ.blockComment,
          Number: r.pJ.number,
          String: r.pJ.string,
          Escape: r.pJ.escape,
          ArithOp: r.pJ.arithmeticOperator,
          LogicOp: r.pJ.logicOperator,
          BitOp: r.pJ.bitwiseOperator,
          CompareOp: r.pJ.compareOperator,
          RegExp: r.pJ.regexp,
          Equals: r.pJ.definitionOperator,
          Arrow: r.pJ.function(r.pJ.punctuation),
          ': Spread': r.pJ.punctuation,
          '( )': r.pJ.paren,
          '[ ]': r.pJ.squareBracket,
          '{ }': r.pJ.brace,
          'InterpolationStart InterpolationEnd': r.pJ.special(r.pJ.brace),
          '.': r.pJ.derefOperator,
          ', ;': r.pJ.separator,
          '@': r.pJ.meta,
          TypeName: r.pJ.typeName,
          TypeDefinition: r.pJ.definition(r.pJ.typeName),
          'type enum interface implements namespace module declare':
            r.pJ.definitionKeyword,
          'abstract global Privacy readonly override': r.pJ.modifier,
          'is keyof unique infer': r.pJ.operatorKeyword,
          JSXAttributeValue: r.pJ.attributeValue,
          JSXText: r.pJ.content,
          'JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag':
            r.pJ.angleBracket,
          'JSXIdentifier JSXNameSpacedName': r.pJ.tagName,
          'JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName':
            r.pJ.attributeName,
          'JSXBuiltin/JSXIdentifier': r.pJ.standard(r.pJ.tagName),
        }),
        c = {
          __proto__: null,
          export: 14,
          as: 19,
          from: 27,
          default: 30,
          async: 35,
          function: 36,
          extends: 46,
          this: 50,
          true: 58,
          false: 58,
          null: 70,
          void: 74,
          typeof: 78,
          super: 96,
          new: 130,
          delete: 146,
          yield: 155,
          await: 159,
          class: 164,
          public: 221,
          private: 221,
          protected: 221,
          readonly: 223,
          instanceof: 242,
          satisfies: 245,
          in: 246,
          const: 248,
          import: 280,
          keyof: 335,
          unique: 339,
          infer: 345,
          is: 381,
          abstract: 401,
          implements: 403,
          type: 405,
          let: 408,
          var: 410,
          interface: 417,
          enum: 421,
          namespace: 427,
          module: 429,
          declare: 433,
          global: 437,
          for: 458,
          of: 467,
          while: 470,
          with: 474,
          do: 478,
          if: 482,
          else: 484,
          switch: 488,
          case: 494,
          try: 500,
          catch: 504,
          finally: 508,
          return: 512,
          throw: 516,
          break: 520,
          continue: 524,
          debugger: 528,
        },
        u = {
          __proto__: null,
          async: 117,
          get: 119,
          set: 121,
          declare: 181,
          public: 183,
          private: 183,
          protected: 183,
          static: 185,
          abstract: 187,
          override: 189,
          readonly: 195,
          accessor: 197,
          new: 385,
        },
        f = {__proto__: null, '<': 137},
        p = i.WQ.deserialize({
          version: 14,
          states:
            "$EnO`QUOOO%QQUOOO'TQWOOP(bOSOOO*pQ(CjO'#CfO*wOpO'#CgO+VO!bO'#CgO+eO07`O'#DZO-vQUO'#DaO.WQUO'#DlO%QQUO'#DvO0_QUO'#EOOOQ(CY'#EW'#EWO0uQSO'#ETOOQO'#I`'#I`O0}QSO'#GkOOQO'#Ei'#EiO1YQSO'#EhO1_QSO'#EhO3aQ(CjO'#JcO6QQ(CjO'#JdO6nQSO'#FWO6sQ#tO'#FoOOQ(CY'#F`'#F`O7OO&jO'#F`O7^Q,UO'#FvO8tQSO'#FuOOQ(CY'#Jd'#JdOOQ(CW'#Jc'#JcOOQQ'#J}'#J}O8yQSO'#IPO9OQ(C[O'#IQOOQQ'#JP'#JPOOQQ'#IU'#IUQ`QUOOO%QQUO'#DnO9WQUO'#DzO%QQUO'#D|O9_QSO'#GkO9dQ,UO'#ClO9rQSO'#EgO9}QSO'#ErO:SQ,UO'#F_O:qQSO'#GkO:vQSO'#GoO;RQSO'#GoO;aQSO'#GrO;aQSO'#GsO;aQSO'#GuO9_QSO'#GxO<QQSO'#G{O=cQSO'#CbO=sQSO'#HYO={QSO'#H`O={QSO'#HbO`QUO'#HdO={QSO'#HfO={QSO'#HiO>QQSO'#HoO>VQ(C]O'#HuO%QQUO'#HwO>bQ(C]O'#HyO>mQ(C]O'#H{O9OQ(C[O'#H}O>xQ(CjO'#CfO?zQWO'#DfQOQSOOO@bQSO'#EPO9dQ,UO'#EgO@mQSO'#EgO@xQ`O'#F_OOQQ'#Cd'#CdOOQ(CW'#Dk'#DkOOQ(CW'#Jg'#JgO%QQUO'#JgOBUQWO'#E`OOQ(CW'#E_'#E_OB`Q(C`O'#E`OBzQWO'#ESOOQO'#Jj'#JjOC`QWO'#ESOCmQWO'#E`ODTQWO'#EfODWQWO'#E`ODqQWO'#E`OAQQWO'#E`OBzQWO'#E`PEbO?MpO'#C`POOO)CDn)CDnOOOO'#IV'#IVOEmOpO,59ROOQ(CY,59R,59ROOOO'#IW'#IWOE{O!bO,59RO%QQUO'#D]OOOO'#IY'#IYOFZO07`O,59uOOQ(CY,59u,59uOFiQUO'#IZOF|QSO'#JeOIOQbO'#JeO+sQUO'#JeOIVQSO,59{OImQSO'#EiOIzQSO'#JrOJVQSO'#JqOJVQSO'#JqOJ_QSO,5;VOJdQSO'#JpOOQ(CY,5:W,5:WOJkQUO,5:WOLlQ(CjO,5:bOM]QSO,5:jOMbQSO'#JnON[Q(C[O'#JoO:vQSO'#JnONcQSO'#JnONkQSO,5;UONpQSO'#JnOOQ(CY'#Cf'#CfO%QQUO'#EOO! dQ`O,5:oOOQO'#Jk'#JkOOQO-E<^-E<^O9_QSO,5=VO! zQSO,5=VO!!PQUO,5;SO!$SQ,UO'#EdO!%gQSO,5;SO!'PQ,UO'#DpO!'WQUO'#DuO!'bQWO,5;]O!'jQWO,5;]O%QQUO,5;]OOQQ'#FO'#FOOOQQ'#FQ'#FQO%QQUO,5;^O%QQUO,5;^O%QQUO,5;^O%QQUO,5;^O%QQUO,5;^O%QQUO,5;^O%QQUO,5;^O%QQUO,5;^O%QQUO,5;^O%QQUO,5;^O%QQUO,5;^OOQQ'#FU'#FUO!'xQUO,5;oOOQ(CY,5;t,5;tOOQ(CY,5;u,5;uO!){QSO,5;uOOQ(CY,5;v,5;vO%QQUO'#IfO!*TQ(C[O,5<cO!$SQ,UO,5;^O!*rQ,UO,5;^O%QQUO,5;rO!*yQ#tO'#FeO!+vQ#tO'#JvO!+bQ#tO'#JvO!+}Q#tO'#JvOOQO'#Jv'#JvO!,cQ#tO,5;}OOOO,5<Z,5<ZO!,tQUO'#FqOOOO'#Ie'#IeO7OO&jO,5;zO!,{Q#tO'#FsOOQ(CY,5;z,5;zO!-lQ7[O'#CrOOQ(CY'#Cv'#CvO!.PQSO'#CvO!.UO07`O'#CzO!.rQ,UO,5<`O!.yQSO,5<bO!0`QMhO'#GQO!0mQSO'#GRO!0rQSO'#GRO!0wQMhO'#GVO!1vQWO'#GZO!2iQ7[O'#J^OOQ(CY'#J^'#J^O!2sQSO'#J]O!3RQSO'#J[O!3ZQSO'#CqOOQ(CY'#Ct'#CtOOQ(CY'#DO'#DOOOQ(CY'#DQ'#DQO0xQSO'#DSO!%lQ,UO'#FxO!%lQ,UO'#FzO!3cQSO'#F|O!3hQSO'#F}O!0rQSO'#GTO!%lQ,UO'#GYO!3mQSO'#EjO!4XQSO,5<aO`QUO,5>kOOQQ'#JX'#JXOOQQ,5>l,5>lOOQQ-E<S-E<SO!6WQ(CjO,5:YO!8tQ(CjO,5:fO%QQUO,5:fO!;_Q(CjO,5:hOOQ(CW'#Co'#CoO!<OQ,UO,5=VO!<^Q(C[O'#JYO8tQSO'#JYO!<oQ(C[O,59WO!<zQWO,59WO!=SQ,UO,59WO9dQ,UO,59WO!=_QSO,5;SO!=gQSO'#HXO!=xQSO'#KRO%QQUO,5;wO!>QQWO,5;yO!>VQSO,5=rO!>[QSO,5=rO!>aQSO,5=rO9OQ(C[O,5=rO!>oQSO'#EkO!?iQWO'#ElOOQ(CW'#Jp'#JpO!?pQ(C[O'#KOO9OQ(C[O,5=ZO;aQSO,5=aOOQO'#Cr'#CrO!?{QWO,5=^O!@TQ,UO,5=_O!@`QSO,5=aO!@eQ`O,5=dO>QQSO'#G}O9_QSO'#HPO!@mQSO'#HPO9dQ,UO'#HSO!@rQSO'#HSOOQQ,5=g,5=gO!@wQSO'#HTO!APQSO'#ClO!AUQSO,58|O!A`QSO,58|O!ChQUO,58|OOQQ,58|,58|O!CuQ(C[O,58|O%QQUO,58|O!DQQUO'#H[OOQQ'#H]'#H]OOQQ'#H^'#H^O`QUO,5=tO!DbQSO,5=tO`QUO,5=zO`QUO,5=|O!DgQSO,5>OO`QUO,5>QO!DlQSO,5>TO!DqQUO,5>ZOOQQ,5>a,5>aO%QQUO,5>aO9OQ(C[O,5>cOOQQ,5>e,5>eO!HxQSO,5>eOOQQ,5>g,5>gO!HxQSO,5>gOOQQ,5>i,5>iO!H}QWO'#DXO%QQUO'#JgO!IlQWO'#JgO!JZQWO'#DgO!JlQWO'#DgO!L}QUO'#DgO!MUQSO'#JfO!M^QSO,5:QO!McQSO'#EmO!MqQSO'#JsO!MyQSO,5;WO!NOQWO'#DgO!N]QWO'#EROOQ(CY,5:k,5:kO%QQUO,5:kO!NdQSO,5:kO>QQSO,5;RO!<zQWO,5;RO!=SQ,UO,5;RO9dQ,UO,5;RO!NlQSO,5@RO!NqQ!LQO,5:oO# wQ(C`O,5:zOBzQWO,5:nO#!cQWO,5:nO#!pQWO,5:zO##WQWO,5:zO##qQWO,5:zO#$bQWO,5:zOBzQWO,5:zO!<oQ(C[O,5:nOOQ(CW'#Ec'#EcOOQO,5:z,5:zO%QQUO,5:zO#%UQ(C[O,5:zO#%aQ(C[O,5:zO!<zQWO,5:nOOQO,5;Q,5;QO#%oQ(C[O,5:zPOOO'#IT'#ITP#&TO?MpO,58zPOOO,58z,58zOOOO-E<T-E<TOOQ(CY1G.m1G.mOOOO-E<U-E<UO#&`Q`O,59wOOOO-E<W-E<WOOQ(CY1G/a1G/aO#&eQbO,5>uO+sQUO,5>uOOQO,5>{,5>{O#&oQUO'#IZOOQO-E<X-E<XO#&|QSO,5@PO#'UQbO,5@PO#']QSO,5@]OOQ(CY1G/g1G/gO%QQUO,5@^O#'eQSO'#IaOOQO-E<_-E<_O#']QSO,5@]OOQ(CW1G0q1G0qOOQ(CY1G/r1G/rOOQ(CY1G0U1G0UO#'yQSO,5@YO:vQSO,5@YO#(RQSO,5@YO%QQUO,5@ZO#(aQ(C[O,5@ZO#(rQ(C[O,5@ZO#(yQSO'#IcO#'yQSO,5@YOOQ(CW1G0p1G0pO!'bQWO,5:qO!'mQWO,5:qOOQO,5:s,5:sO#)hQSO,5:sO#)pQ,UO1G2qO9_QSO1G2qOOQ(CY1G0n1G0nO#*OQ(CjO1G0nO#+TQ(ChO,5;OOOQ(CY'#GP'#GPO#+qQ(CjO'#J^O!!PQUO1G0nO#-yQ,UO'#JhO#.TQSO,5:[O#.YQbO'#JiO%QQUO'#JiO#.dQSO,5:aOOQ(CY'#DX'#DXOOQ(CY1G0w1G0wO%QQUO1G0wOOQ(CY1G1a1G1aO#.iQSO1G0wO#1QQ(CjO1G0xO#1XQ(CjO1G0xO#3rQ(CjO1G0xO#3yQ(CjO1G0xO#6TQ(CjO1G0xO#6kQ(CjO1G0xO#9eQ(CjO1G0xO#9lQ(CjO1G0xO#<VQ(CjO1G0xO#<^Q(CjO1G0xO#>UQ(CjO1G0xO#AUQ$IUO'#CfO#CSQ$IUO1G1ZO#EQQ$IUO'#JdO!*OQSO1G1aO#EeQ(CjO,5?QOOQ(CW-E<d-E<dO#FXQ(CjO1G0xOOQ(CY1G0x1G0xO#HdQ(CjO1G1^O#IWQ#tO,5<RO#I`Q#tO,5<SO#IhQ#tO'#FjO#JPQSO'#FiOOQO'#Jw'#JwOOQO'#Id'#IdO#JUQ#tO1G1iOOQ(CY1G1i1G1iOOOO1G1t1G1tO#JgQ$IUO'#JcO#JqQSO,5<]O!'xQUO,5<]OOOO-E<c-E<cOOQ(CY1G1f1G1fO#JvQWO'#JvOOQ(CY,5<_,5<_O#KOQWO,5<_OOQ(CY,59b,59bO!$SQ,UO'#C|OOOO'#IX'#IXO#KTO07`O,59fOOQ(CY,59f,59fO%QQUO1G1zO!3hQSO'#IhO#K`QSO,5<sOOQ(CY,5<p,5<pOOQO'#Gf'#GfO!%lQ,UO,5=POOQO'#Gh'#GhO!%lQ,UO,5=RO!$SQ,UO,5=TOOQO1G1|1G1|O#KnQ`O'#CoO#LRQ`O,5<lO#LYQSO'#JzO9_QSO'#JzO#LhQSO,5<nO!%lQ,UO,5<mO#LmQSO'#GSO#LxQSO,5<mO#L}Q`O'#GPO#M[Q`O'#J{O#MfQSO'#J{O!$SQ,UO'#J{O#MkQSO,5<qO#MpQWO'#G[O!1qQWO'#G[O#NRQSO'#G^O#NWQSO'#G`O!0rQSO'#GcO#N]Q(C[O'#IjO#NhQWO,5<uOOQ(CY,5<u,5<uO#NoQWO'#G[O#N}QWO'#G]O$ VQWO'#G]OOQ(CY,5=U,5=UO!%lQ,UO,5?wO!%lQ,UO,5?wO$ [QSO'#IkO$ gQSO,5?vO$ oQSO,59]O$!`Q,UO,59nOOQ(CY,59n,59nO$#RQ,UO,5<dO$#tQ,UO,5<fO?rQSO,5<hOOQ(CY,5<i,5<iO$$OQSO,5<oO$$TQ,UO,5<tO!!PQUO1G1{O$$eQSO1G1{OOQQ1G4V1G4VOOQ(CY1G/t1G/tO!){QSO1G/tO$&dQ(CjO1G0QOOQQ1G2q1G2qO!$SQ,UO1G2qO%QQUO1G2qO$'TQSO1G2qO$'`Q,UO'#EdOOQ(CW,5?t,5?tO$'jQ(C[O,5?tOOQQ1G.r1G.rO!<oQ(C[O1G.rO!<zQWO1G.rO!=SQ,UO1G.rO$'{QSO1G0nO$(QQSO'#CfO$(]QSO'#KSO$(eQSO,5=sO$(jQSO'#KSO$(oQSO'#KSO$(zQSO'#IsO$)YQSO,5@mO$)bQbO1G1cOOQ(CY1G1e1G1eO9_QSO1G3^O?rQSO1G3^O$)iQSO1G3^O$)nQSO1G3^OOQQ1G3^1G3^O:vQSO'#JqO:vQSO'#EmO%QQUO'#EmO:vQSO'#ImO$)sQ(C[O,5@jOOQQ1G2u1G2uO!@`QSO1G2{O!$SQ,UO1G2xO$*OQSO1G2xOOQQ1G2y1G2yO!$SQ,UO1G2yO$*TQSO1G2yO$*]QWO'#GwOOQQ1G2{1G2{O!1qQWO'#IoO!@eQ`O1G3OOOQQ1G3O1G3OOOQQ,5=i,5=iO$*eQ,UO,5=kO9_QSO,5=kO#NWQSO,5=nO8tQSO,5=nO!<zQWO,5=nO!=SQ,UO,5=nO9dQ,UO,5=nO$*sQSO'#KQO$+OQSO,5=oOOQQ1G.h1G.hO$+TQ(C[O1G.hO?rQSO1G.hO$+`QSO1G.hO9OQ(C[O1G.hO$+kQbO,5@oO$,OQSO,5@oO$,ZQUO,5=vO$,bQSO,5=vO:vQSO,5@oOOQQ1G3`1G3`O`QUO1G3`OOQQ1G3f1G3fOOQQ1G3h1G3hO={QSO1G3jO$,gQUO1G3lO$0hQUO'#HkOOQQ1G3o1G3oO$0uQSO'#HqO>QQSO'#HsOOQQ1G3u1G3uO$0}QUO1G3uO9OQ(C[O1G3{OOQQ1G3}1G3}OOQ(CW'#GW'#GWO9OQ(C[O1G4PO9OQ(C[O1G4RO$5RQSO,5@RO!'xQUO,5;XO:vQSO,5;XO>QQSO,5:RO!'xQUO,5:RO!<zQWO,5:RO$5WQ$IUO,5:ROOQO,5;X,5;XO$5bQWO'#I[O$5xQSO,5@QOOQ(CY1G/l1G/lO$6QQWO'#IbO$6[QSO,5@_OOQ(CW1G0r1G0rO!JlQWO,5:ROOQO'#I_'#I_O$6dQWO,5:mOOQ(CY,5:m,5:mO!NgQSO1G0VOOQ(CY1G0V1G0VO%QQUO1G0VOOQ(CY1G0m1G0mO>QQSO1G0mO!<zQWO1G0mO!=SQ,UO1G0mOOQ(CW1G5m1G5mO!<oQ(C[O1G0YOOQO1G0f1G0fO%QQUO1G0fO$6kQ(C[O1G0fO$6vQ(C[O1G0fO!<zQWO1G0YOBzQWO1G0YO$7UQ(C`O1G0fO$7pQWO1G0YOBzQWO1G0fO$7}QWO1G0fO$8eQWO1G0fO$9OQWO1G0fO$9oQ(C[O1G0fOOQO1G0Y1G0YO$:TQ(CjO1G0fPOOO-E<R-E<RPOOO1G.f1G.fOOOO1G/c1G/cO$:_Q`O,5<cO$:gQbO1G4aOOQO1G4g1G4gO%QQUO,5>uO$:qQSO1G5kO$:yQSO1G5wO$;RQbO1G5xO:vQSO,5>{O$;]QSO1G5tO$;]QSO1G5tO:vQSO1G5tO$;eQ(CjO1G5uO%QQUO1G5uO$;uQ(C[O1G5uO$<WQSO,5>}O:vQSO,5>}OOQO,5>},5>}O$<lQSO,5>}OOQO-E<a-E<aOOQO1G0]1G0]OOQO1G0_1G0_O!*OQSO1G0_OOQQ7+(]7+(]O!$SQ,UO7+(]O%QQUO7+(]O$<zQSO7+(]O$=VQ,UO7+(]O$=eQ(CjO,59nO$?mQ(CjO,5<dO$AxQ(CjO,5<fO$DTQ(CjO,5<tOOQ(CY7+&Y7+&YO$FfQ(CjO7+&YO$GYQ,UO'#I]O$GdQSO,5@SOOQ(CY1G/v1G/vO$GlQUO'#I^O$GyQSO,5@TO$HRQbO,5@TOOQ(CY1G/{1G/{O$H]QSO7+&cOOQ(CY7+&c7+&cO$HbQ$IUO,5:bO%QQUO7+&uO$HlQ$IUO,5:YO$HyQ$IUO,5:fO$ITQ$IUO,5:hOOQ(CY7+&{7+&{OOQO1G1m1G1mOOQO1G1n1G1nO$I_Q#tO,5<UO!'xQUO,5<TOOQO-E<b-E<bOOQ(CY7+'T7+'TOOOO7+'`7+'`OOOO1G1w1G1wO$IjQSO1G1wOOQ(CY1G1y1G1yO$IoQ`O,59hOOOO-E<V-E<VOOQ(CY1G/Q1G/QO$IvQ(CjO7+'fOOQ(CY,5?S,5?SO$JjQSO,5?SOOQ(CY1G2_1G2_P$JoQSO'#IhPOQ(CY-E<f-E<fO$KcQ,UO1G2kO$LUQ,UO1G2mO$L`Q`O1G2oOOQ(CY1G2W1G2WO$LgQSO'#IgO$LuQSO,5@fO$LuQSO,5@fO$L}QSO,5@fO$MYQSO,5@fOOQO1G2Y1G2YO$MhQ,UO1G2XO!%lQ,UO1G2XO$MxQMhO'#IiO$NYQSO,5@gO!$SQ,UO,5@gO$NbQ`O,5@gOOQ(CY1G2]1G2]OOQ(CW,5<v,5<vOOQ(CW,5<w,5<wO$NlQSO,5<wOBuQSO,5<wO!<zQWO,5<vOOQO'#G_'#G_O$NqQSO,5<xOOQ(CW,5<z,5<zO$NlQSO,5<}OOQO,5?U,5?UOOQO-E<h-E<hOOQ(CY1G2a1G2aO!1qQWO,5<vO$NyQSO,5<wO#NRQSO,5<xO!1qQWO,5<wO% UQ,UO1G5cO% `Q,UO1G5cOOQO,5?V,5?VOOQO-E<i-E<iOOQO1G.w1G.wO!>QQWO,59pO%QQUO,59pO% mQSO1G2SO!%lQ,UO1G2ZO% rQ(CjO7+'gOOQ(CY7+'g7+'gO!!PQUO7+'gOOQ(CY7+%`7+%`O%!fQ`O'#J|O!NgQSO7+(]O%!pQbO7+(]O$<}QSO7+(]O%!wQ(ChO'#CfO%#[Q(ChO,5<{O%#|QSO,5<{OOQ(CW1G5`1G5`OOQQ7+$^7+$^O!<oQ(C[O7+$^O!<zQWO7+$^O!!PQUO7+&YO%$RQSO'#IrO%$gQSO,5@nOOQO1G3_1G3_O9_QSO,5@nO%$gQSO,5@nO%$oQSO,5@nOOQO,5?_,5?_OOQO-E<q-E<qOOQ(CY7+&}7+&}O%$tQSO7+(xO9OQ(C[O7+(xO9_QSO7+(xO?rQSO7+(xO%$yQSO,5;XOOQ(CW,5?X,5?XOOQ(CW-E<k-E<kOOQQ7+(g7+(gO%%OQ(ChO7+(dO!$SQ,UO7+(dO%%YQ`O7+(eOOQQ7+(e7+(eO!$SQ,UO7+(eO%%aQSO'#KPO%%lQSO,5=cOOQO,5?Z,5?ZOOQO-E<m-E<mOOQQ7+(j7+(jO%&{QWO'#HQOOQQ1G3V1G3VO!$SQ,UO1G3VO%QQUO1G3VO%'SQSO1G3VO%'_Q,UO1G3VO9OQ(C[O1G3YO#NWQSO1G3YO8tQSO1G3YO!<zQWO1G3YO!=SQ,UO1G3YO%'mQSO'#IqO%'xQSO,5@lO%(QQWO,5@lOOQ(CW1G3Z1G3ZOOQQ7+$S7+$SO?rQSO7+$SO9OQ(C[O7+$SO%(]QSO7+$SO%QQUO1G6ZO%QQUO1G6[O%(bQUO1G3bO%(iQSO1G3bO%(nQUO1G3bO%(uQ(C[O1G6ZOOQQ7+(z7+(zO9OQ(C[O7+)UO`QUO7+)WOOQQ'#KV'#KVOOQQ'#It'#ItO%)PQUO,5>VOOQQ,5>V,5>VO%QQUO'#HlO%)^QSO'#HnOOQQ,5>],5>]O:vQSO,5>]OOQQ,5>_,5>_OOQQ7+)a7+)aOOQQ7+)g7+)gOOQQ7+)k7+)kOOQQ7+)m7+)mO%)cQWO1G5mO%)wQ$IUO1G0sO%*RQSO1G0sOOQO1G/m1G/mO%*^Q$IUO1G/mO>QQSO1G/mO!'xQUO'#DgOOQO,5>v,5>vOOQO-E<Y-E<YOOQO,5>|,5>|OOQO-E<`-E<`O!<zQWO1G/mOOQO-E<]-E<]OOQ(CY1G0X1G0XOOQ(CY7+%q7+%qO!NgQSO7+%qOOQ(CY7+&X7+&XO>QQSO7+&XO!<zQWO7+&XOOQO7+%t7+%tO$:TQ(CjO7+&QOOQO7+&Q7+&QO%QQUO7+&QO%*hQ(C[O7+&QO!<oQ(C[O7+%tO!<zQWO7+%tO%*sQ(C[O7+&QOBzQWO7+%tO%+RQ(C[O7+&QO%+gQ(C`O7+&QO%+qQWO7+%tOBzQWO7+&QO%,OQWO7+&QO%,fQWO7+&QO%-PQSO7++`O%-PQSO7++`O%-XQ(CjO7++aO%QQUO7++aOOQO1G4i1G4iO:vQSO1G4iO%-iQSO1G4iOOQO7+%y7+%yO!NgQSO<<KwO%!pQbO<<KwO%-wQSO<<KwOOQQ<<Kw<<KwO!$SQ,UO<<KwO%QQUO<<KwO%.PQSO<<KwO%.[Q(CjO1G2kO%0gQ(CjO1G2mO%2rQ(CjO1G2XO%5TQ,UO,5>wOOQO-E<Z-E<ZO%5_QbO,5>xO%QQUO,5>xOOQO-E<[-E<[O%5iQSO1G5oOOQ(CY<<I}<<I}O%5qQ$IUO1G0nO%7{Q$IUO1G0xO%8SQ$IUO1G0xO%:WQ$IUO1G0xO%:_Q$IUO1G0xO%<SQ$IUO1G0xO%<jQ$IUO1G0xO%>}Q$IUO1G0xO%?UQ$IUO1G0xO%AYQ$IUO1G0xO%AaQ$IUO1G0xO%CXQ$IUO1G0xO%ClQ(CjO<<JaO%DqQ$IUO1G0xO%FgQ$IUO'#J^O%HjQ$IUO1G1^O%HwQ$IUO1G0QO!'xQUO'#FlOOQO'#Jx'#JxOOQO1G1p1G1pO%IRQSO1G1oO%IWQ$IUO,5?QOOOO7+'c7+'cOOOO1G/S1G/SOOQ(CY1G4n1G4nO!%lQ,UO7+(ZO%IbQSO,5?RO9_QSO,5?ROOQO-E<e-E<eO%IpQSO1G6QO%IpQSO1G6QO%IxQSO1G6QO%JTQ,UO7+'sO%JeQ`O,5?TO%JoQSO,5?TO!$SQ,UO,5?TOOQO-E<g-E<gO%JtQ`O1G6RO%KOQSO1G6ROOQ(CW1G2c1G2cO$NlQSO1G2cOOQ(CW1G2b1G2bO%KWQSO1G2dO!$SQ,UO1G2dOOQ(CW1G2i1G2iO!<zQWO1G2bOBuQSO1G2cO%K]QSO1G2dO%KeQSO1G2cO!%lQ,UO7+*}OOQ(CY1G/[1G/[O%KpQSO1G/[OOQ(CY7+'n7+'nO%KuQ,UO7+'uO%LVQ(CjO<<KROOQ(CY<<KR<<KRO!$SQ,UO'#IlO%LyQSO,5@hO!$SQ,UO1G2gOOQQ<<Gx<<GxO!<oQ(C[O<<GxO%MRQ(CjO<<ItOOQ(CY<<It<<ItOOQO,5?^,5?^O%MuQSO,5?^O$(oQSO,5?^OOQO-E<p-E<pO%MzQSO1G6YO%MzQSO1G6YO9_QSO1G6YO?rQSO<<LdOOQQ<<Ld<<LdO%NSQSO<<LdO9OQ(C[O<<LdO%NXQSO1G0sOOQQ<<LO<<LOO%%OQ(ChO<<LOOOQQ<<LP<<LPO%%YQ`O<<LPO%N^QWO'#InO%NiQSO,5@kO!'xQUO,5@kOOQQ1G2}1G2}O%NqQ(C`O'#JgO& ]QUO'#JgO& dQWO'#E`O&!QQ(C[O'#E`OB`Q(C`O'#E`O(YQWO'#HROOQO'#Ip'#IpO9OQ(C[O'#IpO&!fQWO,5=lOOQQ,5=l,5=lO&#OQWO'#E`O& vQWO'#E`O&#VQWO'#E`O&#pQWO'#E`O& jQWO'#E`O&$aQWO'#HRO&$rQSO7+(qO&$wQSO7+(qOOQQ7+(q7+(qO!$SQ,UO7+(qO%QQUO7+(qO&%PQSO7+(qOOQQ7+(t7+(tO9OQ(C[O7+(tO#NWQSO7+(tO8tQSO7+(tO!<zQWO7+(tO&%[QSO,5?]OOQO-E<o-E<oOOQO'#HU'#HUO&%gQSO1G6WO9OQ(C[O<<GnOOQQ<<Gn<<GnO?rQSO<<GnO&%oQSO7++uO&%tQSO7++vOOQQ7+(|7+(|O&%yQSO7+(|O&&OQUO7+(|O&&VQSO7+(|O%QQUO7++uO%QQUO7++vOOQQ<<Lp<<LpOOQQ<<Lr<<LrOOQQ-E<r-E<rOOQQ1G3q1G3qO&&[QSO,5>WOOQQ,5>Y,5>YO&&aQSO1G3wO:vQSO7+&_O!'xQUO7+&_OOQO7+%X7+%XO&&fQ$IUO1G5xO>QQSO7+%XOOQ(CY<<I]<<I]OOQ(CY<<Is<<IsO>QQSO<<IsOOQO<<Il<<IlO$:TQ(CjO<<IlO%QQUO<<IlOOQO<<I`<<I`O!<oQ(C[O<<I`O&&pQ(C[O<<IlO!<zQWO<<I`O&&{Q(C[O<<IlOBzQWO<<I`O&'ZQ(C[O<<IlO&'oQ(C`O<<IlO&'yQWO<<I`OBzQWO<<IlO&(WQWO<<IlO&(nQSO<<NzO&(vQ(CjO<<N{OOQO7+*T7+*TO:vQSO7+*TOOQQANAcANAcO&)WQSOANAcO!$SQ,UOANAcO!NgQSOANAcO%!pQbOANAcO%QQUOANAcO&)`Q(CjO7+'sO&+qQ(CjO7+'uO&.SQbO1G4dO&.^Q$IUO7+&YO&.kQ$IUO,59nO&0nQ$IUO,5<dO&2qQ$IUO,5<fO&4tQ$IUO,5<tO&6jQ$IUO7+'fO&6wQ$IUO7+'gO&7UQSO,5<WOOQO7+'Z7+'ZO&7ZQ,UO<<KuOOQO1G4m1G4mO&7bQSO1G4mO&7mQSO1G4mO&7{QSO7++lO&7{QSO7++lO!$SQ,UO1G4oO&8TQ`O1G4oO&8_QSO7++mOOQ(CW7+'}7+'}O$NlQSO7+(OO&8gQ`O7+(OOOQ(CW7+'|7+'|O$NlQSO7+'}O&8nQSO7+(OO!$SQ,UO7+(OOBuQSO7+'}O&8sQ,UO<<NiOOQ(CY7+$v7+$vO&8}Q`O,5?WOOQO-E<j-E<jO&9XQ(ChO7+(ROOQQAN=dAN=dO9_QSO1G4xOOQO1G4x1G4xO&9iQSO1G4xO&9nQSO7++tO&9nQSO7++tO9OQ(C[OANBOO?rQSOANBOOOQQANBOANBOOOQQANAjANAjOOQQANAkANAkO&9vQSO,5?YOOQO-E<l-E<lO&:RQ$IUO1G6VO&:]Q(C[O,5=mO8tQSO,5=mO&<nQbO'#CfO&<xQWO,5:zO&=SQWO,5:zO&=aQWO,5:zO&=tQWO,5:zO!<zQWO,5=mOOQO,5?[,5?[OOQO-E<n-E<nOOQQ1G3W1G3WO& ]QUO,5<xO%NqQ(C`O,5=mO# wQ(C`O,5:zO(YQWO,5=mO&>[QWO,5=mO&>mQWO,5:zOOQQ<<L]<<L]O!$SQ,UO<<L]O&$rQSO<<L]O&?WQSO<<L]O%QQUO<<L]OOQQ<<L`<<L`O9OQ(C[O<<L`O#NWQSO<<L`O8tQSO<<L`O&?`QWO1G4wO&?kQSO7++rOOQQAN=YAN=YO9OQ(C[OAN=YOOQQ<= a<= aOOQQ<= b<= bOOQQ<<Lh<<LhO&?sQSO<<LhO&?xQUO<<LhO&@PQSO<= aO&@UQSO<= bOOQQ1G3r1G3rO>QQSO7+)cO&@ZQSO<<IyO&@fQ$IUO<<IyOOQO<<Hs<<HsOOQ(CYAN?_AN?_OOQOAN?WAN?WO$:TQ(CjOAN?WOOQOAN>zAN>zO%QQUOAN?WO!<oQ(C[OAN>zO&@pQ(C[OAN?WO!<zQWOAN>zO&@{Q(C[OAN?WOBzQWOAN>zO&AZQ(C[OAN?WO&AoQ(C`OAN?WO&AyQWOAN>zOBzQWOAN?WOOQO<<Mo<<MoOOQQG26}G26}O!$SQ,UOG26}O!NgQSOG26}O&BWQSOG26}O%!pQbOG26}O&B`Q$IUO<<JaO&BmQ$IUO1G2XO&DcQ$IUO1G2kO&FfQ$IUO1G2mO&HiQ$IUO<<KRO&HvQ$IUO<<ItOOQO1G1r1G1rO!%lQ,UOANAaOOQO7+*X7+*XO&ITQSO7+*XO&I`QSO<= WO&IhQ`O7+*ZOOQ(CW<<Kj<<KjO$NlQSO<<KjOOQ(CW<<Ki<<KiO&IrQ`O<<KjO$NlQSO<<KiOOQO7+*d7+*dO9_QSO7+*dO&IyQSO<= `OOQQG27jG27jO9OQ(C[OG27jO!'xQUO1G4tO&JRQSO7++qOOQO1G3X1G3XO9OQ(C[O1G3XO&:]Q(C[O1G3XO&JZQWO1G0fO&JeQWO1G0fO&JrQWO1G0fO8tQSO1G3XO!<zQWO1G3XO(YQWO1G3XO%NqQ(C`O1G3XO$7UQ(C`O1G0fO&KVQWO1G3XO&$rQSOANAwOOQQANAwANAwO!$SQ,UOANAwO&KhQSOANAwOOQQANAzANAzO9OQ(C[OANAzO#NWQSOANAzOOQO'#HV'#HVOOQO7+*c7+*cOOQQG22tG22tOOQQANBSANBSO&KpQSOANBSOOQQAND{AND{OOQQAND|AND|OOQQ<<L}<<L}O!'xQUOAN?eOOQOG24rG24rO$:TQ(CjOG24rOOQOG24fG24fO%QQUOG24rO!<oQ(C[OG24fO&KuQ(C[OG24rO!<zQWOG24fO&LQQ(C[OG24rOBzQWOG24fO&L`Q(C[OG24rO!NgQSOLD,iOOQQLD,iLD,iO!$SQ,UOLD,iO&LtQSOLD,iO&L|Q$IUO7+'sO&NrQ$IUO7+'uO'!hQ,UOG26{OOQO<<Ms<<MsOOQ(CWANAUANAUO$NlQSOANAUOOQ(CWANATANATOOQO<<NO<<NOOOQQLD-ULD-UO'!xQ$IUO7+*`OOQO7+(s7+(sO9OQ(C[O7+(sO'#SQWO7+&QO'#^QWO7+&QO&:]Q(C[O7+(sO8tQSO7+(sO!<zQWO7+(sO(YQWO7+(sOOQQG27cG27cO&$rQSOG27cO!$SQ,UOG27cOOQQG27fG27fO9OQ(C[OG27fOOQQG27nG27nO'#kQ$IUOG25POOQOLD*^LD*^O$:TQ(CjOLD*^OOQOLD*QLD*QO%QQUOLD*^O!<oQ(C[OLD*QO'#uQ(C[OLD*^O!<zQWOLD*QO'$QQ(C[OLD*^OOQQ!$(!T!$(!TO!NgQSO!$(!TO!$SQ,UO!$(!TO'$`Q(CjOG26{OOQ(CWG26pG26pOOQO<<L_<<L_O'&qQWO<<IlO9OQ(C[O<<L_O&:]Q(C[O<<L_O8tQSO<<L_O!<zQWO<<L_OOQQLD,}LD,}O&$rQSOLD,}OOQQLD-QLD-QOOQO!$'Mx!$'MxO$:TQ(CjO!$'MxOOQO!$'Ml!$'MlO%QQUO!$'MxO!<oQ(C[O!$'MlO'&{Q(C[O!$'MxOOQQ!)9Eo!)9EoO!NgQSO!)9EoOOQOANAyANAyO9OQ(C[OANAyO&:]Q(C[OANAyO8tQSOANAyOOQQ!$(!i!$(!iOOQO!)9Cd!)9CdO$:TQ(CjO!)9CdOOQO!)9CW!)9CWO%QQUO!)9CdOOQQ!.K;Z!.K;ZO''WQ$IUOG26{OOQOG27eG27eO9OQ(C[OG27eO&:]Q(C[OG27eOOQO!.K9O!.K9OO$:TQ(CjO!.K9OOOQOLD-PLD-PO9OQ(C[OLD-POOQO!4/.j!4/.jOOQO!$(!k!$(!kO!'xQUO'#DvO0uQSO'#ETO'(|QbO'#JcO!'xQUO'#DnO')TQUO'#DzO!'xQUO'#D|O')[QbO'#CfO'+rQbO'#CfO',SQUO,5;SO!'xQUO,5;^O!'xQUO,5;^O!'xQUO,5;^O!'xQUO,5;^O!'xQUO,5;^O!'xQUO,5;^O!'xQUO,5;^O!'xQUO,5;^O!'xQUO,5;^O!'xQUO,5;^O!'xQUO,5;^O!'xQUO'#IfO'.VQSO,5<cO'._Q,UO,5;^O'/rQ,UO,5;^O!'xQUO,5;rO0xQSO'#DSO0xQSO'#DSO!$SQ,UO'#FxO'._Q,UO'#FxO!$SQ,UO'#FzO'._Q,UO'#FzO!$SQ,UO'#GYO'._Q,UO'#GYO!'xQUO,5:fO!'xQUO,5@^O',SQUO1G0nO'/yQ$IUO'#CfO!'xQUO1G1zO!$SQ,UO,5=PO'._Q,UO,5=PO!$SQ,UO,5=RO'._Q,UO,5=RO!$SQ,UO,5<mO'._Q,UO,5<mO',SQUO1G1{O!'xQUO7+&uO!$SQ,UO1G2XO'._Q,UO1G2XO!$SQ,UO1G2ZO'._Q,UO1G2ZO',SQUO7+'gO',SQUO7+&YO!$SQ,UOANAaO'._Q,UOANAaO'0TQSO'#EhO'0YQSO'#EhO'0bQSO'#FWO'0gQSO'#ErO'0lQSO'#JrO'0wQSO'#JpO'1SQSO,5;SO'1XQ,UO,5<`O'1`QSO'#GRO'1eQSO'#GRO'1jQSO,5<aO'1rQSO,5;SO'1zQ$IUO1G1ZO'2RQSO,5<mO'2WQSO,5<mO'2]QSO,5<oO'2bQSO,5<oO'2gQSO1G1{O'2lQSO1G0nO'2qQ,UO<<KuO'2xQ,UO<<KuO7^Q,UO'#FvO8tQSO'#FuO@mQSO'#EgO!'xQUO,5;oO!0rQSO'#GRO!0rQSO'#GRO!0rQSO'#GTO!0rQSO'#GTO!%lQ,UO7+(ZO!%lQ,UO7+(ZO$L`Q`O1G2oO$L`Q`O1G2oO!$SQ,UO,5=TO!$SQ,UO,5=T",
          stateData:
            "'4R~O'mOS'nOSROS'oRQ~OPYOQYOV!TO^pOaxObwOikOkYOlkOmkOskOuYOwYO|WO!QkO!RkO!XXO!csO!hZO!kYO!lYO!mYO!otO!quO!tvO!x]O#p}O$QzO$UfO%`{O%b!OO%d|O%e|O%h!PO%j!QO%m!RO%n!RO%p!SO%}!UO&T!VO&V!WO&X!XO&Z!YO&^!ZO&d![O&j!]O&l!^O&n!_O&p!`O&r!aO'tSO'vTO'yUO(RVO(`[O(miO~OPYOQYOa!gOb!fOikOkYOlkOmkOskOuYOwYO|WO!QkO!RkO!X!cO!csO!hZO!kYO!lYO!mYO!otO!quO!t!eO$Q!hO$UfO't!bO'vTO'yUO(RVO(`[O(miO~O^!qOl!kO|!lO![!rO!]!pO!^!pO!x<XO!|!wO!}!vO#O!tO#P!uO#Q!sO#T!xO#U!xO'u!iO'vTO'yUO(U!jO(`!nO~O'o!yO~OPYXXYX^YXkYXyYXzYX|YX!VYX!eYX!fYX!hYX!lYX#XYX#dcX#gYX#hYX#iYX#jYX#kYX#lYX#mYX#nYX#oYX#qYX#sYX#uYX#vYX#{YX'kYX(RYX(aYX(hYX(iYX~O!a$zX~P(gO[!{O'v!}O'w!{O'x!}O~O[#OO'x!}O'y!}O'z#OO~Oq#QO!O#RO(S#RO(T#TO~OPYOQYOa!gOb!fOikOkYOlkOmkOskOuYOwYO|WO!QkO!RkO!X!cO!csO!hZO!kYO!lYO!mYO!otO!quO!t!eO$Q!hO$UfO't<^O'vTO'yUO(RVO(`[O(miO~O!U#XO!V#UO!S(XP!S(eP~P+sO!W#aO~P`OPYOQYOa!gOb!fOikOkYOlkOmkOskOuYOwYO|WO!QkO!RkO!X!cO!csO!hZO!kYO!lYO!mYO!otO!quO!t!eO$Q!hO$UfO'vTO'yUO(RVO(`[O(miO~O!U#gO!x]O#b#jO#c#gO't<_O!g(bP~P._O!h#lO't#kO~O!t#pO!x]O%`#qO~O#d#rO~O!a#sO#d#rO~OP$ZOX$bOk$OOy#wOz#xO|#yO!V$_O!e$QO!f#uO!h#vO!l$ZO#g#|O#h#}O#i#}O#j#}O#k$PO#l$QO#m$QO#n$aO#o$QO#q$RO#s$TO#u$VO#v$WO(RVO(a$XO(h#zO(i#{O~O^(VX'k(VX'i(VX!g(VX!S(VX!X(VX%a(VX!a(VX~P1gO#X$cO#{$cOP(WXX(WXk(WXy(WXz(WX|(WX!V(WX!e(WX!h(WX!l(WX#g(WX#h(WX#i(WX#j(WX#k(WX#l(WX#m(WX#n(WX#o(WX#q(WX#s(WX#u(WX#v(WX(R(WX(a(WX(h(WX(i(WX!X(WX%a(WX~O^(WX!f(WX'k(WX'i(WX!S(WX!g(WXo(WX!a(WX~P3}O#X$cO~O$W$eO$Y$dO$a$jO~O!X$kO$UfO$d$lO$f$nO~Oi%QOk$rOl$qOm$qOs%ROu%SOw%TO|$yO!X$zO!c%YO!h$vO#c%ZO$Q%WO$m%UO$o%VO$r%XO't$pO'vTO'yUO'}%PO(R$sOd(OP~O!h%[O~O!a%^O~O^%_O'k%_O~O'u!iO~P%QO't%fO~O!h%[O't%fO'u!iO'}%PO~Ob%mO!h%[O't%fO~O#o$QO~Oy%rO!X%oO!h%qO%b%uO't%fO'u!iO'vTO'yUO](uP~O!t#pO~O|%wO!X%xO't%fO~O|%wO!X%xO%j%|O't%fO~O't%}O~O#p}O%b!OO%d|O%e|O%h!PO%j!QO%m!RO%n!RO~Oa&WOb&VO!t&TO%`&UO%r&SO~P;fOa&ZObwO!X&YO!tvO!x]O#p}O%`{O%d|O%e|O%h!PO%j!QO%m!RO%n!RO%p!SO~O_&^O#X&aO%b&[O'u!iO~P<eO!h&bO!q&fO~O!h#lO~O!XXO~O^%_O'j&nO'k%_O~O^%_O'j&qO'k%_O~O^%_O'j&sO'k%_O~O'iYX!SYXoYX!gYX&RYX!XYX%aYX!aYX~P(gO!['QO!]&yO!^&yO'u!iO'vTO'yUO~Ol&wO|&vO!U&zO(U&uO!W(YP!W(gP~P?fOg'TO!X'RO't%fO~Ob'YO!h%[O't%fO~Oy%rO!h%qO~Ol!kO|!lO!['_O!]'^O!^'^O!}'bO#O'aO#P'aO#Q'`O#T'dO#U'dO'u!iO'vTO'yUO(U!jO(`!nO~O!x<XO!|'cO~PAQO^%_O!a#sO!h%[O!l'jO#X'hO'k%_O'}%PO(a'fO~Ol!kO|!lO'vTO'yUO(U!jO(`!nO~O!]'^O!^'^O'u!iO~PBzO!['_O!]'^O!^'^O#T'dO#U'dO'u!iO~PBzO!XXO!['_O!]'^O!^'^O#Q'`O#T'dO#U'dO'u!iO~PBzO!['_O!]'^O!^'^O#O'aO#P'aO#Q'`O#T'dO#U'dO'u!iO~PBzO'p'nO'q'nO'r'pO~O[!{O'v'rO'w!{O'x'rO~O[#OO'x'rO'y'rO'z#OO~Oq#QO!O#RO(S#RO(T'vO~O!U'xO!S&}X!S'TX!V&}X!V'TX~P+sO!V'zO!S(XX~OP$ZOX$bOk$OOy#wOz#xO|#yO!V'zO!e$QO!f#uO!h#vO!l$ZO#g#|O#h#}O#i#}O#j#}O#k$PO#l$QO#m$QO#n$aO#o$QO#q$RO#s$TO#u$VO#v$WO(RVO(a$XO(h#zO(i#{O~O!S(XX~PGUO!S(PO~O!S(dX!V(dX!a(dX!g(dX(a(dX~O#X(dX#d#]X!W(dX~PI[O#X(QO!S(fX!V(fX~O!V(RO!S(eX~O!S(UO~O#X$cO~PI[O!W(VO~P`Oy#wOz#xO|#yO!f#uO!h#vO(RVOP!jaX!jak!ja!V!ja!e!ja!l!ja#g!ja#h!ja#i!ja#j!ja#k!ja#l!ja#m!ja#n!ja#o!ja#q!ja#s!ja#u!ja#v!ja(a!ja(h!ja(i!ja~O^!ja'k!ja'i!ja!S!ja!g!jao!ja!X!ja%a!ja!a!ja~PJrO!g(WO~O|%wO!X%xO!x]O#b(ZO#c(YO't%fO~O!a#sO#X([O(a'fO!V(cX^(cX'k(cX~O!g(cX~PMvO!V(_O!g(bX~O!g(aO~O|%wO!X%xO#c(YO't%fO~Oy(bOz(cO!f#uO!h#vO!x!wa|!wa~O!t!wa%`!wa!X!wa#b!wa#c!wa't!wa~P! OO!t(gO~OPYOQYOa!gOb!fOikOkYOlkOmkOskOuYOwYO|WO!QkO!RkO!XXO!csO!hZO!kYO!lYO!mYO!otO!quO!t!eO$Q!hO$UfO't!bO'vTO'yUO(RVO(`[O(miO~Oi%QOk$rOl$qOm$qOs%ROu%SOw<qO|$yO!X$zO!c={O!h$vO#c<wO$Q%WO$m<sO$o<uO$r%XO't(kO'vTO'yUO'}%PO(R$sO~O#d(mO~Oi%QOk$rOl$qOm$qOs%ROu%SOw%TO|$yO!X$zO!c%YO!h$vO#c%ZO$Q%WO$m%UO$o%VO$r%XO't(kO'vTO'yUO'}%PO(R$sO~Od([P~P!%lO!U(qO!g(]P~P%QO(U(sO(`[O~O|(uO!h#vO(U(sO(`[O~OP<WOQ<WOa=wOb!fOikOk<WOlkOmkOskOu<WOw<WO|WO!QkO!RkO!X!cO!c<ZO!hZO!k<WO!l<WO!m<WO!o<[O!q<]O!t!eO$Q!hO$UfO't)TO'vTO'yUO(RVO(`[O(m=uO~Oz)WO!h#vO~O!V$_O^$ka'k$ka'i$ka!g$ka!S$ka!X$ka%a$ka!a$ka~O#p)[O~P!$SOy)_O!a)^O!X$XX$T$XX$W$XX$Y$XX$a$XX~O!a)^O!X(jX$T(jX$W(jX$Y(jX$a(jX~Oy)_O~P!+bOy)_O!X(jX$T(jX$W(jX$Y(jX$a(jX~O!X)aO$T)eO$W)`O$Y)`O$a)fO~O!U)iO~P!'xO$W$eO$Y$dO$a)mO~Og$sXy$sX|$sX!f$sX(h$sX(i$sX~OdfXd$sXgfX!VfX#XfX~P!-WOl)oO~Oq)pO(S)qO(T)sO~Og)|Oy)uO|)vO(h)xO(i)zO~Od)tO~P!.aOd)}O~Oi%QOk$rOl$qOm$qOs%ROu%SOw<qO|$yO!X$zO!c={O!h$vO#c<wO$Q%WO$m<sO$o<uO$r%XO'vTO'yUO'}%PO(R$sO~O!U*RO't*OO!g(nP~P!/OO#d*TO~O!h*UO~O!U*ZO't*WO!S(oP~P!/OOk*gO|*_O![*eO!]*^O!^*^O!h*UO#T*fO%W*aO'u!iO(U!jO~O!W*dO~P!1UO!f#uOg(QXy(QX|(QX(h(QX(i(QX!V(QX#X(QX~Od(QX#y(QX~P!1}Og*jO#X*iOd(PX!V(PX~O!V*kOd(OX~O't%}Od(OP~O!h*rO~O't(kO~O|%wO!U#gO!X%xO!x]O#b#jO#c#gO't%fO!g(bP~O!a#sO#d*vO~OP$ZOX$bOk$OOy#wOz#xO|#yO!e$QO!f#uO!h#vO!l$ZO#g#|O#h#}O#i#}O#j#}O#k$PO#l$QO#m$QO#n$aO#o$QO#q$RO#s$TO#u$VO#v$WO(RVO(a$XO(h#zO(i#{O~O^!ba!V!ba'k!ba'i!ba!S!ba!g!bao!ba!X!ba%a!ba!a!ba~P!4aOy#wOz#xO|#yO!f#uO!h#vO(RVOP!naX!nak!na!V!na!e!na!l!na#g!na#h!na#i!na#j!na#k!na#l!na#m!na#n!na#o!na#q!na#s!na#u!na#v!na(a!na(h!na(i!na~O^!na'k!na'i!na!S!na!g!nao!na!X!na%a!na!a!na~P!6zOy#wOz#xO|#yO!f#uO!h#vO(RVOP!paX!pak!pa!V!pa!e!pa!l!pa#g!pa#h!pa#i!pa#j!pa#k!pa#l!pa#m!pa#n!pa#o!pa#q!pa#s!pa#u!pa#v!pa(a!pa(h!pa(i!pa~O^!pa'k!pa'i!pa!S!pa!g!pao!pa!X!pa%a!pa!a!pa~P!9eOg+OO!X'RO%a*}O'}%PO~O!a+QO^'|X!X'|X'k'|X!V'|X~O^%_O!XXO'k%_O~O!h%[O'}%PO~O!h%[O't%fO'}%PO~O!a#sO#d(mO~O%b+^O't+YO'vTO'yUO!W(vP~O!V+_O](uX~O(U(sO~OX+cO~O]+dO~O!X%oO't%fO'u!iO](uP~O|%wO!U+hO!V(RO!X%xO't%fO!S(eP~Ol&}O|+jO!U+iO'vTO'yUO(U(sO~O!W(gP~P!?TO!V+kO^(rX'k(rX~O#X+oO'}%PO~Og+rO!X$zO'}%PO~O!X+tO~Oy+vO!XXO~O!t+{O~Ob,QO~O't#kO!W(tP~Ob%mO~O%b!OO't%}O~P<eOX,WO],VO~OPYOQYOaxObwOikOkYOlkOmkOskOuYOwYO|WO!QkO!RkO!csO!hZO!kYO!lYO!mYO!otO!quO!tvO!x]O$UfO%`{O'vTO'yUO(RVO(`[O(miO~O!X!cO$Q!hO't!bO~P!AhO],VO^%_O'k%_O~O^,[O#p,^O%d,^O%e,^O~P%QO!h&bO~O&T,cO~O!X,eO~O&f,gO&h,hOP&caQ&caV&ca^&caa&cab&cai&cak&cal&cam&cas&cau&caw&ca|&ca!Q&ca!R&ca!X&ca!c&ca!h&ca!k&ca!l&ca!m&ca!o&ca!q&ca!t&ca!x&ca#p&ca$Q&ca$U&ca%`&ca%b&ca%d&ca%e&ca%h&ca%j&ca%m&ca%n&ca%p&ca%}&ca&T&ca&V&ca&X&ca&Z&ca&^&ca&d&ca&j&ca&l&ca&n&ca&p&ca&r&ca'i&ca't&ca'v&ca'y&ca(R&ca(`&ca(m&ca!W&ca&[&ca_&ca&a&ca~O't,mO~O!V{X!V!_X!W{X!W!_X!a{X!a!_X!h!_X#X{X'}!_X~O!a,rO#X,qO!V#aX!V(ZX!W#aX!W(ZX!a(ZX!h(ZX'}(ZX~O!a,tO!h%[O'}%PO!V!ZX!W!ZX~Ol!kO|!lO'vTO'yUO(U!jO~OP<WOQ<WOa=wOb!fOikOk<WOlkOmkOskOu<WOw<WO|WO!QkO!RkO!X!cO!c<ZO!hZO!k<WO!l<WO!m<WO!o<[O!q<]O!t!eO$Q!hO$UfO'vTO'yUO(RVO(`[O(m=uO~O't<|O~P!J}O!V,xO!W(YX~O!W,zO~O!a,rO#X,qO!V#aX!W#aX~O!V,{O!W(gX~O!W,}O~O!]-OO!^-OO'u!iO~P!JlO!W-RO~P'TOg-UO!X'RO~O!S-ZO~Ol!wa![!wa!]!wa!^!wa!|!wa!}!wa#O!wa#P!wa#Q!wa#T!wa#U!wa'u!wa'v!wa'y!wa(U!wa(`!wa~P! OO^%_O!a#sO!h%[O!l-`O#X-^O'k%_O'}%PO(a'fO~O!]-bO!^-bO'u!iO~PBzO![-dO!]-bO!^-bO#T-eO#U-eO'u!iO~PBzO![-dO!]-bO!^-bO#Q-fO#T-eO#U-eO'u!iO~PBzO![-dO!]-bO!^-bO#O-gO#P-gO#Q-fO#T-eO#U-eO'u!iO~PBzO![-dO!]-bO!^-bO!}-hO#O-gO#P-gO#Q-fO#T-eO#U-eO'u!iO~PBzO^%_O#X-^O'k%_O~O^%_O!a#sO#X-^O'k%_O~O^%_O!a#sO!l-`O#X-^O'k%_O(a'fO~O'p'nO'q'nO'r-mO~Oo-nO~O!S&}a!V&}a~P!4aO!U-rO!S&}X!V&}X~P%QO!V'zO!S(Xa~O!S(Xa~PGUO!V(RO!S(ea~O|%wO!U-vO!X%xO't%fO!S'TX!V'TX~O!V(_O!g(ba~O|%wO!X%xO#c-yO't%fO~O#X-{O!V(ca!g(ca^(ca'k(ca~O!a#sO~P#(aO|%wO!U.OO!X%xO!x]O#b.QO#c.OO't%fO!V'VX!g'VX~Oz.UO!h#vO~Og.XO!X'RO%a.WO'}%PO~O^#[i!V#[i'k#[i'i#[i!S#[i!g#[io#[i!X#[i%a#[i!a#[i~P!4aOg>ROy)uO|)vO(h)xO(i)zO~O#d#Wa^#Wa#X#Wa'k#Wa!V#Wa!g#Wa!X#Wa!S#Wa~P#*rO#d(QXP(QXX(QX^(QXk(QXz(QX!e(QX!h(QX!l(QX#g(QX#h(QX#i(QX#j(QX#k(QX#l(QX#m(QX#n(QX#o(QX#q(QX#s(QX#u(QX#v(QX'k(QX(R(QX(a(QX!g(QX!S(QX'i(QXo(QX!X(QX%a(QX!a(QX~P!1}O!V.bOd([X~P!.aOd.dO~O!V.eO!g(]X~P!4aO!g.hO~O!S.jO~OP$ZOy#wOz#xO|#yO!f#uO!h#vO!l$ZO(RVOX#fi^#fik#fi!V#fi!e#fi#h#fi#i#fi#j#fi#k#fi#l#fi#m#fi#n#fi#o#fi#q#fi#s#fi#u#fi#v#fi'k#fi(a#fi(h#fi(i#fi'i#fi!S#fi!g#fio#fi!X#fi%a#fi!a#fi~O#g#fi~P#.nO#g#|O~P#.nOP$ZOy#wOz#xO|#yO!f#uO!h#vO!l$ZO#g#|O#h#}O#i#}O#j#}O(RVOX#fi^#fi!V#fi!e#fi#k#fi#l#fi#m#fi#n#fi#o#fi#q#fi#s#fi#u#fi#v#fi'k#fi(a#fi(h#fi(i#fi'i#fi!S#fi!g#fio#fi!X#fi%a#fi!a#fi~Ok#fi~P#1`Ok$OO~P#1`OP$ZOk$OOy#wOz#xO|#yO!f#uO!h#vO!l$ZO#g#|O#h#}O#i#}O#j#}O#k$PO(RVO^#fi!V#fi#q#fi#s#fi#u#fi#v#fi'k#fi(a#fi(h#fi(i#fi'i#fi!S#fi!g#fio#fi!X#fi%a#fi!a#fi~OX#fi!e#fi#l#fi#m#fi#n#fi#o#fi~P#4QOX$bO!e$QO#l$QO#m$QO#n$aO#o$QO~P#4QOP$ZOX$bOk$OOy#wOz#xO|#yO!e$QO!f#uO!h#vO!l$ZO#g#|O#h#}O#i#}O#j#}O#k$PO#l$QO#m$QO#n$aO#o$QO#q$RO(RVO^#fi!V#fi#s#fi#u#fi#v#fi'k#fi(a#fi(i#fi'i#fi!S#fi!g#fio#fi!X#fi%a#fi!a#fi~O(h#fi~P#7RO(h#zO~P#7ROP$ZOX$bOk$OOy#wOz#xO|#yO!e$QO!f#uO!h#vO!l$ZO#g#|O#h#}O#i#}O#j#}O#k$PO#l$QO#m$QO#n$aO#o$QO#q$RO#s$TO(RVO(h#zO^#fi!V#fi#u#fi#v#fi'k#fi(a#fi'i#fi!S#fi!g#fio#fi!X#fi%a#fi!a#fi~O(i#fi~P#9sO(i#{O~P#9sOP$ZOX$bOk$OOy#wOz#xO|#yO!e$QO!f#uO!h#vO!l$ZO#g#|O#h#}O#i#}O#j#}O#k$PO#l$QO#m$QO#n$aO#o$QO#q$RO#s$TO#u$VO(RVO(h#zO(i#{O~O^#fi!V#fi#v#fi'k#fi(a#fi'i#fi!S#fi!g#fio#fi!X#fi%a#fi!a#fi~P#<eOPYXXYXkYXyYXzYX|YX!eYX!fYX!hYX!lYX#XYX#dcX#gYX#hYX#iYX#jYX#kYX#lYX#mYX#nYX#oYX#qYX#sYX#uYX#vYX#{YX(RYX(aYX(hYX(iYX!VYX!WYX~O#yYX~P#?OOP$ZOX<oOk<cOy#wOz#xO|#yO!e<eO!f#uO!h#vO!l$ZO#g<aO#h<bO#i<bO#j<bO#k<dO#l<eO#m<eO#n<nO#o<eO#q<fO#s<hO#u<jO#v<kO(RVO(a$XO(h#zO(i#{O~O#y.lO~P#A]OP(WXX(WXk(WXy(WXz(WX|(WX!e(WX!f(WX!h(WX!l(WX#g(WX#h(WX#i(WX#j(WX#k(WX#l(WX#m(WX#n(WX#q(WX#s(WX#u(WX#v(WX(R(WX(a(WX(h(WX(i(WX!V(WX~O#X<pO#{<pO#o(WX#y(WX!W(WX~P#CZO^'Ya!V'Ya'k'Ya'i'Ya!g'Ya!S'Yao'Ya!X'Ya%a'Ya!a'Ya~P!4aOP#fiX#fi^#fik#fiz#fi!V#fi!e#fi!f#fi!h#fi!l#fi#g#fi#h#fi#i#fi#j#fi#k#fi#l#fi#m#fi#n#fi#o#fi#q#fi#s#fi#u#fi#v#fi'k#fi(R#fi(a#fi'i#fi!S#fi!g#fio#fi!X#fi%a#fi!a#fi~P#*rO^#zi!V#zi'k#zi'i#zi!S#zi!g#zio#zi!X#zi%a#zi!a#zi~P!4aO$W.qO$Y.qO~O$W.rO$Y.rO~O!a)^O#X.sO!X$^X$T$^X$W$^X$Y$^X$a$^X~O!U.tO~O!X)aO$T.vO$W)`O$Y)`O$a.wO~O!V<lO!W(VX~P#A]O!W.xO~O!a)^O$a(jX~O$a.zO~Oq)pO(S)qO(T.}O~Ol/QO!S/RO'vTO'yUO~O!VcX!acX!gcX!g$sX(acX~P!-WO!g/XO~P#*rO!V/YO!a#sO(a'fO!g(nX~O!g/_O~O!U*RO't%fO!g(nP~O#d/aO~O!S$sX!V$sX!a$zX~P!-WO!V/bO!S(oX~P#*rO!a/dO~O!S/fO~Ok/jO!a#sO!h%[O'}%PO(a'fO~O't/lO~O!a+QO~O^%_O!V/pO'k%_O~O!W/rO~P!1UO!]/sO!^/sO'u!iO(U!jO~O|/uO(U!jO~O#T/vO~O't%}Od'_X!V'_X~O!V*kOd(Oa~Od/{O~Oy/|Oz/|O|/}Ogva(hva(iva!Vva#Xva~Odva#yva~P$ tOy)uO|)vOg$la(h$la(i$la!V$la#X$la~Od$la#y$la~P$!jOy)uO|)vOg$na(h$na(i$na!V$na#X$na~Od$na#y$na~P$#]O#d0PO~Od$|a!V$|a#X$|a#y$|a~P!.aO#d0SO~Oy#wOz#xO|#yO!f#uO!h#vO(RVOP!niX!nik!ni!V!ni!e!ni!l!ni#g!ni#h!ni#i!ni#j!ni#k!ni#l!ni#m!ni#n!ni#o!ni#q!ni#s!ni#u!ni#v!ni(a!ni(h!ni(i!ni~O^!ni'k!ni'i!ni!S!ni!g!nio!ni!X!ni%a!ni!a!ni~P$$jOg.XO!X'RO%a.WO~Oi0ZO't0YO~P!/RO!a+QO^'|a!X'|a'k'|a!V'|a~O#d0aO~OXYX!VcX!WcX~O!V0bO!W(vX~O!W0dO~OX0eO~O't+YO'vTO'yUO~O!X%oO't%fO]'gX!V'gX~O!V+_O](ua~O!g0jO~P!4aOX0mO~O]0nO~O!V+kO^(ra'k(ra~O#X0tO~Og0wO!X$zO~O(U(sO!W(sP~Og1QO!X0}O%a1PO'}%PO~OX1[O!V1YO!W(tX~O!W1]O~O]1_O^%_O'k%_O~O't#kO'vTO'yUO~O#X$cO#o1bO#{$cO&R1cO^(WX~P#CZO#X$cO#o1bO&R1cO~O^1dO~P%QO^1fO~O&[1jOP&YiQ&YiV&Yi^&Yia&Yib&Yii&Yik&Yil&Yim&Yis&Yiu&Yiw&Yi|&Yi!Q&Yi!R&Yi!X&Yi!c&Yi!h&Yi!k&Yi!l&Yi!m&Yi!o&Yi!q&Yi!t&Yi!x&Yi#p&Yi$Q&Yi$U&Yi%`&Yi%b&Yi%d&Yi%e&Yi%h&Yi%j&Yi%m&Yi%n&Yi%p&Yi%}&Yi&T&Yi&V&Yi&X&Yi&Z&Yi&^&Yi&d&Yi&j&Yi&l&Yi&n&Yi&p&Yi&r&Yi'i&Yi't&Yi'v&Yi'y&Yi(R&Yi(`&Yi(m&Yi!W&Yi_&Yi&a&Yi~O_1pO!W1nO&a1oO~P`O!XXO!h1rO~O&h,hOP&ciQ&ciV&ci^&cia&cib&cii&cik&cil&cim&cis&ciu&ciw&ci|&ci!Q&ci!R&ci!X&ci!c&ci!h&ci!k&ci!l&ci!m&ci!o&ci!q&ci!t&ci!x&ci#p&ci$Q&ci$U&ci%`&ci%b&ci%d&ci%e&ci%h&ci%j&ci%m&ci%n&ci%p&ci%}&ci&T&ci&V&ci&X&ci&Z&ci&^&ci&d&ci&j&ci&l&ci&n&ci&p&ci&r&ci'i&ci't&ci'v&ci'y&ci(R&ci(`&ci(m&ci!W&ci&[&ci_&ci&a&ci~O!S1xO~O!V!Za!W!Za~P#A]Ol!kO|!lO!U2OO(U!jO!V'OX!W'OX~P?fO!V,xO!W(Ya~O!V'UX!W'UX~P!?TO!V,{O!W(ga~O!W2VO~P'TO^%_O#X2`O'k%_O~O^%_O!a#sO#X2`O'k%_O~O^%_O!a#sO!h%[O!l2dO#X2`O'k%_O'}%PO(a'fO~O!]2eO!^2eO'u!iO~PBzO![2hO!]2eO!^2eO#T2iO#U2iO'u!iO~PBzO![2hO!]2eO!^2eO#Q2jO#T2iO#U2iO'u!iO~PBzO![2hO!]2eO!^2eO#O2kO#P2kO#Q2jO#T2iO#U2iO'u!iO~PBzO^%_O!a#sO!l2dO#X2`O'k%_O(a'fO~O^%_O'k%_O~P!4aO!V$_Oo$ka~O!S&}i!V&}i~P!4aO!V'zO!S(Xi~O!V(RO!S(ei~O!S(fi!V(fi~P!4aO!V(_O!g(bi~O!V(ci!g(ci^(ci'k(ci~P!4aO#X2oO!V(ci!g(ci^(ci'k(ci~O|%wO!X%xO!x]O#b2rO#c2qO't%fO~O|%wO!X%xO#c2qO't%fO~Og2yO!X'RO%a2xO~Og2yO!X'RO%a2xO'}%PO~O#dvaPvaXva^vakva!eva!fva!hva!lva#gva#hva#iva#jva#kva#lva#mva#nva#ova#qva#sva#uva#vva'kva(Rva(ava!gva!Sva'ivaova!Xva%ava!ava~P$ tO#d$laP$laX$la^$lak$laz$la!e$la!f$la!h$la!l$la#g$la#h$la#i$la#j$la#k$la#l$la#m$la#n$la#o$la#q$la#s$la#u$la#v$la'k$la(R$la(a$la!g$la!S$la'i$lao$la!X$la%a$la!a$la~P$!jO#d$naP$naX$na^$nak$naz$na!e$na!f$na!h$na!l$na#g$na#h$na#i$na#j$na#k$na#l$na#m$na#n$na#o$na#q$na#s$na#u$na#v$na'k$na(R$na(a$na!g$na!S$na'i$nao$na!X$na%a$na!a$na~P$#]O#d$|aP$|aX$|a^$|ak$|az$|a!V$|a!e$|a!f$|a!h$|a!l$|a#g$|a#h$|a#i$|a#j$|a#k$|a#l$|a#m$|a#n$|a#o$|a#q$|a#s$|a#u$|a#v$|a'k$|a(R$|a(a$|a!g$|a!S$|a'i$|a#X$|ao$|a!X$|a%a$|a!a$|a~P#*rO^#[q!V#[q'k#[q'i#[q!S#[q!g#[qo#[q!X#[q%a#[q!a#[q~P!4aOd'PX!V'PX~P!%lO!V.bOd([a~O!U3RO!V'QX!g'QX~P%QO!V.eO!g(]a~O!V.eO!g(]a~P!4aO!S3UO~O#y!ja!W!ja~PJrO#y!ba!V!ba!W!ba~P#A]O#y!na!W!na~P!6zO#y!pa!W!pa~P!9eO!X3hO$UfO$_3iO~O!W3mO~Oo3nO~P#*rO^$hq!V$hq'k$hq'i$hq!S$hq!g$hqo$hq!X$hq%a$hq!a$hq~P!4aO!S3oO~Ol/QO'vTO'yUO~Oy)uO|)vO(i)zOg%Xi(h%Xi!V%Xi#X%Xi~Od%Xi#y%Xi~P$JzOy)uO|)vOg%Zi(h%Zi(i%Zi!V%Zi#X%Zi~Od%Zi#y%Zi~P$KmO(a$XO~P#*rO!U3rO't%fO!V'ZX!g'ZX~O!V/YO!g(na~O!V/YO!a#sO!g(na~O!V/YO!a#sO(a'fO!g(na~Od$ui!V$ui#X$ui#y$ui~P!.aO!U3zO't*WO!S']X!V']X~P!/OO!V/bO!S(oa~O!V/bO!S(oa~P#*rO!a#sO~O!a#sO#o4SO~Ok4VO!a#sO(a'fO~Od(Pi!V(Pi~P!.aO#X4YOd(Pi!V(Pi~P!.aO!g4]O~O^$iq!V$iq'k$iq'i$iq!S$iq!g$iqo$iq!X$iq%a$iq!a$iq~P!4aO!V4aO!X(pX~P#*rO!f#uO~P3}O^$sX!X$sX%UYX'k$sX!V$sX~P!-WO%U4cO^hXghXyhX|hX!XhX'khX(hhX(ihX!VhX~O%U4cO~O%b4jO't+YO'vTO'yUO!V'fX!W'fX~O!V0bO!W(va~OX4nO~O]4oO~O!S4sO~O^%_O'k%_O~P#*rO!X$zO~P#*rO!V4xO#X4zO!W(sX~O!W4{O~Ol!kO|4}O![5]O!]5RO!^5RO!x<XO!|5[O!}5ZO#O5YO#P5YO#Q5XO#T5WO#U!xO'u!iO'vTO'yUO(U!jO(`!nO~O!W5VO~P%%qOg5bO!X0}O%a5aO~Og5bO!X0}O%a5aO'}%PO~O't#kO!V'eX!W'eX~O!V1YO!W(ta~O'vTO'yUO(U5kO~O]5oO~O!g5rO~P%QO^5tO~O^5tO~P%QO#o5vO&R5wO~PMvO_1pO!W5{O&a1oO~P`O!a5}O~O!a6PO!V(Zi!W(Zi!a(Zi!h(Zi'}(Zi~O!V#ai!W#ai~P#A]O#X6QO!V#ai!W#ai~O!V!Zi!W!Zi~P#A]O^%_O#X6ZO'k%_O~O^%_O!a#sO#X6ZO'k%_O~O^%_O!a#sO!l6`O#X6ZO'k%_O(a'fO~O!h%[O'}%PO~P%+RO!]6aO!^6aO'u!iO~PBzO![6dO!]6aO!^6aO#T6eO#U6eO'u!iO~PBzO![6dO!]6aO!^6aO#Q6fO#T6eO#U6eO'u!iO~PBzO!V(_O!g(bq~O!V(cq!g(cq^(cq'k(cq~P!4aO|%wO!X%xO#c6jO't%fO~O!X'RO%a6mO~Og6pO!X'RO%a6mO~O#d%XiP%XiX%Xi^%Xik%Xiz%Xi!e%Xi!f%Xi!h%Xi!l%Xi#g%Xi#h%Xi#i%Xi#j%Xi#k%Xi#l%Xi#m%Xi#n%Xi#o%Xi#q%Xi#s%Xi#u%Xi#v%Xi'k%Xi(R%Xi(a%Xi!g%Xi!S%Xi'i%Xio%Xi!X%Xi%a%Xi!a%Xi~P$JzO#d%ZiP%ZiX%Zi^%Zik%Ziz%Zi!e%Zi!f%Zi!h%Zi!l%Zi#g%Zi#h%Zi#i%Zi#j%Zi#k%Zi#l%Zi#m%Zi#n%Zi#o%Zi#q%Zi#s%Zi#u%Zi#v%Zi'k%Zi(R%Zi(a%Zi!g%Zi!S%Zi'i%Zio%Zi!X%Zi%a%Zi!a%Zi~P$KmO#d$uiP$uiX$ui^$uik$uiz$ui!V$ui!e$ui!f$ui!h$ui!l$ui#g$ui#h$ui#i$ui#j$ui#k$ui#l$ui#m$ui#n$ui#o$ui#q$ui#s$ui#u$ui#v$ui'k$ui(R$ui(a$ui!g$ui!S$ui'i$ui#X$uio$ui!X$ui%a$ui!a$ui~P#*rOd'Pa!V'Pa~P!.aO!V'Qa!g'Qa~P!4aO!V.eO!g(]i~O#y#[i!V#[i!W#[i~P#A]OP$ZOy#wOz#xO|#yO!f#uO!h#vO!l$ZO(RVOX#fik#fi!e#fi#h#fi#i#fi#j#fi#k#fi#l#fi#m#fi#n#fi#o#fi#q#fi#s#fi#u#fi#v#fi#y#fi(a#fi(h#fi(i#fi!V#fi!W#fi~O#g#fi~P%6OO#g<aO~P%6OOP$ZOy#wOz#xO|#yO!f#uO!h#vO!l$ZO#g<aO#h<bO#i<bO#j<bO(RVOX#fi!e#fi#k#fi#l#fi#m#fi#n#fi#o#fi#q#fi#s#fi#u#fi#v#fi#y#fi(a#fi(h#fi(i#fi!V#fi!W#fi~Ok#fi~P%8ZOk<cO~P%8ZOP$ZOk<cOy#wOz#xO|#yO!f#uO!h#vO!l$ZO#g<aO#h<bO#i<bO#j<bO#k<dO(RVO#q#fi#s#fi#u#fi#v#fi#y#fi(a#fi(h#fi(i#fi!V#fi!W#fi~OX#fi!e#fi#l#fi#m#fi#n#fi#o#fi~P%:fOX<oO!e<eO#l<eO#m<eO#n<nO#o<eO~P%:fOP$ZOX<oOk<cOy#wOz#xO|#yO!e<eO!f#uO!h#vO!l$ZO#g<aO#h<bO#i<bO#j<bO#k<dO#l<eO#m<eO#n<nO#o<eO#q<fO(RVO#s#fi#u#fi#v#fi#y#fi(a#fi(i#fi!V#fi!W#fi~O(h#fi~P%=QO(h#zO~P%=QOP$ZOX<oOk<cOy#wOz#xO|#yO!e<eO!f#uO!h#vO!l$ZO#g<aO#h<bO#i<bO#j<bO#k<dO#l<eO#m<eO#n<nO#o<eO#q<fO#s<hO(RVO(h#zO#u#fi#v#fi#y#fi(a#fi!V#fi!W#fi~O(i#fi~P%?]O(i#{O~P%?]OP$ZOX<oOk<cOy#wOz#xO|#yO!e<eO!f#uO!h#vO!l$ZO#g<aO#h<bO#i<bO#j<bO#k<dO#l<eO#m<eO#n<nO#o<eO#q<fO#s<hO#u<jO(RVO(h#zO(i#{O~O#v#fi#y#fi(a#fi!V#fi!W#fi~P%AhO^#wy!V#wy'k#wy'i#wy!S#wy!g#wyo#wy!X#wy%a#wy!a#wy~P!4aOg>SOy)uO|)vO(h)xO(i)zO~OP#fiX#fik#fiz#fi!e#fi!f#fi!h#fi!l#fi#g#fi#h#fi#i#fi#j#fi#k#fi#l#fi#m#fi#n#fi#o#fi#q#fi#s#fi#u#fi#v#fi#y#fi(R#fi(a#fi!V#fi!W#fi~P%D`O!f#uOP(QXX(QXg(QXk(QXy(QXz(QX|(QX!e(QX!h(QX!l(QX#g(QX#h(QX#i(QX#j(QX#k(QX#l(QX#m(QX#n(QX#o(QX#q(QX#s(QX#u(QX#v(QX#y(QX(R(QX(a(QX(h(QX(i(QX!V(QX!W(QX~O#y#zi!V#zi!W#zi~P#A]O#y!ni!W!ni~P$$jO!W6|O~O!V'Ya!W'Ya~P#A]O!a#sO(a'fO!V'Za!g'Za~O!V/YO!g(ni~O!V/YO!a#sO!g(ni~Od$uq!V$uq#X$uq#y$uq~P!.aO!S']a!V']a~P#*rO!a7TO~O!V/bO!S(oi~P#*rO!V/bO!S(oi~O!S7XO~O!a#sO#o7^O~Ok7_O!a#sO(a'fO~O!S7aO~Od$wq!V$wq#X$wq#y$wq~P!.aO^$iy!V$iy'k$iy'i$iy!S$iy!g$iyo$iy!X$iy%a$iy!a$iy~P!4aO!V4aO!X(pa~O^#[y!V#[y'k#[y'i#[y!S#[y!g#[yo#[y!X#[y%a#[y!a#[y~P!4aOX7fO~O!V0bO!W(vi~O]7lO~O!a6PO~O(U(sO!V'bX!W'bX~O!V4xO!W(sa~O!h%[O'}%PO^(ZX!a(ZX!l(ZX#X(ZX'k(ZX(a(ZX~O't7uO~P._O!x<XO!|7yO!}7xO#O7wO#P7wO#Q7vO#T'dO#U'dO~PBzO^%_O!a#sO!l'jO#X'hO'k%_O(a'fO~O!W7}O~P%%qOl!kO'vTO'yUO(U!jO(`!nO~O|8OO~P&!mO![8SO!]8RO!^8RO#Q7vO#T'dO#U'dO'u!iO~PBzO![8SO!]8RO!^8RO#O8TO#P8TO#Q7vO#T'dO#U'dO'u!iO~PBzO!]8RO!^8RO'u!iO(U!jO(`!nO~O!X0}O~O!X0}O%a8VO~Og8YO!X0}O%a8VO~OX8_O!V'ea!W'ea~O!V1YO!W(ti~O!g8cO~O!g8dO~O!g8eO~O!g8eO~P%QO^8gO~O!a8jO~O!g8kO~O!V(fi!W(fi~P#A]O^%_O#X8sO'k%_O~O^%_O!a#sO#X8sO'k%_O~O^%_O!a#sO!l8wO#X8sO'k%_O(a'fO~O!h%[O'}%PO~P&'ZO!]8xO!^8xO'u!iO~PBzO![8{O!]8xO!^8xO#T8|O#U8|O'u!iO~PBzO!V(_O!g(by~O!V(cy!g(cy^(cy'k(cy~P!4aO!X'RO%a9PO~O#d$uqP$uqX$uq^$uqk$uqz$uq!V$uq!e$uq!f$uq!h$uq!l$uq#g$uq#h$uq#i$uq#j$uq#k$uq#l$uq#m$uq#n$uq#o$uq#q$uq#s$uq#u$uq#v$uq'k$uq(R$uq(a$uq!g$uq!S$uq'i$uq#X$uqo$uq!X$uq%a$uq!a$uq~P#*rO#d$wqP$wqX$wq^$wqk$wqz$wq!V$wq!e$wq!f$wq!h$wq!l$wq#g$wq#h$wq#i$wq#j$wq#k$wq#l$wq#m$wq#n$wq#o$wq#q$wq#s$wq#u$wq#v$wq'k$wq(R$wq(a$wq!g$wq!S$wq'i$wq#X$wqo$wq!X$wq%a$wq!a$wq~P#*rO!V'Qi!g'Qi~P!4aO#y#[q!V#[q!W#[q~P#A]Oy/|Oz/|O|/}OPvaXvagvakva!eva!fva!hva!lva#gva#hva#iva#jva#kva#lva#mva#nva#ova#qva#sva#uva#vva#yva(Rva(ava(hva(iva!Vva!Wva~Oy)uO|)vOP$laX$lag$lak$laz$la!e$la!f$la!h$la!l$la#g$la#h$la#i$la#j$la#k$la#l$la#m$la#n$la#o$la#q$la#s$la#u$la#v$la#y$la(R$la(a$la(h$la(i$la!V$la!W$la~Oy)uO|)vOP$naX$nag$nak$naz$na!e$na!f$na!h$na!l$na#g$na#h$na#i$na#j$na#k$na#l$na#m$na#n$na#o$na#q$na#s$na#u$na#v$na#y$na(R$na(a$na(h$na(i$na!V$na!W$na~OP$|aX$|ak$|az$|a!e$|a!f$|a!h$|a!l$|a#g$|a#h$|a#i$|a#j$|a#k$|a#l$|a#m$|a#n$|a#o$|a#q$|a#s$|a#u$|a#v$|a#y$|a(R$|a(a$|a!V$|a!W$|a~P%D`O#y$hq!V$hq!W$hq~P#A]O#y$iq!V$iq!W$iq~P#A]O!W9ZO~O#y9[O~P!.aO!a#sO!V'Zi!g'Zi~O!a#sO(a'fO!V'Zi!g'Zi~O!V/YO!g(nq~O!S']i!V']i~P#*rO!V/bO!S(oq~O!S9bO~P#*rO!S9bO~Od(Py!V(Py~P!.aO!V'`a!X'`a~P#*rO^%Tq!X%Tq'k%Tq!V%Tq~P#*rOX9gO~O!V0bO!W(vq~O#X9kO!V'ba!W'ba~O!V4xO!W(si~P#A]O^%_O!a+QO'k%_O~OPYXXYXkYXyYXzYX|YX!SYX!VYX!eYX!fYX!hYX!lYX#XYX#dcX#gYX#hYX#iYX#jYX#kYX#lYX#mYX#nYX#oYX#qYX#sYX#uYX#vYX#{YX(RYX(aYX(hYX(iYX~O!a%RX#o%RX~P&:hO#T-eO#U-eO~PBzO#Q9pO#T-eO#U-eO~PBzO#O9qO#P9qO#Q9pO#T-eO#U-eO~PBzO!}9rO#O9qO#P9qO#Q9pO#T-eO#U-eO~PBzO!]9uO!^9uO'u!iO(U!jO(`!nO~O![9xO!]9uO!^9uO#Q9pO#T-eO#U-eO'u!iO~PBzO!X0}O%a9{O~O'vTO'yUO(U:QO~O!V1YO!W(tq~O!g:TO~O!g:TO~P%QO!g:VO~O!g:WO~O#X:YO!V#ay!W#ay~O!V#ay!W#ay~P#A]O^%_O#X:^O'k%_O~O^%_O!a#sO#X:^O'k%_O~O^%_O!a#sO!l:bO#X:^O'k%_O(a'fO~O!h%[O'}%PO~P&AZO!]:cO!^:cO'u!iO~PBzO!X'RO%a:gO~O#y#wy!V#wy!W#wy~P#A]OP$uiX$uik$uiz$ui!e$ui!f$ui!h$ui!l$ui#g$ui#h$ui#i$ui#j$ui#k$ui#l$ui#m$ui#n$ui#o$ui#q$ui#s$ui#u$ui#v$ui#y$ui(R$ui(a$ui!V$ui!W$ui~P%D`Oy)uO|)vO(i)zOP%XiX%Xig%Xik%Xiz%Xi!e%Xi!f%Xi!h%Xi!l%Xi#g%Xi#h%Xi#i%Xi#j%Xi#k%Xi#l%Xi#m%Xi#n%Xi#o%Xi#q%Xi#s%Xi#u%Xi#v%Xi#y%Xi(R%Xi(a%Xi(h%Xi!V%Xi!W%Xi~Oy)uO|)vOP%ZiX%Zig%Zik%Ziz%Zi!e%Zi!f%Zi!h%Zi!l%Zi#g%Zi#h%Zi#i%Zi#j%Zi#k%Zi#l%Zi#m%Zi#n%Zi#o%Zi#q%Zi#s%Zi#u%Zi#v%Zi#y%Zi(R%Zi(a%Zi(h%Zi(i%Zi!V%Zi!W%Zi~O#y$iy!V$iy!W$iy~P#A]O#y#[y!V#[y!W#[y~P#A]O!a#sO!V'Zq!g'Zq~O!V/YO!g(ny~O!S']q!V']q~P#*rO!S:nO~P#*rO!V0bO!W(vy~O!V4xO!W(sq~O#T2iO#U2iO~PBzO#Q:uO#T2iO#U2iO~PBzO#O:vO#P:vO#Q:uO#T2iO#U2iO~PBzO!]:zO!^:zO'u!iO(U!jO(`!nO~O!X0}O%a:}O~O!g;QO~O^%_O#X;VO'k%_O~O^%_O!a#sO#X;VO'k%_O~O^%_O!a#sO!l;ZO#X;VO'k%_O(a'fO~O!X'RO%a;^O~OP$uqX$uqk$uqz$uq!e$uq!f$uq!h$uq!l$uq#g$uq#h$uq#i$uq#j$uq#k$uq#l$uq#m$uq#n$uq#o$uq#q$uq#s$uq#u$uq#v$uq#y$uq(R$uq(a$uq!V$uq!W$uq~P%D`OP$wqX$wqk$wqz$wq!e$wq!f$wq!h$wq!l$wq#g$wq#h$wq#i$wq#j$wq#k$wq#l$wq#m$wq#n$wq#o$wq#q$wq#s$wq#u$wq#v$wq#y$wq(R$wq(a$wq!V$wq!W$wq~P%D`Od%]!Z!V%]!Z#X%]!Z#y%]!Z~P!.aO!V'bq!W'bq~P#A]O#T6eO#U6eO~PBzO#Q;bO#T6eO#U6eO~PBzO!V#a!Z!W#a!Z~P#A]O^%_O#X;mO'k%_O~O^%_O!a#sO#X;mO'k%_O~O#d%]!ZP%]!ZX%]!Z^%]!Zk%]!Zz%]!Z!V%]!Z!e%]!Z!f%]!Z!h%]!Z!l%]!Z#g%]!Z#h%]!Z#i%]!Z#j%]!Z#k%]!Z#l%]!Z#m%]!Z#n%]!Z#o%]!Z#q%]!Z#s%]!Z#u%]!Z#v%]!Z'k%]!Z(R%]!Z(a%]!Z!g%]!Z!S%]!Z'i%]!Z#X%]!Zo%]!Z!X%]!Z%a%]!Z!a%]!Z~P#*rO#T8|O#U8|O~PBzO^%_O#X;zO'k%_O~OP%]!ZX%]!Zk%]!Zz%]!Z!e%]!Z!f%]!Z!h%]!Z!l%]!Z#g%]!Z#h%]!Z#i%]!Z#j%]!Z#k%]!Z#l%]!Z#m%]!Z#n%]!Z#o%]!Z#q%]!Z#s%]!Z#u%]!Z#v%]!Z#y%]!Z(R%]!Z(a%]!Z!V%]!Z!W%]!Z~P%D`Oo(VX~P1gO'u!iO~P!'xO!ScX!VcX#XcX~P&:hOPYXXYXkYXyYXzYX|YX!VYX!VcX!eYX!fYX!hYX!lYX#XYX#XcX#dcX#gYX#hYX#iYX#jYX#kYX#lYX#mYX#nYX#oYX#qYX#sYX#uYX#vYX#{YX(RYX(aYX(hYX(iYX~O!acX!gYX!gcX(acX~P')iOP<WOQ<WOa=wOb!fOikOk<WOlkOmkOskOu<WOw<WO|WO!QkO!RkO!XXO!c<ZO!hZO!k<WO!l<WO!m<WO!o<[O!q<]O!t!eO$Q!hO$UfO't)TO'vTO'yUO(RVO(`[O(m=uO~O!V<lO!W$ka~Oi%QOk$rOl$qOm$qOs%ROu%SOw<rO|$yO!X$zO!c=|O!h$vO#c<xO$Q%WO$m<tO$o<vO$r%XO't(kO'vTO'yUO'}%PO(R$sO~O#p)[O~P'._O!WYX!WcX~P')iO#d<`O~O!a#sO#d<`O~O#X<pO~O#o<eO~O#X<zO!V(fX!W(fX~O#X<pO!V(dX!W(dX~O#d<{O~Od<}O~P!.aO#d=SO~O#d=TO~O!a#sO#d=UO~O!a#sO#d<{O~O#y=VO~P#A]O#d=WO~O#d=XO~O#d=YO~O#d=ZO~O#d=[O~O#d=]O~O#y=^O~P!.aO#y=_O~P!.aO$U~!f!|!}#P#Q#T#b#c#n(m$m$o$r%U%`%a%b%h%j%m%n%p%r~'oR$U(m#h!R'm'u#il#g#jky'n(U'n't$W$Y$W~",
          goto: "$2w(zPPPP({P)OP)`P+j/pPPPP7RPP7hP=gAYPAmPAmPPPAmPC]PAmPAmPAmPCaPPCfPDPPH}PPPIRPPPPIRLUPPPL[NiPIRP!#SPPPP!%fIRPPPIRPIRP!'xIRP!+`!,b!,gP!-X!-]!-XPPPPP!0j!3SPP!3]!4kP!,bIRIR!8S!;`!@l!@l!DePPP!DlIRPPPPPPPPPPP!G{P!IbPPIR!JsPIRPIRIRIRIRPIR!LZPP# eP#$kP#$o#$y#$}#$}P# bP#%R#%RP#(XP#(]IRIR#(c#+hAmPAmPAmAmP#,rAmAm#.lAm#0yAm#2mAmAm#3Z#5V#5V#5Z#5c#5V#5kP#5VPAm#6gAm#7oAmAm7RPPP#8zPP#9d#9dP#9dP#9y#9dPP#:PP#9vP#9v#:c!3X#9v#:}#;T7O)O#;W)OP#;_#;_#;_P)OP)OP)OP)OPP)OP#;e#;hP#;h)OP#;lP#;oP)OP)OP)OP)OP)OP)O)OPP#;u#;{#<V#<]#<c#<i#<o#<}#=T#=Z#=e#=k#>g#>v#>|#?`#?f#?l#?z#@a#Aq#BP#BV#B]#Bc#Bi#Bs#By#CP#CZ#Cm#CsPPPPPPPPPP#CyPPPPPPP#Dm#I^P#J}#KU#K^PPPP$ h$$^$+P$+S$+V$-g$-j$-m$-tPP$-z$.O$.w$/w$/{$0aPP$0e$0k$0oP$0r$0v$0y$1o$2V$2[$2_$2b$2h$2k$2o$2sR!zRmpOXr!X#b%^&e&g&h&j,`,e1j1mU!pQ'R-QQ%dtQ%lwQ%szQ&]!TS&y!c,xQ'X!f^'^!m!r!s!t!u!v!wS*^$z*cQ+W%mQ+e%uQ,P&VQ-O'QQ-Y'YY-b'_'`'a'b'cQ/s*eQ1X,QW2e-d-f-g-hS5R0}5UU6a2h2j2kU8R5Y5Z5]S8x6d6fS9u8S8TQ:c8{Q:z9xR<y<[%SdOPWXYZrstu!X!^!l#Q#U#X#b#l#r#v#y#|#}$O$P$Q$R$S$T$U$V$W$_$c%^%d%q&^&a&e&g&h&j&n&v'T'h'x'z(Q([(m(q(u)t*v+j,[,`,e-U-^-r-{.e.l/}0S0a1Q1b1c1d1f1j1m1o2`2o3R4}5b5t5v5w6Z8O8Y8g8s:^;V;m;zS#n]<X!r)V$Y$k&z)i,q,t.t2O3h4z6Q9k:Y<W<Z<[<]<`<a<b<c<d<e<f<g<h<i<j<k<l<p<y<z<{<}=U=V=[=]=xQ*n%TQ+]%oQ,R&YQ,Y&bQ.[<qQ0W+OQ0[+QQ0g+^Q1a,WQ2u.XQ4i0bQ5i1YQ6o2yQ6u<rQ7h4jR9S6p'QkOPWXYZrstu!X!^!l#Q#U#X#b#l#r#v#y#|#}$O$P$Q$R$S$T$U$V$W$Y$_$c$k%^%d%q&^&a&b&e&g&h&j&n&v&z'T'h'x'z(Q([(m(q(u)i)t*v+O+j,[,`,e,q,t-U-^-r-{.X.e.l.t/}0S0a1Q1b1c1d1f1j1m1o2O2`2o2y3R3h4z4}5b5t5v5w6Q6Z6p8O8Y8g8s9k:Y:^;V;m;z<W<Z<[<]<`<a<b<c<d<e<f<g<h<i<j<k<l<p<y<z<{<}=U=V=[=]=x#n!kQ!m!p!r!s!t!u!v!w!x&y'Q'R'^'_'`'a'b'c'd,x-O-Q-b-d-e-f-g-h0}2e2h2i2j2k5O5U5W5X5Y5Z5[6a6d6e6f7v7w7x7y8T8x8{8|9p9q9r:c:u:v;b$Y$qi#s#u$a$b$v$y%U%V%Z)p)y){)|*T*Z*i*j*}+Q+o+r.W.b/a/b/d0P0t0w1P2x3p3z4S4Y4a4c5a6m7T7^8V9P9[9{:g:};^<n<o<s<t<u<v<w<x=O=P=Q=R=S=T=W=X=Y=Z=^=_=u=}>O>R>SQ%vzQ&w!cS&}%x,{Q+]%oS/Q)v/SQ0O*rQ0g+^Q0l+dQ1`,VQ1a,WQ4i0bQ4r0nQ5l1[Q5m1_Q7h4jQ7k4oQ8b5oQ9j7lR:R8_pmOXr!T!X#b%^&[&e&g&h&j,`,e1j1mR,T&^&z`OPXYrstux!X!^!g!l#Q#b#l#r#v#y#|#}$O$P$Q$R$S$T$U$V$W$Y$_$c$k%^%d%q&^&a&b&e&g&h&j&n&v'T'h'z(Q([(m(q(u)i)t*v+O+j,[,`,e,q,t-U-^-r-{.X.e.l.t/}0S0a1Q1b1c1d1f1j1m1o2O2`2o2y3R3h4z4}5b5t5v5w6Q6Z6p8O8Y8g8s9k:Y:^;V;m;z<W<Z<[<]<`<a<b<c<d<e<f<g<h<i<j<k<l<p<y<z<{<}=U=V=[=]=w=x[#ZWZ#U#X&z'xQ%gvQ%kwS%pz%u!U%y|}#e#g#j%[%w(R(Y(Z(_+h+i+k,^,r-v-y-}.O.Q1r2q2r6P6jQ&R!RQ'U!eQ'W!fQ(f#pS*Q$v*US+V%l%mQ+Z%oQ+z&TQ,O&VS-X'X'YQ.Z(gQ/^*RQ0`+WQ0f+^Q0h+_Q0k+cQ1S+{S1W,P,QQ2[-YQ3q/YQ4h0bQ4l0eQ4q0mQ5h1XQ7Q3rQ7g4jQ7j4nQ9f7fR:p9gv$xi#u%U%V%Z)y){*T*i*j.b/a0P3p4Y9[=u=}>O!d%iw!f!o%k%l%m&x'W'X'Y']'k*]+V+W,u-X-Y-a-c/k0`2T2[2c2g4U6_6c8v8z:a;YQ+P%gQ+p&OQ+s&PQ+}&VQ.Y(fQ1R+zU1V,O,P,QQ2z.ZQ5c1SS5g1W1XS7t4|5QQ8^5hU9s7z8P8QU:x9t9v9wQ;e:yQ;u;f!z=y#s$a$b$v$y)p)|*Z*}+Q+o+r.W/b/d0t0w1P2x3z4S4a4c5a6m7T7^8V9P9{:g:};^<s<u<w=O=Q=S=W=Y=^>R>Sg=z<n<o<t<v<x=P=R=T=X=Z=_W$}i%P*k=uS&O!O&[Q&P!PQ&Q!QR+n%|$Z$|i#s#u$a$b$v$y%U%V%Z)p)y){)|*T*Z*i*j*}+Q+o+r.W.b/a/b/d0P0t0w1P2x3p3z4S4Y4a4c5a6m7T7^8V9P9[9{:g:};^<n<o<s<t<u<v<w<x=O=P=Q=R=S=T=W=X=Y=Z=^=_=u=}>O>R>ST)q$s)rV*o%T<q<rU&}!c%x,{S(t#w#xQ+b%rS.S(b(cQ0x+tQ4Z/|R7p4x'QkOPWXYZrstu!X!^!l#Q#U#X#b#l#r#v#y#|#}$O$P$Q$R$S$T$U$V$W$Y$_$c$k%^%d%q&^&a&b&e&g&h&j&n&v&z'T'h'x'z(Q([(m(q(u)i)t*v+O+j,[,`,e,q,t-U-^-r-{.X.e.l.t/}0S0a1Q1b1c1d1f1j1m1o2O2`2o2y3R3h4z4}5b5t5v5w6Q6Z6p8O8Y8g8s9k:Y:^;V;m;z<W<Z<[<]<`<a<b<c<d<e<f<g<h<i<j<k<l<p<y<z<{<}=U=V=[=]=x$q$^c#W#c%b%c%e'w'}(i(p(x(y(z({(|(})O)P)Q)R)S)U)X)])g*{+a,v-k-p-u-z.a.g.k.m.n.o/O0Q1y1|2^2n3Q3V3W3X3Y3Z3[3]3^3_3`3a3b3c3f3g3l4_4f6S6Y6h6s6t6y6z7r8m8q9T9X9Y:[:r;R;T;k;x<R<Y=lT#RV#S'RkOPWXYZrstu!X!^!l#Q#U#X#b#l#r#v#y#|#}$O$P$Q$R$S$T$U$V$W$Y$_$c$k%^%d%q&^&a&b&e&g&h&j&n&v&z'T'h'x'z(Q([(m(q(u)i)t*v+O+j,[,`,e,q,t-U-^-r-{.X.e.l.t/}0S0a1Q1b1c1d1f1j1m1o2O2`2o2y3R3h4z4}5b5t5v5w6Q6Z6p8O8Y8g8s9k:Y:^;V;m;z<W<Z<[<]<`<a<b<c<d<e<f<g<h<i<j<k<l<p<y<z<{<}=U=V=[=]=xQ&{!cR2P,x#f!kQ!c!m!p!r!s!t!u!v!w!x&y'Q'R'^'_'`'a'b'c'd,x-O-Q-b-d-e-f-g-h2e2h2i2j2k5O5W5X5[6a6d6e6f7v7w7x7y8x8{8|9p9q9r:c:u:v;bS*]$z*cS/k*^*eQ/t*fQ0z+vQ4U/sQ4X/vS4|0}5US7z5R5]S8P5Y5ZS9t8R8SQ9v8TS:y9u9xR;f:zlpOXr!X#b%^&e&g&h&j,`,e1j1mQ&l![Q'l!tS(h#r<`Q+T%jQ+x&RQ+y&SQ-V'VQ-j'eS.`(m<{S0R*v=UQ0^+UQ0|+wQ1q,gQ1s,hQ1{,sQ2Y-WQ2]-[S4`0S=[Q4d0_S4g0a=]Q6R1}Q6V2ZQ6[2bQ7e4eQ8n6TQ8o6WQ8r6]Q:X8kQ:]8tQ;U:_Q;l;WR;y;n$l$]c#W#c%c%e'w'}(i(p(x(y(z({(|(})O)P)Q)R)S)U)X)])g*{+a,v-k-p-u-z.a.g.k.n.o/O0Q1y1|2^2n3Q3V3W3X3Y3Z3[3]3^3_3`3a3b3c3f3g3l4_4f6S6Y6h6s6t6y6z7r8m8q9T9X9Y:[:r;R;T;k;x<R<Y=lS(e#m'[U*h${(l3eS*z%b.mQ2v0WQ6l2uQ9R6oR:h9S$l$[c#W#c%c%e'w'}(i(p(x(y(z({(|(})O)P)Q)R)S)U)X)])g*{+a,v-k-p-u-z.a.g.k.n.o/O0Q1y1|2^2n3Q3V3W3X3Y3Z3[3]3^3_3`3a3b3c3f3g3l4_4f6S6Y6h6s6t6y6z7r8m8q9T9X9Y:[:r;R;T;k;x<R<Y=lS(d#m'[S(v#x$]S*y%b.mS.T(c(eQ.p)WQ0T*zR2s.U'QkOPWXYZrstu!X!^!l#Q#U#X#b#l#r#v#y#|#}$O$P$Q$R$S$T$U$V$W$Y$_$c$k%^%d%q&^&a&b&e&g&h&j&n&v&z'T'h'x'z(Q([(m(q(u)i)t*v+O+j,[,`,e,q,t-U-^-r-{.X.e.l.t/}0S0a1Q1b1c1d1f1j1m1o2O2`2o2y3R3h4z4}5b5t5v5w6Q6Z6p8O8Y8g8s9k:Y:^;V;m;z<W<Z<[<]<`<a<b<c<d<e<f<g<h<i<j<k<l<p<y<z<{<}=U=V=[=]=xS#n]<XQ&g!VQ&h!WQ&j!YQ&k!ZR1i,cQ'S!eQ*|%gQ-T'US.V(f+PQ2W-SW2w.Y.Z0V0XQ6U2XU6k2t2v2zS9O6l6nS:f9Q9RS;[:e:hQ;p;]R;{;qV!qQ'R-Q!_^OQXZ_r!T!X!m#b#e%[%^&[&^&e&g&h&j'R(_,`,e-Q-}0}1j1m5O5UT#n]<X%^yOPWXYZrstu!X!^!l#Q#U#X#b#l#r#v#y#|#}$O$P$Q$R$S$T$U$V$W$_$c%^%d%q&^&a&b&e&g&h&j&n&v'T'h'x'z(Q([(m(q(u)t*v+O+j,[,`,e-U-^-r-{.X.e.l/}0S0a1Q1b1c1d1f1j1m1o2`2o2y3R4}5b5t5v5w6Z6p8O8Y8g8s:^;V;m;zS(t#w#xS.S(b(c!s=c$Y$k&z)i,q,t.t2O3h4z6Q9k:Y<W<Z<[<]<`<a<b<c<d<e<f<g<h<i<j<k<l<p<y<z<{<}=U=V=[=]=xU!oQ'R-Q[']!m!s!t!u!v!wS'k!p!rY'm!x5O5W5X5[S-a'^'_W-c'`'a'b'cY-i'd7v7w7x7yS2c-b-dW2f-e9p9q9rU2g-f-g-hS5Q0}5US6_2e2hU6b2i:u:vS6c2j2kS7z5R5]S8Q5Y5ZS8v6a6dS8y6e;bQ8z6fS9t8R8SQ9w8TS:a8x8{Q:d8|S:y9u9xQ;Y:cR;f:zU!qQ'R-QT5S0}5UU'j!o5P5QS(^#f1gU-`']'m8QQ/]*QQ/i*]U2d-c-i9wQ3v/^S4P/j/tS6`2f2gQ7P3qS7[4V4XS8w6b6cQ9^7QQ9e7_S:b8y8zR;Z:dQ#tbU'i!o5P5QS(]#f1gQ*w%]Q+R%hQ+X%nW-_']'j'm8QQ-|(^Q/[*QQ/h*]Q/n*`Q0]+SQ1T+|W2a-`-c-i9wS3u/]/^S4O/i/tQ4R/mQ4T/oQ5e1UU6^2d2f2gQ7O3qQ7S3vS7W4P4XQ7]4WQ8[5fU8u6`6b6cS9]7P7QQ9a7XQ9c7[Q9n7sQ:O8]U:`8w8y8zQ:l9^Q:m9bQ:o9eQ:t9oQ;P:PS;X:b:dQ;`:nQ;c:wQ;o;ZQ;s;dQ<O;tQ<T<PQ=f=aQ=q=jR=r=k%^aOPWXYZrstu!X!^!l#Q#U#X#b#l#r#v#y#|#}$O$P$Q$R$S$T$U$V$W$_$c%^%d%q&^&a&b&e&g&h&j&n&v'T'h'x'z(Q([(m(q(u)t*v+O+j,[,`,e-U-^-r-{.X.e.l/}0S0a1Q1b1c1d1f1j1m1o2`2o2y3R4}5b5t5v5w6Z6p8O8Y8g8s:^;V;m;zS#tx!g!r=`$Y$k&z)i,q,t.t2O3h4z6Q9k:Y<W<Z<[<]<`<a<b<c<d<e<f<g<h<i<j<k<l<p<y<z<{<}=U=V=[=]=xR=f=w%^bOPWXYZrstu!X!^!l#Q#U#X#b#l#r#v#y#|#}$O$P$Q$R$S$T$U$V$W$_$c%^%d%q&^&a&b&e&g&h&j&n&v'T'h'x'z(Q([(m(q(u)t*v+O+j,[,`,e-U-^-r-{.X.e.l/}0S0a1Q1b1c1d1f1j1m1o2`2o2y3R4}5b5t5v5w6Z6p8O8Y8g8s:^;V;m;zQ%]j!d%hw!f!o%k%l%m&x'W'X'Y']'k*]+V+W,u-X-Y-a-c/k0`2T2[2c2g4U6_6c8v8z:a;YS%nx!gQ+S%iQ+|&VW1U+},O,P,QU5f1V1W1XS7s4|5QS8]5g5hW9o7t7z8P8QQ:P8^W:w9s9t9v9wS;d:x:yS;t;e;fQ<P;u!r=a$Y$k&z)i,q,t.t2O3h4z6Q9k:Y<W<Z<[<]<`<a<b<c<d<e<f<g<h<i<j<k<l<p<y<z<{<}=U=V=[=]=xQ=j=vR=k=w%QeOPXYrstu!X!^!l#Q#b#l#r#v#y#|#}$O$P$Q$R$S$T$U$V$W$_$c%^%d%q&^&a&e&g&h&j&n&v'T'h'z(Q([(m(q(u)t*v+O+j,[,`,e-U-^-r-{.X.e.l/}0S0a1Q1b1c1d1f1j1m1o2`2o2y3R4}5b5t5v5w6Z6p8O8Y8g8s:^;V;m;zY#`WZ#U#X'x!U%y|}#e#g#j%[%w(R(Y(Z(_+h+i+k,^,r-v-y-}.O.Q1r2q2r6P6jQ,Z&b!p=b$Y$k)i,q,t.t2O3h4z6Q9k:Y<W<Z<[<]<`<a<b<c<d<e<f<g<h<i<j<k<l<p<y<z<{<}=U=V=[=]=xR=e&zS'O!c%xR2R,{%SdOPWXYZrstu!X!^!l#Q#U#X#b#l#r#v#y#|#}$O$P$Q$R$S$T$U$V$W$_$c%^%d%q&^&a&e&g&h&j&n&v'T'h'x'z(Q([(m(q(u)t*v+j,[,`,e-U-^-r-{.e.l/}0S0a1Q1b1c1d1f1j1m1o2`2o3R4}5b5t5v5w6Z8O8Y8g8s:^;V;m;z!r)V$Y$k&z)i,q,t.t2O3h4z6Q9k:Y<W<Z<[<]<`<a<b<c<d<e<f<g<h<i<j<k<l<p<y<z<{<}=U=V=[=]=xQ,Y&bQ0W+OQ2u.XQ6o2yR9S6p!n$Sc#W%b'w'}(i(p)P)Q)R)S)X)]+a-k-p-u-z.a.g/O0Q2^2n3Q3c4_4f6Y6h6s8q:[;T;k;x<R<Y!T<g)U)g,v.m1y1|3V3_3`3a3b3f3l6S6t6y6z7r8m9T9X9Y:r;R=l!j$Uc#W%b'w'}(i(p)R)S)X)]+a-k-p-u-z.a.g/O0Q2^2n3Q3c4_4f6Y6h6s8q:[;T;k;x<R<Y!P<i)U)g,v.m1y1|3V3a3b3f3l6S6t6y6z7r8m9T9X9Y:r;R=l!f$Yc#W%b'w'}(i(p)X)]+a-k-p-u-z.a.g/O0Q2^2n3Q3c4_4f6Y6h6s8q:[;T;k;x<R<YQ3p/Wz=x)U)g,v.m1y1|3V3f3l6S6t6y6z7r8m9T9X9Y:r;R=lQ=}>PR>O>Q'QkOPWXYZrstu!X!^!l#Q#U#X#b#l#r#v#y#|#}$O$P$Q$R$S$T$U$V$W$Y$_$c$k%^%d%q&^&a&b&e&g&h&j&n&v&z'T'h'x'z(Q([(m(q(u)i)t*v+O+j,[,`,e,q,t-U-^-r-{.X.e.l.t/}0S0a1Q1b1c1d1f1j1m1o2O2`2o2y3R3h4z4}5b5t5v5w6Q6Z6p8O8Y8g8s9k:Y:^;V;m;z<W<Z<[<]<`<a<b<c<d<e<f<g<h<i<j<k<l<p<y<z<{<}=U=V=[=]=xS$lh$mR3i.s'XgOPWXYZhrstu!X!^!l#Q#U#X#b#l#r#v#y#|#}$O$P$Q$R$S$T$U$V$W$Y$_$c$k$m%^%d%q&^&a&b&e&g&h&j&n&v&z'T'h'x'z(Q([(m(q(u)i)t*v+O+j,[,`,e,q,t-U-^-r-{.X.e.l.s.t/}0S0a1Q1b1c1d1f1j1m1o2O2`2o2y3R3h4z4}5b5t5v5w6Q6Z6p8O8Y8g8s9k:Y:^;V;m;z<W<Z<[<]<`<a<b<c<d<e<f<g<h<i<j<k<l<p<y<z<{<}=U=V=[=]=xT$hf$nQ$ffS)`$i)dR)l$nT$gf$nT)b$i)d'XhOPWXYZhrstu!X!^!l#Q#U#X#b#l#r#v#y#|#}$O$P$Q$R$S$T$U$V$W$Y$_$c$k$m%^%d%q&^&a&b&e&g&h&j&n&v&z'T'h'x'z(Q([(m(q(u)i)t*v+O+j,[,`,e,q,t-U-^-r-{.X.e.l.s.t/}0S0a1Q1b1c1d1f1j1m1o2O2`2o2y3R3h4z4}5b5t5v5w6Q6Z6p8O8Y8g8s9k:Y:^;V;m;z<W<Z<[<]<`<a<b<c<d<e<f<g<h<i<j<k<l<p<y<z<{<}=U=V=[=]=xT$lh$mQ$ohR)k$m%^jOPWXYZrstu!X!^!l#Q#U#X#b#l#r#v#y#|#}$O$P$Q$R$S$T$U$V$W$_$c%^%d%q&^&a&b&e&g&h&j&n&v'T'h'x'z(Q([(m(q(u)t*v+O+j,[,`,e-U-^-r-{.X.e.l/}0S0a1Q1b1c1d1f1j1m1o2`2o2y3R4}5b5t5v5w6Z6p8O8Y8g8s:^;V;m;z!s=v$Y$k&z)i,q,t.t2O3h4z6Q9k:Y<W<Z<[<]<`<a<b<c<d<e<f<g<h<i<j<k<l<p<y<z<{<}=U=V=[=]=x#alOPXZr!X!^!l#Q#b#l#y$k%^&^&a&b&e&g&h&j&n&v'T(u)i+O+j,[,`,e-U.X.t/}1Q1b1c1d1f1j1m1o2y3h4}5b5t5v5w6p8O8Y8gv${i#u%U%V%Z)y){*T*i*j.b/a0P3p4Y9[=u=}>O!z(l#s$a$b$v$y)p)|*Z*}+Q+o+r.W/b/d0t0w1P2x3z4S4a4c5a6m7T7^8V9P9{:g:};^<s<u<w=O=Q=S=W=Y=^>R>SQ*s%XQ/P)ug3e<n<o<t<v<x=P=R=T=X=Z=_v$wi#u%U%V%Z)y){*T*i*j.b/a0P3p4Y9[=u=}>OQ*V$xS*`$z*cQ*t%YQ/o*a!z=h#s$a$b$v$y)p)|*Z*}+Q+o+r.W/b/d0t0w1P2x3z4S4a4c5a6m7T7^8V9P9{:g:};^<s<u<w=O=Q=S=W=Y=^>R>Sf=i<n<o<t<v<x=P=R=T=X=Z=_Q=m=yQ=n=zQ=o={R=p=|v${i#u%U%V%Z)y){*T*i*j.b/a0P3p4Y9[=u=}>O!z(l#s$a$b$v$y)p)|*Z*}+Q+o+r.W/b/d0t0w1P2x3z4S4a4c5a6m7T7^8V9P9{:g:};^<s<u<w=O=Q=S=W=Y=^>R>Sg3e<n<o<t<v<x=P=R=T=X=Z=_lnOXr!X#b%^&e&g&h&j,`,e1j1mQ*Y$yQ,n&qQ,o&sR3y/b$Y$|i#s#u$a$b$v$y%U%V%Z)p)y){)|*T*Z*i*j*}+Q+o+r.W.b/a/b/d0P0t0w1P2x3p3z4S4Y4a4c5a6m7T7^8V9P9[9{:g:};^<n<o<s<t<u<v<w<x=O=P=Q=R=S=T=W=X=Y=Z=^=_=u=}>O>R>SQ+q&PQ0v+sQ4v0uR7o4wT*b$z*cS*b$z*cT5T0}5US/m*_4}T4W/u8OQ+R%hQ/n*`Q0]+SQ1T+|Q5e1UQ8[5fQ9n7sQ:O8]Q:t9oQ;P:PQ;c:wQ;s;dQ<O;tR<T<Pn)y$t(n*u/`/w/x3O3w4^6}7`:k=g=s=t!W=O(j)Z*P*X._.{/W/e0U0s0u2}3x3|4u4w6q6r7U7Y7b7d9`9d;_>P>Q]=P3d6x9U:i:j;|p){$t(n*u/U/`/w/x3O3w4^6}7`:k=g=s=t!Y=Q(j)Z*P*X._.{/W/e0U0s0u2{2}3x3|4u4w6q6r7U7Y7b7d9`9d;_>P>Q_=R3d6x9U9V:i:j;|pmOXr!T!X#b%^&[&e&g&h&j,`,e1j1mQ&X!SR,[&bpmOXr!T!X#b%^&[&e&g&h&j,`,e1j1mR&X!SQ+u&QR0r+nqmOXr!T!X#b%^&[&e&g&h&j,`,e1j1mQ1O+zS5`1R1SU8U5^5_5cS9z8W8XS:{9y9|Q;g:|R;v;hQ&`!TR,U&[R5l1[S%pz%uR0h+_Q&e!UR,`&fR,f&kT1k,e1mR,j&lQ,i&lR1t,jQ'o!yR-l'oQrOQ#bXT%ar#bQ!|TR'q!|Q#PUR's#PQ)r$sR.|)rQ#SVR'u#SQ#VWU'{#V'|-sQ'|#WR-s'}Q,y&{R2Q,yQ.c(nR3P.cQ.f(pS3S.f3TR3T.gQ-Q'RR2U-Qr_OXr!T!X#b%^&[&^&e&g&h&j,`,e1j1mU!mQ'R-QS#eZ%[Y#o_!m#e-}5OQ-}(_T5O0}5US#]W%wU(S#](T-tQ(T#^R-t(OQ,|'OR2S,|Q(`#hQ-w(XW.R(`-w2l6gQ2l-xR6g2mQ)d$iR.u)dQ$mhR)j$mQ$`cU)Y$`-o<mQ-o<YR<m)gQ/Z*QW3s/Z3t7R9_U3t/[/]/^S7R3u3vR9_7S#m)w$t(j(n)Z*P*X*p*q*u.].^._.{/U/V/W/`/e/w/x0U0s0u2{2|2}3O3d3w3x3|4^4u4w6q6r6v6w6x6}7U7Y7`7b7d9U9V9W9`9d:i:j:k;_;|=g=s=t>P>QQ/c*XU3{/c3}7VQ3}/eR7V3|Q*c$zR/q*cQ*l%OR/z*lQ4b0UR7c4bQ+l%zR0q+lQ4y0xS7q4y9lR9l7rQ+w&RR0{+wQ5U0}R7|5UQ1Z,RS5j1Z8`R8`5lQ0c+ZW4k0c4m7i9hQ4m0fQ7i4lR9h7jQ+`%pR0i+`Q1m,eR5z1mWqOXr#bQ&i!XQ*x%^Q,_&eQ,a&gQ,b&hQ,d&jQ1h,`S1k,e1mR5y1jQ%`oQ&m!]Q&p!_Q&r!`Q&t!aU'g!o5P5QQ+T%jQ+g%vQ+m%{Q,T&`Q,l&oY-]']'i'j'm8QQ-j'eQ/p*bQ0^+US1^,U,XQ1u,kQ1v,nQ1w,oQ2]-[[2_-_-`-c-i-k9wQ4d0_Q4p0lQ4t0sQ5d1TQ5n1`Q5x1iY6X2^2a2d2f2gQ6[2bQ7e4eQ7m4rQ7n4uQ7{5TQ8Z5eQ8a5mY8p6Y6^6`6b6cQ8r6]Q9i7kQ9m7sQ9}8[Q:S8bY:Z8q8u8w8y8zQ:]8tQ:q9jS:s9n9oQ;O:OW;S:[:`:b:dQ;U:_S;a:t:wQ;i;PU;j;T;X;ZQ;l;WS;r;c;dS;w;k;oQ;y;nS;};s;tQ<Q;xS<S<O<PQ<U<RR<V<TQ%jwQ'V!fQ'e!oU+U%k%l%mQ,s&xU-W'W'X'YS-[']'kQ/g*]S0_+V+WQ1},uS2Z-X-YS2b-a-cQ4Q/kQ4e0`Q6T2TQ6W2[S6]2c2gQ7Z4US8t6_6cS:_8v8zQ;W:aR;n;YS$ui=uR*m%PU%Oi%P=uR/y*kQ$tiS(j#s+QQ(n#uS)Z$a$bQ*P$vQ*X$yQ*p%UQ*q%VQ*u%ZQ.]<sQ.^<uQ._<wQ.{)pQ/U)yQ/V){Q/W)|Q/`*TQ/e*ZQ/w*iQ/x*jh0U*}.W1P2x5a6m8V9P9{:g:};^Q0s+oQ0u+rQ2{=OQ2|=QQ2}=SQ3O.bS3d<n<oQ3w/aQ3x/bQ3|/dQ4^0PQ4u0tQ4w0wQ6q=WQ6r=YQ6v<tQ6w<vQ6x<xQ6}3pQ7U3zQ7Y4SQ7`4YQ7b4aQ7d4cQ9U=TQ9V=PQ9W=RQ9`7TQ9d7^Q:i=XQ:j=ZQ:k9[Q;_=^Q;|=_Q=g=uQ=s=}Q=t>OQ>P>RR>Q>SloOXr!X#b%^&e&g&h&j,`,e1j1mQ!dPS#dZ#lQ&o!^U'Z!l4}8OQ't#QQ(w#yQ)h$kS,X&^&aQ,]&bQ,k&nQ,p&vQ-S'TQ.i(uQ.y)iQ0X+OQ0o+jQ1e,[Q2X-UQ2v.XQ3k.tQ4[/}Q5_1QQ5p1bQ5q1cQ5s1dQ5u1fQ5|1oQ6l2yQ6{3hQ8X5bQ8f5tQ8h5vQ8i5wQ9R6pQ9|8YR:U8g#UcOPXZr!X!^!l#b#l#y%^&^&a&b&e&g&h&j&n&v'T(u+O+j,[,`,e-U.X/}1Q1b1c1d1f1j1m1o2y4}5b5t5v5w6p8O8Y8gQ#WWQ#cYQ%bsQ%ctQ%euS'w#U'zQ'}#XQ(i#rQ(p#vQ(x#|Q(y#}Q(z$OQ({$PQ(|$QQ(}$RQ)O$SQ)P$TQ)Q$UQ)R$VQ)S$WQ)U$YQ)X$_Q)]$cW)g$k)i.t3hQ*{%dQ+a%qS,v&z2OQ-k'hS-p'x-rQ-u(QQ-z([Q.a(mQ.g(qQ.k<WQ.m<ZQ.n<[Q.o<]Q/O)tQ0Q*vQ1y,qQ1|,tQ2^-^Q2n-{Q3Q.eQ3V<`Q3W<aQ3X<bQ3Y<cQ3Z<dQ3[<eQ3]<fQ3^<gQ3_<hQ3`<iQ3a<jQ3b<kQ3c.lQ3f<pQ3g<yQ3l<lQ4_0SQ4f0aQ6S<zQ6Y2`Q6h2oQ6s3RQ6t<{Q6y<}Q6z=UQ7r4zQ8m6QQ8q6ZQ9T=VQ9X=[Q9Y=]Q:[8sQ:r9kQ;R:YQ;T:^Q;k;VQ;x;mQ<R;zQ<Y#QR=l=xR#YWR&|!cU!oQ'R-QS&x!c,x[']!m!s!t!u!v!wS'k!p!r^'m!x5O5W5X5Y5Z5[S,u&y'QS-a'^'_W-c'`'a'b'c[-i'd7v7w7x7y8TQ2T-OS2c-b-dW2f-e9p9q9rU2g-f-g-hS5P0}5US6_2e2hU6b2i:u:vS6c2j2kS8v6a6dS8y6e;bQ8z6fS:a8x8{Q:d8|R;Y:cR(o#uR(r#vQ!dQT-P'R-QQ#m]R'[<XT#iZ%[S#hZ%[U%z|},^U(X#e#g#jS-x(Y(ZQ.P(_Q0p+kQ2m-yU2p-}.O.QS6i2q2rR8}6j`#[W#U#X%w'x(R+h-vt#fZ|}#e#g#j%[(Y(Z(_+k-y-}.O.Q2q2r6jQ1g,^Q1z,rQ6O1rQ8l6PT=d&z+iT#_W%wS#^W%wS'y#U(RS(O#X+hS,w&z+iT-q'x-vT'P!c%xQ$ifR)n$nT)c$i)dR3j.sT*S$v*UR*[$yQ0V*}Q2t.WQ5^1PQ6n2xQ8W5aQ9Q6mQ9y8VQ:e9PQ:|9{Q;]:gQ;h:}R;q;^lpOXr!X#b%^&e&g&h&j,`,e1j1mQ&_!TR,T&[V%{|},^R0y+tR,S&YQ%tzR+f%uR+[%oT&c!U&fT&d!U&fT1l,e1m",
          nodeNames:
            '⚠ ArithOp ArithOp LineComment BlockComment Script ExportDeclaration export Star as VariableName String Escape from ; default FunctionDeclaration async function VariableDefinition > TypeParamList TypeDefinition extends ThisType this LiteralType ArithOp Number BooleanLiteral TemplateType InterpolationEnd Interpolation InterpolationStart NullType null VoidType void TypeofType typeof MemberExpression . ?. PropertyName [ TemplateString Escape Interpolation super RegExp ] ArrayExpression Spread , } { ObjectExpression Property async get set PropertyDefinition Block : NewExpression new TypeArgList CompareOp < ) ( ArgList UnaryExpression delete LogicOp BitOp YieldExpression yield AwaitExpression await ParenthesizedExpression ClassExpression class ClassBody MethodDeclaration Decorator @ MemberExpression PrivatePropertyName CallExpression declare Privacy static abstract override PrivatePropertyDefinition PropertyDeclaration readonly accessor Optional TypeAnnotation Equals StaticBlock FunctionExpression ArrowFunction ParamList ParamList ArrayPattern ObjectPattern PatternProperty Privacy readonly Arrow MemberExpression BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp instanceof satisfies in const CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression TaggedTemplateExpression DynamicImport import ImportMeta JSXElement JSXSelfCloseEndTag JSXStartTag JSXSelfClosingTag JSXIdentifier JSXBuiltin JSXIdentifier JSXNamespacedName JSXMemberExpression JSXSpreadAttribute JSXAttribute JSXAttributeValue JSXEscape JSXEndTag JSXOpenTag JSXFragmentTag JSXText JSXEscape JSXStartCloseTag JSXCloseTag PrefixCast ArrowFunction TypeParamList SequenceExpression KeyofType keyof UniqueType unique ImportType InferredType infer TypeName ParenthesizedType FunctionSignature ParamList NewSignature IndexedType TupleType Label ArrayType ReadonlyType ObjectType MethodType PropertyType IndexSignature PropertyDefinition CallSignature TypePredicate is NewSignature new UnionType LogicOp IntersectionType LogicOp ConditionalType ParameterizedType ClassDeclaration abstract implements type VariableDeclaration let var TypeAliasDeclaration InterfaceDeclaration interface EnumDeclaration enum EnumBody NamespaceDeclaration namespace module AmbientDeclaration declare GlobalDeclaration global ClassDeclaration ClassBody MethodDeclaration AmbientFunctionDeclaration ExportGroup VariableName VariableName ImportDeclaration ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try CatchClause catch FinallyClause finally ReturnStatement return ThrowStatement throw BreakStatement break ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement SingleExpression SingleClassItem',
          maxTerm: 363,
          context: a,
          nodeProps: [
            [
              'group',
              -26,
              6,
              14,
              16,
              62,
              199,
              203,
              206,
              207,
              209,
              212,
              215,
              226,
              228,
              234,
              236,
              238,
              240,
              243,
              249,
              255,
              257,
              259,
              261,
              263,
              265,
              266,
              'Statement',
              -32,
              10,
              11,
              25,
              28,
              29,
              35,
              45,
              48,
              49,
              51,
              56,
              64,
              72,
              76,
              78,
              80,
              81,
              103,
              104,
              113,
              114,
              131,
              134,
              136,
              137,
              138,
              139,
              141,
              142,
              162,
              163,
              165,
              'Expression',
              -23,
              24,
              26,
              30,
              34,
              36,
              38,
              166,
              168,
              170,
              171,
              173,
              174,
              175,
              177,
              178,
              179,
              181,
              182,
              183,
              193,
              195,
              197,
              198,
              'Type',
              -3,
              84,
              96,
              102,
              'ClassItem',
            ],
            [
              'openedBy',
              31,
              'InterpolationStart',
              50,
              '[',
              54,
              '{',
              69,
              '(',
              143,
              'JSXStartTag',
              155,
              'JSXStartTag JSXStartCloseTag',
            ],
            [
              'closedBy',
              33,
              'InterpolationEnd',
              44,
              ']',
              55,
              '}',
              70,
              ')',
              144,
              'JSXSelfCloseEndTag JSXEndTag',
              160,
              'JSXEndTag',
            ],
          ],
          propSources: [h],
          skippedNodes: [0, 3, 4, 269],
          repeatNodeCount: 32,
          tokenData:
            "$>y(CSR!bOX%ZXY+gYZ-yZ[+g[]%Z]^.c^p%Zpq+gqr/mrs3cst:_tu>PuvBavwDxwxGgxyMvyz! Qz{!![{|!%O|}!&]}!O!%O!O!P!'g!P!Q!1w!Q!R#0t!R![#3T![!]#@T!]!^#Aa!^!_#Bk!_!`#GS!`!a#In!a!b#N{!b!c$$z!c!}>P!}#O$&U#O#P$'`#P#Q$,w#Q#R$.R#R#S>P#S#T$/`#T#o$0j#o#p$4z#p#q$5p#q#r$7Q#r#s$8^#s$f%Z$f$g+g$g#BY>P#BY#BZ$9h#BZ$IS>P$IS$I_$9h$I_$I|>P$I|$I}$<s$I}$JO$<s$JO$JT>P$JT$JU$9h$JU$KV>P$KV$KW$9h$KW&FU>P&FU&FV$9h&FV;'S>P;'S;=`BZ<%l?HT>P?HT?HU$9h?HUO>P(n%d_$d&j'wp'z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&j&hT$d&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c&j&zP;=`<%l&c'|'U]$d&j'z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!b(SU'z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!b(iP;=`<%l'}'|(oP;=`<%l&}'[(y]$d&j'wpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rp)wU'wpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)rp*^P;=`<%l)r'[*dP;=`<%l(r#S*nX'wp'z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g#S+^P;=`<%l*g(n+dP;=`<%l%Z(CS+rq$d&j'wp'z!b'm(;dOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p$f%Z$f$g+g$g#BY%Z#BY#BZ+g#BZ$IS%Z$IS$I_+g$I_$JT%Z$JT$JU+g$JU$KV%Z$KV$KW+g$KW&FU%Z&FU&FV+g&FV;'S%Z;'S;=`+a<%l?HT%Z?HT?HU+g?HUO%Z(CS.ST'x#S$d&j'n(;dO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c(CS.n_$d&j'wp'z!b'n(;dOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#`/x`$d&j!l$Ip'wp'z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#S1V`#q$Id$d&j'wp'z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`2X!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#S2d_#q$Id$d&j'wp'z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$2b3l_'v$(n$d&j'z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k*r4r_$d&j'z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k)`5vX$d&jOr5qrs6cs!^5q!^!_6y!_#o5q#o#p6y#p;'S5q;'S;=`7h<%lO5q)`6jT$_#t$d&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#t6|TOr6yrs7]s;'S6y;'S;=`7b<%lO6y#t7bO$_#t#t7eP;=`<%l6y)`7kP;=`<%l5q*r7w]$_#t$d&j'z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}%W8uZ'z!bOY8pYZ6yZr8prs9hsw8pwx6yx#O8p#O#P6y#P;'S8p;'S;=`:R<%lO8p%W9oU$_#t'z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}%W:UP;=`<%l8p*r:[P;=`<%l4k#%|:hg$d&j'wp'z!bOY%ZYZ&cZr%Zrs&}st%Ztu<Puw%Zwx(rx!^%Z!^!_*g!_!c%Z!c!}<P!}#O%Z#O#P&c#P#R%Z#R#S<P#S#T%Z#T#o<P#o#p*g#p$g%Z$g;'S<P;'S;=`=y<%lO<P#%|<[i$d&j(`!L^'wp'z!bOY%ZYZ&cZr%Zrs&}st%Ztu<Puw%Zwx(rx!Q%Z!Q![<P![!^%Z!^!_*g!_!c%Z!c!}<P!}#O%Z#O#P&c#P#R%Z#R#S<P#S#T%Z#T#o<P#o#p*g#p$g%Z$g;'S<P;'S;=`=y<%lO<P#%|=|P;=`<%l<P(CS>`k$d&j'wp'z!b(U!LY't&;d$W#tOY%ZYZ&cZr%Zrs&}st%Ztu>Puw%Zwx(rx}%Z}!O@T!O!Q%Z!Q![>P![!^%Z!^!_*g!_!c%Z!c!}>P!}#O%Z#O#P&c#P#R%Z#R#S>P#S#T%Z#T#o>P#o#p*g#p$g%Z$g;'S>P;'S;=`BZ<%lO>P+d@`k$d&j'wp'z!b$W#tOY%ZYZ&cZr%Zrs&}st%Ztu@Tuw%Zwx(rx}%Z}!O@T!O!Q%Z!Q![@T![!^%Z!^!_*g!_!c%Z!c!}@T!}#O%Z#O#P&c#P#R%Z#R#S@T#S#T%Z#T#o@T#o#p*g#p$g%Z$g;'S@T;'S;=`BT<%lO@T+dBWP;=`<%l@T(CSB^P;=`<%l>P%#SBl`$d&j'wp'z!b#i$IdOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Cn!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#SCy_$d&j#{$Id'wp'z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%DfETa(i%<v$d&j'wp'z!bOY%ZYZ&cZr%Zrs&}sv%ZvwFYwx(rx!^%Z!^!_*g!_!`Cn!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#SFe`$d&j#u$Id'wp'z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Cn!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$2bGp_'y$)`$d&j'wpOYHoYZIuZrHorsIuswHowxKVx!^Ho!^!_LX!_#OHo#O#PIu#P#oHo#o#pLX#p;'SHo;'S;=`Mp<%lOHo*QHv_$d&j'wpOYHoYZIuZrHorsIuswHowxKVx!^Ho!^!_LX!_#OHo#O#PIu#P#oHo#o#pLX#p;'SHo;'S;=`Mp<%lOHo)`IzX$d&jOwIuwx6cx!^Iu!^!_Jg!_#oIu#o#pJg#p;'SIu;'S;=`KP<%lOIu#tJjTOwJgwx7]x;'SJg;'S;=`Jy<%lOJg#tJ|P;=`<%lJg)`KSP;=`<%lIu*QK`]$_#t$d&j'wpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r$fL^Z'wpOYLXYZJgZrLXrsJgswLXwxMPx#OLX#O#PJg#P;'SLX;'S;=`Mj<%lOLX$fMWU$_#t'wpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)r$fMmP;=`<%lLX*QMsP;=`<%lHo(*QNR_!h(!b$d&j'wp'z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z!'l! ]_!gM|$d&j'wp'z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'+h!!ib$d&j'wp'z!b'u#)d#j$IdOY%ZYZ&cZr%Zrs&}sw%Zwx(rxz%Zz{!#q{!^%Z!^!_*g!_!`Cn!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#S!#|`$d&j'wp'z!b#g$IdOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Cn!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&-O!%Z`$d&j'wp'z!bk&%`OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Cn!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&C[!&h_!V&;l$d&j'wp'z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(CS!'rc$d&j'wp'z!by'<nOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!(}!P!Q%Z!Q![!+g![!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z!'d!)Wa$d&j'wp'z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!*]!P!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z!'d!*h_!UMt$d&j'wp'z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$/l!+rg$d&j'wp'z!bl$'|OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!+g![!^%Z!^!_*g!_!g%Z!g!h!-Z!h#O%Z#O#P&c#P#R%Z#R#S!+g#S#X%Z#X#Y!-Z#Y#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$/l!-dg$d&j'wp'z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx{%Z{|!.{|}%Z}!O!.{!O!Q%Z!Q![!0a![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!0a#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$/l!/Uc$d&j'wp'z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!0a![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!0a#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$/l!0lc$d&j'wp'z!bl$'|OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!0a![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!0a#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(CS!2Sf$d&j'wp'z!b#h$IdOY!3hYZ&cZr!3hrs!4{sw!3hwx!C}xz!3hz{#$s{!P!3h!P!Q#&Y!Q!^!3h!^!_!Mh!_!`#-x!`!a#/_!a!}!3h!}#O##[#O#P!<w#P#o!3h#o#p!Mh#p;'S!3h;'S;=`#$m<%lO!3h(r!3sb$d&j'wp'z!b!RSOY!3hYZ&cZr!3hrs!4{sw!3hwx!C}x!P!3h!P!Q!Kh!Q!^!3h!^!_!Mh!_!}!3h!}#O##[#O#P!<w#P#o!3h#o#p!Mh#p;'S!3h;'S;=`#$m<%lO!3h(Q!5U`$d&j'z!b!RSOY!4{YZ&cZw!4{wx!6Wx!P!4{!P!Q!=o!Q!^!4{!^!_!?g!_!}!4{!}#O!Bn#O#P!<w#P#o!4{#o#p!?g#p;'S!4{;'S;=`!Cw<%lO!4{&n!6_^$d&j!RSOY!6WYZ&cZ!P!6W!P!Q!7Z!Q!^!6W!^!_!8g!_!}!6W!}#O!;U#O#P!<w#P#o!6W#o#p!8g#p;'S!6W;'S;=`!=i<%lO!6W&n!7ba$d&j!RSO!^&c!_#Z&c#Z#[!7Z#[#]&c#]#^!7Z#^#a&c#a#b!7Z#b#g&c#g#h!7Z#h#i&c#i#j!7Z#j#m&c#m#n!7Z#n#o&c#p;'S&c;'S;=`&w<%lO&cS!8lX!RSOY!8gZ!P!8g!P!Q!9X!Q!}!8g!}#O!9p#O#P!:o#P;'S!8g;'S;=`!;O<%lO!8gS!9^U!RS#Z#[!9X#]#^!9X#a#b!9X#g#h!9X#i#j!9X#m#n!9XS!9sVOY!9pZ#O!9p#O#P!:Y#P#Q!8g#Q;'S!9p;'S;=`!:i<%lO!9pS!:]SOY!9pZ;'S!9p;'S;=`!:i<%lO!9pS!:lP;=`<%l!9pS!:rSOY!8gZ;'S!8g;'S;=`!;O<%lO!8gS!;RP;=`<%l!8g&n!;Z[$d&jOY!;UYZ&cZ!^!;U!^!_!9p!_#O!;U#O#P!<P#P#Q!6W#Q#o!;U#o#p!9p#p;'S!;U;'S;=`!<q<%lO!;U&n!<UX$d&jOY!;UYZ&cZ!^!;U!^!_!9p!_#o!;U#o#p!9p#p;'S!;U;'S;=`!<q<%lO!;U&n!<tP;=`<%l!;U&n!<|X$d&jOY!6WYZ&cZ!^!6W!^!_!8g!_#o!6W#o#p!8g#p;'S!6W;'S;=`!=i<%lO!6W&n!=lP;=`<%l!6W(Q!=xi$d&j'z!b!RSOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#Z&}#Z#[!=o#[#]&}#]#^!=o#^#a&}#a#b!=o#b#g&}#g#h!=o#h#i&}#i#j!=o#j#m&}#m#n!=o#n#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!f!?nZ'z!b!RSOY!?gZw!?gwx!8gx!P!?g!P!Q!@a!Q!}!?g!}#O!Ap#O#P!:o#P;'S!?g;'S;=`!Bh<%lO!?g!f!@hb'z!b!RSOY'}Zw'}x#O'}#P#Z'}#Z#[!@a#[#]'}#]#^!@a#^#a'}#a#b!@a#b#g'}#g#h!@a#h#i'}#i#j!@a#j#m'}#m#n!@a#n;'S'};'S;=`(f<%lO'}!f!AuX'z!bOY!ApZw!Apwx!9px#O!Ap#O#P!:Y#P#Q!?g#Q;'S!Ap;'S;=`!Bb<%lO!Ap!f!BeP;=`<%l!Ap!f!BkP;=`<%l!?g(Q!Bu^$d&j'z!bOY!BnYZ&cZw!Bnwx!;Ux!^!Bn!^!_!Ap!_#O!Bn#O#P!<P#P#Q!4{#Q#o!Bn#o#p!Ap#p;'S!Bn;'S;=`!Cq<%lO!Bn(Q!CtP;=`<%l!Bn(Q!CzP;=`<%l!4{'`!DW`$d&j'wp!RSOY!C}YZ&cZr!C}rs!6Ws!P!C}!P!Q!EY!Q!^!C}!^!_!GQ!_!}!C}!}#O!JX#O#P!<w#P#o!C}#o#p!GQ#p;'S!C};'S;=`!Kb<%lO!C}'`!Eci$d&j'wp!RSOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#Z(r#Z#[!EY#[#](r#]#^!EY#^#a(r#a#b!EY#b#g(r#g#h!EY#h#i(r#i#j!EY#j#m(r#m#n!EY#n#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rt!GXZ'wp!RSOY!GQZr!GQrs!8gs!P!GQ!P!Q!Gz!Q!}!GQ!}#O!IZ#O#P!:o#P;'S!GQ;'S;=`!JR<%lO!GQt!HRb'wp!RSOY)rZr)rs#O)r#P#Z)r#Z#[!Gz#[#])r#]#^!Gz#^#a)r#a#b!Gz#b#g)r#g#h!Gz#h#i)r#i#j!Gz#j#m)r#m#n!Gz#n;'S)r;'S;=`*Z<%lO)rt!I`X'wpOY!IZZr!IZrs!9ps#O!IZ#O#P!:Y#P#Q!GQ#Q;'S!IZ;'S;=`!I{<%lO!IZt!JOP;=`<%l!IZt!JUP;=`<%l!GQ'`!J`^$d&j'wpOY!JXYZ&cZr!JXrs!;Us!^!JX!^!_!IZ!_#O!JX#O#P!<P#P#Q!C}#Q#o!JX#o#p!IZ#p;'S!JX;'S;=`!K[<%lO!JX'`!K_P;=`<%l!JX'`!KeP;=`<%l!C}(r!Ksk$d&j'wp'z!b!RSOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#Z%Z#Z#[!Kh#[#]%Z#]#^!Kh#^#a%Z#a#b!Kh#b#g%Z#g#h!Kh#h#i%Z#i#j!Kh#j#m%Z#m#n!Kh#n#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#W!Mq]'wp'z!b!RSOY!MhZr!Mhrs!?gsw!Mhwx!GQx!P!Mh!P!Q!Nj!Q!}!Mh!}#O#!U#O#P!:o#P;'S!Mh;'S;=`##U<%lO!Mh#W!Nse'wp'z!b!RSOY*gZr*grs'}sw*gwx)rx#O*g#P#Z*g#Z#[!Nj#[#]*g#]#^!Nj#^#a*g#a#b!Nj#b#g*g#g#h!Nj#h#i*g#i#j!Nj#j#m*g#m#n!Nj#n;'S*g;'S;=`+Z<%lO*g#W#!]Z'wp'z!bOY#!UZr#!Urs!Apsw#!Uwx!IZx#O#!U#O#P!:Y#P#Q!Mh#Q;'S#!U;'S;=`##O<%lO#!U#W##RP;=`<%l#!U#W##XP;=`<%l!Mh(r##e`$d&j'wp'z!bOY##[YZ&cZr##[rs!Bnsw##[wx!JXx!^##[!^!_#!U!_#O##[#O#P!<P#P#Q!3h#Q#o##[#o#p#!U#p;'S##[;'S;=`#$g<%lO##[(r#$jP;=`<%l##[(r#$pP;=`<%l!3h(CS#%Qb$d&j'wp'z!b'o(;d!RSOY!3hYZ&cZr!3hrs!4{sw!3hwx!C}x!P!3h!P!Q!Kh!Q!^!3h!^!_!Mh!_!}!3h!}#O##[#O#P!<w#P#o!3h#o#p!Mh#p;'S!3h;'S;=`#$m<%lO!3h(CS#&e_$d&j'wp'z!bR(;dOY#&YYZ&cZr#&Yrs#'dsw#&Ywx#*tx!^#&Y!^!_#,s!_#O#&Y#O#P#(f#P#o#&Y#o#p#,s#p;'S#&Y;'S;=`#-r<%lO#&Y(Bb#'m]$d&j'z!bR(;dOY#'dYZ&cZw#'dwx#(fx!^#'d!^!_#)w!_#O#'d#O#P#(f#P#o#'d#o#p#)w#p;'S#'d;'S;=`#*n<%lO#'d(AO#(mX$d&jR(;dOY#(fYZ&cZ!^#(f!^!_#)Y!_#o#(f#o#p#)Y#p;'S#(f;'S;=`#)q<%lO#(f(;d#)_SR(;dOY#)YZ;'S#)Y;'S;=`#)k<%lO#)Y(;d#)nP;=`<%l#)Y(AO#)tP;=`<%l#(f(<v#*OW'z!bR(;dOY#)wZw#)wwx#)Yx#O#)w#O#P#)Y#P;'S#)w;'S;=`#*h<%lO#)w(<v#*kP;=`<%l#)w(Bb#*qP;=`<%l#'d(Ap#*}]$d&j'wpR(;dOY#*tYZ&cZr#*trs#(fs!^#*t!^!_#+v!_#O#*t#O#P#(f#P#o#*t#o#p#+v#p;'S#*t;'S;=`#,m<%lO#*t(<U#+}W'wpR(;dOY#+vZr#+vrs#)Ys#O#+v#O#P#)Y#P;'S#+v;'S;=`#,g<%lO#+v(<U#,jP;=`<%l#+v(Ap#,pP;=`<%l#*t(=h#,|Y'wp'z!bR(;dOY#,sZr#,srs#)wsw#,swx#+vx#O#,s#O#P#)Y#P;'S#,s;'S;=`#-l<%lO#,s(=h#-oP;=`<%l#,s(CS#-uP;=`<%l#&Y%#W#.Vb$d&j#{$Id'wp'z!b!RSOY!3hYZ&cZr!3hrs!4{sw!3hwx!C}x!P!3h!P!Q!Kh!Q!^!3h!^!_!Mh!_!}!3h!}#O##[#O#P!<w#P#o!3h#o#p!Mh#p;'S!3h;'S;=`#$m<%lO!3h+h#/lb$T#t$d&j'wp'z!b!RSOY!3hYZ&cZr!3hrs!4{sw!3hwx!C}x!P!3h!P!Q!Kh!Q!^!3h!^!_!Mh!_!}!3h!}#O##[#O#P!<w#P#o!3h#o#p!Mh#p;'S!3h;'S;=`#$m<%lO!3h$/l#1Pp$d&j'wp'z!bl$'|OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!+g!P!Q%Z!Q![#3T![!^%Z!^!_*g!_!g%Z!g!h!-Z!h#O%Z#O#P&c#P#R%Z#R#S#3T#S#U%Z#U#V#6_#V#X%Z#X#Y!-Z#Y#b%Z#b#c#5T#c#d#9g#d#l%Z#l#m#<i#m#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$/l#3`k$d&j'wp'z!bl$'|OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!+g!P!Q%Z!Q![#3T![!^%Z!^!_*g!_!g%Z!g!h!-Z!h#O%Z#O#P&c#P#R%Z#R#S#3T#S#X%Z#X#Y!-Z#Y#b%Z#b#c#5T#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$/l#5`_$d&j'wp'z!bl$'|OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$/l#6hd$d&j'wp'z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#7v!R!S#7v!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#7v#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$/l#8Rf$d&j'wp'z!bl$'|OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#7v!R!S#7v!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#7v#S#b%Z#b#c#5T#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$/l#9pc$d&j'wp'z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#:{!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#:{#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$/l#;We$d&j'wp'z!bl$'|OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#:{!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#:{#S#b%Z#b#c#5T#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$/l#<rg$d&j'wp'z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#>Z![!^%Z!^!_*g!_!c%Z!c!i#>Z!i#O%Z#O#P&c#P#R%Z#R#S#>Z#S#T%Z#T#Z#>Z#Z#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$/l#>fi$d&j'wp'z!bl$'|OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#>Z![!^%Z!^!_*g!_!c%Z!c!i#>Z!i#O%Z#O#P&c#P#R%Z#R#S#>Z#S#T%Z#T#Z#>Z#Z#b%Z#b#c#5T#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%Gh#@b_!a$b$d&j#y%<f'wp'z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)[#Al_^l$d&j'wp'z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(CS#Bz^'}!*v!e'.r'wp'z!b$U)d(mSOY*gZr*grs'}sw*gwx)rx!P*g!P!Q#Cv!Q!^*g!^!_#Dl!_!`#F^!`#O*g#P;'S*g;'S;=`+Z<%lO*g(n#DPX$f&j'wp'z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g$Kh#DuZ#k$Id'wp'z!bOY*gZr*grs'}sw*gwx)rx!_*g!_!`#Eh!`#O*g#P;'S*g;'S;=`+Z<%lO*g$Kh#EqX#{$Id'wp'z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g$Kh#FgX#l$Id'wp'z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g%Gh#G_a#X%?x$d&j'wp'z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`!a#Hd!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#W#Ho_#d$Ih$d&j'wp'z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%Gh#I}adBf#l$Id$a#|$d&j'wp'z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`#KS!`!a#L^!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#S#K__#l$Id$d&j'wp'z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#S#Lia#k$Id$d&j'wp'z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Cn!`!a#Mn!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#S#My`#k$Id$d&j'wp'z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Cn!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'+h$ Wc(a$Ip$d&j'wp'z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P$!c!P!^%Z!^!_*g!_!a%Z!a!b$#m!b#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'+`$!n_z'#p$d&j'wp'z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#S$#x`$d&j#v$Id'wp'z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Cn!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#&^$%V_!x!Ln$d&j'wp'z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(@^$&a_|(8n$d&j'wp'z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(n$'eZ$d&jO!^$(W!^!_$(n!_#i$(W#i#j$(s#j#l$(W#l#m$*f#m#o$(W#o#p$(n#p;'S$(W;'S;=`$,q<%lO$(W(n$(_T[#S$d&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#S$(sO[#S(n$(x[$d&jO!Q&c!Q![$)n![!^&c!_!c&c!c!i$)n!i#T&c#T#Z$)n#Z#o&c#o#p$,U#p;'S&c;'S;=`&w<%lO&c(n$)sZ$d&jO!Q&c!Q![$*f![!^&c!_!c&c!c!i$*f!i#T&c#T#Z$*f#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$*kZ$d&jO!Q&c!Q![$+^![!^&c!_!c&c!c!i$+^!i#T&c#T#Z$+^#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$+cZ$d&jO!Q&c!Q![$(W![!^&c!_!c&c!c!i$(W!i#T&c#T#Z$(W#Z#o&c#p;'S&c;'S;=`&w<%lO&c#S$,XR!Q![$,b!c!i$,b#T#Z$,b#S$,eS!Q![$,b!c!i$,b#T#Z$,b#q#r$(n(n$,tP;=`<%l$(W!'l$-S_!SM|$d&j'wp'z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#S$.^`#s$Id$d&j'wp'z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Cn!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&,v$/k_$d&j'wp'z!b(R&%WOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(CS$0yk$d&j'wp'z!b(U!LY't&;d$Y#tOY%ZYZ&cZr%Zrs&}st%Ztu$0juw%Zwx(rx}%Z}!O$2n!O!Q%Z!Q![$0j![!^%Z!^!_*g!_!c%Z!c!}$0j!}#O%Z#O#P&c#P#R%Z#R#S$0j#S#T%Z#T#o$0j#o#p*g#p$g%Z$g;'S$0j;'S;=`$4t<%lO$0j+d$2yk$d&j'wp'z!b$Y#tOY%ZYZ&cZr%Zrs&}st%Ztu$2nuw%Zwx(rx}%Z}!O$2n!O!Q%Z!Q![$2n![!^%Z!^!_*g!_!c%Z!c!}$2n!}#O%Z#O#P&c#P#R%Z#R#S$2n#S#T%Z#T#o$2n#o#p*g#p$g%Z$g;'S$2n;'S;=`$4n<%lO$2n+d$4qP;=`<%l$2n(CS$4wP;=`<%l$0j!5p$5TX!X!3l'wp'z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g%Df$5{a(h%<v$d&j'wp'z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Cn!`#O%Z#O#P&c#P#o%Z#o#p*g#p#q$#m#q;'S%Z;'S;=`+a<%lO%Z%#`$7__!W$I`o`$d&j'wp'z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(r$8i_!mS$d&j'wp'z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(CS$9y|$d&j'wp'z!b'm(;d(U!LY't&;d$W#tOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}st%Ztu>Puw%Zwx(rx}%Z}!O@T!O!Q%Z!Q![>P![!^%Z!^!_*g!_!c%Z!c!}>P!}#O%Z#O#P&c#P#R%Z#R#S>P#S#T%Z#T#o>P#o#p*g#p$f%Z$f$g+g$g#BY>P#BY#BZ$9h#BZ$IS>P$IS$I_$9h$I_$JT>P$JT$JU$9h$JU$KV>P$KV$KW$9h$KW&FU>P&FU&FV$9h&FV;'S>P;'S;=`BZ<%l?HT>P?HT?HU$9h?HUO>P(CS$=Uk$d&j'wp'z!b'n(;d(U!LY't&;d$W#tOY%ZYZ&cZr%Zrs&}st%Ztu>Puw%Zwx(rx}%Z}!O@T!O!Q%Z!Q![>P![!^%Z!^!_*g!_!c%Z!c!}>P!}#O%Z#O#P&c#P#R%Z#R#S>P#S#T%Z#T#o>P#o#p*g#p$g%Z$g;'S>P;'S;=`BZ<%lO>P",
          tokenizers: [
            O,
            l,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            o,
            new i.RA(
              "$S~RRtu[#O#Pg#S#T#|~_P#o#pb~gOq~~jVO#i!P#i#j!U#j#l!P#l#m!q#m;'S!P;'S;=`#v<%lO!P~!UO!O~~!XS!Q![!e!c!i!e#T#Z!e#o#p#Z~!hR!Q![!q!c!i!q#T#Z!q~!tR!Q![!}!c!i!}#T#Z!}~#QR!Q![!P!c!i!P#T#Z!P~#^R!Q![#g!c!i#g#T#Z#g~#jS!Q![#g!c!i#g#T#Z#g#q#r!P~#yP;=`<%l!P~$RO(T~~",
              141,
              326
            ),
            new i.RA("j~RQYZXz{^~^O'q~~aP!P!Qd~iO'r~~", 25, 308),
          ],
          topRules: {
            Script: [0, 5],
            SingleExpression: [1, 267],
            SingleClassItem: [2, 268],
          },
          dialects: {jsx: 13525, ts: 13527},
          dynamicPrecedences: {76: 1, 78: 1, 163: 1, 191: 1},
          specialized: [
            {term: 312, get: (e) => c[e] || -1},
            {term: 328, get: (e) => u[e] || -1},
            {term: 67, get: (e) => f[e] || -1},
          ],
          tokenPrec: 13551,
        });
      var d = n(59119),
        g = n(78120),
        m = n(47421),
        Q = n(34790),
        S = n(41113);
      let $ = [
          (0, Q.Gn)('function ${name}(${params}) {\n	${}\n}', {
            label: 'function',
            detail: 'definition',
            type: 'keyword',
          }),
          (0, Q.Gn)(
            'for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n	${}\n}',
            {label: 'for', detail: 'loop', type: 'keyword'}
          ),
          (0, Q.Gn)('for (let ${name} of ${collection}) {\n	${}\n}', {
            label: 'for',
            detail: 'of loop',
            type: 'keyword',
          }),
          (0, Q.Gn)('do {\n	${}\n} while (${})', {
            label: 'do',
            detail: 'loop',
            type: 'keyword',
          }),
          (0, Q.Gn)('while (${}) {\n	${}\n}', {
            label: 'while',
            detail: 'loop',
            type: 'keyword',
          }),
          (0, Q.Gn)('try {\n	${}\n} catch (${error}) {\n	${}\n}', {
            label: 'try',
            detail: '/ catch block',
            type: 'keyword',
          }),
          (0, Q.Gn)('if (${}) {\n	${}\n}', {
            label: 'if',
            detail: 'block',
            type: 'keyword',
          }),
          (0, Q.Gn)('if (${}) {\n	${}\n} else {\n	${}\n}', {
            label: 'if',
            detail: '/ else block',
            type: 'keyword',
          }),
          (0, Q.Gn)('class ${name} {\n	constructor(${params}) {\n		${}\n	}\n}', {
            label: 'class',
            detail: 'definition',
            type: 'keyword',
          }),
          (0, Q.Gn)('import {${names}} from "${module}"\n${}', {
            label: 'import',
            detail: 'named',
            type: 'keyword',
          }),
          (0, Q.Gn)('import ${name} from "${module}"\n${}', {
            label: 'import',
            detail: 'default',
            type: 'keyword',
          }),
        ],
        x = new S.hr(),
        P = new Set([
          'Script',
          'Block',
          'FunctionExpression',
          'FunctionDeclaration',
          'ArrowFunction',
          'MethodDeclaration',
          'ForStatement',
        ]);
      function b(e) {
        return (t, n) => {
          let i = t.node.getChild('VariableDefinition');
          return i && n(i, e), !0;
        };
      }
      let y = ['FunctionDeclaration'],
        w = {
          FunctionDeclaration: b('function'),
          ClassDeclaration: b('class'),
          ClassExpression: () => !0,
          EnumDeclaration: b('constant'),
          TypeAliasDeclaration: b('type'),
          NamespaceDeclaration: b('namespace'),
          VariableDefinition(e, t) {
            e.matchContext(y) || t(e, 'variable');
          },
          TypeDefinition(e, t) {
            t(e, 'type');
          },
          __proto__: null,
        },
        k = /^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/,
        v = [
          'TemplateString',
          'String',
          'RegExp',
          'LineComment',
          'BlockComment',
          'VariableDefinition',
          'TypeDefinition',
          'Label',
          'PropertyDefinition',
          'PropertyName',
          'PrivatePropertyDefinition',
          'PrivatePropertyName',
        ];
      function X(e) {
        let t = (0, d.qz)(e.state).resolveInner(e.pos, -1);
        if (v.indexOf(t.name) > -1) return null;
        let n =
          'VariableName' == t.name ||
          (t.to - t.from < 20 && k.test(e.state.sliceDoc(t.from, t.to)));
        if (!n && !e.explicit) return null;
        let i = [];
        for (let n = t; n; n = n.parent)
          P.has(n.name) &&
            (i = i.concat(
              (function e(t, n) {
                let i = x.get(n);
                if (i) return i;
                let r = [],
                  s = !0;
                function a(e, n) {
                  let i = t.sliceString(e.from, e.to);
                  r.push({label: i, type: n});
                }
                return (
                  n.cursor(S.vj.IncludeAnonymous).iterate((n) => {
                    if (s) s = !1;
                    else if (n.name) {
                      let e = w[n.name];
                      if ((e && e(n, a)) || P.has(n.name)) return !1;
                    } else if (n.to - n.from > 8192) {
                      for (let i of e(t, n.node)) r.push(i);
                      return !1;
                    }
                  }),
                  x.set(n, r),
                  r
                );
              })(e.state.doc, n)
            ));
        return {options: i, from: n ? t.from : e.pos, validFor: k};
      }
      let Z = d.qp.define({
          name: 'javascript',
          parser: p.configure({
            props: [
              d.uj.add({
                IfStatement: (0, d.tC)({except: /^\s*({|else\b)/}),
                TryStatement: (0, d.tC)({except: /^\s*({|catch\b|finally\b)/}),
                LabeledStatement: d.ze,
                SwitchBody: (e) => {
                  let t = e.textAfter,
                    n = /^\s*\}/.test(t),
                    i = /^\s*(case|default)\b/.test(t);
                  return e.baseIndent + (n ? 0 : i ? 1 : 2) * e.unit;
                },
                Block: (0, d.vw)({closing: '}'}),
                ArrowFunction: (e) => e.baseIndent + e.unit,
                'TemplateString BlockComment': () => null,
                'Statement Property': (0, d.tC)({except: /^{/}),
                JSXElement(e) {
                  let t = /^\s*<\//.test(e.textAfter);
                  return e.lineIndent(e.node.from) + (t ? 0 : e.unit);
                },
                JSXEscape(e) {
                  let t = /\s*\}/.test(e.textAfter);
                  return e.lineIndent(e.node.from) + (t ? 0 : e.unit);
                },
                'JSXOpenTag JSXSelfClosingTag': (e) =>
                  e.column(e.node.from) + e.unit,
              }),
              d.x0.add({
                'Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression ObjectType':
                  d.Dv,
                BlockComment: (e) => ({from: e.from + 2, to: e.to - 2}),
              }),
            ],
          }),
          languageData: {
            closeBrackets: {brackets: ['(', '[', '{', "'", '"', '`']},
            commentTokens: {line: '//', block: {open: '/*', close: '*/'}},
            indentOnInput: /^\s*(?:case |default:|\{|\}|<\/)$/,
            wordChars: '$',
          },
        }),
        Y = {
          test: (e) => /^JSX/.test(e.name),
          facet: (0, d.kU)({
            commentTokens: {block: {open: '{/*', close: '*/}'}},
          }),
        },
        T = Z.configure({dialect: 'ts'}, 'typescript'),
        W = Z.configure({
          dialect: 'jsx',
          props: [d.KC.add((e) => (e.isTop ? [Y] : void 0))],
        }),
        C = Z.configure(
          {
            dialect: 'jsx ts',
            props: [d.KC.add((e) => (e.isTop ? [Y] : void 0))],
          },
          'typescript'
        ),
        U =
          'break case const continue default delete export extends false finally in instanceof let new return static super switch this throw true typeof var yield'
            .split(' ')
            .map((e) => ({label: e, type: 'keyword'}));
      function _(e = {}) {
        let t = e.jsx ? (e.typescript ? C : W) : e.typescript ? T : Z;
        return new d.ri(t, [
          Z.data.of({autocomplete: (0, Q.eC)(v, (0, Q.Mb)($.concat(U)))}),
          Z.data.of({autocomplete: X}),
          e.jsx ? V : [],
        ]);
      }
      function R(e, t, n = e.length) {
        for (let i = null == t ? void 0 : t.firstChild; i; i = i.nextSibling)
          if (
            'JSXIdentifier' == i.name ||
            'JSXBuiltin' == i.name ||
            'JSXNamespacedName' == i.name ||
            'JSXMemberExpression' == i.name
          )
            return e.sliceString(i.from, Math.min(i.to, n));
        return '';
      }
      let q =
          'object' == typeof navigator && /Android\b/.test(navigator.userAgent),
        V = m.tk.inputHandler.of((e, t, n, i) => {
          if (
            (q ? e.composing : e.compositionStarted) ||
            e.state.readOnly ||
            t != n ||
            ('>' != i && '/' != i) ||
            !Z.isActiveAt(e.state, t, -1)
          )
            return !1;
          let {state: r} = e,
            s = r.changeByRange((e) => {
              var t, n;
              let {head: s} = e,
                a = (0, d.qz)(r).resolveInner(s, -1),
                o;
              if (
                ('JSXStartTag' == a.name && (a = a.parent),
                '>' == i && 'JSXFragmentTag' == a.name)
              )
                return {
                  range: g.jT.cursor(s + 1),
                  changes: {from: s, insert: '></>'},
                };
              if ('/' == i && 'JSXFragmentTag' == a.name) {
                let e = a.parent,
                  n = null == e ? void 0 : e.parent;
                if (
                  e.from == s - 1 &&
                  (null === (t = n.lastChild) || void 0 === t
                    ? void 0
                    : t.name) != 'JSXEndTag' &&
                  (o = R(r.doc, null == n ? void 0 : n.firstChild, s))
                ) {
                  let e = `/${o}>`;
                  return {
                    range: g.jT.cursor(s + e.length),
                    changes: {from: s, insert: e},
                  };
                }
              } else if ('>' == i) {
                let e = (function (e) {
                  for (;;) {
                    if (
                      'JSXOpenTag' == e.name ||
                      'JSXSelfClosingTag' == e.name ||
                      'JSXFragmentTag' == e.name
                    )
                      return e;
                    if (!e.parent) return null;
                    e = e.parent;
                  }
                })(a);
                if (
                  e &&
                  (null === (n = e.lastChild) || void 0 === n
                    ? void 0
                    : n.name) != 'JSXEndTag' &&
                  '</' != r.sliceDoc(s, s + 2) &&
                  (o = R(r.doc, e, s))
                )
                  return {
                    range: g.jT.cursor(s + 1),
                    changes: {from: s, insert: `></${o}>`},
                  };
              }
              return {range: e};
            });
          return (
            !s.changes.empty &&
            (e.dispatch(s, {userEvent: 'input.type', scrollIntoView: !0}), !0)
          );
        });
    },
    59119: function (e, t, n) {
      'use strict';
      n.d(t, {
        Dv: function () {
          return A;
        },
        Gn: function () {
          return T;
        },
        K0: function () {
          return Y;
        },
        KC: function () {
          return c;
        },
        Qf: function () {
          return M;
        },
        SS: function () {
          return Z;
        },
        Um: function () {
          return ef;
        },
        a0: function () {
          return eh;
        },
        c: function () {
          return v;
        },
        kU: function () {
          return h;
        },
        n$: function () {
          return el;
        },
        nF: function () {
          return K;
        },
        qp: function () {
          return p;
        },
        qz: function () {
          return d;
        },
        ri: function () {
          return w;
        },
        tC: function () {
          return z;
        },
        uj: function () {
          return W;
        },
        vw: function () {
          return R;
        },
        x0: function () {
          return j;
        },
        y1: function () {
          return X;
        },
        ze: function () {
          return V;
        },
      });
      var i,
        r = n(41113),
        s = n(78120),
        a = n(47421),
        o = n(35524),
        O = n(28699);
      let l = new r.md();
      function h(e) {
        return s.r$.define({combine: e ? (t) => t.concat(e) : void 0});
      }
      let c = new r.md();
      class u {
        constructor(e, t, n = [], i = '') {
          (this.data = e),
            (this.name = i),
            s.yy.prototype.hasOwnProperty('tree') ||
              Object.defineProperty(s.yy.prototype, 'tree', {
                get() {
                  return d(this);
                },
              }),
            (this.parser = t),
            (this.extension = [
              y.of(this),
              s.yy.languageData.of((e, t, n) => {
                let i = f(e, t, n),
                  r = i.type.prop(l);
                if (!r) return [];
                let s = e.facet(r),
                  a = i.type.prop(c);
                if (a) {
                  let r = i.resolve(t - i.from, n);
                  for (let t of a)
                    if (t.test(r, e)) {
                      let n = e.facet(t.facet);
                      return 'replace' == t.type ? n : n.concat(s);
                    }
                }
                return s;
              }),
            ].concat(n));
        }
        isActiveAt(e, t, n = -1) {
          return f(e, t, n).type.prop(l) == this.data;
        }
        findRegions(e) {
          let t = e.facet(y);
          if ((null == t ? void 0 : t.data) == this.data)
            return [{from: 0, to: e.doc.length}];
          if (!t || !t.allowsNesting) return [];
          let n = [],
            i = (e, t) => {
              if (e.prop(l) == this.data) {
                n.push({from: t, to: t + e.length});
                return;
              }
              let s = e.prop(r.md.mounted);
              if (s) {
                if (s.tree.prop(l) == this.data) {
                  if (s.overlay)
                    for (let e of s.overlay)
                      n.push({from: e.from + t, to: e.to + t});
                  else n.push({from: t, to: t + e.length});
                  return;
                }
                if (s.overlay) {
                  let e = n.length;
                  if ((i(s.tree, s.overlay[0].from + t), n.length > e)) return;
                }
              }
              for (let n = 0; n < e.children.length; n++) {
                let s = e.children[n];
                s instanceof r.mp && i(s, e.positions[n] + t);
              }
            };
          return i(d(e), 0), n;
        }
        get allowsNesting() {
          return !0;
        }
      }
      function f(e, t, n) {
        let i = e.facet(y),
          s = d(e).topNode;
        if (!i || i.allowsNesting)
          for (let e = s; e; e = e.enter(t, n, r.vj.ExcludeBuffers))
            e.type.isTop && (s = e);
        return s;
      }
      u.setState = s.Py.define();
      class p extends u {
        constructor(e, t, n) {
          super(e, t, [], n), (this.parser = t);
        }
        static define(e) {
          let t = h(e.languageData);
          return new p(
            t,
            e.parser.configure({props: [l.add((e) => (e.isTop ? t : void 0))]}),
            e.name
          );
        }
        configure(e, t) {
          return new p(this.data, this.parser.configure(e), t || this.name);
        }
        get allowsNesting() {
          return this.parser.hasWrappers();
        }
      }
      function d(e) {
        let t = e.field(u.state, !1);
        return t ? t.tree : r.mp.empty;
      }
      class g {
        constructor(e) {
          (this.doc = e),
            (this.cursorPos = 0),
            (this.string = ''),
            (this.cursor = e.iter());
        }
        get length() {
          return this.doc.length;
        }
        syncTo(e) {
          return (
            (this.string = this.cursor.next(e - this.cursorPos).value),
            (this.cursorPos = e + this.string.length),
            this.cursorPos - this.string.length
          );
        }
        chunk(e) {
          return this.syncTo(e), this.string;
        }
        get lineChunks() {
          return !0;
        }
        read(e, t) {
          let n = this.cursorPos - this.string.length;
          return e < n || t >= this.cursorPos
            ? this.doc.sliceString(e, t)
            : this.string.slice(e - n, t - n);
        }
      }
      let m = null;
      class Q {
        constructor(e, t, n = [], i, r, s, a, o) {
          (this.parser = e),
            (this.state = t),
            (this.fragments = n),
            (this.tree = i),
            (this.treeLen = r),
            (this.viewport = s),
            (this.skipped = a),
            (this.scheduleOn = o),
            (this.parse = null),
            (this.tempSkipped = []);
        }
        static create(e, t, n) {
          return new Q(e, t, [], r.mp.empty, 0, n, [], null);
        }
        startParse() {
          return this.parser.startParse(new g(this.state.doc), this.fragments);
        }
        work(e, t) {
          return (null != t && t >= this.state.doc.length && (t = void 0),
          this.tree != r.mp.empty &&
            this.isDone(null != t ? t : this.state.doc.length))
            ? (this.takeTree(), !0)
            : this.withContext(() => {
                var n;
                if ('number' == typeof e) {
                  let t = Date.now() + e;
                  e = () => Date.now() > t;
                }
                for (
                  this.parse || (this.parse = this.startParse()),
                    null != t &&
                      (null == this.parse.stoppedAt ||
                        this.parse.stoppedAt > t) &&
                      t < this.state.doc.length &&
                      this.parse.stopAt(t);
                  ;

                ) {
                  let i = this.parse.advance();
                  if (i) {
                    if (
                      ((this.fragments = this.withoutTempSkipped(
                        r.i9.addTree(
                          i,
                          this.fragments,
                          null != this.parse.stoppedAt
                        )
                      )),
                      (this.treeLen =
                        null !== (n = this.parse.stoppedAt) && void 0 !== n
                          ? n
                          : this.state.doc.length),
                      (this.tree = i),
                      (this.parse = null),
                      !(this.treeLen < (null != t ? t : this.state.doc.length)))
                    )
                      return !0;
                    this.parse = this.startParse();
                  }
                  if (e()) return !1;
                }
              });
        }
        takeTree() {
          let e, t;
          this.parse &&
            (e = this.parse.parsedPos) >= this.treeLen &&
            ((null == this.parse.stoppedAt || this.parse.stoppedAt > e) &&
              this.parse.stopAt(e),
            this.withContext(() => {
              for (; !(t = this.parse.advance()); );
            }),
            (this.treeLen = e),
            (this.tree = t),
            (this.fragments = this.withoutTempSkipped(
              r.i9.addTree(this.tree, this.fragments, !0)
            )),
            (this.parse = null));
        }
        withContext(e) {
          let t = m;
          m = this;
          try {
            return e();
          } finally {
            m = t;
          }
        }
        withoutTempSkipped(e) {
          for (let t; (t = this.tempSkipped.pop()); ) e = S(e, t.from, t.to);
          return e;
        }
        changes(e, t) {
          let {
            fragments: n,
            tree: i,
            treeLen: s,
            viewport: a,
            skipped: o,
          } = this;
          if ((this.takeTree(), !e.empty)) {
            let t = [];
            if (
              (e.iterChangedRanges((e, n, i, r) =>
                t.push({fromA: e, toA: n, fromB: i, toB: r})
              ),
              (n = r.i9.applyChanges(n, t)),
              (i = r.mp.empty),
              (s = 0),
              (a = {from: e.mapPos(a.from, -1), to: e.mapPos(a.to, 1)}),
              this.skipped.length)
            )
              for (let t of ((o = []), this.skipped)) {
                let n = e.mapPos(t.from, 1),
                  i = e.mapPos(t.to, -1);
                n < i && o.push({from: n, to: i});
              }
          }
          return new Q(this.parser, t, n, i, s, a, o, this.scheduleOn);
        }
        updateViewport(e) {
          if (this.viewport.from == e.from && this.viewport.to == e.to)
            return !1;
          this.viewport = e;
          let t = this.skipped.length;
          for (let t = 0; t < this.skipped.length; t++) {
            let {from: n, to: i} = this.skipped[t];
            n < e.to &&
              i > e.from &&
              ((this.fragments = S(this.fragments, n, i)),
              this.skipped.splice(t--, 1));
          }
          return !(this.skipped.length >= t) && (this.reset(), !0);
        }
        reset() {
          this.parse && (this.takeTree(), (this.parse = null));
        }
        skipUntilInView(e, t) {
          this.skipped.push({from: e, to: t});
        }
        static getSkippingParser(e) {
          return new (class extends r._b {
            createParse(t, n, i) {
              let s = i[0].from,
                a = i[i.length - 1].to;
              return {
                parsedPos: s,
                advance() {
                  let t = m;
                  if (t) {
                    for (let e of i) t.tempSkipped.push(e);
                    e &&
                      (t.scheduleOn = t.scheduleOn
                        ? Promise.all([t.scheduleOn, e])
                        : e);
                  }
                  return (
                    (this.parsedPos = a), new r.mp(r.Jq.none, [], [], a - s)
                  );
                },
                stoppedAt: null,
                stopAt() {},
              };
            }
          })();
        }
        isDone(e) {
          e = Math.min(e, this.state.doc.length);
          let t = this.fragments;
          return (
            this.treeLen >= e && t.length && 0 == t[0].from && t[0].to >= e
          );
        }
        static get() {
          return m;
        }
      }
      function S(e, t, n) {
        return r.i9.applyChanges(e, [{fromA: t, toA: n, fromB: t, toB: n}]);
      }
      class $ {
        constructor(e) {
          (this.context = e), (this.tree = e.tree);
        }
        apply(e) {
          if (!e.docChanged && this.tree == this.context.tree) return this;
          let t = this.context.changes(e.changes, e.state),
            n =
              this.context.treeLen == e.startState.doc.length
                ? void 0
                : Math.max(
                    e.changes.mapPos(this.context.treeLen),
                    t.viewport.to
                  );
          return t.work(20, n) || t.takeTree(), new $(t);
        }
        static init(e) {
          let t = Math.min(3e3, e.doc.length),
            n = Q.create(e.facet(y).parser, e, {from: 0, to: t});
          return n.work(20, t) || n.takeTree(), new $(n);
        }
      }
      u.state = s.QQ.define({
        create: $.init,
        update(e, t) {
          for (let e of t.effects) if (e.is(u.setState)) return e.value;
          return t.startState.facet(y) != t.state.facet(y)
            ? $.init(t.state)
            : e.apply(t);
        },
      });
      let x = (e) => {
        let t = setTimeout(() => e(), 500);
        return () => clearTimeout(t);
      };
      'undefined' != typeof requestIdleCallback &&
        (x = (e) => {
          let t = -1,
            n = setTimeout(() => {
              t = requestIdleCallback(e, {timeout: 400});
            }, 100);
          return () => (t < 0 ? clearTimeout(n) : cancelIdleCallback(t));
        });
      let P =
          'undefined' != typeof navigator &&
          (null === (i = navigator.scheduling) || void 0 === i
            ? void 0
            : i.isInputPending)
            ? () => navigator.scheduling.isInputPending()
            : null,
        b = a.lg.fromClass(
          class {
            constructor(e) {
              (this.view = e),
                (this.working = null),
                (this.workScheduled = 0),
                (this.chunkEnd = -1),
                (this.chunkBudget = -1),
                (this.work = this.work.bind(this)),
                this.scheduleWork();
            }
            update(e) {
              let t = this.view.state.field(u.state).context;
              (t.updateViewport(e.view.viewport) ||
                this.view.viewport.to > t.treeLen) &&
                this.scheduleWork(),
                e.docChanged &&
                  (this.view.hasFocus && (this.chunkBudget += 50),
                  this.scheduleWork()),
                this.checkAsyncSchedule(t);
            }
            scheduleWork() {
              if (this.working) return;
              let {state: e} = this.view,
                t = e.field(u.state);
              (t.tree == t.context.tree && t.context.isDone(e.doc.length)) ||
                (this.working = x(this.work));
            }
            work(e) {
              this.working = null;
              let t = Date.now();
              if (
                (this.chunkEnd < t &&
                  (this.chunkEnd < 0 || this.view.hasFocus) &&
                  ((this.chunkEnd = t + 3e4), (this.chunkBudget = 3e3)),
                this.chunkBudget <= 0)
              )
                return;
              let {
                  state: n,
                  viewport: {to: i},
                } = this.view,
                r = n.field(u.state);
              if (r.tree == r.context.tree && r.context.isDone(i + 1e5)) return;
              let s =
                  Date.now() +
                  Math.min(
                    this.chunkBudget,
                    100,
                    e && !P ? Math.max(25, e.timeRemaining() - 5) : 1e9
                  ),
                a = r.context.treeLen < i && n.doc.length > i + 1e3,
                o = r.context.work(
                  () => (P && P()) || Date.now() > s,
                  i + (a ? 0 : 1e5)
                );
              (this.chunkBudget -= Date.now() - t),
                (o || this.chunkBudget <= 0) &&
                  (r.context.takeTree(),
                  this.view.dispatch({
                    effects: u.setState.of(new $(r.context)),
                  })),
                this.chunkBudget > 0 && !(o && !a) && this.scheduleWork(),
                this.checkAsyncSchedule(r.context);
            }
            checkAsyncSchedule(e) {
              e.scheduleOn &&
                (this.workScheduled++,
                e.scheduleOn
                  .then(() => this.scheduleWork())
                  .catch((e) => (0, a.OO)(this.view.state, e))
                  .then(() => this.workScheduled--),
                (e.scheduleOn = null));
            }
            destroy() {
              this.working && this.working();
            }
            isWorking() {
              return !!(this.working || this.workScheduled > 0);
            }
          },
          {
            eventHandlers: {
              focus() {
                this.scheduleWork();
              },
            },
          }
        ),
        y = s.r$.define({
          combine: (e) => (e.length ? e[0] : null),
          enables: (e) => [
            u.state,
            b,
            a.tk.contentAttributes.compute([e], (t) => {
              let n = t.facet(e);
              return n && n.name ? {'data-language': n.name} : {};
            }),
          ],
        });
      class w {
        constructor(e, t = []) {
          (this.language = e), (this.support = t), (this.extension = [e, t]);
        }
      }
      let k = s.r$.define(),
        v = s.r$.define({
          combine: (e) => {
            if (!e.length) return '  ';
            let t = e[0];
            if (!t || /\S/.test(t) || Array.from(t).some((e) => e != t[0]))
              throw Error('Invalid indent unit: ' + JSON.stringify(e[0]));
            return t;
          },
        });
      function X(e) {
        let t = e.facet(v);
        return 9 == t.charCodeAt(0) ? e.tabSize * t.length : t.length;
      }
      function Z(e, t) {
        let n = '',
          i = e.tabSize,
          r = e.facet(v)[0];
        if ('	' == r) {
          for (; t >= i; ) (n += '	'), (t -= i);
          r = ' ';
        }
        for (let e = 0; e < t; e++) n += r;
        return n;
      }
      function Y(e, t) {
        var n;
        for (let n of (e instanceof s.yy && (e = new T(e)), e.state.facet(k))) {
          let i = n(e, t);
          if (void 0 !== i) return i;
        }
        let i = d(e.state);
        return i
          ? ((n = e), C(i.resolveInner(t).enterUnfinishedNodesBefore(t), t, n))
          : null;
      }
      class T {
        constructor(e, t = {}) {
          (this.state = e), (this.options = t), (this.unit = X(e));
        }
        lineAt(e, t = 1) {
          let n = this.state.doc.lineAt(e),
            {simulateBreak: i, simulateDoubleBreak: r} = this.options;
          return null != i && i >= n.from && i <= n.to
            ? r && i == e
              ? {text: '', from: e}
              : (t < 0 ? i < e : i <= e)
              ? {text: n.text.slice(i - n.from), from: i}
              : {text: n.text.slice(0, i - n.from), from: n.from}
            : n;
        }
        textAfterPos(e, t = 1) {
          if (
            this.options.simulateDoubleBreak &&
            e == this.options.simulateBreak
          )
            return '';
          let {text: n, from: i} = this.lineAt(e, t);
          return n.slice(e - i, Math.min(n.length, e + 100 - i));
        }
        column(e, t = 1) {
          let {text: n, from: i} = this.lineAt(e, t),
            r = this.countColumn(n, e - i),
            s = this.options.overrideIndentation
              ? this.options.overrideIndentation(i)
              : -1;
          return s > -1 && (r += s - this.countColumn(n, n.search(/\S|$/))), r;
        }
        countColumn(e, t = e.length) {
          return (0, s.IS)(e, this.state.tabSize, t);
        }
        lineIndent(e, t = 1) {
          let {text: n, from: i} = this.lineAt(e, t),
            r = this.options.overrideIndentation;
          if (r) {
            let e = r(i);
            if (e > -1) return e;
          }
          return this.countColumn(n, n.search(/\S|$/));
        }
        get simulatedBreak() {
          return this.options.simulateBreak || null;
        }
      }
      let W = new r.md();
      function C(e, t, n) {
        for (; e; e = e.parent) {
          let i = (function (e) {
            let t = e.type.prop(W);
            if (t) return t;
            let n = e.firstChild,
              i;
            if (n && (i = n.type.prop(r.md.closedBy))) {
              let t = e.lastChild,
                n = t && i.indexOf(t.name) > -1;
              return (e) =>
                q(
                  e,
                  !0,
                  1,
                  void 0,
                  n &&
                    !(
                      e.pos == e.options.simulateBreak &&
                      e.options.simulateDoubleBreak
                    )
                    ? t.from
                    : void 0
                );
            }
            return null == e.parent ? U : null;
          })(e);
          if (i) return i(_.create(n, t, e));
        }
        return null;
      }
      function U() {
        return 0;
      }
      class _ extends T {
        constructor(e, t, n) {
          super(e.state, e.options),
            (this.base = e),
            (this.pos = t),
            (this.node = n);
        }
        static create(e, t, n) {
          return new _(e, t, n);
        }
        get textAfter() {
          return this.textAfterPos(this.pos);
        }
        get baseIndent() {
          let e = this.state.doc.lineAt(this.node.from);
          for (;;) {
            let t = this.node.resolve(e.from);
            for (; t.parent && t.parent.from == t.from; ) t = t.parent;
            if (
              (function (e, t) {
                for (let n = t; n; n = n.parent) if (e == n) return !0;
                return !1;
              })(t, this.node)
            )
              break;
            e = this.state.doc.lineAt(t.from);
          }
          return this.lineIndent(e.from);
        }
        continue() {
          let e = this.node.parent;
          return e ? C(e, this.pos, this.base) : 0;
        }
      }
      function R({closing: e, align: t = !0, units: n = 1}) {
        return (i) => q(i, t, n, e);
      }
      function q(e, t, n, i, r) {
        let s = e.textAfter,
          a = s.match(/^\s*/)[0].length,
          o = (i && s.slice(a, a + i.length) == i) || r == e.pos + a,
          O = t
            ? (function (e) {
                let t = e.node,
                  n = t.childAfter(t.from),
                  i = t.lastChild;
                if (!n) return null;
                let r = e.options.simulateBreak,
                  s = e.state.doc.lineAt(n.from),
                  a = null == r || r <= s.from ? s.to : Math.min(s.to, r);
                for (let e = n.to; ; ) {
                  let r = t.childAfter(e);
                  if (!r || r == i) return null;
                  if (!r.type.isSkipped) return r.from < a ? n : null;
                  e = r.to;
                }
              })(e)
            : null;
        return O
          ? o
            ? e.column(O.from)
            : e.column(O.to)
          : e.baseIndent + (o ? 0 : e.unit * n);
      }
      let V = (e) => e.baseIndent;
      function z({except: e, units: t = 1} = {}) {
        return (n) => {
          let i = e && e.test(n.textAfter);
          return n.baseIndent + (i ? 0 : t * n.unit);
        };
      }
      let j = new r.md();
      function A(e) {
        let t = e.firstChild,
          n = e.lastChild;
        return t && t.to < n.from
          ? {from: t.to, to: n.type.isError ? e.to : n.from}
          : null;
      }
      function G(e, t) {
        let n = t.mapPos(e.from, 1),
          i = t.mapPos(e.to, -1);
        return n >= i ? void 0 : {from: n, to: i};
      }
      let I = s.Py.define({map: G}),
        E = s.Py.define({map: G}),
        N = s.QQ.define({
          create: () => a.p.none,
          update(e, t) {
            for (let n of ((e = e.map(t.changes)), t.effects))
              n.is(I) &&
              !(function (e, t, n) {
                let i = !1;
                return (
                  e.between(t, t, (e, r) => {
                    e == t && r == n && (i = !0);
                  }),
                  i
                );
              })(e, n.value.from, n.value.to)
                ? (e = e.update({add: [D.range(n.value.from, n.value.to)]}))
                : n.is(E) &&
                  (e = e.update({
                    filter: (e, t) => n.value.from != e || n.value.to != t,
                    filterFrom: n.value.from,
                    filterTo: n.value.to,
                  }));
            if (t.selection) {
              let n = !1,
                {head: i} = t.selection.main;
              e.between(i, i, (e, t) => {
                e < i && t > i && (n = !0);
              }),
                n &&
                  (e = e.update({
                    filterFrom: i,
                    filterTo: i,
                    filter: (e, t) => t <= i || e >= i,
                  }));
            }
            return e;
          },
          provide: (e) => a.tk.decorations.from(e),
          toJSON(e, t) {
            let n = [];
            return (
              e.between(0, t.doc.length, (e, t) => {
                n.push(e, t);
              }),
              n
            );
          },
          fromJSON(e) {
            if (!Array.isArray(e) || e.length % 2)
              throw RangeError('Invalid JSON for fold state');
            let t = [];
            for (let n = 0; n < e.length; ) {
              let i = e[n++],
                r = e[n++];
              if ('number' != typeof i || 'number' != typeof r)
                throw RangeError('Invalid JSON for fold state');
              t.push(D.range(i, r));
            }
            return a.p.set(t, !0);
          },
        }),
        J = {placeholderDOM: null, placeholderText: '…'},
        B = s.r$.define({combine: (e) => (0, s.BO)(e, J)}),
        D = a.p.replace({
          widget: new (class extends a.l9 {
            toDOM(e) {
              let {state: t} = e,
                n = t.facet(B),
                i = (t) => {
                  var n, i, r, s;
                  let a,
                    o = e.lineBlockAt(e.posAtDOM(t.target)),
                    O =
                      ((n = e.state),
                      (i = o.from),
                      (r = o.to),
                      (a = null),
                      null === (s = n.field(N, !1)) ||
                        void 0 === s ||
                        s.between(i, r, (e, t) => {
                          (!a || a.from > e) && (a = {from: e, to: t});
                        }),
                      a);
                  O && e.dispatch({effects: E.of(O)}), t.preventDefault();
                };
              if (n.placeholderDOM) return n.placeholderDOM(e, i);
              let r = document.createElement('span');
              return (
                (r.textContent = n.placeholderText),
                r.setAttribute('aria-label', t.phrase('folded code')),
                (r.title = t.phrase('unfold')),
                (r.className = 'cm-foldPlaceholder'),
                (r.onclick = i),
                r
              );
            }
          })(),
        });
      class M {
        constructor(e, t) {
          let n;
          function i(e) {
            let t = O.V.newName();
            return ((n || (n = Object.create(null)))['.' + t] = e), t;
          }
          this.specs = e;
          let r = 'string' == typeof t.all ? t.all : t.all ? i(t.all) : void 0,
            s = t.scope;
          (this.scope =
            s instanceof u
              ? (e) => e.prop(l) == s.data
              : s
              ? (e) => e == s
              : void 0),
            (this.style = (0, o.QR)(
              e.map((e) => ({
                tag: e.tag,
                class: e.class || i(Object.assign({}, e, {tag: null})),
              })),
              {all: r}
            ).style),
            (this.module = n ? new O.V(n) : null),
            (this.themeType = t.themeType);
        }
        static define(e, t) {
          return new M(e, t || {});
        }
      }
      let L = s.r$.define(),
        F = s.r$.define({combine: (e) => (e.length ? [e[0]] : null)});
      function H(e) {
        let t = e.facet(L);
        return t.length ? t : e.facet(F);
      }
      function K(e, t) {
        let n = [ee],
          i;
        return (
          e instanceof M &&
            (e.module && n.push(a.tk.styleModule.of(e.module)),
            (i = e.themeType)),
          (null == t ? void 0 : t.fallback)
            ? n.push(F.of(e))
            : i
            ? n.push(
                L.computeN([a.tk.darkTheme], (t) =>
                  t.facet(a.tk.darkTheme) == ('dark' == i) ? [e] : []
                )
              )
            : n.push(L.of(e)),
          n
        );
      }
      let ee = s.Wl.high(
        a.lg.fromClass(
          class {
            constructor(e) {
              (this.markCache = Object.create(null)),
                (this.tree = d(e.state)),
                (this.decorations = this.buildDeco(e, H(e.state)));
            }
            update(e) {
              let t = d(e.state),
                n = H(e.state),
                i = n != H(e.startState);
              t.length < e.view.viewport.to && !i && t.type == this.tree.type
                ? (this.decorations = this.decorations.map(e.changes))
                : (t != this.tree || e.viewportChanged || i) &&
                  ((this.tree = t),
                  (this.decorations = this.buildDeco(e.view, n)));
            }
            buildDeco(e, t) {
              if (!t || !this.tree.length) return a.p.none;
              let n = new s.f_();
              for (let {from: i, to: r} of e.visibleRanges)
                (0, o.bW)(
                  this.tree,
                  t,
                  (e, t, i) => {
                    n.add(
                      e,
                      t,
                      this.markCache[i] ||
                        (this.markCache[i] = a.p.mark({class: i}))
                    );
                  },
                  i,
                  r
                );
              return n.finish();
            }
          },
          {decorations: (e) => e.decorations}
        )
      );
      o.pJ.meta,
        o.pJ.link,
        o.pJ.heading,
        o.pJ.emphasis,
        o.pJ.strong,
        o.pJ.strikethrough,
        o.pJ.keyword,
        o.pJ.atom,
        o.pJ.bool,
        o.pJ.url,
        o.pJ.contentSeparator,
        o.pJ.labelName,
        o.pJ.literal,
        o.pJ.inserted,
        o.pJ.string,
        o.pJ.deleted,
        o.pJ.regexp,
        o.pJ.escape,
        o.pJ.string,
        o.pJ.variableName,
        o.pJ.variableName,
        o.pJ.typeName,
        o.pJ.namespace,
        o.pJ.className,
        o.pJ.variableName,
        o.pJ.macroName,
        o.pJ.propertyName,
        o.pJ.comment,
        o.pJ.invalid;
      let et = a.tk.baseTheme({
          '&.cm-focused .cm-matchingBracket': {backgroundColor: '#328c8252'},
          '&.cm-focused .cm-nonmatchingBracket': {backgroundColor: '#bb555544'},
        }),
        en = '()[]{}',
        ei = s.r$.define({
          combine: (e) =>
            (0, s.BO)(e, {
              afterCursor: !0,
              brackets: en,
              maxScanDistance: 1e4,
              renderMatch: ea,
            }),
        }),
        er = a.p.mark({class: 'cm-matchingBracket'}),
        es = a.p.mark({class: 'cm-nonmatchingBracket'});
      function ea(e) {
        let t = [],
          n = e.matched ? er : es;
        return (
          t.push(n.range(e.start.from, e.start.to)),
          e.end && t.push(n.range(e.end.from, e.end.to)),
          t
        );
      }
      let eo = s.QQ.define({
          create: () => a.p.none,
          update(e, t) {
            if (!t.docChanged && !t.selection) return e;
            let n = [],
              i = t.state.facet(ei);
            for (let e of t.state.selection.ranges) {
              if (!e.empty) continue;
              let r =
                ef(t.state, e.head, -1, i) ||
                (e.head > 0 && ef(t.state, e.head - 1, 1, i)) ||
                (i.afterCursor &&
                  (ef(t.state, e.head, 1, i) ||
                    (e.head < t.state.doc.length &&
                      ef(t.state, e.head + 1, -1, i))));
              r && (n = n.concat(i.renderMatch(r, t.state)));
            }
            return a.p.set(n, !0);
          },
          provide: (e) => a.tk.decorations.from(e),
        }),
        eO = [eo, et];
      function el(e = {}) {
        return [ei.of(e), eO];
      }
      let eh = new r.md();
      function ec(e, t, n) {
        let i = e.prop(t < 0 ? r.md.openedBy : r.md.closedBy);
        if (i) return i;
        if (1 == e.name.length) {
          let i = n.indexOf(e.name);
          if (i > -1 && i % 2 == (t < 0 ? 1 : 0)) return [n[i + t]];
        }
        return null;
      }
      function eu(e) {
        let t = e.type.prop(eh);
        return t ? t(e.node) : e;
      }
      function ef(e, t, n, i = {}) {
        let r = i.maxScanDistance || 1e4,
          s = i.brackets || en,
          a = d(e),
          o = a.resolveInner(t, n);
        for (let e = o; e; e = e.parent) {
          let i = ec(e.type, n, s);
          if (i && e.from < e.to) {
            let r = eu(e);
            if (
              r &&
              (n > 0 ? t >= r.from && t < r.to : t > r.from && t <= r.to)
            )
              return (function (e, t, n, i, r, s, a) {
                let o = i.parent,
                  O = {from: r.from, to: r.to},
                  l = 0,
                  h = null == o ? void 0 : o.cursor();
                if (h && (n < 0 ? h.childBefore(i.from) : h.childAfter(i.to)))
                  do
                    if (n < 0 ? h.to <= i.from : h.from >= i.to) {
                      if (
                        0 == l &&
                        s.indexOf(h.type.name) > -1 &&
                        h.from < h.to
                      ) {
                        let e = eu(h);
                        return {
                          start: O,
                          end: e ? {from: e.from, to: e.to} : void 0,
                          matched: !0,
                        };
                      }
                      if (ec(h.type, n, a)) l++;
                      else if (ec(h.type, -n, a)) {
                        if (0 == l) {
                          let e = eu(h);
                          return {
                            start: O,
                            end:
                              e && e.from < e.to
                                ? {from: e.from, to: e.to}
                                : void 0,
                            matched: !1,
                          };
                        }
                        l--;
                      }
                    }
                  while (n < 0 ? h.prevSibling() : h.nextSibling());
                return {start: O, matched: !1};
              })(0, 0, n, e, r, i, s);
          }
        }
        return (function (e, t, n, i, r, s, a) {
          let o = n < 0 ? e.sliceDoc(t - 1, t) : e.sliceDoc(t, t + 1),
            O = a.indexOf(o);
          if (O < 0 || (O % 2 == 0) != n > 0) return null;
          let l = {from: n < 0 ? t - 1 : t, to: n > 0 ? t + 1 : t},
            h = e.doc.iterRange(t, n > 0 ? e.doc.length : 0),
            c = 0;
          for (let e = 0; !h.next().done && e <= s; ) {
            let s = h.value;
            n < 0 && (e += s.length);
            let o = t + e * n;
            for (
              let e = n > 0 ? 0 : s.length - 1, t = n > 0 ? s.length : -1;
              e != t;
              e += n
            ) {
              let t = a.indexOf(s[e]);
              if (!(t < 0) && i.resolveInner(o + e, 1).type == r) {
                if ((t % 2 == 0) == n > 0) c++;
                else {
                  if (1 == c)
                    return {
                      start: l,
                      end: {from: o + e, to: o + e + 1},
                      matched: t >> 1 == O >> 1,
                    };
                  c--;
                }
              }
            }
            n > 0 && (e += s.length);
          }
          return h.done ? {start: l, matched: !1} : null;
        })(e, t, n, a, o.type, r, s);
      }
      let ep = Object.create(null),
        ed = [r.Jq.none],
        eg = [],
        em = Object.create(null);
      for (let [e, t] of [
        ['variable', 'variableName'],
        ['variable-2', 'variableName.special'],
        ['string-2', 'string.special'],
        ['def', 'variableName.definition'],
        ['tag', 'tagName'],
        ['attribute', 'attributeName'],
        ['type', 'typeName'],
        ['builtin', 'variableName.standard'],
        ['qualifier', 'modifier'],
        ['error', 'invalid'],
        ['header', 'heading'],
        ['property', 'propertyName'],
      ])
        em[e] = (function (e, t) {
          let n = null;
          for (let i of t.split('.')) {
            let t = e[i] || o.pJ[i];
            t
              ? 'function' == typeof t
                ? n
                  ? (n = t(n))
                  : eQ(i, `Modifier ${i} used at start of tag`)
                : n
                ? eQ(i, `Tag ${i} used as modifier`)
                : (n = t)
              : eQ(i, `Unknown highlighting tag ${i}`);
          }
          if (!n) return 0;
          let i = t.replace(/ /g, '_'),
            s = r.Jq.define({
              id: ed.length,
              name: i,
              props: [(0, o.Gv)({[i]: n})],
            });
          return ed.push(s), s.id;
        })(ep, t);
      function eQ(e, t) {
        eg.indexOf(e) > -1 || (eg.push(e), console.warn(t));
      }
    },
    78120: function (e, t, n) {
      'use strict';
      let i;
      n.d(t, {
        BO: function () {
          return eS;
        },
        D0: function () {
          return eg;
        },
        Gz: function () {
          return eq;
        },
        IS: function () {
          return eR;
        },
        Py: function () {
          return eh;
        },
        QQ: function () {
          return E;
        },
        Wl: function () {
          return B;
        },
        Xs: function () {
          return ey;
        },
        YW: function () {
          return ec;
        },
        as: function () {
          return v;
        },
        bg: function () {
          return $;
        },
        cp: function () {
          return p;
        },
        f_: function () {
          return ew;
        },
        gc: function () {
          return w;
        },
        gm: function () {
          return S;
        },
        jT: function () {
          return _;
        },
        n0: function () {
          return k;
        },
        nZ: function () {
          return x;
        },
        q6: function () {
          return eo;
        },
        r$: function () {
          return V;
        },
        uU: function () {
          return e$;
        },
        xv: function () {
          return r;
        },
        yy: function () {
          return eQ;
        },
      });
      class r {
        constructor() {}
        lineAt(e) {
          if (e < 0 || e > this.length)
            throw RangeError(
              `Invalid position ${e} in document of length ${this.length}`
            );
          return this.lineInner(e, !1, 1, 0);
        }
        line(e) {
          if (e < 1 || e > this.lines)
            throw RangeError(
              `Invalid line number ${e} in ${this.lines}-line document`
            );
          return this.lineInner(e, !0, 1, 0);
        }
        replace(e, t, n) {
          let i = [];
          return (
            this.decompose(0, e, i, 2),
            n.length && n.decompose(0, n.length, i, 3),
            this.decompose(t, this.length, i, 1),
            a.from(i, this.length - (t - e) + n.length)
          );
        }
        append(e) {
          return this.replace(this.length, this.length, e);
        }
        slice(e, t = this.length) {
          let n = [];
          return this.decompose(e, t, n, 0), a.from(n, t - e);
        }
        eq(e) {
          if (e == this) return !0;
          if (e.length != this.length || e.lines != this.lines) return !1;
          let t = this.scanIdentical(e, 1),
            n = this.length - this.scanIdentical(e, -1),
            i = new O(this),
            r = new O(e);
          for (let e = t, s = t; ; ) {
            if (
              (i.next(e),
              r.next(e),
              (e = 0),
              i.lineBreak != r.lineBreak ||
                i.done != r.done ||
                i.value != r.value)
            )
              return !1;
            if (((s += i.value.length), i.done || s >= n)) return !0;
          }
        }
        iter(e = 1) {
          return new O(this, e);
        }
        iterRange(e, t = this.length) {
          return new l(this, e, t);
        }
        iterLines(e, t) {
          let n;
          if (null == e) n = this.iter();
          else {
            null == t && (t = this.lines + 1);
            let i = this.line(e).from;
            n = this.iterRange(
              i,
              Math.max(
                i,
                t == this.lines + 1
                  ? this.length
                  : t <= 1
                  ? 0
                  : this.line(t - 1).to
              )
            );
          }
          return new h(n);
        }
        toString() {
          return this.sliceString(0);
        }
        toJSON() {
          let e = [];
          return this.flatten(e), e;
        }
        static of(e) {
          if (0 == e.length)
            throw RangeError('A document must have at least one line');
          return 1 != e.length || e[0]
            ? e.length <= 32
              ? new s(e)
              : a.from(s.split(e, []))
            : r.empty;
        }
      }
      class s extends r {
        constructor(
          e,
          t = (function (e) {
            let t = -1;
            for (let n of e) t += n.length + 1;
            return t;
          })(e)
        ) {
          super(), (this.text = e), (this.length = t);
        }
        get lines() {
          return this.text.length;
        }
        get children() {
          return null;
        }
        lineInner(e, t, n, i) {
          for (let r = 0; ; r++) {
            let s = this.text[r],
              a = i + s.length;
            if ((t ? n : a) >= e) return new c(i, a, n, s);
            (i = a + 1), n++;
          }
        }
        decompose(e, t, n, i) {
          let r =
            e <= 0 && t >= this.length
              ? this
              : new s(
                  o(this.text, [''], e, t),
                  Math.min(t, this.length) - Math.max(0, e)
                );
          if (1 & i) {
            let e = n.pop(),
              t = o(r.text, e.text.slice(), 0, r.length);
            if (t.length <= 32) n.push(new s(t, e.length + r.length));
            else {
              let e = t.length >> 1;
              n.push(new s(t.slice(0, e)), new s(t.slice(e)));
            }
          } else n.push(r);
        }
        replace(e, t, n) {
          if (!(n instanceof s)) return super.replace(e, t, n);
          let i = o(this.text, o(n.text, o(this.text, [''], 0, e)), t),
            r = this.length + n.length - (t - e);
          return i.length <= 32 ? new s(i, r) : a.from(s.split(i, []), r);
        }
        sliceString(e, t = this.length, n = '\n') {
          let i = '';
          for (let r = 0, s = 0; r <= t && s < this.text.length; s++) {
            let a = this.text[s],
              o = r + a.length;
            r > e && s && (i += n),
              e < o && t > r && (i += a.slice(Math.max(0, e - r), t - r)),
              (r = o + 1);
          }
          return i;
        }
        flatten(e) {
          for (let t of this.text) e.push(t);
        }
        scanIdentical() {
          return 0;
        }
        static split(e, t) {
          let n = [],
            i = -1;
          for (let r of e)
            n.push(r),
              (i += r.length + 1),
              32 == n.length && (t.push(new s(n, i)), (n = []), (i = -1));
          return i > -1 && t.push(new s(n, i)), t;
        }
      }
      class a extends r {
        constructor(e, t) {
          for (let n of (super(),
          (this.children = e),
          (this.length = t),
          (this.lines = 0),
          e))
            this.lines += n.lines;
        }
        lineInner(e, t, n, i) {
          for (let r = 0; ; r++) {
            let s = this.children[r],
              a = i + s.length,
              o = n + s.lines - 1;
            if ((t ? o : a) >= e) return s.lineInner(e, t, n, i);
            (i = a + 1), (n = o + 1);
          }
        }
        decompose(e, t, n, i) {
          for (let r = 0, s = 0; s <= t && r < this.children.length; r++) {
            let a = this.children[r],
              o = s + a.length;
            if (e <= o && t >= s) {
              let r = i & ((s <= e ? 1 : 0) | (o >= t ? 2 : 0));
              s >= e && o <= t && !r
                ? n.push(a)
                : a.decompose(e - s, t - s, n, r);
            }
            s = o + 1;
          }
        }
        replace(e, t, n) {
          if (n.lines < this.lines)
            for (let i = 0, r = 0; i < this.children.length; i++) {
              let s = this.children[i],
                o = r + s.length;
              if (e >= r && t <= o) {
                let O = s.replace(e - r, t - r, n),
                  l = this.lines - s.lines + O.lines;
                if (O.lines < l >> 4 && O.lines > l >> 6) {
                  let r = this.children.slice();
                  return (r[i] = O), new a(r, this.length - (t - e) + n.length);
                }
                return super.replace(r, o, O);
              }
              r = o + 1;
            }
          return super.replace(e, t, n);
        }
        sliceString(e, t = this.length, n = '\n') {
          let i = '';
          for (let r = 0, s = 0; r < this.children.length && s <= t; r++) {
            let a = this.children[r],
              o = s + a.length;
            s > e && r && (i += n),
              e < o && t > s && (i += a.sliceString(e - s, t - s, n)),
              (s = o + 1);
          }
          return i;
        }
        flatten(e) {
          for (let t of this.children) t.flatten(e);
        }
        scanIdentical(e, t) {
          if (!(e instanceof a)) return 0;
          let n = 0,
            [i, r, s, o] =
              t > 0
                ? [0, 0, this.children.length, e.children.length]
                : [this.children.length - 1, e.children.length - 1, -1, -1];
          for (; ; i += t, r += t) {
            if (i == s || r == o) return n;
            let a = this.children[i],
              O = e.children[r];
            if (a != O) return n + a.scanIdentical(O, t);
            n += a.length + 1;
          }
        }
        static from(e, t = e.reduce((e, t) => e + t.length + 1, -1)) {
          let n = 0;
          for (let t of e) n += t.lines;
          if (n < 32) {
            let n = [];
            for (let t of e) t.flatten(n);
            return new s(n, t);
          }
          let i = Math.max(32, n >> 5),
            r = i << 1,
            o = i >> 1,
            O = [],
            l = 0,
            h = -1,
            c = [];
          function u() {
            0 != l &&
              (O.push(1 == c.length ? c[0] : a.from(c, h)),
              (h = -1),
              (l = c.length = 0));
          }
          for (let t of e)
            !(function e(t) {
              let n;
              if (t.lines > r && t instanceof a) for (let n of t.children) e(n);
              else
                t.lines > o && (l > o || !l)
                  ? (u(), O.push(t))
                  : t instanceof s &&
                    l &&
                    (n = c[c.length - 1]) instanceof s &&
                    t.lines + n.lines <= 32
                  ? ((l += t.lines),
                    (h += t.length + 1),
                    (c[c.length - 1] = new s(
                      n.text.concat(t.text),
                      n.length + 1 + t.length
                    )))
                  : (l + t.lines > i && u(),
                    (l += t.lines),
                    (h += t.length + 1),
                    c.push(t));
            })(t);
          return u(), 1 == O.length ? O[0] : new a(O, t);
        }
      }
      function o(e, t, n = 0, i = 1e9) {
        for (let r = 0, s = 0, a = !0; s < e.length && r <= i; s++) {
          let o = e[s],
            O = r + o.length;
          O >= n &&
            (O > i && (o = o.slice(0, i - r)),
            r < n && (o = o.slice(n - r)),
            a ? ((t[t.length - 1] += o), (a = !1)) : t.push(o)),
            (r = O + 1);
        }
        return t;
      }
      r.empty = new s([''], 0);
      class O {
        constructor(e, t = 1) {
          (this.dir = t),
            (this.done = !1),
            (this.lineBreak = !1),
            (this.value = ''),
            (this.nodes = [e]),
            (this.offsets = [
              t > 0
                ? 1
                : (e instanceof s ? e.text.length : e.children.length) << 1,
            ]);
        }
        nextInner(e, t) {
          for (this.done = this.lineBreak = !1; ; ) {
            let n = this.nodes.length - 1,
              i = this.nodes[n],
              r = this.offsets[n],
              a = r >> 1,
              o = i instanceof s ? i.text.length : i.children.length;
            if (a == (t > 0 ? o : 0)) {
              if (0 == n) return (this.done = !0), (this.value = ''), this;
              t > 0 && this.offsets[n - 1]++,
                this.nodes.pop(),
                this.offsets.pop();
            } else if ((1 & r) == (t > 0 ? 0 : 1)) {
              if (((this.offsets[n] += t), 0 == e))
                return (this.lineBreak = !0), (this.value = '\n'), this;
              e--;
            } else if (i instanceof s) {
              let r = i.text[a + (t < 0 ? -1 : 0)];
              if (((this.offsets[n] += t), r.length > Math.max(0, e)))
                return (
                  (this.value =
                    0 == e ? r : t > 0 ? r.slice(e) : r.slice(0, r.length - e)),
                  this
                );
              e -= r.length;
            } else {
              let r = i.children[a + (t < 0 ? -1 : 0)];
              e > r.length
                ? ((e -= r.length), (this.offsets[n] += t))
                : (t < 0 && this.offsets[n]--,
                  this.nodes.push(r),
                  this.offsets.push(
                    t > 0
                      ? 1
                      : (r instanceof s ? r.text.length : r.children.length) <<
                          1
                  ));
            }
          }
        }
        next(e = 0) {
          return (
            e < 0 && (this.nextInner(-e, -this.dir), (e = this.value.length)),
            this.nextInner(e, this.dir)
          );
        }
      }
      class l {
        constructor(e, t, n) {
          (this.value = ''),
            (this.done = !1),
            (this.cursor = new O(e, t > n ? -1 : 1)),
            (this.pos = t > n ? e.length : 0),
            (this.from = Math.min(t, n)),
            (this.to = Math.max(t, n));
        }
        nextInner(e, t) {
          if (t < 0 ? this.pos <= this.from : this.pos >= this.to)
            return (this.value = ''), (this.done = !0), this;
          e += Math.max(0, t < 0 ? this.pos - this.to : this.from - this.pos);
          let n = t < 0 ? this.pos - this.from : this.to - this.pos;
          e > n && (e = n), (n -= e);
          let {value: i} = this.cursor.next(e);
          return (
            (this.pos += (i.length + e) * t),
            (this.value =
              i.length <= n
                ? i
                : t < 0
                ? i.slice(i.length - n)
                : i.slice(0, n)),
            (this.done = !this.value),
            this
          );
        }
        next(e = 0) {
          return (
            e < 0
              ? (e = Math.max(e, this.from - this.pos))
              : e > 0 && (e = Math.min(e, this.to - this.pos)),
            this.nextInner(e, this.cursor.dir)
          );
        }
        get lineBreak() {
          return this.cursor.lineBreak && '' != this.value;
        }
      }
      class h {
        constructor(e) {
          (this.inner = e),
            (this.afterBreak = !0),
            (this.value = ''),
            (this.done = !1);
        }
        next(e = 0) {
          let {done: t, lineBreak: n, value: i} = this.inner.next(e);
          return (
            t
              ? ((this.done = !0), (this.value = ''))
              : n
              ? this.afterBreak
                ? (this.value = '')
                : ((this.afterBreak = !0), this.next())
              : ((this.value = i), (this.afterBreak = !1)),
            this
          );
        }
        get lineBreak() {
          return !1;
        }
      }
      'undefined' != typeof Symbol &&
        ((r.prototype[Symbol.iterator] = function () {
          return this.iter();
        }),
        (O.prototype[Symbol.iterator] =
          l.prototype[Symbol.iterator] =
          h.prototype[Symbol.iterator] =
            function () {
              return this;
            }));
      class c {
        constructor(e, t, n, i) {
          (this.from = e), (this.to = t), (this.number = n), (this.text = i);
        }
        get length() {
          return this.to - this.from;
        }
      }
      let u =
        'lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o'
          .split(',')
          .map((e) => (e ? parseInt(e, 36) : 1));
      for (let e = 1; e < u.length; e++) u[e] += u[e - 1];
      function f(e) {
        return e >= 127462 && e <= 127487;
      }
      function p(e, t, n = !0, i = !0) {
        return (n ? d : g)(e, t, i);
      }
      function d(e, t, n) {
        if (t == e.length) return t;
        t && m(e.charCodeAt(t)) && Q(e.charCodeAt(t - 1)) && t--;
        let i = S(e, t);
        for (t += x(i); t < e.length; ) {
          let r = S(e, t);
          if (
            8205 == i ||
            8205 == r ||
            (n &&
              (function (e) {
                for (let t = 1; t < u.length; t += 2)
                  if (u[t] > e) return u[t - 1] <= e;
                return !1;
              })(r))
          )
            (t += x(r)), (i = r);
          else if (f(r)) {
            let n = 0,
              i = t - 2;
            for (; i >= 0 && f(S(e, i)); ) n++, (i -= 2);
            if (n % 2 == 0) break;
            t += 2;
          } else break;
        }
        return t;
      }
      function g(e, t, n) {
        for (; t > 0; ) {
          let i = d(e, t - 2, n);
          if (i < t) return i;
          t--;
        }
        return 0;
      }
      function m(e) {
        return e >= 56320 && e < 57344;
      }
      function Q(e) {
        return e >= 55296 && e < 56320;
      }
      function S(e, t) {
        let n = e.charCodeAt(t);
        if (!Q(n) || t + 1 == e.length) return n;
        let i = e.charCodeAt(t + 1);
        return m(i) ? ((n - 55296) << 10) + (i - 56320) + 65536 : n;
      }
      function $(e) {
        return e <= 65535
          ? String.fromCharCode(e)
          : String.fromCharCode(
              ((e -= 65536) >> 10) + 55296,
              (1023 & e) + 56320
            );
      }
      function x(e) {
        return e < 65536 ? 1 : 2;
      }
      let P = /\r\n?|\n/;
      var b,
        y,
        w =
          (((b = w || (w = {}))[(b.Simple = 0)] = 'Simple'),
          (b[(b.TrackDel = 1)] = 'TrackDel'),
          (b[(b.TrackBefore = 2)] = 'TrackBefore'),
          (b[(b.TrackAfter = 3)] = 'TrackAfter'),
          b);
      class k {
        constructor(e) {
          this.sections = e;
        }
        get length() {
          let e = 0;
          for (let t = 0; t < this.sections.length; t += 2)
            e += this.sections[t];
          return e;
        }
        get newLength() {
          let e = 0;
          for (let t = 0; t < this.sections.length; t += 2) {
            let n = this.sections[t + 1];
            e += n < 0 ? this.sections[t] : n;
          }
          return e;
        }
        get empty() {
          return (
            0 == this.sections.length ||
            (2 == this.sections.length && this.sections[1] < 0)
          );
        }
        iterGaps(e) {
          for (let t = 0, n = 0, i = 0; t < this.sections.length; ) {
            let r = this.sections[t++],
              s = this.sections[t++];
            s < 0 ? (e(n, i, r), (i += r)) : (i += s), (n += r);
          }
        }
        iterChangedRanges(e, t = !1) {
          Y(this, e, t);
        }
        get invertedDesc() {
          let e = [];
          for (let t = 0; t < this.sections.length; ) {
            let n = this.sections[t++],
              i = this.sections[t++];
            i < 0 ? e.push(n, i) : e.push(i, n);
          }
          return new k(e);
        }
        composeDesc(e) {
          return this.empty ? e : e.empty ? this : W(this, e);
        }
        mapDesc(e, t = !1) {
          return e.empty ? this : T(this, e, t);
        }
        mapPos(e, t = -1, n = w.Simple) {
          let i = 0,
            r = 0;
          for (let s = 0; s < this.sections.length; ) {
            let a = this.sections[s++],
              o = this.sections[s++],
              O = i + a;
            if (o < 0) {
              if (O > e) return r + (e - i);
              r += a;
            } else {
              if (
                n != w.Simple &&
                O >= e &&
                ((n == w.TrackDel && i < e && O > e) ||
                  (n == w.TrackBefore && i < e) ||
                  (n == w.TrackAfter && O > e))
              )
                return null;
              if (O > e || (O == e && t < 0 && !a))
                return e == i || t < 0 ? r : r + o;
              r += o;
            }
            i = O;
          }
          if (e > i)
            throw RangeError(
              `Position ${e} is out of range for changeset of length ${i}`
            );
          return r;
        }
        touchesRange(e, t = e) {
          for (let n = 0, i = 0; n < this.sections.length && i <= t; ) {
            let r = this.sections[n++],
              s = this.sections[n++],
              a = i + r;
            if (s >= 0 && i <= t && a >= e)
              return !(i < e) || !(a > t) || 'cover';
            i = a;
          }
          return !1;
        }
        toString() {
          let e = '';
          for (let t = 0; t < this.sections.length; ) {
            let n = this.sections[t++],
              i = this.sections[t++];
            e += (e ? ' ' : '') + n + (i >= 0 ? ':' + i : '');
          }
          return e;
        }
        toJSON() {
          return this.sections;
        }
        static fromJSON(e) {
          if (
            !Array.isArray(e) ||
            e.length % 2 ||
            e.some((e) => 'number' != typeof e)
          )
            throw RangeError('Invalid JSON representation of ChangeDesc');
          return new k(e);
        }
        static create(e) {
          return new k(e);
        }
      }
      class v extends k {
        constructor(e, t) {
          super(e), (this.inserted = t);
        }
        apply(e) {
          if (this.length != e.length)
            throw RangeError(
              'Applying change set to a document with the wrong length'
            );
          return (
            Y(this, (t, n, i, r, s) => (e = e.replace(i, i + (n - t), s)), !1),
            e
          );
        }
        mapDesc(e, t = !1) {
          return T(this, e, t, !0);
        }
        invert(e) {
          let t = this.sections.slice(),
            n = [];
          for (let i = 0, s = 0; i < t.length; i += 2) {
            let a = t[i],
              o = t[i + 1];
            if (o >= 0) {
              (t[i] = o), (t[i + 1] = a);
              let O = i >> 1;
              for (; n.length < O; ) n.push(r.empty);
              n.push(a ? e.slice(s, s + a) : r.empty);
            }
            s += a;
          }
          return new v(t, n);
        }
        compose(e) {
          return this.empty ? e : e.empty ? this : W(this, e, !0);
        }
        map(e, t = !1) {
          return e.empty ? this : T(this, e, t, !0);
        }
        iterChanges(e, t = !1) {
          Y(this, e, t);
        }
        get desc() {
          return k.create(this.sections);
        }
        filter(e) {
          let t = [],
            n = [],
            i = [],
            r = new C(this);
          e: for (let s = 0, a = 0; ; ) {
            let o = s == e.length ? 1e9 : e[s++];
            for (; a < o || (a == o && 0 == r.len); ) {
              if (r.done) break e;
              let e = Math.min(r.len, o - a);
              X(i, e, -1);
              let s = -1 == r.ins ? -1 : 0 == r.off ? r.ins : 0;
              X(t, e, s), s > 0 && Z(n, t, r.text), r.forward(e), (a += e);
            }
            let O = e[s++];
            for (; a < O; ) {
              if (r.done) break e;
              let e = Math.min(r.len, O - a);
              X(t, e, -1),
                X(i, e, -1 == r.ins ? -1 : 0 == r.off ? r.ins : 0),
                r.forward(e),
                (a += e);
            }
          }
          return {changes: new v(t, n), filtered: k.create(i)};
        }
        toJSON() {
          let e = [];
          for (let t = 0; t < this.sections.length; t += 2) {
            let n = this.sections[t],
              i = this.sections[t + 1];
            i < 0
              ? e.push(n)
              : 0 == i
              ? e.push([n])
              : e.push([n].concat(this.inserted[t >> 1].toJSON()));
          }
          return e;
        }
        static of(e, t, n) {
          let i = [],
            s = [],
            a = 0,
            o = null;
          function O(e = !1) {
            if (!e && !i.length) return;
            a < t && X(i, t - a, -1);
            let n = new v(i, s);
            (o = o ? o.compose(n.map(o)) : n), (i = []), (s = []), (a = 0);
          }
          return (
            !(function e(l) {
              if (Array.isArray(l)) for (let t of l) e(t);
              else if (l instanceof v) {
                if (l.length != t)
                  throw RangeError(
                    `Mismatched change set length (got ${l.length}, expected ${t})`
                  );
                O(), (o = o ? o.compose(l.map(o)) : l);
              } else {
                let {from: e, to: o = e, insert: h} = l;
                if (e > o || e < 0 || o > t)
                  throw RangeError(
                    `Invalid change range ${e} to ${o} (in doc of length ${t})`
                  );
                let c = h
                    ? 'string' == typeof h
                      ? r.of(h.split(n || P))
                      : h
                    : r.empty,
                  u = c.length;
                if (e == o && 0 == u) return;
                e < a && O(),
                  e > a && X(i, e - a, -1),
                  X(i, o - e, u),
                  Z(s, i, c),
                  (a = o);
              }
            })(e),
            O(!o),
            o
          );
        }
        static empty(e) {
          return new v(e ? [e, -1] : [], []);
        }
        static fromJSON(e) {
          if (!Array.isArray(e))
            throw RangeError('Invalid JSON representation of ChangeSet');
          let t = [],
            n = [];
          for (let i = 0; i < e.length; i++) {
            let s = e[i];
            if ('number' == typeof s) t.push(s, -1);
            else if (
              !Array.isArray(s) ||
              'number' != typeof s[0] ||
              s.some((e, t) => t && 'string' != typeof e)
            )
              throw RangeError('Invalid JSON representation of ChangeSet');
            else if (1 == s.length) t.push(s[0], 0);
            else {
              for (; n.length < i; ) n.push(r.empty);
              (n[i] = r.of(s.slice(1))), t.push(s[0], n[i].length);
            }
          }
          return new v(t, n);
        }
        static createSet(e, t) {
          return new v(e, t);
        }
      }
      function X(e, t, n, i = !1) {
        if (0 == t && n <= 0) return;
        let r = e.length - 2;
        r >= 0 && n <= 0 && n == e[r + 1]
          ? (e[r] += t)
          : 0 == t && 0 == e[r]
          ? (e[r + 1] += n)
          : i
          ? ((e[r] += t), (e[r + 1] += n))
          : e.push(t, n);
      }
      function Z(e, t, n) {
        if (0 == n.length) return;
        let i = (t.length - 2) >> 1;
        if (i < e.length) e[e.length - 1] = e[e.length - 1].append(n);
        else {
          for (; e.length < i; ) e.push(r.empty);
          e.push(n);
        }
      }
      function Y(e, t, n) {
        let i = e.inserted;
        for (let s = 0, a = 0, o = 0; o < e.sections.length; ) {
          let O = e.sections[o++],
            l = e.sections[o++];
          if (l < 0) (s += O), (a += O);
          else {
            let h = s,
              c = a,
              u = r.empty;
            for (
              ;
              (h += O),
                (c += l),
                l && i && (u = u.append(i[(o - 2) >> 1])),
                !n && o != e.sections.length && !(e.sections[o + 1] < 0);

            )
              (O = e.sections[o++]), (l = e.sections[o++]);
            t(s, h, a, c, u), (s = h), (a = c);
          }
        }
      }
      function T(e, t, n, i = !1) {
        let r = [],
          s = i ? [] : null,
          a = new C(e),
          o = new C(t);
        for (let e = -1; ; )
          if (-1 == a.ins && -1 == o.ins) {
            let e = Math.min(a.len, o.len);
            X(r, e, -1), a.forward(e), o.forward(e);
          } else if (
            o.ins >= 0 &&
            (a.ins < 0 ||
              e == a.i ||
              (0 == a.off && (o.len < a.len || (o.len == a.len && !n))))
          ) {
            let t = o.len;
            for (X(r, o.ins, -1); t; ) {
              let n = Math.min(a.len, t);
              a.ins >= 0 &&
                e < a.i &&
                a.len <= n &&
                (X(r, 0, a.ins), s && Z(s, r, a.text), (e = a.i)),
                a.forward(n),
                (t -= n);
            }
            o.next();
          } else if (a.ins >= 0) {
            let t = 0,
              n = a.len;
            for (; n; )
              if (-1 == o.ins) {
                let e = Math.min(n, o.len);
                (t += e), (n -= e), o.forward(e);
              } else if (0 == o.ins && o.len < n) (n -= o.len), o.next();
              else break;
            X(r, t, e < a.i ? a.ins : 0),
              s && e < a.i && Z(s, r, a.text),
              (e = a.i),
              a.forward(a.len - n);
          } else if (a.done && o.done)
            return s ? v.createSet(r, s) : k.create(r);
          else throw Error('Mismatched change set lengths');
      }
      function W(e, t, n = !1) {
        let i = [],
          r = n ? [] : null,
          s = new C(e),
          a = new C(t);
        for (let e = !1; ; ) {
          if (s.done && a.done) return r ? v.createSet(i, r) : k.create(i);
          if (0 == s.ins) X(i, s.len, 0, e), s.next();
          else if (0 != a.len || a.done) {
            if (s.done || a.done) throw Error('Mismatched change set lengths');
            {
              let t = Math.min(s.len2, a.len),
                n = i.length;
              if (-1 == s.ins) {
                let n = -1 == a.ins ? -1 : a.off ? 0 : a.ins;
                X(i, t, n, e), r && n && Z(r, i, a.text);
              } else
                -1 == a.ins
                  ? (X(i, s.off ? 0 : s.len, t, e), r && Z(r, i, s.textBit(t)))
                  : (X(i, s.off ? 0 : s.len, a.off ? 0 : a.ins, e),
                    r && !a.off && Z(r, i, a.text));
              (e =
                (s.ins > t || (a.ins >= 0 && a.len > t)) &&
                (e || i.length > n)),
                s.forward2(t),
                a.forward(t);
            }
          } else X(i, 0, a.ins, e), r && Z(r, i, a.text), a.next();
        }
      }
      class C {
        constructor(e) {
          (this.set = e), (this.i = 0), this.next();
        }
        next() {
          let {sections: e} = this.set;
          this.i < e.length
            ? ((this.len = e[this.i++]), (this.ins = e[this.i++]))
            : ((this.len = 0), (this.ins = -2)),
            (this.off = 0);
        }
        get done() {
          return -2 == this.ins;
        }
        get len2() {
          return this.ins < 0 ? this.len : this.ins;
        }
        get text() {
          let {inserted: e} = this.set,
            t = (this.i - 2) >> 1;
          return t >= e.length ? r.empty : e[t];
        }
        textBit(e) {
          let {inserted: t} = this.set,
            n = (this.i - 2) >> 1;
          return n >= t.length && !e
            ? r.empty
            : t[n].slice(this.off, null == e ? void 0 : this.off + e);
        }
        forward(e) {
          e == this.len ? this.next() : ((this.len -= e), (this.off += e));
        }
        forward2(e) {
          -1 == this.ins
            ? this.forward(e)
            : e == this.ins
            ? this.next()
            : ((this.ins -= e), (this.off += e));
        }
      }
      class U {
        constructor(e, t, n) {
          (this.from = e), (this.to = t), (this.flags = n);
        }
        get anchor() {
          return 16 & this.flags ? this.to : this.from;
        }
        get head() {
          return 16 & this.flags ? this.from : this.to;
        }
        get empty() {
          return this.from == this.to;
        }
        get assoc() {
          return 4 & this.flags ? -1 : 8 & this.flags ? 1 : 0;
        }
        get bidiLevel() {
          let e = 3 & this.flags;
          return 3 == e ? null : e;
        }
        get goalColumn() {
          let e = this.flags >> 5;
          return 33554431 == e ? void 0 : e;
        }
        map(e, t = -1) {
          let n, i;
          return (
            this.empty
              ? (n = i = e.mapPos(this.from, t))
              : ((n = e.mapPos(this.from, 1)), (i = e.mapPos(this.to, -1))),
            n == this.from && i == this.to ? this : new U(n, i, this.flags)
          );
        }
        extend(e, t = e) {
          if (e <= this.anchor && t >= this.anchor) return _.range(e, t);
          let n = Math.abs(e - this.anchor) > Math.abs(t - this.anchor) ? e : t;
          return _.range(this.anchor, n);
        }
        eq(e) {
          return this.anchor == e.anchor && this.head == e.head;
        }
        toJSON() {
          return {anchor: this.anchor, head: this.head};
        }
        static fromJSON(e) {
          if (!e || 'number' != typeof e.anchor || 'number' != typeof e.head)
            throw RangeError('Invalid JSON representation for SelectionRange');
          return _.range(e.anchor, e.head);
        }
        static create(e, t, n) {
          return new U(e, t, n);
        }
      }
      class _ {
        constructor(e, t) {
          (this.ranges = e), (this.mainIndex = t);
        }
        map(e, t = -1) {
          return e.empty
            ? this
            : _.create(
                this.ranges.map((n) => n.map(e, t)),
                this.mainIndex
              );
        }
        eq(e) {
          if (
            this.ranges.length != e.ranges.length ||
            this.mainIndex != e.mainIndex
          )
            return !1;
          for (let t = 0; t < this.ranges.length; t++)
            if (!this.ranges[t].eq(e.ranges[t])) return !1;
          return !0;
        }
        get main() {
          return this.ranges[this.mainIndex];
        }
        asSingle() {
          return 1 == this.ranges.length ? this : new _([this.main], 0);
        }
        addRange(e, t = !0) {
          return _.create([e].concat(this.ranges), t ? 0 : this.mainIndex + 1);
        }
        replaceRange(e, t = this.mainIndex) {
          let n = this.ranges.slice();
          return (n[t] = e), _.create(n, this.mainIndex);
        }
        toJSON() {
          return {
            ranges: this.ranges.map((e) => e.toJSON()),
            main: this.mainIndex,
          };
        }
        static fromJSON(e) {
          if (
            !e ||
            !Array.isArray(e.ranges) ||
            'number' != typeof e.main ||
            e.main >= e.ranges.length
          )
            throw RangeError('Invalid JSON representation for EditorSelection');
          return new _(
            e.ranges.map((e) => U.fromJSON(e)),
            e.main
          );
        }
        static single(e, t = e) {
          return new _([_.range(e, t)], 0);
        }
        static create(e, t = 0) {
          if (0 == e.length)
            throw RangeError('A selection needs at least one range');
          for (let n = 0, i = 0; i < e.length; i++) {
            let r = e[i];
            if (r.empty ? r.from <= n : r.from < n)
              return _.normalized(e.slice(), t);
            n = r.to;
          }
          return new _(e, t);
        }
        static cursor(e, t = 0, n, i) {
          return U.create(
            e,
            e,
            (0 == t ? 0 : t < 0 ? 4 : 8) |
              (null == n ? 3 : Math.min(2, n)) |
              ((null != i ? i : 33554431) << 5)
          );
        }
        static range(e, t, n, i) {
          let r =
            ((null != n ? n : 33554431) << 5) |
            (null == i ? 3 : Math.min(2, i));
          return t < e
            ? U.create(t, e, 24 | r)
            : U.create(e, t, (t > e ? 4 : 0) | r);
        }
        static normalized(e, t = 0) {
          let n = e[t];
          e.sort((e, t) => e.from - t.from), (t = e.indexOf(n));
          for (let n = 1; n < e.length; n++) {
            let i = e[n],
              r = e[n - 1];
            if (i.empty ? i.from <= r.to : i.from < r.to) {
              let s = r.from,
                a = Math.max(i.to, r.to);
              n <= t && t--,
                e.splice(
                  --n,
                  2,
                  i.anchor > i.head ? _.range(a, s) : _.range(s, a)
                );
            }
          }
          return new _(e, t);
        }
      }
      function R(e, t) {
        for (let n of e.ranges)
          if (n.to > t)
            throw RangeError('Selection points outside of document');
      }
      let q = 0;
      class V {
        constructor(e, t, n, i, r) {
          (this.combine = e),
            (this.compareInput = t),
            (this.compare = n),
            (this.isStatic = i),
            (this.id = q++),
            (this.default = e([])),
            (this.extensions = 'function' == typeof r ? r(this) : r);
        }
        static define(e = {}) {
          return new V(
            e.combine || ((e) => e),
            e.compareInput || ((e, t) => e === t),
            e.compare || (e.combine ? (e, t) => e === t : z),
            !!e.static,
            e.enables
          );
        }
        of(e) {
          return new j([], this, 0, e);
        }
        compute(e, t) {
          if (this.isStatic) throw Error("Can't compute a static facet");
          return new j(e, this, 1, t);
        }
        computeN(e, t) {
          if (this.isStatic) throw Error("Can't compute a static facet");
          return new j(e, this, 2, t);
        }
        from(e, t) {
          return t || (t = (e) => e), this.compute([e], (n) => t(n.field(e)));
        }
      }
      function z(e, t) {
        return (
          e == t || (e.length == t.length && e.every((e, n) => e === t[n]))
        );
      }
      class j {
        constructor(e, t, n, i) {
          (this.dependencies = e),
            (this.facet = t),
            (this.type = n),
            (this.value = i),
            (this.id = q++);
        }
        dynamicSlot(e) {
          var t;
          let n = this.value,
            i = this.facet.compareInput,
            r = this.id,
            s = e[r] >> 1,
            a = 2 == this.type,
            o = !1,
            O = !1,
            l = [];
          for (let n of this.dependencies)
            'doc' == n
              ? (o = !0)
              : 'selection' == n
              ? (O = !0)
              : ((null !== (t = e[n.id]) && void 0 !== t ? t : 1) & 1) == 0 &&
                l.push(e[n.id]);
          return {
            create: (e) => ((e.values[s] = n(e)), 1),
            update(e, t) {
              if (
                (o && t.docChanged) ||
                (O && (t.docChanged || t.selection)) ||
                G(e, l)
              ) {
                let t = n(e);
                if (a ? !A(t, e.values[s], i) : !i(t, e.values[s]))
                  return (e.values[s] = t), 1;
              }
              return 0;
            },
            reconfigure: (e, t) => {
              let o,
                O = t.config.address[r];
              if (null != O) {
                let r = K(t, O);
                if (
                  this.dependencies.every((n) =>
                    n instanceof V
                      ? t.facet(n) === e.facet(n)
                      : !(n instanceof E) || t.field(n, !1) == e.field(n, !1)
                  ) ||
                  (a ? A((o = n(e)), r, i) : i((o = n(e)), r))
                )
                  return (e.values[s] = r), 0;
              } else o = n(e);
              return (e.values[s] = o), 1;
            },
          };
        }
      }
      function A(e, t, n) {
        if (e.length != t.length) return !1;
        for (let i = 0; i < e.length; i++) if (!n(e[i], t[i])) return !1;
        return !0;
      }
      function G(e, t) {
        let n = !1;
        for (let i of t) 1 & H(e, i) && (n = !0);
        return n;
      }
      let I = V.define({static: !0});
      class E {
        constructor(e, t, n, i, r) {
          (this.id = e),
            (this.createF = t),
            (this.updateF = n),
            (this.compareF = i),
            (this.spec = r),
            (this.provides = void 0);
        }
        static define(e) {
          let t = new E(
            q++,
            e.create,
            e.update,
            e.compare || ((e, t) => e === t),
            e
          );
          return e.provide && (t.provides = e.provide(t)), t;
        }
        create(e) {
          let t = e.facet(I).find((e) => e.field == this);
          return ((null == t ? void 0 : t.create) || this.createF)(e);
        }
        slot(e) {
          let t = e[this.id] >> 1;
          return {
            create: (e) => ((e.values[t] = this.create(e)), 1),
            update: (e, n) => {
              let i = e.values[t],
                r = this.updateF(i, n);
              return this.compareF(i, r) ? 0 : ((e.values[t] = r), 1);
            },
            reconfigure: (e, n) =>
              null != n.config.address[this.id]
                ? ((e.values[t] = n.field(this)), 0)
                : ((e.values[t] = this.create(e)), 1),
          };
        }
        init(e) {
          return [this, I.of({field: this, create: e})];
        }
        get extension() {
          return this;
        }
      }
      let N = {lowest: 4, low: 3, default: 2, high: 1, highest: 0};
      function J(e) {
        return (t) => new D(t, e);
      }
      let B = {
        highest: J(N.highest),
        high: J(N.high),
        default: J(N.default),
        low: J(N.low),
        lowest: J(N.lowest),
      };
      class D {
        constructor(e, t) {
          (this.inner = e), (this.prec = t);
        }
      }
      class M {
        of(e) {
          return new L(this, e);
        }
        reconfigure(e) {
          return M.reconfigure.of({compartment: this, extension: e});
        }
        get(e) {
          return e.config.compartments.get(this);
        }
      }
      class L {
        constructor(e, t) {
          (this.compartment = e), (this.inner = t);
        }
      }
      class F {
        constructor(e, t, n, i, r, s) {
          for (
            this.base = e,
              this.compartments = t,
              this.dynamicSlots = n,
              this.address = i,
              this.staticValues = r,
              this.facets = s,
              this.statusTemplate = [];
            this.statusTemplate.length < n.length;

          )
            this.statusTemplate.push(0);
        }
        staticFacet(e) {
          let t = this.address[e.id];
          return null == t ? e.default : this.staticValues[t >> 1];
        }
        static resolve(e, t, n) {
          let i,
            r,
            s = [],
            a = Object.create(null),
            o = new Map();
          for (let n of ((i = [[], [], [], [], []]),
          (r = new Map()),
          !(function e(n, s) {
            let a = r.get(n);
            if (null != a) {
              if (a <= s) return;
              let e = i[a].indexOf(n);
              e > -1 && i[a].splice(e, 1),
                n instanceof L && o.delete(n.compartment);
            }
            if ((r.set(n, s), Array.isArray(n))) for (let t of n) e(t, s);
            else if (n instanceof L) {
              if (o.has(n.compartment))
                throw RangeError('Duplicate use of compartment in extensions');
              let i = t.get(n.compartment) || n.inner;
              o.set(n.compartment, i), e(i, s);
            } else if (n instanceof D) e(n.inner, n.prec);
            else if (n instanceof E)
              i[s].push(n), n.provides && e(n.provides, s);
            else if (n instanceof j)
              i[s].push(n),
                n.facet.extensions && e(n.facet.extensions, N.default);
            else {
              let t = n.extension;
              if (!t)
                throw Error(
                  `Unrecognized extension value in extension set (${n}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`
                );
              e(t, s);
            }
          })(e, N.default),
          i.reduce((e, t) => e.concat(t))))
            n instanceof E
              ? s.push(n)
              : (a[n.facet.id] || (a[n.facet.id] = [])).push(n);
          let O = Object.create(null),
            l = [],
            h = [];
          for (let e of s) (O[e.id] = h.length << 1), h.push((t) => e.slot(t));
          let c = null == n ? void 0 : n.config.facets;
          for (let e in a) {
            let t = a[e],
              i = t[0].facet,
              r = (c && c[e]) || [];
            if (t.every((e) => 0 == e.type)) {
              if (((O[i.id] = (l.length << 1) | 1), z(r, t)))
                l.push(n.facet(i));
              else {
                let e = i.combine(t.map((e) => e.value));
                l.push(n && i.compare(e, n.facet(i)) ? n.facet(i) : e);
              }
            } else {
              for (let e of t)
                0 == e.type
                  ? ((O[e.id] = (l.length << 1) | 1), l.push(e.value))
                  : ((O[e.id] = h.length << 1),
                    h.push((t) => e.dynamicSlot(t)));
              (O[i.id] = h.length << 1),
                h.push((e) =>
                  (function (e, t, n) {
                    let i = n.map((t) => e[t.id]),
                      r = n.map((e) => e.type),
                      s = i.filter((e) => !(1 & e)),
                      a = e[t.id] >> 1;
                    function o(e) {
                      let n = [];
                      for (let t = 0; t < i.length; t++) {
                        let s = K(e, i[t]);
                        if (2 == r[t]) for (let e of s) n.push(e);
                        else n.push(s);
                      }
                      return t.combine(n);
                    }
                    return {
                      create(e) {
                        for (let t of i) H(e, t);
                        return (e.values[a] = o(e)), 1;
                      },
                      update(e, n) {
                        if (!G(e, s)) return 0;
                        let i = o(e);
                        return t.compare(i, e.values[a])
                          ? 0
                          : ((e.values[a] = i), 1);
                      },
                      reconfigure(e, r) {
                        let s = G(e, i),
                          O = r.config.facets[t.id],
                          l = r.facet(t);
                        if (O && !s && z(n, O)) return (e.values[a] = l), 0;
                        let h = o(e);
                        return t.compare(h, l)
                          ? ((e.values[a] = l), 0)
                          : ((e.values[a] = h), 1);
                      },
                    };
                  })(e, i, t)
                );
            }
          }
          let u = h.map((e) => e(O));
          return new F(e, o, u, O, l, a);
        }
      }
      function H(e, t) {
        if (1 & t) return 2;
        let n = t >> 1,
          i = e.status[n];
        if (4 == i)
          throw Error('Cyclic dependency between fields and/or facets');
        if (2 & i) return i;
        e.status[n] = 4;
        let r = e.computeSlot(e, e.config.dynamicSlots[n]);
        return (e.status[n] = 2 | r);
      }
      function K(e, t) {
        return 1 & t ? e.config.staticValues[t >> 1] : e.values[t >> 1];
      }
      let ee = V.define(),
        et = V.define({combine: (e) => e.some((e) => e), static: !0}),
        en = V.define({combine: (e) => (e.length ? e[0] : void 0), static: !0}),
        ei = V.define(),
        er = V.define(),
        es = V.define(),
        ea = V.define({combine: (e) => !!e.length && e[0]});
      class eo {
        constructor(e, t) {
          (this.type = e), (this.value = t);
        }
        static define() {
          return new eO();
        }
      }
      class eO {
        of(e) {
          return new eo(this, e);
        }
      }
      class el {
        constructor(e) {
          this.map = e;
        }
        of(e) {
          return new eh(this, e);
        }
      }
      class eh {
        constructor(e, t) {
          (this.type = e), (this.value = t);
        }
        map(e) {
          let t = this.type.map(this.value, e);
          return void 0 === t
            ? void 0
            : t == this.value
            ? this
            : new eh(this.type, t);
        }
        is(e) {
          return this.type == e;
        }
        static define(e = {}) {
          return new el(e.map || ((e) => e));
        }
        static mapEffects(e, t) {
          if (!e.length) return e;
          let n = [];
          for (let i of e) {
            let e = i.map(t);
            e && n.push(e);
          }
          return n;
        }
      }
      (eh.reconfigure = eh.define()), (eh.appendConfig = eh.define());
      class ec {
        constructor(e, t, n, i, r, s) {
          (this.startState = e),
            (this.changes = t),
            (this.selection = n),
            (this.effects = i),
            (this.annotations = r),
            (this.scrollIntoView = s),
            (this._doc = null),
            (this._state = null),
            n && R(n, t.newLength),
            r.some((e) => e.type == ec.time) ||
              (this.annotations = r.concat(ec.time.of(Date.now())));
        }
        static create(e, t, n, i, r, s) {
          return new ec(e, t, n, i, r, s);
        }
        get newDoc() {
          return (
            this._doc || (this._doc = this.changes.apply(this.startState.doc))
          );
        }
        get newSelection() {
          return this.selection || this.startState.selection.map(this.changes);
        }
        get state() {
          return (
            this._state || this.startState.applyTransaction(this), this._state
          );
        }
        annotation(e) {
          for (let t of this.annotations) if (t.type == e) return t.value;
        }
        get docChanged() {
          return !this.changes.empty;
        }
        get reconfigured() {
          return this.startState.config != this.state.config;
        }
        isUserEvent(e) {
          let t = this.annotation(ec.userEvent);
          return !!(
            t &&
            (t == e ||
              (t.length > e.length &&
                t.slice(0, e.length) == e &&
                '.' == t[e.length]))
          );
        }
      }
      function eu(e, t, n) {
        var i;
        let r, s, a;
        return (
          n
            ? ((r = t.changes),
              (s = v.empty(t.changes.length)),
              (a = e.changes.compose(t.changes)))
            : ((r = t.changes.map(e.changes)),
              (s = e.changes.mapDesc(t.changes, !0)),
              (a = e.changes.compose(r))),
          {
            changes: a,
            selection: t.selection
              ? t.selection.map(s)
              : null === (i = e.selection) || void 0 === i
              ? void 0
              : i.map(r),
            effects: eh
              .mapEffects(e.effects, r)
              .concat(eh.mapEffects(t.effects, s)),
            annotations: e.annotations.length
              ? e.annotations.concat(t.annotations)
              : t.annotations,
            scrollIntoView: e.scrollIntoView || t.scrollIntoView,
          }
        );
      }
      function ef(e, t, n) {
        let i = t.selection,
          r = ed(t.annotations);
        return (
          t.userEvent && (r = r.concat(ec.userEvent.of(t.userEvent))),
          {
            changes:
              t.changes instanceof v
                ? t.changes
                : v.of(t.changes || [], n, e.facet(en)),
            selection: i && (i instanceof _ ? i : _.single(i.anchor, i.head)),
            effects: ed(t.effects),
            annotations: r,
            scrollIntoView: !!t.scrollIntoView,
          }
        );
      }
      (ec.time = eo.define()),
        (ec.userEvent = eo.define()),
        (ec.addToHistory = eo.define()),
        (ec.remote = eo.define());
      let ep = [];
      function ed(e) {
        return null == e ? ep : Array.isArray(e) ? e : [e];
      }
      var eg =
        (((y = eg || (eg = {}))[(y.Word = 0)] = 'Word'),
        (y[(y.Space = 1)] = 'Space'),
        (y[(y.Other = 2)] = 'Other'),
        y);
      let em =
        /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
      try {
        i = RegExp('[\\p{Alphabetic}\\p{Number}_]', 'u');
      } catch (e) {}
      class eQ {
        constructor(e, t, n, i, r, s) {
          (this.config = e),
            (this.doc = t),
            (this.selection = n),
            (this.values = i),
            (this.status = e.statusTemplate.slice()),
            (this.computeSlot = r),
            s && (s._state = this);
          for (let e = 0; e < this.config.dynamicSlots.length; e++)
            H(this, e << 1);
          this.computeSlot = null;
        }
        field(e, t = !0) {
          let n = this.config.address[e.id];
          if (null == n) {
            if (t) throw RangeError('Field is not present in this state');
            return;
          }
          return H(this, n), K(this, n);
        }
        update(...e) {
          return (function e(t, n, i) {
            let r = ef(t, n.length ? n[0] : {}, t.doc.length);
            n.length && !1 === n[0].filter && (i = !1);
            for (let e = 1; e < n.length; e++) {
              !1 === n[e].filter && (i = !1);
              let s = !!n[e].sequential;
              r = eu(r, ef(t, n[e], s ? r.changes.newLength : t.doc.length), s);
            }
            let s = ec.create(
              t,
              r.changes,
              r.selection,
              r.effects,
              r.annotations,
              r.scrollIntoView
            );
            return (function (e) {
              let t = e.startState,
                n = t.facet(es),
                i = e;
              for (let r = n.length - 1; r >= 0; r--) {
                let s = n[r](e);
                s &&
                  Object.keys(s).length &&
                  (i = eu(i, ef(t, s, e.changes.newLength), !0));
              }
              return i == e
                ? e
                : ec.create(
                    t,
                    e.changes,
                    e.selection,
                    i.effects,
                    i.annotations,
                    i.scrollIntoView
                  );
            })(
              i
                ? (function (t) {
                    let n = t.startState,
                      i = !0;
                    for (let e of n.facet(ei)) {
                      let n = e(t);
                      if (!1 === n) {
                        i = !1;
                        break;
                      }
                      Array.isArray(n) &&
                        (i =
                          !0 === i
                            ? n
                            : (function (e, t) {
                                let n = [];
                                for (let i = 0, r = 0; ; ) {
                                  let s, a;
                                  if (
                                    i < e.length &&
                                    (r == t.length || t[r] >= e[i])
                                  )
                                    (s = e[i++]), (a = e[i++]);
                                  else {
                                    if (!(r < t.length)) return n;
                                    (s = t[r++]), (a = t[r++]);
                                  }
                                  !n.length || n[n.length - 1] < s
                                    ? n.push(s, a)
                                    : n[n.length - 1] < a &&
                                      (n[n.length - 1] = a);
                                }
                              })(i, n));
                    }
                    if (!0 !== i) {
                      let e, r;
                      if (!1 === i)
                        (r = t.changes.invertedDesc),
                          (e = v.empty(n.doc.length));
                      else {
                        let n = t.changes.filter(i);
                        (e = n.changes),
                          (r = n.filtered.mapDesc(n.changes).invertedDesc);
                      }
                      t = ec.create(
                        n,
                        e,
                        t.selection && t.selection.map(r),
                        eh.mapEffects(t.effects, r),
                        t.annotations,
                        t.scrollIntoView
                      );
                    }
                    let r = n.facet(er);
                    for (let i = r.length - 1; i >= 0; i--) {
                      let s = r[i](t);
                      t =
                        s instanceof ec
                          ? s
                          : Array.isArray(s) &&
                            1 == s.length &&
                            s[0] instanceof ec
                          ? s[0]
                          : e(n, ed(s), !1);
                    }
                    return t;
                  })(s)
                : s
            );
          })(this, e, !0);
        }
        applyTransaction(e) {
          let t,
            n = this.config,
            {base: i, compartments: r} = n;
          for (let t of e.effects)
            t.is(M.reconfigure)
              ? (n &&
                  ((r = new Map()),
                  n.compartments.forEach((e, t) => r.set(t, e)),
                  (n = null)),
                r.set(t.value.compartment, t.value.extension))
              : t.is(eh.reconfigure)
              ? ((n = null), (i = t.value))
              : t.is(eh.appendConfig) &&
                ((n = null), (i = ed(i).concat(t.value)));
          n
            ? (t = e.startState.values.slice())
            : ((n = F.resolve(i, r, this)),
              (t = new eQ(
                n,
                this.doc,
                this.selection,
                n.dynamicSlots.map(() => null),
                (e, t) => t.reconfigure(e, this),
                null
              ).values)),
            new eQ(n, e.newDoc, e.newSelection, t, (t, n) => n.update(t, e), e);
        }
        replaceSelection(e) {
          return (
            'string' == typeof e && (e = this.toText(e)),
            this.changeByRange((t) => ({
              changes: {from: t.from, to: t.to, insert: e},
              range: _.cursor(t.from + e.length),
            }))
          );
        }
        changeByRange(e) {
          let t = this.selection,
            n = e(t.ranges[0]),
            i = this.changes(n.changes),
            r = [n.range],
            s = ed(n.effects);
          for (let n = 1; n < t.ranges.length; n++) {
            let a = e(t.ranges[n]),
              o = this.changes(a.changes),
              O = o.map(i);
            for (let e = 0; e < n; e++) r[e] = r[e].map(O);
            let l = i.mapDesc(o, !0);
            r.push(a.range.map(l)),
              (i = i.compose(O)),
              (s = eh.mapEffects(s, O).concat(eh.mapEffects(ed(a.effects), l)));
          }
          return {changes: i, selection: _.create(r, t.mainIndex), effects: s};
        }
        changes(e = []) {
          return e instanceof v
            ? e
            : v.of(e, this.doc.length, this.facet(eQ.lineSeparator));
        }
        toText(e) {
          return r.of(e.split(this.facet(eQ.lineSeparator) || P));
        }
        sliceDoc(e = 0, t = this.doc.length) {
          return this.doc.sliceString(e, t, this.lineBreak);
        }
        facet(e) {
          let t = this.config.address[e.id];
          return null == t ? e.default : (H(this, t), K(this, t));
        }
        toJSON(e) {
          let t = {doc: this.sliceDoc(), selection: this.selection.toJSON()};
          if (e)
            for (let n in e) {
              let i = e[n];
              i instanceof E &&
                null != this.config.address[i.id] &&
                (t[n] = i.spec.toJSON(this.field(e[n]), this));
            }
          return t;
        }
        static fromJSON(e, t = {}, n) {
          if (!e || 'string' != typeof e.doc)
            throw RangeError('Invalid JSON representation for EditorState');
          let i = [];
          if (n) {
            for (let t in n)
              if (Object.prototype.hasOwnProperty.call(e, t)) {
                let r = n[t],
                  s = e[t];
                i.push(r.init((e) => r.spec.fromJSON(s, e)));
              }
          }
          return eQ.create({
            doc: e.doc,
            selection: _.fromJSON(e.selection),
            extensions: t.extensions ? i.concat([t.extensions]) : i,
          });
        }
        static create(e = {}) {
          let t = F.resolve(e.extensions || [], new Map()),
            n =
              e.doc instanceof r
                ? e.doc
                : r.of(
                    (e.doc || '').split(t.staticFacet(eQ.lineSeparator) || P)
                  ),
            i = e.selection
              ? e.selection instanceof _
                ? e.selection
                : _.single(e.selection.anchor, e.selection.head)
              : _.single(0);
          return (
            R(i, n.length),
            t.staticFacet(et) || (i = i.asSingle()),
            new eQ(
              t,
              n,
              i,
              t.dynamicSlots.map(() => null),
              (e, t) => t.create(e),
              null
            )
          );
        }
        get tabSize() {
          return this.facet(eQ.tabSize);
        }
        get lineBreak() {
          return this.facet(eQ.lineSeparator) || '\n';
        }
        get readOnly() {
          return this.facet(ea);
        }
        phrase(e, ...t) {
          for (let t of this.facet(eQ.phrases))
            if (Object.prototype.hasOwnProperty.call(t, e)) {
              e = t[e];
              break;
            }
          return (
            t.length &&
              (e = e.replace(/\$(\$|\d*)/g, (e, n) => {
                if ('$' == n) return '$';
                let i = +(n || 1);
                return !i || i > t.length ? e : t[i - 1];
              })),
            e
          );
        }
        languageDataAt(e, t, n = -1) {
          let i = [];
          for (let r of this.facet(ee))
            for (let s of r(this, t, n))
              Object.prototype.hasOwnProperty.call(s, e) && i.push(s[e]);
          return i;
        }
        charCategorizer(e) {
          var t;
          return (
            (t = this.languageDataAt('wordChars', e).join('')),
            (e) => {
              if (!/\S/.test(e)) return eg.Space;
              if (
                (function (e) {
                  if (i) return i.test(e);
                  for (let t = 0; t < e.length; t++) {
                    let n = e[t];
                    if (
                      /\w/.test(n) ||
                      (n > '\x80' &&
                        (n.toUpperCase() != n.toLowerCase() || em.test(n)))
                    )
                      return !0;
                  }
                  return !1;
                })(e)
              )
                return eg.Word;
              for (let n = 0; n < t.length; n++)
                if (e.indexOf(t[n]) > -1) return eg.Word;
              return eg.Other;
            }
          );
        }
        wordAt(e) {
          let {text: t, from: n, length: i} = this.doc.lineAt(e),
            r = this.charCategorizer(e),
            s = e - n,
            a = e - n;
          for (; s > 0; ) {
            let e = p(t, s, !1);
            if (r(t.slice(e, s)) != eg.Word) break;
            s = e;
          }
          for (; a < i; ) {
            let e = p(t, a);
            if (r(t.slice(a, e)) != eg.Word) break;
            a = e;
          }
          return s == a ? null : _.range(s + n, a + n);
        }
      }
      function eS(e, t, n = {}) {
        let i = {};
        for (let t of e)
          for (let e of Object.keys(t)) {
            let r = t[e],
              s = i[e];
            if (void 0 === s) i[e] = r;
            else if (s === r || void 0 === r);
            else if (Object.hasOwnProperty.call(n, e)) i[e] = n[e](s, r);
            else throw Error('Config merge conflict for field ' + e);
          }
        for (let e in t) void 0 === i[e] && (i[e] = t[e]);
        return i;
      }
      (eQ.allowMultipleSelections = et),
        (eQ.tabSize = V.define({combine: (e) => (e.length ? e[0] : 4)})),
        (eQ.lineSeparator = en),
        (eQ.readOnly = ea),
        (eQ.phrases = V.define({
          compare(e, t) {
            let n = Object.keys(e),
              i = Object.keys(t);
            return n.length == i.length && n.every((n) => e[n] == t[n]);
          },
        })),
        (eQ.languageData = ee),
        (eQ.changeFilter = ei),
        (eQ.transactionFilter = er),
        (eQ.transactionExtender = es),
        (M.reconfigure = eh.define());
      class e$ {
        eq(e) {
          return this == e;
        }
        range(e, t = e) {
          return ex.create(e, t, this);
        }
      }
      (e$.prototype.startSide = e$.prototype.endSide = 0),
        (e$.prototype.point = !1),
        (e$.prototype.mapMode = w.TrackDel);
      class ex {
        constructor(e, t, n) {
          (this.from = e), (this.to = t), (this.value = n);
        }
        static create(e, t, n) {
          return new ex(e, t, n);
        }
      }
      function eP(e, t) {
        return e.from - t.from || e.value.startSide - t.value.startSide;
      }
      class eb {
        constructor(e, t, n, i) {
          (this.from = e), (this.to = t), (this.value = n), (this.maxPoint = i);
        }
        get length() {
          return this.to[this.to.length - 1];
        }
        findIndex(e, t, n, i = 0) {
          let r = n ? this.to : this.from;
          for (let s = i, a = r.length; ; ) {
            if (s == a) return s;
            let i = (s + a) >> 1,
              o =
                r[i] - e ||
                (n ? this.value[i].endSide : this.value[i].startSide) - t;
            if (i == s) return o >= 0 ? s : a;
            o >= 0 ? (a = i) : (s = i + 1);
          }
        }
        between(e, t, n, i) {
          for (
            let r = this.findIndex(t, -1e9, !0),
              s = this.findIndex(n, 1e9, !1, r);
            r < s;
            r++
          )
            if (!1 === i(this.from[r] + e, this.to[r] + e, this.value[r]))
              return !1;
        }
        map(e, t) {
          let n = [],
            i = [],
            r = [],
            s = -1,
            a = -1;
          for (let o = 0; o < this.value.length; o++) {
            let O = this.value[o],
              l = this.from[o] + e,
              h = this.to[o] + e,
              c,
              u;
            if (l == h) {
              let e = t.mapPos(l, O.startSide, O.mapMode);
              if (
                null == e ||
                ((c = u = e),
                O.startSide != O.endSide && (u = t.mapPos(l, O.endSide)) < c)
              )
                continue;
            } else if (
              (c = t.mapPos(l, O.startSide)) > (u = t.mapPos(h, O.endSide)) ||
              (c == u && O.startSide > 0 && O.endSide <= 0)
            )
              continue;
            0 > (u - c || O.endSide - O.startSide) ||
              (s < 0 && (s = c),
              O.point && (a = Math.max(a, u - c)),
              n.push(O),
              i.push(c - s),
              r.push(u - s));
          }
          return {mapped: n.length ? new eb(i, r, n, a) : null, pos: s};
        }
      }
      class ey {
        constructor(e, t, n, i) {
          (this.chunkPos = e),
            (this.chunk = t),
            (this.nextLayer = n),
            (this.maxPoint = i);
        }
        static create(e, t, n, i) {
          return new ey(e, t, n, i);
        }
        get length() {
          let e = this.chunk.length - 1;
          return e < 0 ? 0 : Math.max(this.chunkEnd(e), this.nextLayer.length);
        }
        get size() {
          if (this.isEmpty) return 0;
          let e = this.nextLayer.size;
          for (let t of this.chunk) e += t.value.length;
          return e;
        }
        chunkEnd(e) {
          return this.chunkPos[e] + this.chunk[e].length;
        }
        update(e) {
          let {
              add: t = [],
              sort: n = !1,
              filterFrom: i = 0,
              filterTo: r = this.length,
            } = e,
            s = e.filter;
          if (0 == t.length && !s) return this;
          if ((n && (t = t.slice().sort(eP)), this.isEmpty))
            return t.length ? ey.of(t) : this;
          let a = new ev(this, null, -1).goto(0),
            o = 0,
            O = [],
            l = new ew();
          for (; a.value || o < t.length; )
            if (
              o < t.length &&
              (a.from - t[o].from || a.startSide - t[o].value.startSide) >= 0
            ) {
              let e = t[o++];
              l.addInner(e.from, e.to, e.value) || O.push(e);
            } else
              1 == a.rangeIndex &&
              a.chunkIndex < this.chunk.length &&
              (o == t.length || this.chunkEnd(a.chunkIndex) < t[o].from) &&
              (!s ||
                i > this.chunkEnd(a.chunkIndex) ||
                r < this.chunkPos[a.chunkIndex]) &&
              l.addChunk(this.chunkPos[a.chunkIndex], this.chunk[a.chunkIndex])
                ? a.nextChunk()
                : ((!s || i > a.to || r < a.from || s(a.from, a.to, a.value)) &&
                    !l.addInner(a.from, a.to, a.value) &&
                    O.push(ex.create(a.from, a.to, a.value)),
                  a.next());
          return l.finishInner(
            this.nextLayer.isEmpty && !O.length
              ? ey.empty
              : this.nextLayer.update({
                  add: O,
                  filter: s,
                  filterFrom: i,
                  filterTo: r,
                })
          );
        }
        map(e) {
          if (e.empty || this.isEmpty) return this;
          let t = [],
            n = [],
            i = -1;
          for (let r = 0; r < this.chunk.length; r++) {
            let s = this.chunkPos[r],
              a = this.chunk[r],
              o = e.touchesRange(s, s + a.length);
            if (!1 === o)
              (i = Math.max(i, a.maxPoint)), t.push(a), n.push(e.mapPos(s));
            else if (!0 === o) {
              let {mapped: r, pos: o} = a.map(s, e);
              r && ((i = Math.max(i, r.maxPoint)), t.push(r), n.push(o));
            }
          }
          let r = this.nextLayer.map(e);
          return 0 == t.length ? r : new ey(n, t, r || ey.empty, i);
        }
        between(e, t, n) {
          if (!this.isEmpty) {
            for (let i = 0; i < this.chunk.length; i++) {
              let r = this.chunkPos[i],
                s = this.chunk[i];
              if (
                t >= r &&
                e <= r + s.length &&
                !1 === s.between(r, e - r, t - r, n)
              )
                return;
            }
            this.nextLayer.between(e, t, n);
          }
        }
        iter(e = 0) {
          return eX.from([this]).goto(e);
        }
        get isEmpty() {
          return this.nextLayer == this;
        }
        static iter(e, t = 0) {
          return eX.from(e).goto(t);
        }
        static compare(e, t, n, i, r = -1) {
          let s = e.filter(
              (e) => e.maxPoint > 0 || (!e.isEmpty && e.maxPoint >= r)
            ),
            a = t.filter(
              (e) => e.maxPoint > 0 || (!e.isEmpty && e.maxPoint >= r)
            ),
            o = ek(s, a, n),
            O = new eY(s, o, r),
            l = new eY(a, o, r);
          n.iterGaps((e, t, n) => eT(O, e, l, t, n, i)),
            n.empty && 0 == n.length && eT(O, 0, l, 0, 0, i);
        }
        static eq(e, t, n = 0, i) {
          null == i && (i = 999999999);
          let r = e.filter((e) => !e.isEmpty && 0 > t.indexOf(e)),
            s = t.filter((t) => !t.isEmpty && 0 > e.indexOf(t));
          if (r.length != s.length) return !1;
          if (!r.length) return !0;
          let a = ek(r, s),
            o = new eY(r, a, 0).goto(n),
            O = new eY(s, a, 0).goto(n);
          for (;;) {
            if (
              o.to != O.to ||
              !eW(o.active, O.active) ||
              (o.point && (!O.point || !o.point.eq(O.point)))
            )
              return !1;
            if (o.to > i) return !0;
            o.next(), O.next();
          }
        }
        static spans(e, t, n, i, r = -1) {
          let s = new eY(e, null, r).goto(t),
            a = t,
            o = s.openStart;
          for (;;) {
            let e = Math.min(s.to, n);
            if (s.point) {
              let n = s.activeForPoint(s.to),
                r = s.pointFrom < t ? n.length + 1 : Math.min(n.length, o);
              i.point(a, e, s.point, n, r, s.pointRank),
                (o = Math.min(s.openEnd(e), n.length));
            } else e > a && (i.span(a, e, s.active, o), (o = s.openEnd(e)));
            if (s.to > n) return o + (s.point && s.to > n ? 1 : 0);
            (a = s.to), s.next();
          }
        }
        static of(e, t = !1) {
          let n = new ew();
          for (let i of e instanceof ex
            ? [e]
            : t
            ? (function (e) {
                if (e.length > 1)
                  for (let t = e[0], n = 1; n < e.length; n++) {
                    let i = e[n];
                    if (eP(t, i) > 0) return e.slice().sort(eP);
                    t = i;
                  }
                return e;
              })(e)
            : e)
            n.add(i.from, i.to, i.value);
          return n.finish();
        }
      }
      (ey.empty = new ey([], [], null, -1)), (ey.empty.nextLayer = ey.empty);
      class ew {
        constructor() {
          (this.chunks = []),
            (this.chunkPos = []),
            (this.chunkStart = -1),
            (this.last = null),
            (this.lastFrom = -1e9),
            (this.lastTo = -1e9),
            (this.from = []),
            (this.to = []),
            (this.value = []),
            (this.maxPoint = -1),
            (this.setMaxPoint = -1),
            (this.nextLayer = null);
        }
        finishChunk(e) {
          this.chunks.push(
            new eb(this.from, this.to, this.value, this.maxPoint)
          ),
            this.chunkPos.push(this.chunkStart),
            (this.chunkStart = -1),
            (this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint)),
            (this.maxPoint = -1),
            e && ((this.from = []), (this.to = []), (this.value = []));
        }
        add(e, t, n) {
          this.addInner(e, t, n) ||
            (this.nextLayer || (this.nextLayer = new ew())).add(e, t, n);
        }
        addInner(e, t, n) {
          let i = e - this.lastTo || n.startSide - this.last.endSide;
          if (
            i <= 0 &&
            0 > (e - this.lastFrom || n.startSide - this.last.startSide)
          )
            throw Error(
              'Ranges must be added sorted by `from` position and `startSide`'
            );
          return (
            !(i < 0) &&
            (250 == this.from.length && this.finishChunk(!0),
            this.chunkStart < 0 && (this.chunkStart = e),
            this.from.push(e - this.chunkStart),
            this.to.push(t - this.chunkStart),
            (this.last = n),
            (this.lastFrom = e),
            (this.lastTo = t),
            this.value.push(n),
            n.point && (this.maxPoint = Math.max(this.maxPoint, t - e)),
            !0)
          );
        }
        addChunk(e, t) {
          if (0 > (e - this.lastTo || t.value[0].startSide - this.last.endSide))
            return !1;
          this.from.length && this.finishChunk(!0),
            (this.setMaxPoint = Math.max(this.setMaxPoint, t.maxPoint)),
            this.chunks.push(t),
            this.chunkPos.push(e);
          let n = t.value.length - 1;
          return (
            (this.last = t.value[n]),
            (this.lastFrom = t.from[n] + e),
            (this.lastTo = t.to[n] + e),
            !0
          );
        }
        finish() {
          return this.finishInner(ey.empty);
        }
        finishInner(e) {
          if (
            (this.from.length && this.finishChunk(!1), 0 == this.chunks.length)
          )
            return e;
          let t = ey.create(
            this.chunkPos,
            this.chunks,
            this.nextLayer ? this.nextLayer.finishInner(e) : e,
            this.setMaxPoint
          );
          return (this.from = null), t;
        }
      }
      function ek(e, t, n) {
        let i = new Map();
        for (let t of e)
          for (let e = 0; e < t.chunk.length; e++)
            t.chunk[e].maxPoint <= 0 && i.set(t.chunk[e], t.chunkPos[e]);
        let r = new Set();
        for (let e of t)
          for (let t = 0; t < e.chunk.length; t++) {
            let s = i.get(e.chunk[t]);
            null == s ||
              (n ? n.mapPos(s) : s) != e.chunkPos[t] ||
              (null == n ? void 0 : n.touchesRange(s, s + e.chunk[t].length)) ||
              r.add(e.chunk[t]);
          }
        return r;
      }
      class ev {
        constructor(e, t, n, i = 0) {
          (this.layer = e),
            (this.skip = t),
            (this.minPoint = n),
            (this.rank = i);
        }
        get startSide() {
          return this.value ? this.value.startSide : 0;
        }
        get endSide() {
          return this.value ? this.value.endSide : 0;
        }
        goto(e, t = -1e9) {
          return (
            (this.chunkIndex = this.rangeIndex = 0),
            this.gotoInner(e, t, !1),
            this
          );
        }
        gotoInner(e, t, n) {
          for (; this.chunkIndex < this.layer.chunk.length; ) {
            let t = this.layer.chunk[this.chunkIndex];
            if (
              !(
                (this.skip && this.skip.has(t)) ||
                this.layer.chunkEnd(this.chunkIndex) < e ||
                t.maxPoint < this.minPoint
              )
            )
              break;
            this.chunkIndex++, (n = !1);
          }
          if (this.chunkIndex < this.layer.chunk.length) {
            let i = this.layer.chunk[this.chunkIndex].findIndex(
              e - this.layer.chunkPos[this.chunkIndex],
              t,
              !0
            );
            (!n || this.rangeIndex < i) && this.setRangeIndex(i);
          }
          this.next();
        }
        forward(e, t) {
          0 > (this.to - e || this.endSide - t) && this.gotoInner(e, t, !0);
        }
        next() {
          for (;;) {
            if (this.chunkIndex == this.layer.chunk.length) {
              (this.from = this.to = 1e9), (this.value = null);
              break;
            }
            {
              let e = this.layer.chunkPos[this.chunkIndex],
                t = this.layer.chunk[this.chunkIndex],
                n = e + t.from[this.rangeIndex];
              if (
                ((this.from = n),
                (this.to = e + t.to[this.rangeIndex]),
                (this.value = t.value[this.rangeIndex]),
                this.setRangeIndex(this.rangeIndex + 1),
                this.minPoint < 0 ||
                  (this.value.point && this.to - this.from >= this.minPoint))
              )
                break;
            }
          }
        }
        setRangeIndex(e) {
          if (e == this.layer.chunk[this.chunkIndex].value.length) {
            if ((this.chunkIndex++, this.skip))
              for (
                ;
                this.chunkIndex < this.layer.chunk.length &&
                this.skip.has(this.layer.chunk[this.chunkIndex]);

              )
                this.chunkIndex++;
            this.rangeIndex = 0;
          } else this.rangeIndex = e;
        }
        nextChunk() {
          this.chunkIndex++, (this.rangeIndex = 0), this.next();
        }
        compare(e) {
          return (
            this.from - e.from ||
            this.startSide - e.startSide ||
            this.rank - e.rank ||
            this.to - e.to ||
            this.endSide - e.endSide
          );
        }
      }
      class eX {
        constructor(e) {
          this.heap = e;
        }
        static from(e, t = null, n = -1) {
          let i = [];
          for (let r = 0; r < e.length; r++)
            for (let s = e[r]; !s.isEmpty; s = s.nextLayer)
              s.maxPoint >= n && i.push(new ev(s, t, n, r));
          return 1 == i.length ? i[0] : new eX(i);
        }
        get startSide() {
          return this.value ? this.value.startSide : 0;
        }
        goto(e, t = -1e9) {
          for (let n of this.heap) n.goto(e, t);
          for (let e = this.heap.length >> 1; e >= 0; e--) eZ(this.heap, e);
          return this.next(), this;
        }
        forward(e, t) {
          for (let n of this.heap) n.forward(e, t);
          for (let e = this.heap.length >> 1; e >= 0; e--) eZ(this.heap, e);
          0 > (this.to - e || this.value.endSide - t) && this.next();
        }
        next() {
          if (0 == this.heap.length)
            (this.from = this.to = 1e9), (this.value = null), (this.rank = -1);
          else {
            let e = this.heap[0];
            (this.from = e.from),
              (this.to = e.to),
              (this.value = e.value),
              (this.rank = e.rank),
              e.value && e.next(),
              eZ(this.heap, 0);
          }
        }
      }
      function eZ(e, t) {
        for (let n = e[t]; ; ) {
          let i = (t << 1) + 1;
          if (i >= e.length) break;
          let r = e[i];
          if (
            (i + 1 < e.length &&
              r.compare(e[i + 1]) >= 0 &&
              ((r = e[i + 1]), i++),
            0 > n.compare(r))
          )
            break;
          (e[i] = n), (e[t] = r), (t = i);
        }
      }
      class eY {
        constructor(e, t, n) {
          (this.minPoint = n),
            (this.active = []),
            (this.activeTo = []),
            (this.activeRank = []),
            (this.minActive = -1),
            (this.point = null),
            (this.pointFrom = 0),
            (this.pointRank = 0),
            (this.to = -1e9),
            (this.endSide = 0),
            (this.openStart = -1),
            (this.cursor = eX.from(e, t, n));
        }
        goto(e, t = -1e9) {
          return (
            this.cursor.goto(e, t),
            (this.active.length =
              this.activeTo.length =
              this.activeRank.length =
                0),
            (this.minActive = -1),
            (this.to = e),
            (this.endSide = t),
            (this.openStart = -1),
            this.next(),
            this
          );
        }
        forward(e, t) {
          for (
            ;
            this.minActive > -1 &&
            0 >
              (this.activeTo[this.minActive] - e ||
                this.active[this.minActive].endSide - t);

          )
            this.removeActive(this.minActive);
          this.cursor.forward(e, t);
        }
        removeActive(e) {
          eC(this.active, e),
            eC(this.activeTo, e),
            eC(this.activeRank, e),
            (this.minActive = e_(this.active, this.activeTo));
        }
        addActive(e) {
          let t = 0,
            {value: n, to: i, rank: r} = this.cursor;
          for (; t < this.activeRank.length && this.activeRank[t] <= r; ) t++;
          eU(this.active, t, n),
            eU(this.activeTo, t, i),
            eU(this.activeRank, t, r),
            e && eU(e, t, this.cursor.from),
            (this.minActive = e_(this.active, this.activeTo));
        }
        next() {
          let e = this.to,
            t = this.point;
          this.point = null;
          let n = this.openStart < 0 ? [] : null;
          for (;;) {
            let i = this.minActive;
            if (
              i > -1 &&
              0 >
                (this.activeTo[i] - this.cursor.from ||
                  this.active[i].endSide - this.cursor.startSide)
            ) {
              if (this.activeTo[i] > e) {
                (this.to = this.activeTo[i]),
                  (this.endSide = this.active[i].endSide);
                break;
              }
              this.removeActive(i), n && eC(n, i);
            } else if (this.cursor.value) {
              if (this.cursor.from > e) {
                (this.to = this.cursor.from),
                  (this.endSide = this.cursor.startSide);
                break;
              }
              {
                let e = this.cursor.value;
                if (e.point) {
                  if (
                    t &&
                    this.cursor.to == this.to &&
                    this.cursor.from < this.cursor.to
                  )
                    this.cursor.next();
                  else {
                    (this.point = e),
                      (this.pointFrom = this.cursor.from),
                      (this.pointRank = this.cursor.rank),
                      (this.to = this.cursor.to),
                      (this.endSide = e.endSide),
                      this.cursor.next(),
                      this.forward(this.to, this.endSide);
                    break;
                  }
                } else this.addActive(n), this.cursor.next();
              }
            } else {
              this.to = this.endSide = 1e9;
              break;
            }
          }
          if (n) {
            this.openStart = 0;
            for (let t = n.length - 1; t >= 0 && n[t] < e; t--)
              this.openStart++;
          }
        }
        activeForPoint(e) {
          if (!this.active.length) return this.active;
          let t = [];
          for (
            let n = this.active.length - 1;
            n >= 0 && !(this.activeRank[n] < this.pointRank);
            n--
          )
            (this.activeTo[n] > e ||
              (this.activeTo[n] == e &&
                this.active[n].endSide >= this.point.endSide)) &&
              t.push(this.active[n]);
          return t.reverse();
        }
        openEnd(e) {
          let t = 0;
          for (
            let n = this.activeTo.length - 1;
            n >= 0 && this.activeTo[n] > e;
            n--
          )
            t++;
          return t;
        }
      }
      function eT(e, t, n, i, r, s) {
        e.goto(t), n.goto(i);
        let a = i + r,
          o = i,
          O = i - t;
        for (;;) {
          let t = e.to + O - n.to || e.endSide - n.endSide,
            i = t < 0 ? e.to + O : n.to,
            r = Math.min(i, a);
          if (
            (e.point || n.point
              ? (e.point &&
                  n.point &&
                  (e.point == n.point || e.point.eq(n.point)) &&
                  eW(e.activeForPoint(e.to + O), n.activeForPoint(n.to))) ||
                s.comparePoint(o, r, e.point, n.point)
              : r > o &&
                !eW(e.active, n.active) &&
                s.compareRange(o, r, e.active, n.active),
            i > a)
          )
            break;
          (o = i), t <= 0 && e.next(), t >= 0 && n.next();
        }
      }
      function eW(e, t) {
        if (e.length != t.length) return !1;
        for (let n = 0; n < e.length; n++)
          if (e[n] != t[n] && !e[n].eq(t[n])) return !1;
        return !0;
      }
      function eC(e, t) {
        for (let n = t, i = e.length - 1; n < i; n++) e[n] = e[n + 1];
        e.pop();
      }
      function eU(e, t, n) {
        for (let n = e.length - 1; n >= t; n--) e[n + 1] = e[n];
        e[t] = n;
      }
      function e_(e, t) {
        let n = -1,
          i = 1e9;
        for (let r = 0; r < t.length; r++)
          0 > (t[r] - i || e[r].endSide - e[n].endSide) &&
            ((n = r), (i = t[r]));
        return n;
      }
      function eR(e, t, n = e.length) {
        let i = 0;
        for (let r = 0; r < n; )
          9 == e.charCodeAt(r)
            ? ((i += t - (i % t)), r++)
            : (i++, (r = p(e, r)));
        return i;
      }
      function eq(e, t, n, i) {
        for (let i = 0, r = 0; ; ) {
          if (r >= t) return i;
          if (i == e.length) break;
          (r += 9 == e.charCodeAt(i) ? n - (r % n) : 1), (i = p(e, i));
        }
        return !0 === i ? -1 : e.length;
      }
    },
    41113: function (e, t, n) {
      'use strict';
      var i, r;
      n.d(t, {
        FE: function () {
          return _;
        },
        Jq: function () {
          return c;
        },
        L3: function () {
          return s;
        },
        Lj: function () {
          return u;
        },
        _b: function () {
          return C;
        },
        hr: function () {
          return T;
        },
        i9: function () {
          return W;
        },
        md: function () {
          return O;
        },
        mp: function () {
          return d;
        },
        vj: function () {
          return i;
        },
      });
      let s = 1024,
        a = 0;
      class o {
        constructor(e, t) {
          (this.from = e), (this.to = t);
        }
      }
      class O {
        constructor(e = {}) {
          (this.id = a++),
            (this.perNode = !!e.perNode),
            (this.deserialize =
              e.deserialize ||
              (() => {
                throw Error(
                  "This node type doesn't define a deserialize function"
                );
              }));
        }
        add(e) {
          if (this.perNode)
            throw RangeError("Can't add per-node props to node types");
          return (
            'function' != typeof e && (e = c.match(e)),
            (t) => {
              let n = e(t);
              return void 0 === n ? null : [this, n];
            }
          );
        }
      }
      (O.closedBy = new O({deserialize: (e) => e.split(' ')})),
        (O.openedBy = new O({deserialize: (e) => e.split(' ')})),
        (O.group = new O({deserialize: (e) => e.split(' ')})),
        (O.contextHash = new O({perNode: !0})),
        (O.lookAhead = new O({perNode: !0})),
        (O.mounted = new O({perNode: !0}));
      class l {
        constructor(e, t, n) {
          (this.tree = e), (this.overlay = t), (this.parser = n);
        }
      }
      let h = Object.create(null);
      class c {
        constructor(e, t, n, i = 0) {
          (this.name = e), (this.props = t), (this.id = n), (this.flags = i);
        }
        static define(e) {
          let t = e.props && e.props.length ? Object.create(null) : h,
            n =
              (e.top ? 1 : 0) |
              (e.skipped ? 2 : 0) |
              (e.error ? 4 : 0) |
              (null == e.name ? 8 : 0),
            i = new c(e.name || '', t, e.id, n);
          if (e.props) {
            for (let n of e.props)
              if ((Array.isArray(n) || (n = n(i)), n)) {
                if (n[0].perNode)
                  throw RangeError(
                    "Can't store a per-node prop on a node type"
                  );
                t[n[0].id] = n[1];
              }
          }
          return i;
        }
        prop(e) {
          return this.props[e.id];
        }
        get isTop() {
          return (1 & this.flags) > 0;
        }
        get isSkipped() {
          return (2 & this.flags) > 0;
        }
        get isError() {
          return (4 & this.flags) > 0;
        }
        get isAnonymous() {
          return (8 & this.flags) > 0;
        }
        is(e) {
          if ('string' == typeof e) {
            if (this.name == e) return !0;
            let t = this.prop(O.group);
            return !!t && t.indexOf(e) > -1;
          }
          return this.id == e;
        }
        static match(e) {
          let t = Object.create(null);
          for (let n in e) for (let i of n.split(' ')) t[i] = e[n];
          return (e) => {
            for (let n = e.prop(O.group), i = -1; i < (n ? n.length : 0); i++) {
              let r = t[i < 0 ? e.name : n[i]];
              if (r) return r;
            }
          };
        }
      }
      c.none = new c('', Object.create(null), 0, 8);
      class u {
        constructor(e) {
          this.types = e;
          for (let t = 0; t < e.length; t++)
            if (e[t].id != t)
              throw RangeError(
                'Node type ids should correspond to array positions when creating a node set'
              );
        }
        extend(...e) {
          let t = [];
          for (let n of this.types) {
            let i = null;
            for (let t of e) {
              let e = t(n);
              e && (i || (i = Object.assign({}, n.props)), (i[e[0].id] = e[1]));
            }
            t.push(i ? new c(n.name, i, n.id, n.flags) : n);
          }
          return new u(t);
        }
      }
      let f = new WeakMap(),
        p = new WeakMap();
      ((r = i || (i = {}))[(r.ExcludeBuffers = 1)] = 'ExcludeBuffers'),
        (r[(r.IncludeAnonymous = 2)] = 'IncludeAnonymous'),
        (r[(r.IgnoreMounts = 4)] = 'IgnoreMounts'),
        (r[(r.IgnoreOverlays = 8)] = 'IgnoreOverlays');
      class d {
        constructor(e, t, n, i, r) {
          if (
            ((this.type = e),
            (this.children = t),
            (this.positions = n),
            (this.length = i),
            (this.props = null),
            r && r.length)
          )
            for (let [e, t] of ((this.props = Object.create(null)), r))
              this.props['number' == typeof e ? e : e.id] = t;
        }
        toString() {
          let e = this.prop(O.mounted);
          if (e && !e.overlay) return e.tree.toString();
          let t = '';
          for (let e of this.children) {
            let n = e.toString();
            n && (t && (t += ','), (t += n));
          }
          return this.type.name
            ? (/\W/.test(this.type.name) && !this.type.isError
                ? JSON.stringify(this.type.name)
                : this.type.name) + (t.length ? '(' + t + ')' : '')
            : t;
        }
        cursor(e = 0) {
          return new k(this.topNode, e);
        }
        cursorAt(e, t = 0, n = 0) {
          let i = f.get(this) || this.topNode,
            r = new k(i);
          return r.moveTo(e, t), f.set(this, r._tree), r;
        }
        get topNode() {
          return new x(this, 0, 0, null);
        }
        resolve(e, t = 0) {
          let n = $(f.get(this) || this.topNode, e, t, !1);
          return f.set(this, n), n;
        }
        resolveInner(e, t = 0) {
          let n = $(p.get(this) || this.topNode, e, t, !0);
          return p.set(this, n), n;
        }
        iterate(e) {
          let {enter: t, leave: n, from: r = 0, to: s = this.length} = e;
          for (let a = this.cursor((e.mode || 0) | i.IncludeAnonymous); ; ) {
            let e = !1;
            if (
              a.from <= s &&
              a.to >= r &&
              (a.type.isAnonymous || !1 !== t(a))
            ) {
              if (a.firstChild()) continue;
              e = !0;
            }
            for (; e && n && !a.type.isAnonymous && n(a), !a.nextSibling(); ) {
              if (!a.parent()) return;
              e = !0;
            }
          }
        }
        prop(e) {
          return e.perNode
            ? this.props
              ? this.props[e.id]
              : void 0
            : this.type.prop(e);
        }
        get propValues() {
          let e = [];
          if (this.props) for (let t in this.props) e.push([+t, this.props[t]]);
          return e;
        }
        balance(e = {}) {
          return this.children.length <= 8
            ? this
            : Y(
                c.none,
                this.children,
                this.positions,
                0,
                this.children.length,
                0,
                this.length,
                (e, t, n) => new d(this.type, e, t, n, this.propValues),
                e.makeTree || ((e, t, n) => new d(c.none, e, t, n))
              );
        }
        static build(e) {
          return (function (e) {
            var t;
            let {
                buffer: n,
                nodeSet: i,
                maxBufferLength: r = s,
                reused: a = [],
                minRepeatType: o = i.types.length,
              } = e,
              l = Array.isArray(n) ? new g(n, n.length) : n,
              h = i.types,
              c = 0,
              u = 0;
            function f(e, t, n, r, s, a, o, O) {
              let l = [],
                h = [];
              for (; e.length > r; ) l.push(e.pop()), h.push(t.pop() + n - s);
              e.push(p(i.types[o], l, h, a - s, O - a)), t.push(s - n);
            }
            function p(e, t, n, i, r = 0, s) {
              if (c) {
                let e = [O.contextHash, c];
                s = s ? [e].concat(s) : [e];
              }
              if (r > 25) {
                let e = [O.lookAhead, r];
                s = s ? [e].concat(s) : [e];
              }
              return new d(e, t, n, i, s);
            }
            let Q = [],
              S = [];
            for (; l.pos > 0; )
              !(function e(t, n, s, g, Q) {
                let {id: S, start: $, end: x, size: P} = l,
                  b = u;
                for (; P < 0; ) {
                  if ((l.next(), -1 == P)) {
                    let e = a[S];
                    s.push(e), g.push($ - t);
                    return;
                  }
                  if (-3 == P) {
                    c = S;
                    return;
                  }
                  if (-4 == P) {
                    u = S;
                    return;
                  }
                  throw RangeError(`Unrecognized record size: ${P}`);
                }
                let y = h[S],
                  w,
                  k,
                  v = $ - t;
                if (
                  x - $ <= r &&
                  (k = (function (e, t) {
                    let n = l.fork(),
                      i = 0,
                      s = 0,
                      a = 0,
                      O = n.end - r,
                      h = {size: 0, start: 0, skip: 0};
                    t: for (let r = n.pos - e; n.pos > r; ) {
                      let e = n.size;
                      if (n.id == t && e >= 0) {
                        (h.size = i),
                          (h.start = s),
                          (h.skip = a),
                          (a += 4),
                          (i += 4),
                          n.next();
                        continue;
                      }
                      let l = n.pos - e;
                      if (e < 0 || l < r || n.start < O) break;
                      let c = n.id >= o ? 4 : 0,
                        u = n.start;
                      for (n.next(); n.pos > l; ) {
                        if (n.size < 0) {
                          if (-3 == n.size) c += 4;
                          else break t;
                        } else n.id >= o && (c += 4);
                        n.next();
                      }
                      (s = u), (i += e), (a += c);
                    }
                    return (
                      (t < 0 || i == e) &&
                        ((h.size = i), (h.start = s), (h.skip = a)),
                      h.size > 4 ? h : void 0
                    );
                  })(l.pos - n, Q))
                ) {
                  let e = new Uint16Array(k.size - k.skip),
                    n = l.pos - k.size,
                    r = e.length;
                  for (; l.pos > n; )
                    r = (function e(t, n, i) {
                      let {id: r, start: s, end: a, size: O} = l;
                      if ((l.next(), O >= 0 && r < o)) {
                        let o = i;
                        if (O > 4) {
                          let r = l.pos - (O - 4);
                          for (; l.pos > r; ) i = e(t, n, i);
                        }
                        (n[--i] = o),
                          (n[--i] = a - t),
                          (n[--i] = s - t),
                          (n[--i] = r);
                      } else -3 == O ? (c = r) : -4 == O && (u = r);
                      return i;
                    })(k.start, e, r);
                  (w = new m(e, x - k.start, i)), (v = k.start - t);
                } else {
                  let t = l.pos - P;
                  l.next();
                  let n = [],
                    i = [],
                    s = S >= o ? S : -1,
                    a = 0,
                    h = x;
                  for (; l.pos > t; )
                    s >= 0 && l.id == s && l.size >= 0
                      ? (l.end <= h - r &&
                          (f(n, i, $, a, l.end, h, s, b),
                          (a = n.length),
                          (h = l.end)),
                        l.next())
                      : e($, t, n, i, s);
                  if (
                    (s >= 0 &&
                      a > 0 &&
                      a < n.length &&
                      f(n, i, $, a, $, h, s, b),
                    n.reverse(),
                    i.reverse(),
                    s > -1 && a > 0)
                  ) {
                    let e = (function (e) {
                      return (t, n, i) => {
                        let r = 0,
                          s = t.length - 1,
                          a,
                          o;
                        if (s >= 0 && (a = t[s]) instanceof d) {
                          if (!s && a.type == e && a.length == i) return a;
                          (o = a.prop(O.lookAhead)) &&
                            (r = n[s] + a.length + o);
                        }
                        return p(e, t, n, i, r);
                      };
                    })(y);
                    w = Y(y, n, i, 0, n.length, 0, x - $, e, e);
                  } else w = p(y, n, i, x - $, b - x);
                }
                s.push(w), g.push(v);
              })(e.start || 0, e.bufferStart || 0, Q, S, -1);
            let $ =
              null !== (t = e.length) && void 0 !== t
                ? t
                : Q.length
                ? S[0] + Q[0].length
                : 0;
            return new d(h[e.topID], Q.reverse(), S.reverse(), $);
          })(e);
        }
      }
      d.empty = new d(c.none, [], [], 0);
      class g {
        constructor(e, t) {
          (this.buffer = e), (this.index = t);
        }
        get id() {
          return this.buffer[this.index - 4];
        }
        get start() {
          return this.buffer[this.index - 3];
        }
        get end() {
          return this.buffer[this.index - 2];
        }
        get size() {
          return this.buffer[this.index - 1];
        }
        get pos() {
          return this.index;
        }
        next() {
          this.index -= 4;
        }
        fork() {
          return new g(this.buffer, this.index);
        }
      }
      class m {
        constructor(e, t, n) {
          (this.buffer = e), (this.length = t), (this.set = n);
        }
        get type() {
          return c.none;
        }
        toString() {
          let e = [];
          for (let t = 0; t < this.buffer.length; )
            e.push(this.childString(t)), (t = this.buffer[t + 3]);
          return e.join(',');
        }
        childString(e) {
          let t = this.buffer[e],
            n = this.buffer[e + 3],
            i = this.set.types[t],
            r = i.name;
          if (
            (/\W/.test(r) && !i.isError && (r = JSON.stringify(r)),
            n == (e += 4))
          )
            return r;
          let s = [];
          for (; e < n; ) s.push(this.childString(e)), (e = this.buffer[e + 3]);
          return r + '(' + s.join(',') + ')';
        }
        findChild(e, t, n, i, r) {
          let {buffer: s} = this,
            a = -1;
          for (
            let o = e;
            o != t && (!Q(r, i, s[o + 1], s[o + 2]) || ((a = o), !(n > 0)));
            o = s[o + 3]
          );
          return a;
        }
        slice(e, t, n) {
          let i = this.buffer,
            r = new Uint16Array(t - e),
            s = 0;
          for (let a = e, o = 0; a < t; ) {
            (r[o++] = i[a++]), (r[o++] = i[a++] - n);
            let t = (r[o++] = i[a++] - n);
            (r[o++] = i[a++] - e), (s = Math.max(s, t));
          }
          return new m(r, s, this.set);
        }
      }
      function Q(e, t, n, i) {
        switch (e) {
          case -2:
            return n < t;
          case -1:
            return i >= t && n < t;
          case 0:
            return n < t && i > t;
          case 1:
            return n <= t && i > t;
          case 2:
            return i > t;
          case 4:
            return !0;
        }
      }
      function S(e, t) {
        let n = e.childBefore(t);
        for (; n; ) {
          let t = n.lastChild;
          if (!t || t.to != n.to) break;
          t.type.isError && t.from == t.to
            ? ((e = n), (n = t.prevSibling))
            : (n = t);
        }
        return e;
      }
      function $(e, t, n, r) {
        for (
          var s;
          e.from == e.to ||
          (n < 1 ? e.from >= t : e.from > t) ||
          (n > -1 ? e.to <= t : e.to < t);

        ) {
          let t = !r && e instanceof x && e.index < 0 ? null : e.parent;
          if (!t) return e;
          e = t;
        }
        let a = r ? 0 : i.IgnoreOverlays;
        if (r)
          for (let i = e, r = i.parent; r; r = (i = r).parent)
            i instanceof x &&
              i.index < 0 &&
              (null === (s = r.enter(t, n, a)) || void 0 === s
                ? void 0
                : s.from) != i.from &&
              (e = r);
        for (;;) {
          let i = e.enter(t, n, a);
          if (!i) return e;
          e = i;
        }
      }
      class x {
        constructor(e, t, n, i) {
          (this._tree = e),
            (this.from = t),
            (this.index = n),
            (this._parent = i);
        }
        get type() {
          return this._tree.type;
        }
        get name() {
          return this._tree.type.name;
        }
        get to() {
          return this.from + this._tree.length;
        }
        nextChild(e, t, n, r, s = 0) {
          for (let a = this; ; ) {
            for (
              let {children: o, positions: l} = a._tree,
                h = t > 0 ? o.length : -1;
              e != h;
              e += t
            ) {
              let h = o[e],
                c = l[e] + a.from;
              if (Q(r, n, c, c + h.length)) {
                if (h instanceof m) {
                  if (s & i.ExcludeBuffers) continue;
                  let o = h.findChild(0, h.buffer.length, t, n - c, r);
                  if (o > -1) return new w(new y(a, h, e, c), null, o);
                } else if (
                  s & i.IncludeAnonymous ||
                  !h.type.isAnonymous ||
                  v(h)
                ) {
                  let o;
                  if (
                    !(s & i.IgnoreMounts) &&
                    h.props &&
                    (o = h.prop(O.mounted)) &&
                    !o.overlay
                  )
                    return new x(o.tree, c, e, a);
                  let l = new x(h, c, e, a);
                  return s & i.IncludeAnonymous || !l.type.isAnonymous
                    ? l
                    : l.nextChild(t < 0 ? h.children.length - 1 : 0, t, n, r);
                }
              }
            }
            if (
              s & i.IncludeAnonymous ||
              !a.type.isAnonymous ||
              ((e =
                a.index >= 0
                  ? a.index + t
                  : t < 0
                  ? -1
                  : a._parent._tree.children.length),
              !(a = a._parent))
            )
              return null;
          }
        }
        get firstChild() {
          return this.nextChild(0, 1, 0, 4);
        }
        get lastChild() {
          return this.nextChild(this._tree.children.length - 1, -1, 0, 4);
        }
        childAfter(e) {
          return this.nextChild(0, 1, e, 2);
        }
        childBefore(e) {
          return this.nextChild(this._tree.children.length - 1, -1, e, -2);
        }
        enter(e, t, n = 0) {
          let r;
          if (
            !(n & i.IgnoreOverlays) &&
            (r = this._tree.prop(O.mounted)) &&
            r.overlay
          ) {
            let n = e - this.from;
            for (let {from: e, to: i} of r.overlay)
              if ((t > 0 ? e <= n : e < n) && (t < 0 ? i >= n : i > n))
                return new x(r.tree, r.overlay[0].from + this.from, -1, this);
          }
          return this.nextChild(0, 1, e, t, n);
        }
        nextSignificantParent() {
          let e = this;
          for (; e.type.isAnonymous && e._parent; ) e = e._parent;
          return e;
        }
        get parent() {
          return this._parent ? this._parent.nextSignificantParent() : null;
        }
        get nextSibling() {
          return this._parent && this.index >= 0
            ? this._parent.nextChild(this.index + 1, 1, 0, 4)
            : null;
        }
        get prevSibling() {
          return this._parent && this.index >= 0
            ? this._parent.nextChild(this.index - 1, -1, 0, 4)
            : null;
        }
        cursor(e = 0) {
          return new k(this, e);
        }
        get tree() {
          return this._tree;
        }
        toTree() {
          return this._tree;
        }
        resolve(e, t = 0) {
          return $(this, e, t, !1);
        }
        resolveInner(e, t = 0) {
          return $(this, e, t, !0);
        }
        enterUnfinishedNodesBefore(e) {
          return S(this, e);
        }
        getChild(e, t = null, n = null) {
          let i = P(this, e, t, n);
          return i.length ? i[0] : null;
        }
        getChildren(e, t = null, n = null) {
          return P(this, e, t, n);
        }
        toString() {
          return this._tree.toString();
        }
        get node() {
          return this;
        }
        matchContext(e) {
          return b(this, e);
        }
      }
      function P(e, t, n, i) {
        let r = e.cursor(),
          s = [];
        if (!r.firstChild()) return s;
        if (null != n) {
          for (; !r.type.is(n); ) if (!r.nextSibling()) return s;
        }
        for (;;) {
          if (null != i && r.type.is(i)) return s;
          if ((r.type.is(t) && s.push(r.node), !r.nextSibling()))
            return null == i ? s : [];
        }
      }
      function b(e, t, n = t.length - 1) {
        for (let i = e.parent; n >= 0; i = i.parent) {
          if (!i) return !1;
          if (!i.type.isAnonymous) {
            if (t[n] && t[n] != i.name) return !1;
            n--;
          }
        }
        return !0;
      }
      class y {
        constructor(e, t, n, i) {
          (this.parent = e),
            (this.buffer = t),
            (this.index = n),
            (this.start = i);
        }
      }
      class w {
        get name() {
          return this.type.name;
        }
        get from() {
          return (
            this.context.start + this.context.buffer.buffer[this.index + 1]
          );
        }
        get to() {
          return (
            this.context.start + this.context.buffer.buffer[this.index + 2]
          );
        }
        constructor(e, t, n) {
          (this.context = e),
            (this._parent = t),
            (this.index = n),
            (this.type = e.buffer.set.types[e.buffer.buffer[n]]);
        }
        child(e, t, n) {
          let {buffer: i} = this.context,
            r = i.findChild(
              this.index + 4,
              i.buffer[this.index + 3],
              e,
              t - this.context.start,
              n
            );
          return r < 0 ? null : new w(this.context, this, r);
        }
        get firstChild() {
          return this.child(1, 0, 4);
        }
        get lastChild() {
          return this.child(-1, 0, 4);
        }
        childAfter(e) {
          return this.child(1, e, 2);
        }
        childBefore(e) {
          return this.child(-1, e, -2);
        }
        enter(e, t, n = 0) {
          if (n & i.ExcludeBuffers) return null;
          let {buffer: r} = this.context,
            s = r.findChild(
              this.index + 4,
              r.buffer[this.index + 3],
              t > 0 ? 1 : -1,
              e - this.context.start,
              t
            );
          return s < 0 ? null : new w(this.context, this, s);
        }
        get parent() {
          return this._parent || this.context.parent.nextSignificantParent();
        }
        externalSibling(e) {
          return this._parent
            ? null
            : this.context.parent.nextChild(this.context.index + e, e, 0, 4);
        }
        get nextSibling() {
          let {buffer: e} = this.context,
            t = e.buffer[this.index + 3];
          return t <
            (this._parent ? e.buffer[this._parent.index + 3] : e.buffer.length)
            ? new w(this.context, this._parent, t)
            : this.externalSibling(1);
        }
        get prevSibling() {
          let {buffer: e} = this.context,
            t = this._parent ? this._parent.index + 4 : 0;
          return this.index == t
            ? this.externalSibling(-1)
            : new w(
                this.context,
                this._parent,
                e.findChild(t, this.index, -1, 0, 4)
              );
        }
        cursor(e = 0) {
          return new k(this, e);
        }
        get tree() {
          return null;
        }
        toTree() {
          let e = [],
            t = [],
            {buffer: n} = this.context,
            i = this.index + 4,
            r = n.buffer[this.index + 3];
          if (r > i) {
            let s = n.buffer[this.index + 1];
            e.push(n.slice(i, r, s)), t.push(0);
          }
          return new d(this.type, e, t, this.to - this.from);
        }
        resolve(e, t = 0) {
          return $(this, e, t, !1);
        }
        resolveInner(e, t = 0) {
          return $(this, e, t, !0);
        }
        enterUnfinishedNodesBefore(e) {
          return S(this, e);
        }
        toString() {
          return this.context.buffer.childString(this.index);
        }
        getChild(e, t = null, n = null) {
          let i = P(this, e, t, n);
          return i.length ? i[0] : null;
        }
        getChildren(e, t = null, n = null) {
          return P(this, e, t, n);
        }
        get node() {
          return this;
        }
        matchContext(e) {
          return b(this, e);
        }
      }
      class k {
        get name() {
          return this.type.name;
        }
        constructor(e, t = 0) {
          if (
            ((this.mode = t),
            (this.buffer = null),
            (this.stack = []),
            (this.index = 0),
            (this.bufferNode = null),
            e instanceof x)
          )
            this.yieldNode(e);
          else {
            (this._tree = e.context.parent), (this.buffer = e.context);
            for (let t = e._parent; t; t = t._parent)
              this.stack.unshift(t.index);
            (this.bufferNode = e), this.yieldBuf(e.index);
          }
        }
        yieldNode(e) {
          return (
            !!e &&
            ((this._tree = e),
            (this.type = e.type),
            (this.from = e.from),
            (this.to = e.to),
            !0)
          );
        }
        yieldBuf(e, t) {
          this.index = e;
          let {start: n, buffer: i} = this.buffer;
          return (
            (this.type = t || i.set.types[i.buffer[e]]),
            (this.from = n + i.buffer[e + 1]),
            (this.to = n + i.buffer[e + 2]),
            !0
          );
        }
        yield(e) {
          return (
            !!e &&
            (e instanceof x
              ? ((this.buffer = null), this.yieldNode(e))
              : ((this.buffer = e.context), this.yieldBuf(e.index, e.type)))
          );
        }
        toString() {
          return this.buffer
            ? this.buffer.buffer.childString(this.index)
            : this._tree.toString();
        }
        enterChild(e, t, n) {
          if (!this.buffer)
            return this.yield(
              this._tree.nextChild(
                e < 0 ? this._tree._tree.children.length - 1 : 0,
                e,
                t,
                n,
                this.mode
              )
            );
          let {buffer: i} = this.buffer,
            r = i.findChild(
              this.index + 4,
              i.buffer[this.index + 3],
              e,
              t - this.buffer.start,
              n
            );
          return !(r < 0) && (this.stack.push(this.index), this.yieldBuf(r));
        }
        firstChild() {
          return this.enterChild(1, 0, 4);
        }
        lastChild() {
          return this.enterChild(-1, 0, 4);
        }
        childAfter(e) {
          return this.enterChild(1, e, 2);
        }
        childBefore(e) {
          return this.enterChild(-1, e, -2);
        }
        enter(e, t, n = this.mode) {
          return this.buffer
            ? !(n & i.ExcludeBuffers) && this.enterChild(1, e, t)
            : this.yield(this._tree.enter(e, t, n));
        }
        parent() {
          if (!this.buffer)
            return this.yieldNode(
              this.mode & i.IncludeAnonymous
                ? this._tree._parent
                : this._tree.parent
            );
          if (this.stack.length) return this.yieldBuf(this.stack.pop());
          let e =
            this.mode & i.IncludeAnonymous
              ? this.buffer.parent
              : this.buffer.parent.nextSignificantParent();
          return (this.buffer = null), this.yieldNode(e);
        }
        sibling(e) {
          if (!this.buffer)
            return (
              !!this._tree._parent &&
              this.yield(
                this._tree.index < 0
                  ? null
                  : this._tree._parent.nextChild(
                      this._tree.index + e,
                      e,
                      0,
                      4,
                      this.mode
                    )
              )
            );
          let {buffer: t} = this.buffer,
            n = this.stack.length - 1;
          if (e < 0) {
            let e = n < 0 ? 0 : this.stack[n] + 4;
            if (this.index != e)
              return this.yieldBuf(t.findChild(e, this.index, -1, 0, 4));
          } else {
            let e = t.buffer[this.index + 3];
            if (e < (n < 0 ? t.buffer.length : t.buffer[this.stack[n] + 3]))
              return this.yieldBuf(e);
          }
          return (
            n < 0 &&
            this.yield(
              this.buffer.parent.nextChild(
                this.buffer.index + e,
                e,
                0,
                4,
                this.mode
              )
            )
          );
        }
        nextSibling() {
          return this.sibling(1);
        }
        prevSibling() {
          return this.sibling(-1);
        }
        atLastNode(e) {
          let t,
            n,
            {buffer: r} = this;
          if (r) {
            if (e > 0) {
              if (this.index < r.buffer.buffer.length) return !1;
            } else
              for (let e = 0; e < this.index; e++)
                if (r.buffer.buffer[e + 3] < this.index) return !1;
            ({index: t, parent: n} = r);
          } else ({index: t, _parent: n} = this._tree);
          for (; n; {index: t, _parent: n} = n)
            if (t > -1)
              for (
                let r = t + e, s = e < 0 ? -1 : n._tree.children.length;
                r != s;
                r += e
              ) {
                let e = n._tree.children[r];
                if (
                  this.mode & i.IncludeAnonymous ||
                  e instanceof m ||
                  !e.type.isAnonymous ||
                  v(e)
                )
                  return !1;
              }
          return !0;
        }
        move(e, t) {
          if (t && this.enterChild(e, 0, 4)) return !0;
          for (;;) {
            if (this.sibling(e)) return !0;
            if (this.atLastNode(e) || !this.parent()) return !1;
          }
        }
        next(e = !0) {
          return this.move(1, e);
        }
        prev(e = !0) {
          return this.move(-1, e);
        }
        moveTo(e, t = 0) {
          for (
            ;
            (this.from == this.to ||
              (t < 1 ? this.from >= e : this.from > e) ||
              (t > -1 ? this.to <= e : this.to < e)) &&
            this.parent();

          );
          for (; this.enterChild(1, e, t); );
          return this;
        }
        get node() {
          if (!this.buffer) return this._tree;
          let e = this.bufferNode,
            t = null,
            n = 0;
          if (e && e.context == this.buffer)
            t: for (let i = this.index, r = this.stack.length; r >= 0; ) {
              for (let s = e; s; s = s._parent)
                if (s.index == i) {
                  if (i == this.index) return s;
                  (t = s), (n = r + 1);
                  break t;
                }
              i = this.stack[--r];
            }
          for (let e = n; e < this.stack.length; e++)
            t = new w(this.buffer, t, this.stack[e]);
          return (this.bufferNode = new w(this.buffer, t, this.index));
        }
        get tree() {
          return this.buffer ? null : this._tree._tree;
        }
        iterate(e, t) {
          for (let n = 0; ; ) {
            let i = !1;
            if (this.type.isAnonymous || !1 !== e(this)) {
              if (this.firstChild()) {
                n++;
                continue;
              }
              this.type.isAnonymous || (i = !0);
            }
            for (
              ;
              i && t && t(this),
                (i = this.type.isAnonymous),
                !this.nextSibling();

            ) {
              if (!n) return;
              this.parent(), n--, (i = !0);
            }
          }
        }
        matchContext(e) {
          if (!this.buffer) return b(this.node, e);
          let {buffer: t} = this.buffer,
            {types: n} = t.set;
          for (let i = e.length - 1, r = this.stack.length - 1; i >= 0; r--) {
            if (r < 0) return b(this.node, e, i);
            let s = n[t.buffer[this.stack[r]]];
            if (!s.isAnonymous) {
              if (e[i] && e[i] != s.name) return !1;
              i--;
            }
          }
          return !0;
        }
      }
      function v(e) {
        return e.children.some(
          (e) => e instanceof m || !e.type.isAnonymous || v(e)
        );
      }
      let X = new WeakMap();
      function Z(e, t) {
        if (!e.isAnonymous || t instanceof m || t.type != e) return 1;
        let n = X.get(t);
        if (null == n) {
          for (let i of ((n = 1), t.children)) {
            if (i.type != e || !(i instanceof d)) {
              n = 1;
              break;
            }
            n += Z(e, i);
          }
          X.set(t, n);
        }
        return n;
      }
      function Y(e, t, n, i, r, s, a, o, O) {
        let l = 0;
        for (let n = i; n < r; n++) l += Z(e, t[n]);
        let h = Math.ceil((1.5 * l) / 8),
          c = [],
          u = [];
        return (
          !(function t(n, i, r, a, o) {
            for (let l = r; l < a; ) {
              let r = l,
                f = i[l],
                p = Z(e, n[l]);
              for (l++; l < a; l++) {
                let t = Z(e, n[l]);
                if (p + t >= h) break;
                p += t;
              }
              if (l == r + 1) {
                if (p > h) {
                  let e = n[r];
                  t(e.children, e.positions, 0, e.children.length, i[r] + o);
                  continue;
                }
                c.push(n[r]);
              } else {
                let t = i[l - 1] + n[l - 1].length - f;
                c.push(Y(e, n, i, r, l, f, t, null, O));
              }
              u.push(f + o - s);
            }
          })(t, n, i, r, 0),
          (o || O)(c, u, a)
        );
      }
      class T {
        constructor() {
          this.map = new WeakMap();
        }
        setBuffer(e, t, n) {
          let i = this.map.get(e);
          i || this.map.set(e, (i = new Map())), i.set(t, n);
        }
        getBuffer(e, t) {
          let n = this.map.get(e);
          return n && n.get(t);
        }
        set(e, t) {
          e instanceof w
            ? this.setBuffer(e.context.buffer, e.index, t)
            : e instanceof x && this.map.set(e.tree, t);
        }
        get(e) {
          return e instanceof w
            ? this.getBuffer(e.context.buffer, e.index)
            : e instanceof x
            ? this.map.get(e.tree)
            : void 0;
        }
        cursorSet(e, t) {
          e.buffer
            ? this.setBuffer(e.buffer.buffer, e.index, t)
            : this.map.set(e.tree, t);
        }
        cursorGet(e) {
          return e.buffer
            ? this.getBuffer(e.buffer.buffer, e.index)
            : this.map.get(e.tree);
        }
      }
      class W {
        constructor(e, t, n, i, r = !1, s = !1) {
          (this.from = e),
            (this.to = t),
            (this.tree = n),
            (this.offset = i),
            (this.open = (r ? 1 : 0) | (s ? 2 : 0));
        }
        get openStart() {
          return (1 & this.open) > 0;
        }
        get openEnd() {
          return (2 & this.open) > 0;
        }
        static addTree(e, t = [], n = !1) {
          let i = [new W(0, e.length, e, 0, !1, n)];
          for (let n of t) n.to > e.length && i.push(n);
          return i;
        }
        static applyChanges(e, t, n = 128) {
          if (!t.length) return e;
          let i = [],
            r = 1,
            s = e.length ? e[0] : null;
          for (let a = 0, o = 0, O = 0; ; a++) {
            let l = a < t.length ? t[a] : null,
              h = l ? l.fromA : 1e9;
            if (h - o >= n)
              for (; s && s.from < h; ) {
                let t = s;
                if (o >= t.from || h <= t.to || O) {
                  let e = Math.max(t.from, o) - O,
                    n = Math.min(t.to, h) - O;
                  t =
                    e >= n
                      ? null
                      : new W(e, n, t.tree, t.offset + O, a > 0, !!l);
                }
                if ((t && i.push(t), s.to > h)) break;
                s = r < e.length ? e[r++] : null;
              }
            if (!l) break;
            (o = l.toA), (O = l.toA - l.toB);
          }
          return i;
        }
      }
      class C {
        startParse(e, t, n) {
          return (
            'string' == typeof e && (e = new U(e)),
            (n = n
              ? n.length
                ? n.map((e) => new o(e.from, e.to))
                : [new o(0, 0)]
              : [new o(0, e.length)]),
            this.createParse(e, t || [], n)
          );
        }
        parse(e, t, n) {
          let i = this.startParse(e, t, n);
          for (;;) {
            let e = i.advance();
            if (e) return e;
          }
        }
      }
      class U {
        constructor(e) {
          this.string = e;
        }
        get length() {
          return this.string.length;
        }
        chunk(e) {
          return this.string.slice(e);
        }
        get lineChunks() {
          return !1;
        }
        read(e, t) {
          return this.string.slice(e, t);
        }
      }
      function _(e) {
        return (t, n, i, r) => new z(t, e, n, i, r);
      }
      class R {
        constructor(e, t, n, i, r) {
          (this.parser = e),
            (this.parse = t),
            (this.overlay = n),
            (this.target = i),
            (this.ranges = r);
        }
      }
      class q {
        constructor(e, t, n, i, r, s, a) {
          (this.parser = e),
            (this.predicate = t),
            (this.mounts = n),
            (this.index = i),
            (this.start = r),
            (this.target = s),
            (this.prev = a),
            (this.depth = 0),
            (this.ranges = []);
        }
      }
      let V = new O({perNode: !0});
      class z {
        constructor(e, t, n, i, r) {
          (this.nest = t),
            (this.input = n),
            (this.fragments = i),
            (this.ranges = r),
            (this.inner = []),
            (this.innerDone = 0),
            (this.baseTree = null),
            (this.stoppedAt = null),
            (this.baseParse = e);
        }
        advance() {
          if (this.baseParse) {
            let e = this.baseParse.advance();
            if (!e) return null;
            if (
              ((this.baseParse = null),
              (this.baseTree = e),
              this.startInner(),
              null != this.stoppedAt)
            )
              for (let e of this.inner) e.parse.stopAt(this.stoppedAt);
          }
          if (this.innerDone == this.inner.length) {
            let e = this.baseTree;
            return (
              null != this.stoppedAt &&
                (e = new d(
                  e.type,
                  e.children,
                  e.positions,
                  e.length,
                  e.propValues.concat([[V, this.stoppedAt]])
                )),
              e
            );
          }
          let e = this.inner[this.innerDone],
            t = e.parse.advance();
          if (t) {
            this.innerDone++;
            let n = Object.assign(Object.create(null), e.target.props);
            (n[O.mounted.id] = new l(t, e.overlay, e.parser)),
              (e.target.props = n);
          }
          return null;
        }
        get parsedPos() {
          if (this.baseParse) return 0;
          let e = this.input.length;
          for (let t = this.innerDone; t < this.inner.length; t++)
            this.inner[t].ranges[0].from < e &&
              (e = Math.min(e, this.inner[t].parse.parsedPos));
          return e;
        }
        stopAt(e) {
          if (((this.stoppedAt = e), this.baseParse)) this.baseParse.stopAt(e);
          else
            for (let t = this.innerDone; t < this.inner.length; t++)
              this.inner[t].parse.stopAt(e);
        }
        startInner() {
          let e = new G(this.fragments),
            t = null,
            n = null,
            r = new k(
              new x(this.baseTree, this.ranges[0].from, 0, null),
              i.IncludeAnonymous | i.IgnoreMounts
            );
          t: for (
            let i, s;
            null == this.stoppedAt || r.from < this.stoppedAt;

          ) {
            let a = !0,
              O;
            if (e.hasNode(r)) {
              if (t) {
                let e = t.mounts.find(
                  (e) =>
                    e.frag.from <= r.from &&
                    e.frag.to >= r.to &&
                    e.mount.overlay
                );
                if (e)
                  for (let n of e.mount.overlay) {
                    let i = n.from + e.pos,
                      s = n.to + e.pos;
                    i >= r.from &&
                      s <= r.to &&
                      !t.ranges.some((e) => e.from < s && e.to > i) &&
                      t.ranges.push({from: i, to: s});
                  }
              }
              a = !1;
            } else if (
              n &&
              (s = (function (e, t, n) {
                for (let i of e) {
                  if (i.from >= n) break;
                  if (i.to > t) return i.from <= t && i.to >= n ? 2 : 1;
                }
                return 0;
              })(n.ranges, r.from, r.to))
            )
              a = 2 != s;
            else if (
              !r.type.isAnonymous &&
              r.from < r.to &&
              (i = this.nest(r, this.input))
            ) {
              r.tree ||
                (function (e) {
                  let {node: t} = e,
                    n = 0;
                  do e.parent(), n++;
                  while (!e.tree);
                  let i = 0,
                    r = e.tree,
                    s = 0;
                  for (
                    ;
                    !((s = r.positions[i] + e.from) <= t.from) ||
                    !(s + r.children[i].length >= t.to);
                    i++
                  );
                  let a = r.children[i],
                    o = a.buffer;
                  r.children[i] = (function e(n, i, r, O, l) {
                    let h = n;
                    for (; o[h + 2] + s <= t.from; ) h = o[h + 3];
                    let c = [],
                      u = [];
                    j(a, n, h, c, u, O);
                    let f = o[h + 1],
                      p = o[h + 2],
                      g = f + s == t.from && p + s == t.to && o[h] == t.type.id;
                    return (
                      c.push(
                        g
                          ? t.toTree()
                          : e(h + 4, o[h + 3], a.set.types[o[h]], f, p - f)
                      ),
                      u.push(f - O),
                      j(a, o[h + 3], i, c, u, O),
                      new d(r, c, u, l)
                    );
                  })(0, o.length, c.none, 0, a.length);
                  for (let i = 0; i <= n; i++) e.childAfter(t.from);
                })(r);
              let s = e.findMounts(r.from, i.parser);
              if ('function' == typeof i.overlay)
                t = new q(
                  i.parser,
                  i.overlay,
                  s,
                  this.inner.length,
                  r.from,
                  r.tree,
                  t
                );
              else {
                let e = I(this.ranges, i.overlay || [new o(r.from, r.to)]);
                e.length &&
                  this.inner.push(
                    new R(
                      i.parser,
                      i.parser.startParse(this.input, E(s, e), e),
                      i.overlay
                        ? i.overlay.map(
                            (e) => new o(e.from - r.from, e.to - r.from)
                          )
                        : null,
                      r.tree,
                      e
                    )
                  ),
                  i.overlay
                    ? e.length && (n = {ranges: e, depth: 0, prev: n})
                    : (a = !1);
              }
            } else
              t &&
                (O = t.predicate(r)) &&
                (!0 === O && (O = new o(r.from, r.to)),
                O.from < O.to && t.ranges.push(O));
            if (a && r.firstChild()) t && t.depth++, n && n.depth++;
            else
              for (; !r.nextSibling(); ) {
                if (!r.parent()) break t;
                if (t && !--t.depth) {
                  let e = I(this.ranges, t.ranges);
                  e.length &&
                    this.inner.splice(
                      t.index,
                      0,
                      new R(
                        t.parser,
                        t.parser.startParse(this.input, E(t.mounts, e), e),
                        t.ranges.map(
                          (e) => new o(e.from - t.start, e.to - t.start)
                        ),
                        t.target,
                        e
                      )
                    ),
                    (t = t.prev);
                }
                !n || --n.depth || (n = n.prev);
              }
          }
        }
      }
      function j(e, t, n, i, r, s) {
        if (t < n) {
          let a = e.buffer[t + 1];
          i.push(e.slice(t, n, a)), r.push(a - s);
        }
      }
      class A {
        constructor(e, t) {
          (this.offset = t),
            (this.done = !1),
            (this.cursor = e.cursor(i.IncludeAnonymous | i.IgnoreMounts));
        }
        moveTo(e) {
          let {cursor: t} = this,
            n = e - this.offset;
          for (; !this.done && t.from < n; )
            (t.to >= e && t.enter(n, 1, i.IgnoreOverlays | i.ExcludeBuffers)) ||
              t.next(!1) ||
              (this.done = !0);
        }
        hasNode(e) {
          if (
            (this.moveTo(e.from),
            !this.done &&
              this.cursor.from + this.offset == e.from &&
              this.cursor.tree)
          )
            for (let t = this.cursor.tree; ; ) {
              if (t == e.tree) return !0;
              if (
                t.children.length &&
                0 == t.positions[0] &&
                t.children[0] instanceof d
              )
                t = t.children[0];
              else break;
            }
          return !1;
        }
      }
      class G {
        constructor(e) {
          var t;
          if (
            ((this.fragments = e), (this.curTo = 0), (this.fragI = 0), e.length)
          ) {
            let n = (this.curFrag = e[0]);
            (this.curTo =
              null !== (t = n.tree.prop(V)) && void 0 !== t ? t : n.to),
              (this.inner = new A(n.tree, -n.offset));
          } else this.curFrag = this.inner = null;
        }
        hasNode(e) {
          for (; this.curFrag && e.from >= this.curTo; ) this.nextFrag();
          return (
            this.curFrag &&
            this.curFrag.from <= e.from &&
            this.curTo >= e.to &&
            this.inner.hasNode(e)
          );
        }
        nextFrag() {
          var e;
          if ((this.fragI++, this.fragI == this.fragments.length))
            this.curFrag = this.inner = null;
          else {
            let t = (this.curFrag = this.fragments[this.fragI]);
            (this.curTo =
              null !== (e = t.tree.prop(V)) && void 0 !== e ? e : t.to),
              (this.inner = new A(t.tree, -t.offset));
          }
        }
        findMounts(e, t) {
          var n;
          let i = [];
          if (this.inner) {
            this.inner.cursor.moveTo(e, 1);
            for (let e = this.inner.cursor.node; e; e = e.parent) {
              let r =
                null === (n = e.tree) || void 0 === n
                  ? void 0
                  : n.prop(O.mounted);
              if (r && r.parser == t)
                for (let t = this.fragI; t < this.fragments.length; t++) {
                  let n = this.fragments[t];
                  if (n.from >= e.to) break;
                  n.tree == this.curFrag.tree &&
                    i.push({frag: n, pos: e.from - n.offset, mount: r});
                }
            }
          }
          return i;
        }
      }
      function I(e, t) {
        let n = null,
          i = t;
        for (let r = 1, s = 0; r < e.length; r++) {
          let a = e[r - 1].to,
            O = e[r].from;
          for (; s < i.length; s++) {
            let e = i[s];
            if (e.from >= O) break;
            !(e.to <= a) &&
              (n || (i = n = t.slice()),
              e.from < a
                ? ((n[s] = new o(e.from, a)),
                  e.to > O && n.splice(s + 1, 0, new o(O, e.to)))
                : e.to > O
                ? (n[s--] = new o(O, e.to))
                : n.splice(s--, 1));
          }
        }
        return i;
      }
      function E(e, t) {
        let n = [];
        for (let {pos: i, mount: r, frag: s} of e) {
          let e = i + (r.overlay ? r.overlay[0].from : 0),
            a = e + r.tree.length,
            O = Math.max(s.from, e),
            l = Math.min(s.to, a);
          if (r.overlay) {
            let a = (function (e, t, n, i) {
              let r = 0,
                s = 0,
                a = !1,
                O = !1,
                l = -1e9,
                h = [];
              for (;;) {
                let c = r == e.length ? 1e9 : a ? e[r].to : e[r].from,
                  u = s == t.length ? 1e9 : O ? t[s].to : t[s].from;
                if (a != O) {
                  let e = Math.max(l, n),
                    t = Math.min(c, u, i);
                  e < t && h.push(new o(e, t));
                }
                if (1e9 == (l = Math.min(c, u))) break;
                c == l && (a ? ((a = !1), r++) : (a = !0)),
                  u == l && (O ? ((O = !1), s++) : (O = !0));
              }
              return h;
            })(
              t,
              r.overlay.map((e) => new o(e.from + i, e.to + i)),
              O,
              l
            );
            for (let t = 0, i = O; ; t++) {
              let o = t == a.length,
                O = o ? l : a[t].from;
              if (
                (O > i &&
                  n.push(
                    new W(
                      i,
                      O,
                      r.tree,
                      -e,
                      s.from >= i || s.openStart,
                      s.to <= O || s.openEnd
                    )
                  ),
                o)
              )
                break;
              i = a[t].to;
            }
          } else
            n.push(
              new W(
                O,
                l,
                r.tree,
                -e,
                s.from >= e || s.openStart,
                s.to <= a || s.openEnd
              )
            );
        }
        return n;
      }
    },
    35524: function (e, t, n) {
      'use strict';
      n.d(t, {
        Gv: function () {
          return O;
        },
        QR: function () {
          return c;
        },
        bW: function () {
          return u;
        },
        pJ: function () {
          return Z;
        },
      });
      var i = n(41113);
      let r = 0;
      class s {
        constructor(e, t, n) {
          (this.set = e), (this.base = t), (this.modified = n), (this.id = r++);
        }
        static define(e) {
          if (null == e ? void 0 : e.base)
            throw Error('Can not derive from a modified tag');
          let t = new s([], null, []);
          if ((t.set.push(t), e)) for (let n of e.set) t.set.push(n);
          return t;
        }
        static defineModifier() {
          let e = new o();
          return (t) =>
            t.modified.indexOf(e) > -1
              ? t
              : o.get(
                  t.base || t,
                  t.modified.concat(e).sort((e, t) => e.id - t.id)
                );
        }
      }
      let a = 0;
      class o {
        constructor() {
          (this.instances = []), (this.id = a++);
        }
        static get(e, t) {
          if (!t.length) return e;
          let n = t[0].instances.find((n) => {
            var i;
            return (
              n.base == e &&
              ((i = n.modified),
              t.length == i.length && t.every((e, t) => e == i[t]))
            );
          });
          if (n) return n;
          let i = [],
            r = new s(i, e, t);
          for (let e of t) e.instances.push(r);
          let a = (function (e) {
            let t = [[]];
            for (let n = 0; n < e.length; n++)
              for (let i = 0, r = t.length; i < r; i++)
                t.push(t[i].concat(e[n]));
            return t.sort((e, t) => t.length - e.length);
          })(t);
          for (let t of e.set)
            if (!t.modified.length) for (let e of a) i.push(o.get(t, e));
          return r;
        }
      }
      function O(e) {
        let t = Object.create(null);
        for (let n in e) {
          let i = e[n];
          for (let e of (Array.isArray(i) || (i = [i]), n.split(' ')))
            if (e) {
              let n = [],
                r = 2,
                s = e;
              for (let t = 0; ; ) {
                if ('...' == s && t > 0 && t + 3 == e.length) {
                  r = 1;
                  break;
                }
                let i = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(s);
                if (!i) throw RangeError('Invalid path: ' + e);
                if (
                  (n.push(
                    '*' == i[0] ? '' : '"' == i[0][0] ? JSON.parse(i[0]) : i[0]
                  ),
                  (t += i[0].length) == e.length)
                )
                  break;
                let a = e[t++];
                if (t == e.length && '!' == a) {
                  r = 0;
                  break;
                }
                if ('/' != a) throw RangeError('Invalid path: ' + e);
                s = e.slice(t);
              }
              let a = n.length - 1,
                o = n[a];
              if (!o) throw RangeError('Invalid path: ' + e);
              let O = new h(i, r, a > 0 ? n.slice(0, a) : null);
              t[o] = O.sort(t[o]);
            }
        }
        return l.add(t);
      }
      let l = new i.md();
      class h {
        constructor(e, t, n, i) {
          (this.tags = e), (this.mode = t), (this.context = n), (this.next = i);
        }
        get opaque() {
          return 0 == this.mode;
        }
        get inherit() {
          return 1 == this.mode;
        }
        sort(e) {
          return !e || e.depth < this.depth
            ? ((this.next = e), this)
            : ((e.next = this.sort(e.next)), e);
        }
        get depth() {
          return this.context ? this.context.length : 0;
        }
      }
      function c(e, t) {
        let n = Object.create(null);
        for (let t of e)
          if (Array.isArray(t.tag)) for (let e of t.tag) n[e.id] = t.class;
          else n[t.tag.id] = t.class;
        let {scope: i, all: r = null} = t || {};
        return {
          style: (e) => {
            let t = r;
            for (let i of e)
              for (let e of i.set) {
                let i = n[e.id];
                if (i) {
                  t = t ? t + ' ' + i : i;
                  break;
                }
              }
            return t;
          },
          scope: i,
        };
      }
      function u(e, t, n, i = 0, r = e.length) {
        let s = new f(i, Array.isArray(t) ? t : [t], n);
        s.highlightRange(e.cursor(), i, r, '', s.highlighters), s.flush(r);
      }
      h.empty = new h([], 2, null);
      class f {
        constructor(e, t, n) {
          (this.at = e),
            (this.highlighters = t),
            (this.span = n),
            (this.class = '');
        }
        startSpan(e, t) {
          t != this.class &&
            (this.flush(e), e > this.at && (this.at = e), (this.class = t));
        }
        flush(e) {
          e > this.at && this.class && this.span(this.at, e, this.class);
        }
        highlightRange(e, t, n, r, s) {
          let {type: a, from: o, to: O} = e;
          if (o >= n || O <= t) return;
          a.isTop &&
            (s = this.highlighters.filter((e) => !e.scope || e.scope(a)));
          let c = r,
            u =
              (function (e) {
                let t = e.type.prop(l);
                for (; t && t.context && !e.matchContext(t.context); )
                  t = t.next;
                return t || null;
              })(e) || h.empty,
            f = (function (e, t) {
              let n = null;
              for (let i of e) {
                let e = i.style(t);
                e && (n = n ? n + ' ' + e : e);
              }
              return n;
            })(s, u.tags);
          if (
            (f &&
              (c && (c += ' '),
              (c += f),
              1 == u.mode && (r += (r ? ' ' : '') + f)),
            this.startSpan(e.from, c),
            u.opaque)
          )
            return;
          let p = e.tree && e.tree.prop(i.md.mounted);
          if (p && p.overlay) {
            let i = e.node.enter(p.overlay[0].from + o, 1),
              a = this.highlighters.filter(
                (e) => !e.scope || e.scope(p.tree.type)
              ),
              l = e.firstChild();
            for (let h = 0, u = o; ; h++) {
              let f = h < p.overlay.length ? p.overlay[h] : null,
                d = f ? f.from + o : O,
                g = Math.max(t, u),
                m = Math.min(n, d);
              if (g < m && l)
                for (
                  ;
                  e.from < m &&
                  (this.highlightRange(e, g, m, r, s),
                  this.startSpan(Math.min(m, e.to), c),
                  !(e.to >= d) && e.nextSibling());

                );
              if (!f || d > n) break;
              (u = f.to + o) > t &&
                (this.highlightRange(
                  i.cursor(),
                  Math.max(t, f.from + o),
                  Math.min(n, u),
                  r,
                  a
                ),
                this.startSpan(u, c));
            }
            l && e.parent();
          } else if (e.firstChild()) {
            do {
              if (e.to <= t) continue;
              if (e.from >= n) break;
              this.highlightRange(e, t, n, r, s),
                this.startSpan(Math.min(n, e.to), c);
            } while (e.nextSibling());
            e.parent();
          }
        }
      }
      let p = s.define,
        d = p(),
        g = p(),
        m = p(g),
        Q = p(g),
        S = p(),
        $ = p(S),
        x = p(S),
        P = p(),
        b = p(P),
        y = p(),
        w = p(),
        k = p(),
        v = p(k),
        X = p(),
        Z = {
          comment: d,
          lineComment: p(d),
          blockComment: p(d),
          docComment: p(d),
          name: g,
          variableName: p(g),
          typeName: m,
          tagName: p(m),
          propertyName: Q,
          attributeName: p(Q),
          className: p(g),
          labelName: p(g),
          namespace: p(g),
          macroName: p(g),
          literal: S,
          string: $,
          docString: p($),
          character: p($),
          attributeValue: p($),
          number: x,
          integer: p(x),
          float: p(x),
          bool: p(S),
          regexp: p(S),
          escape: p(S),
          color: p(S),
          url: p(S),
          keyword: y,
          self: p(y),
          null: p(y),
          atom: p(y),
          unit: p(y),
          modifier: p(y),
          operatorKeyword: p(y),
          controlKeyword: p(y),
          definitionKeyword: p(y),
          moduleKeyword: p(y),
          operator: w,
          derefOperator: p(w),
          arithmeticOperator: p(w),
          logicOperator: p(w),
          bitwiseOperator: p(w),
          compareOperator: p(w),
          updateOperator: p(w),
          definitionOperator: p(w),
          typeOperator: p(w),
          controlOperator: p(w),
          punctuation: k,
          separator: p(k),
          bracket: v,
          angleBracket: p(v),
          squareBracket: p(v),
          paren: p(v),
          brace: p(v),
          content: P,
          heading: b,
          heading1: p(b),
          heading2: p(b),
          heading3: p(b),
          heading4: p(b),
          heading5: p(b),
          heading6: p(b),
          contentSeparator: p(P),
          list: p(P),
          quote: p(P),
          emphasis: p(P),
          strong: p(P),
          link: p(P),
          monospace: p(P),
          strikethrough: p(P),
          inserted: p(),
          deleted: p(),
          changed: p(),
          invalid: p(),
          meta: X,
          documentMeta: p(X),
          annotation: p(X),
          processingInstruction: p(X),
          definition: s.defineModifier(),
          constant: s.defineModifier(),
          function: s.defineModifier(),
          standard: s.defineModifier(),
          local: s.defineModifier(),
          special: s.defineModifier(),
        };
      c([
        {tag: Z.link, class: 'tok-link'},
        {tag: Z.heading, class: 'tok-heading'},
        {tag: Z.emphasis, class: 'tok-emphasis'},
        {tag: Z.strong, class: 'tok-strong'},
        {tag: Z.keyword, class: 'tok-keyword'},
        {tag: Z.atom, class: 'tok-atom'},
        {tag: Z.bool, class: 'tok-bool'},
        {tag: Z.url, class: 'tok-url'},
        {tag: Z.labelName, class: 'tok-labelName'},
        {tag: Z.inserted, class: 'tok-inserted'},
        {tag: Z.deleted, class: 'tok-deleted'},
        {tag: Z.literal, class: 'tok-literal'},
        {tag: Z.string, class: 'tok-string'},
        {tag: Z.number, class: 'tok-number'},
        {tag: [Z.regexp, Z.escape, Z.special(Z.string)], class: 'tok-string2'},
        {tag: Z.variableName, class: 'tok-variableName'},
        {tag: Z.local(Z.variableName), class: 'tok-variableName tok-local'},
        {
          tag: Z.definition(Z.variableName),
          class: 'tok-variableName tok-definition',
        },
        {tag: Z.special(Z.variableName), class: 'tok-variableName2'},
        {
          tag: Z.definition(Z.propertyName),
          class: 'tok-propertyName tok-definition',
        },
        {tag: Z.typeName, class: 'tok-typeName'},
        {tag: Z.namespace, class: 'tok-namespace'},
        {tag: Z.className, class: 'tok-className'},
        {tag: Z.macroName, class: 'tok-macroName'},
        {tag: Z.propertyName, class: 'tok-propertyName'},
        {tag: Z.operator, class: 'tok-operator'},
        {tag: Z.comment, class: 'tok-comment'},
        {tag: Z.meta, class: 'tok-meta'},
        {tag: Z.invalid, class: 'tok-invalid'},
        {tag: Z.punctuation, class: 'tok-punctuation'},
      ]);
    },
    53105: function (e, t, n) {
      'use strict';
      n.d(t, {
        IK: function () {
          return C;
        },
        Jq: function () {
          return x;
        },
        RA: function () {
          return $;
        },
        WQ: function () {
          return U;
        },
      });
      var i,
        r,
        s,
        a,
        o,
        O,
        l = n(41113),
        h = n(95941);
      class c {
        constructor(e, t, n, i, r, s, a, o, O, l = 0, h) {
          (this.p = e),
            (this.stack = t),
            (this.state = n),
            (this.reducePos = i),
            (this.pos = r),
            (this.score = s),
            (this.buffer = a),
            (this.bufferBase = o),
            (this.curContext = O),
            (this.lookAhead = l),
            (this.parent = h);
        }
        toString() {
          return `[${this.stack
            .filter((e, t) => t % 3 == 0)
            .concat(this.state)}]@${this.pos}${
            this.score ? '!' + this.score : ''
          }`;
        }
        static start(e, t, n = 0) {
          let i = e.parser.context;
          return new c(
            e,
            [],
            t,
            n,
            n,
            0,
            [],
            0,
            i ? new u(i, i.start) : null,
            0,
            null
          );
        }
        get context() {
          return this.curContext ? this.curContext.context : null;
        }
        pushState(e, t) {
          this.stack.push(this.state, t, this.bufferBase + this.buffer.length),
            (this.state = e);
        }
        reduce(e) {
          var t;
          let n = e >> 19,
            i = 65535 & e,
            {parser: r} = this.p,
            s = r.dynamicPrecedence(i);
          if ((s && (this.score += s), 0 == n)) {
            this.pushState(r.getGoto(this.state, i, !0), this.reducePos),
              i < r.minRepeatTerm &&
                this.storeNode(i, this.reducePos, this.reducePos, 4, !0),
              this.reduceContext(i, this.reducePos);
            return;
          }
          let a = this.stack.length - (n - 1) * 3 - (262144 & e ? 6 : 0),
            o = a ? this.stack[a - 2] : this.p.ranges[0].from,
            O = this.reducePos - o;
          O >= 2e3 &&
            !(null === (t = this.p.parser.nodeSet.types[i]) || void 0 === t
              ? void 0
              : t.isAnonymous) &&
            (o == this.p.lastBigReductionStart
              ? (this.p.bigReductionCount++, (this.p.lastBigReductionSize = O))
              : this.p.lastBigReductionSize < O &&
                ((this.p.bigReductionCount = 1),
                (this.p.lastBigReductionStart = o),
                (this.p.lastBigReductionSize = O)));
          let l = a ? this.stack[a - 1] : 0,
            h = this.bufferBase + this.buffer.length - l;
          if (i < r.minRepeatTerm || 131072 & e) {
            let e = r.stateFlag(this.state, 1) ? this.pos : this.reducePos;
            this.storeNode(i, o, e, h + 4, !0);
          }
          if (262144 & e) this.state = this.stack[a];
          else {
            let e = this.stack[a - 3];
            this.state = r.getGoto(e, i, !0);
          }
          for (; this.stack.length > a; ) this.stack.pop();
          this.reduceContext(i, o);
        }
        storeNode(e, t, n, i = 4, r = !1) {
          if (
            0 == e &&
            (!this.stack.length ||
              this.stack[this.stack.length - 1] <
                this.buffer.length + this.bufferBase)
          ) {
            let e = this,
              i = this.buffer.length;
            if (
              (0 == i &&
                e.parent &&
                ((i = e.bufferBase - e.parent.bufferBase), (e = e.parent)),
              i > 0 && 0 == e.buffer[i - 4] && e.buffer[i - 1] > -1)
            ) {
              if (t == n) return;
              if (e.buffer[i - 2] >= t) {
                e.buffer[i - 2] = n;
                return;
              }
            }
          }
          if (r && this.pos != n) {
            let r = this.buffer.length;
            if (r > 0 && 0 != this.buffer[r - 4])
              for (; r > 0 && this.buffer[r - 2] > n; )
                (this.buffer[r] = this.buffer[r - 4]),
                  (this.buffer[r + 1] = this.buffer[r - 3]),
                  (this.buffer[r + 2] = this.buffer[r - 2]),
                  (this.buffer[r + 3] = this.buffer[r - 1]),
                  (r -= 4),
                  i > 4 && (i -= 4);
            (this.buffer[r] = e),
              (this.buffer[r + 1] = t),
              (this.buffer[r + 2] = n),
              (this.buffer[r + 3] = i);
          } else this.buffer.push(e, t, n, i);
        }
        shift(e, t, n) {
          let i = this.pos;
          if (131072 & e) this.pushState(65535 & e, this.pos);
          else if ((262144 & e) == 0) {
            let {parser: r} = this.p;
            (n > this.pos || t <= r.maxNode) &&
              ((this.pos = n), r.stateFlag(e, 1) || (this.reducePos = n)),
              this.pushState(e, i),
              this.shiftContext(t, i),
              t <= r.maxNode && this.buffer.push(t, i, n, 4);
          } else
            (this.pos = n),
              this.shiftContext(t, i),
              t <= this.p.parser.maxNode && this.buffer.push(t, i, n, 4);
        }
        apply(e, t, n) {
          65536 & e ? this.reduce(e) : this.shift(e, t, n);
        }
        useNode(e, t) {
          let n = this.p.reused.length - 1;
          (n < 0 || this.p.reused[n] != e) && (this.p.reused.push(e), n++);
          let i = this.pos;
          (this.reducePos = this.pos = i + e.length),
            this.pushState(t, i),
            this.buffer.push(n, i, this.reducePos, -1),
            this.curContext &&
              this.updateContext(
                this.curContext.tracker.reuse(
                  this.curContext.context,
                  e,
                  this,
                  this.p.stream.reset(this.pos - e.length)
                )
              );
        }
        split() {
          let e = this,
            t = e.buffer.length;
          for (; t > 0 && e.buffer[t - 2] > e.reducePos; ) t -= 4;
          let n = e.buffer.slice(t),
            i = e.bufferBase + t;
          for (; e && i == e.bufferBase; ) e = e.parent;
          return new c(
            this.p,
            this.stack.slice(),
            this.state,
            this.reducePos,
            this.pos,
            this.score,
            n,
            i,
            this.curContext,
            this.lookAhead,
            e
          );
        }
        recoverByDelete(e, t) {
          let n = e <= this.p.parser.maxNode;
          n && this.storeNode(e, this.pos, t, 4),
            this.storeNode(0, this.pos, t, n ? 8 : 4),
            (this.pos = this.reducePos = t),
            (this.score -= 190);
        }
        canShift(e) {
          for (let t = new f(this); ; ) {
            let n =
              this.p.parser.stateSlot(t.state, 4) ||
              this.p.parser.hasAction(t.state, e);
            if (0 == n) return !1;
            if ((65536 & n) == 0) return !0;
            t.reduce(n);
          }
        }
        recoverByInsert(e) {
          if (this.stack.length >= 300) return [];
          let t = this.p.parser.nextStates(this.state);
          if (t.length > 8 || this.stack.length >= 120) {
            let n = [];
            for (let i = 0, r; i < t.length; i += 2)
              (r = t[i + 1]) != this.state &&
                this.p.parser.hasAction(r, e) &&
                n.push(t[i], r);
            if (this.stack.length < 120)
              for (let e = 0; n.length < 8 && e < t.length; e += 2) {
                let i = t[e + 1];
                n.some((e, t) => 1 & t && e == i) || n.push(t[e], i);
              }
            t = n;
          }
          let n = [];
          for (let e = 0; e < t.length && n.length < 4; e += 2) {
            let i = t[e + 1];
            if (i == this.state) continue;
            let r = this.split();
            r.pushState(i, this.pos),
              r.storeNode(0, r.pos, r.pos, 4, !0),
              r.shiftContext(t[e], this.pos),
              (r.score -= 200),
              n.push(r);
          }
          return n;
        }
        forceReduce() {
          let e = this.p.parser.stateSlot(this.state, 5);
          if ((65536 & e) == 0) return !1;
          let {parser: t} = this.p;
          if (!t.validAction(this.state, e)) {
            let n = this.stack.length - 3 * (e >> 19);
            if (n < 0 || 0 > t.getGoto(this.stack[n], 65535 & e, !1)) return !1;
            this.storeNode(0, this.reducePos, this.reducePos, 4, !0),
              (this.score -= 100);
          }
          return (this.reducePos = this.pos), this.reduce(e), !0;
        }
        forceAll() {
          for (; !this.p.parser.stateFlag(this.state, 2); )
            if (!this.forceReduce()) {
              this.storeNode(0, this.pos, this.pos, 4, !0);
              break;
            }
          return this;
        }
        get deadEnd() {
          if (3 != this.stack.length) return !1;
          let {parser: e} = this.p;
          return (
            65535 == e.data[e.stateSlot(this.state, 1)] &&
            !e.stateSlot(this.state, 4)
          );
        }
        restart() {
          (this.state = this.stack[0]), (this.stack.length = 0);
        }
        sameState(e) {
          if (this.state != e.state || this.stack.length != e.stack.length)
            return !1;
          for (let t = 0; t < this.stack.length; t += 3)
            if (this.stack[t] != e.stack[t]) return !1;
          return !0;
        }
        get parser() {
          return this.p.parser;
        }
        dialectEnabled(e) {
          return this.p.parser.dialect.flags[e];
        }
        shiftContext(e, t) {
          this.curContext &&
            this.updateContext(
              this.curContext.tracker.shift(
                this.curContext.context,
                e,
                this,
                this.p.stream.reset(t)
              )
            );
        }
        reduceContext(e, t) {
          this.curContext &&
            this.updateContext(
              this.curContext.tracker.reduce(
                this.curContext.context,
                e,
                this,
                this.p.stream.reset(t)
              )
            );
        }
        emitContext() {
          let e = this.buffer.length - 1;
          (e < 0 || -3 != this.buffer[e]) &&
            this.buffer.push(
              this.curContext.hash,
              this.reducePos,
              this.reducePos,
              -3
            );
        }
        emitLookAhead() {
          let e = this.buffer.length - 1;
          (e < 0 || -4 != this.buffer[e]) &&
            this.buffer.push(
              this.lookAhead,
              this.reducePos,
              this.reducePos,
              -4
            );
        }
        updateContext(e) {
          if (e != this.curContext.context) {
            let t = new u(this.curContext.tracker, e);
            t.hash != this.curContext.hash && this.emitContext(),
              (this.curContext = t);
          }
        }
        setLookAhead(e) {
          e > this.lookAhead && (this.emitLookAhead(), (this.lookAhead = e));
        }
        close() {
          this.curContext &&
            this.curContext.tracker.strict &&
            this.emitContext(),
            this.lookAhead > 0 && this.emitLookAhead();
        }
      }
      class u {
        constructor(e, t) {
          (this.tracker = e),
            (this.context = t),
            (this.hash = e.strict ? e.hash(t) : 0);
        }
      }
      ((i = a || (a = {}))[(i.Insert = 200)] = 'Insert'),
        (i[(i.Delete = 190)] = 'Delete'),
        (i[(i.Reduce = 100)] = 'Reduce'),
        (i[(i.MaxNext = 4)] = 'MaxNext'),
        (i[(i.MaxInsertStackDepth = 300)] = 'MaxInsertStackDepth'),
        (i[(i.DampenInsertStackDepth = 120)] = 'DampenInsertStackDepth'),
        (i[(i.MinBigReduction = 2e3)] = 'MinBigReduction');
      class f {
        constructor(e) {
          (this.start = e),
            (this.state = e.state),
            (this.stack = e.stack),
            (this.base = this.stack.length);
        }
        reduce(e) {
          let t = e >> 19;
          0 == t
            ? (this.stack == this.start.stack &&
                (this.stack = this.stack.slice()),
              this.stack.push(this.state, 0, 0),
              (this.base += 3))
            : (this.base -= (t - 1) * 3);
          let n = this.start.p.parser.getGoto(
            this.stack[this.base - 3],
            65535 & e,
            !0
          );
          this.state = n;
        }
      }
      class p {
        constructor(e, t, n) {
          (this.stack = e),
            (this.pos = t),
            (this.index = n),
            (this.buffer = e.buffer),
            0 == this.index && this.maybeNext();
        }
        static create(e, t = e.bufferBase + e.buffer.length) {
          return new p(e, t, t - e.bufferBase);
        }
        maybeNext() {
          let e = this.stack.parent;
          null != e &&
            ((this.index = this.stack.bufferBase - e.bufferBase),
            (this.stack = e),
            (this.buffer = e.buffer));
        }
        get id() {
          return this.buffer[this.index - 4];
        }
        get start() {
          return this.buffer[this.index - 3];
        }
        get end() {
          return this.buffer[this.index - 2];
        }
        get size() {
          return this.buffer[this.index - 1];
        }
        next() {
          (this.index -= 4),
            (this.pos -= 4),
            0 == this.index && this.maybeNext();
        }
        fork() {
          return new p(this.stack, this.pos, this.index);
        }
      }
      function d(e, t = Uint16Array) {
        if ('string' != typeof e) return e;
        let n = null;
        for (let i = 0, r = 0; i < e.length; ) {
          let s = 0;
          for (;;) {
            let t = e.charCodeAt(i++),
              n = !1;
            if (126 == t) {
              s = 65535;
              break;
            }
            t >= 92 && t--, t >= 34 && t--;
            let r = t - 32;
            if ((r >= 46 && ((r -= 46), (n = !0)), (s += r), n)) break;
            s *= 46;
          }
          n ? (n[r++] = s) : (n = new t(s));
        }
        return n;
      }
      class g {
        constructor() {
          (this.start = -1),
            (this.value = -1),
            (this.end = -1),
            (this.extended = -1),
            (this.lookAhead = 0),
            (this.mask = 0),
            (this.context = 0);
        }
      }
      let m = new g();
      class Q {
        constructor(e, t) {
          (this.input = e),
            (this.ranges = t),
            (this.chunk = ''),
            (this.chunkOff = 0),
            (this.chunk2 = ''),
            (this.chunk2Pos = 0),
            (this.next = -1),
            (this.token = m),
            (this.rangeIndex = 0),
            (this.pos = this.chunkPos = t[0].from),
            (this.range = t[0]),
            (this.end = t[t.length - 1].to),
            this.readNext();
        }
        resolveOffset(e, t) {
          let n = this.range,
            i = this.rangeIndex,
            r = this.pos + e;
          for (; r < n.from; ) {
            if (!i) return null;
            let e = this.ranges[--i];
            (r -= n.from - e.to), (n = e);
          }
          for (; t < 0 ? r > n.to : r >= n.to; ) {
            if (i == this.ranges.length - 1) return null;
            let e = this.ranges[++i];
            (r += e.from - n.to), (n = e);
          }
          return r;
        }
        clipPos(e) {
          if (e >= this.range.from && e < this.range.to) return e;
          for (let t of this.ranges) if (t.to > e) return Math.max(e, t.from);
          return this.end;
        }
        peek(e) {
          let t = this.chunkOff + e,
            n,
            i;
          if (t >= 0 && t < this.chunk.length)
            (n = this.pos + e), (i = this.chunk.charCodeAt(t));
          else {
            let t = this.resolveOffset(e, 1);
            if (null == t) return -1;
            if (
              (n = t) >= this.chunk2Pos &&
              n < this.chunk2Pos + this.chunk2.length
            )
              i = this.chunk2.charCodeAt(n - this.chunk2Pos);
            else {
              let e = this.rangeIndex,
                t = this.range;
              for (; t.to <= n; ) t = this.ranges[++e];
              (this.chunk2 = this.input.chunk((this.chunk2Pos = n))),
                n + this.chunk2.length > t.to &&
                  (this.chunk2 = this.chunk2.slice(0, t.to - n)),
                (i = this.chunk2.charCodeAt(0));
            }
          }
          return n >= this.token.lookAhead && (this.token.lookAhead = n + 1), i;
        }
        acceptToken(e, t = 0) {
          let n = t ? this.resolveOffset(t, -1) : this.pos;
          if (null == n || n < this.token.start)
            throw RangeError('Token end out of bounds');
          (this.token.value = e), (this.token.end = n);
        }
        getChunk() {
          if (
            this.pos >= this.chunk2Pos &&
            this.pos < this.chunk2Pos + this.chunk2.length
          ) {
            let {chunk: e, chunkPos: t} = this;
            (this.chunk = this.chunk2),
              (this.chunkPos = this.chunk2Pos),
              (this.chunk2 = e),
              (this.chunk2Pos = t),
              (this.chunkOff = this.pos - this.chunkPos);
          } else {
            (this.chunk2 = this.chunk), (this.chunk2Pos = this.chunkPos);
            let e = this.input.chunk(this.pos),
              t = this.pos + e.length;
            (this.chunk =
              t > this.range.to ? e.slice(0, this.range.to - this.pos) : e),
              (this.chunkPos = this.pos),
              (this.chunkOff = 0);
          }
        }
        readNext() {
          return this.chunkOff >= this.chunk.length &&
            (this.getChunk(), this.chunkOff == this.chunk.length)
            ? (this.next = -1)
            : (this.next = this.chunk.charCodeAt(this.chunkOff));
        }
        advance(e = 1) {
          for (this.chunkOff += e; this.pos + e >= this.range.to; ) {
            if (this.rangeIndex == this.ranges.length - 1)
              return this.setDone();
            (e -= this.range.to - this.pos),
              (this.range = this.ranges[++this.rangeIndex]),
              (this.pos = this.range.from);
          }
          return (
            (this.pos += e),
            this.pos >= this.token.lookAhead &&
              (this.token.lookAhead = this.pos + 1),
            this.readNext()
          );
        }
        setDone() {
          return (
            (this.pos = this.chunkPos = this.end),
            (this.range =
              this.ranges[(this.rangeIndex = this.ranges.length - 1)]),
            (this.chunk = ''),
            (this.next = -1)
          );
        }
        reset(e, t) {
          if (
            (t
              ? ((this.token = t),
                (t.start = e),
                (t.lookAhead = e + 1),
                (t.value = t.extended = -1))
              : (this.token = m),
            this.pos != e)
          ) {
            if (((this.pos = e), e == this.end)) return this.setDone(), this;
            for (; e < this.range.from; )
              this.range = this.ranges[--this.rangeIndex];
            for (; e >= this.range.to; )
              this.range = this.ranges[++this.rangeIndex];
            e >= this.chunkPos && e < this.chunkPos + this.chunk.length
              ? (this.chunkOff = e - this.chunkPos)
              : ((this.chunk = ''), (this.chunkOff = 0)),
              this.readNext();
          }
          return this;
        }
        read(e, t) {
          if (e >= this.chunkPos && t <= this.chunkPos + this.chunk.length)
            return this.chunk.slice(e - this.chunkPos, t - this.chunkPos);
          if (e >= this.chunk2Pos && t <= this.chunk2Pos + this.chunk2.length)
            return this.chunk2.slice(e - this.chunk2Pos, t - this.chunk2Pos);
          if (e >= this.range.from && t <= this.range.to)
            return this.input.read(e, t);
          let n = '';
          for (let i of this.ranges) {
            if (i.from >= t) break;
            i.to > e &&
              (n += this.input.read(Math.max(i.from, e), Math.min(i.to, t)));
          }
          return n;
        }
      }
      class S {
        constructor(e, t) {
          (this.data = e), (this.id = t);
        }
        token(e, t) {
          let {parser: n} = t.p;
          P(this.data, e, t, this.id, n.data, n.tokenPrecTable);
        }
      }
      S.prototype.contextual = S.prototype.fallback = S.prototype.extend = !1;
      class $ {
        constructor(e, t, n) {
          (this.precTable = t),
            (this.elseToken = n),
            (this.data = 'string' == typeof e ? d(e) : e);
        }
        token(e, t) {
          let n = e.pos,
            i;
          for (
            ;
            (i = e.pos),
              P(this.data, e, t, 0, this.data, this.precTable),
              !(e.token.value > -1);

          ) {
            if (null == this.elseToken) return;
            if (e.next < 0) break;
            e.advance(), e.reset(i + 1, e.token);
          }
          i > n && (e.reset(n, e.token), e.acceptToken(this.elseToken, i - n));
        }
      }
      $.prototype.contextual = S.prototype.fallback = S.prototype.extend = !1;
      class x {
        constructor(e, t = {}) {
          (this.token = e),
            (this.contextual = !!t.contextual),
            (this.fallback = !!t.fallback),
            (this.extend = !!t.extend);
        }
      }
      function P(e, t, n, i, r, s) {
        let a = 0,
          o = 1 << i,
          {dialect: O} = n.p.parser;
        t: for (; (o & e[a]) != 0; ) {
          let n = e[a + 1];
          for (let i = a + 3; i < n; i += 2)
            if ((e[i + 1] & o) > 0) {
              let n = e[i];
              if (
                O.allows(n) &&
                (-1 == t.token.value ||
                  t.token.value == n ||
                  (function (e, t, n, i) {
                    let r = b(n, i, t);
                    return r < 0 || b(n, i, e) < r;
                  })(n, t.token.value, r, s))
              ) {
                t.acceptToken(n);
                break;
              }
            }
          let i = t.next,
            l = 0,
            h = e[a + 2];
          if (
            t.next < 0 &&
            h > l &&
            65535 == e[n + 3 * h - 3] &&
            65535 == e[n + 3 * h - 3]
          ) {
            a = e[n + 3 * h - 1];
            continue t;
          }
          for (; l < h; ) {
            let r = (l + h) >> 1,
              s = n + r + (r << 1),
              o = e[s],
              O = e[s + 1] || 65536;
            if (i < o) h = r;
            else if (i >= O) l = r + 1;
            else {
              (a = e[s + 2]), t.advance();
              continue t;
            }
          }
          break;
        }
      }
      function b(e, t, n) {
        for (let i = t, r; 65535 != (r = e[i]); i++) if (r == n) return i - t;
        return -1;
      }
      let y = void 0 !== h && h.env && /\bparse\b/.test(h.env.LOG),
        w = null;
      function k(e, t, n) {
        let i = e.cursor(l.vj.IncludeAnonymous);
        for (i.moveTo(t); ; )
          if (!(n < 0 ? i.childBefore(t) : i.childAfter(t)))
            for (;;) {
              if ((n < 0 ? i.to < t : i.from > t) && !i.type.isError)
                return n < 0
                  ? Math.max(0, Math.min(i.to - 1, t - 25))
                  : Math.min(e.length, Math.max(i.from + 1, t + 25));
              if (n < 0 ? i.prevSibling() : i.nextSibling()) break;
              if (!i.parent()) return n < 0 ? 0 : e.length;
            }
      }
      (r = o || (o = {}))[(r.Margin = 25)] = 'Margin';
      class v {
        constructor(e, t) {
          (this.fragments = e),
            (this.nodeSet = t),
            (this.i = 0),
            (this.fragment = null),
            (this.safeFrom = -1),
            (this.safeTo = -1),
            (this.trees = []),
            (this.start = []),
            (this.index = []),
            this.nextFragment();
        }
        nextFragment() {
          let e = (this.fragment =
            this.i == this.fragments.length ? null : this.fragments[this.i++]);
          if (e) {
            for (
              this.safeFrom = e.openStart
                ? k(e.tree, e.from + e.offset, 1) - e.offset
                : e.from,
                this.safeTo = e.openEnd
                  ? k(e.tree, e.to + e.offset, -1) - e.offset
                  : e.to;
              this.trees.length;

            )
              this.trees.pop(), this.start.pop(), this.index.pop();
            this.trees.push(e.tree),
              this.start.push(-e.offset),
              this.index.push(0),
              (this.nextStart = this.safeFrom);
          } else this.nextStart = 1e9;
        }
        nodeAt(e) {
          if (e < this.nextStart) return null;
          for (; this.fragment && this.safeTo <= e; ) this.nextFragment();
          if (!this.fragment) return null;
          for (;;) {
            let t = this.trees.length - 1;
            if (t < 0) return this.nextFragment(), null;
            let n = this.trees[t],
              i = this.index[t];
            if (i == n.children.length) {
              this.trees.pop(), this.start.pop(), this.index.pop();
              continue;
            }
            let r = n.children[i],
              s = this.start[t] + n.positions[i];
            if (s > e) return (this.nextStart = s), null;
            if (r instanceof l.mp) {
              if (s == e) {
                if (s < this.safeFrom) return null;
                let e = s + r.length;
                if (e <= this.safeTo) {
                  let t = r.prop(l.md.lookAhead);
                  if (!t || e + t < this.fragment.to) return r;
                }
              }
              this.index[t]++,
                s + r.length >= Math.max(this.safeFrom, e) &&
                  (this.trees.push(r), this.start.push(s), this.index.push(0));
            } else this.index[t]++, (this.nextStart = s + r.length);
          }
        }
      }
      class X {
        constructor(e, t) {
          (this.stream = t),
            (this.tokens = []),
            (this.mainToken = null),
            (this.actions = []),
            (this.tokens = e.tokenizers.map((e) => new g()));
        }
        getActions(e) {
          let t = 0,
            n = null,
            {parser: i} = e.p,
            {tokenizers: r} = i,
            s = i.stateSlot(e.state, 3),
            a = e.curContext ? e.curContext.hash : 0,
            o = 0;
          for (let i = 0; i < r.length; i++) {
            if (((1 << i) & s) == 0) continue;
            let O = r[i],
              l = this.tokens[i];
            if (
              (!n || O.fallback) &&
              ((O.contextual ||
                l.start != e.pos ||
                l.mask != s ||
                l.context != a) &&
                (this.updateCachedToken(l, O, e),
                (l.mask = s),
                (l.context = a)),
              l.lookAhead > l.end + 25 && (o = Math.max(l.lookAhead, o)),
              0 != l.value)
            ) {
              let i = t;
              if (
                (l.extended > -1 &&
                  (t = this.addActions(e, l.extended, l.end, t)),
                (t = this.addActions(e, l.value, l.end, t)),
                !O.extend && ((n = l), t > i))
              )
                break;
            }
          }
          for (; this.actions.length > t; ) this.actions.pop();
          return (
            o && e.setLookAhead(o),
            n ||
              e.pos != this.stream.end ||
              (((n = new g()).value = e.p.parser.eofTerm),
              (n.start = n.end = e.pos),
              (t = this.addActions(e, n.value, n.end, t))),
            (this.mainToken = n),
            this.actions
          );
        }
        getMainToken(e) {
          if (this.mainToken) return this.mainToken;
          let t = new g(),
            {pos: n, p: i} = e;
          return (
            (t.start = n),
            (t.end = Math.min(n + 1, i.stream.end)),
            (t.value = n == i.stream.end ? i.parser.eofTerm : 0),
            t
          );
        }
        updateCachedToken(e, t, n) {
          let i = this.stream.clipPos(n.pos);
          if ((t.token(this.stream.reset(i, e), n), e.value > -1)) {
            let {parser: t} = n.p;
            for (let i = 0; i < t.specialized.length; i++)
              if (t.specialized[i] == e.value) {
                let r = t.specializers[i](this.stream.read(e.start, e.end), n);
                if (r >= 0 && n.p.parser.dialect.allows(r >> 1)) {
                  (1 & r) == 0 ? (e.value = r >> 1) : (e.extended = r >> 1);
                  break;
                }
              }
          } else (e.value = 0), (e.end = this.stream.clipPos(i + 1));
        }
        putAction(e, t, n, i) {
          for (let t = 0; t < i; t += 3) if (this.actions[t] == e) return i;
          return (
            (this.actions[i++] = e),
            (this.actions[i++] = t),
            (this.actions[i++] = n),
            i
          );
        }
        addActions(e, t, n, i) {
          let {state: r} = e,
            {parser: s} = e.p,
            {data: a} = s;
          for (let e = 0; e < 2; e++)
            for (let o = s.stateSlot(r, e ? 2 : 1); ; o += 3) {
              if (65535 == a[o]) {
                if (1 == a[o + 1]) o = _(a, o + 2);
                else {
                  0 == i &&
                    2 == a[o + 1] &&
                    (i = this.putAction(_(a, o + 2), t, n, i));
                  break;
                }
              }
              a[o] == t && (i = this.putAction(_(a, o + 1), t, n, i));
            }
          return i;
        }
      }
      ((s = O || (O = {}))[(s.Distance = 5)] = 'Distance'),
        (s[(s.MaxRemainingPerStep = 3)] = 'MaxRemainingPerStep'),
        (s[(s.MinBufferLengthPrune = 500)] = 'MinBufferLengthPrune'),
        (s[(s.ForceReduceLimit = 10)] = 'ForceReduceLimit'),
        (s[(s.CutDepth = 15e3)] = 'CutDepth'),
        (s[(s.CutTo = 9e3)] = 'CutTo'),
        (s[(s.MaxLeftAssociativeReductionCount = 300)] =
          'MaxLeftAssociativeReductionCount'),
        (s[(s.MaxStackCount = 12)] = 'MaxStackCount');
      class Z {
        constructor(e, t, n, i) {
          (this.parser = e),
            (this.input = t),
            (this.ranges = i),
            (this.recovering = 0),
            (this.nextStackID = 9812),
            (this.minStackPos = 0),
            (this.reused = []),
            (this.stoppedAt = null),
            (this.lastBigReductionStart = -1),
            (this.lastBigReductionSize = 0),
            (this.bigReductionCount = 0),
            (this.stream = new Q(t, i)),
            (this.tokens = new X(e, this.stream)),
            (this.topTerm = e.top[1]);
          let {from: r} = i[0];
          (this.stacks = [c.start(this, e.top[0], r)]),
            (this.fragments =
              n.length && this.stream.end - r > 4 * e.bufferLength
                ? new v(n, e.nodeSet)
                : null);
        }
        get parsedPos() {
          return this.minStackPos;
        }
        advance() {
          let e,
            t,
            n = this.stacks,
            i = this.minStackPos,
            r = (this.stacks = []);
          if (this.bigReductionCount > 300 && 1 == n.length) {
            let [e] = n;
            for (
              ;
              e.forceReduce() &&
              e.stack.length &&
              e.stack[e.stack.length - 2] >= this.lastBigReductionStart;

            );
            this.bigReductionCount = this.lastBigReductionSize = 0;
          }
          for (let s = 0; s < n.length; s++) {
            let a = n[s];
            for (;;) {
              if (((this.tokens.mainToken = null), a.pos > i)) r.push(a);
              else {
                if (this.advanceStack(a, r, n)) continue;
                e || ((e = []), (t = [])), e.push(a);
                let i = this.tokens.getMainToken(a);
                t.push(i.value, i.end);
              }
              break;
            }
          }
          if (!r.length) {
            let t =
              e &&
              (function (e) {
                let t = null;
                for (let n of e) {
                  let e = n.p.stoppedAt;
                  (n.pos == n.p.stream.end || (null != e && n.pos > e)) &&
                    n.p.parser.stateFlag(n.state, 2) &&
                    (!t || t.score < n.score) &&
                    (t = n);
                }
                return t;
              })(e);
            if (t) return this.stackToTree(t);
            if (this.parser.strict)
              throw (
                (y &&
                  e &&
                  console.log(
                    'Stuck with token ' +
                      (this.tokens.mainToken
                        ? this.parser.getName(this.tokens.mainToken.value)
                        : 'none')
                  ),
                SyntaxError('No parse at ' + i))
              );
            this.recovering || (this.recovering = 5);
          }
          if (this.recovering && e) {
            let n =
              null != this.stoppedAt && e[0].pos > this.stoppedAt
                ? e[0]
                : this.runRecovery(e, t, r);
            if (n) return this.stackToTree(n.forceAll());
          }
          if (this.recovering) {
            let e = 1 == this.recovering ? 1 : 3 * this.recovering;
            if (r.length > e)
              for (r.sort((e, t) => t.score - e.score); r.length > e; ) r.pop();
            r.some((e) => e.reducePos > i) && this.recovering--;
          } else if (r.length > 1) {
            n: for (let e = 0; e < r.length - 1; e++) {
              let t = r[e];
              for (let n = e + 1; n < r.length; n++) {
                let i = r[n];
                if (
                  t.sameState(i) ||
                  (t.buffer.length > 500 && i.buffer.length > 500)
                ) {
                  if (
                    (t.score - i.score || t.buffer.length - i.buffer.length) > 0
                  )
                    r.splice(n--, 1);
                  else {
                    r.splice(e--, 1);
                    continue n;
                  }
                }
              }
            }
            r.length > 12 && r.splice(12, r.length - 12);
          }
          this.minStackPos = r[0].pos;
          for (let e = 1; e < r.length; e++)
            r[e].pos < this.minStackPos && (this.minStackPos = r[e].pos);
          return null;
        }
        stopAt(e) {
          if (null != this.stoppedAt && this.stoppedAt < e)
            throw RangeError("Can't move stoppedAt forward");
          this.stoppedAt = e;
        }
        advanceStack(e, t, n) {
          let i = e.pos,
            {parser: r} = this,
            s = y ? this.stackID(e) + ' -> ' : '';
          if (null != this.stoppedAt && i > this.stoppedAt)
            return e.forceReduce() ? e : null;
          if (this.fragments) {
            let t = e.curContext && e.curContext.tracker.strict,
              n = t ? e.curContext.hash : 0;
            for (let a = this.fragments.nodeAt(i); a; ) {
              let i =
                this.parser.nodeSet.types[a.type.id] == a.type
                  ? r.getGoto(e.state, a.type.id)
                  : -1;
              if (
                i > -1 &&
                a.length &&
                (!t || (a.prop(l.md.contextHash) || 0) == n)
              )
                return (
                  e.useNode(a, i),
                  y &&
                    console.log(
                      s +
                        this.stackID(e) +
                        ` (via reuse of ${r.getName(a.type.id)})`
                    ),
                  !0
                );
              if (
                !(a instanceof l.mp) ||
                0 == a.children.length ||
                a.positions[0] > 0
              )
                break;
              let o = a.children[0];
              if (o instanceof l.mp && 0 == a.positions[0]) a = o;
              else break;
            }
          }
          let a = r.stateSlot(e.state, 4);
          if (a > 0)
            return (
              e.reduce(a),
              y &&
                console.log(
                  s +
                    this.stackID(e) +
                    ` (via always-reduce ${r.getName(65535 & a)})`
                ),
              !0
            );
          if (e.stack.length >= 15e3)
            for (; e.stack.length > 9e3 && e.forceReduce(); );
          let o = this.tokens.getActions(e);
          for (let a = 0; a < o.length; ) {
            let O = o[a++],
              l = o[a++],
              h = o[a++],
              c = a == o.length || !n,
              u = c ? e : e.split();
            if (
              (u.apply(O, l, h),
              y &&
                console.log(
                  s +
                    this.stackID(u) +
                    ` (via ${
                      (65536 & O) == 0
                        ? 'shift'
                        : `reduce of ${r.getName(65535 & O)}`
                    } for ${r.getName(l)} @ ${i}${u == e ? '' : ', split'})`
                ),
              c)
            )
              return !0;
            u.pos > i ? t.push(u) : n.push(u);
          }
          return !1;
        }
        advanceFully(e, t) {
          let n = e.pos;
          for (;;) {
            if (!this.advanceStack(e, null, null)) return !1;
            if (e.pos > n) return Y(e, t), !0;
          }
        }
        runRecovery(e, t, n) {
          let i = null,
            r = !1;
          for (let s = 0; s < e.length; s++) {
            let a = e[s],
              o = t[s << 1],
              O = t[(s << 1) + 1],
              l = y ? this.stackID(a) + ' -> ' : '';
            if (
              a.deadEnd &&
              (r ||
                ((r = !0),
                a.restart(),
                y && console.log(l + this.stackID(a) + ' (restarted)'),
                this.advanceFully(a, n)))
            )
              continue;
            let h = a.split(),
              c = l;
            for (
              let e = 0;
              h.forceReduce() &&
              e < 10 &&
              (y && console.log(c + this.stackID(h) + ' (via force-reduce)'),
              !this.advanceFully(h, n));
              e++
            )
              y && (c = this.stackID(h) + ' -> ');
            for (let e of a.recoverByInsert(o))
              y && console.log(l + this.stackID(e) + ' (via recover-insert)'),
                this.advanceFully(e, n);
            this.stream.end > a.pos
              ? (O == a.pos && (O++, (o = 0)),
                a.recoverByDelete(o, O),
                y &&
                  console.log(
                    l +
                      this.stackID(a) +
                      ` (via recover-delete ${this.parser.getName(o)})`
                  ),
                Y(a, n))
              : (!i || i.score < a.score) && (i = a);
          }
          return i;
        }
        stackToTree(e) {
          return (
            e.close(),
            l.mp.build({
              buffer: p.create(e),
              nodeSet: this.parser.nodeSet,
              topID: this.topTerm,
              maxBufferLength: this.parser.bufferLength,
              reused: this.reused,
              start: this.ranges[0].from,
              length: e.pos - this.ranges[0].from,
              minRepeatType: this.parser.minRepeatTerm,
            })
          );
        }
        stackID(e) {
          let t = (w || (w = new WeakMap())).get(e);
          return (
            t || w.set(e, (t = String.fromCodePoint(this.nextStackID++))), t + e
          );
        }
      }
      function Y(e, t) {
        for (let n = 0; n < t.length; n++) {
          let i = t[n];
          if (i.pos == e.pos && i.sameState(e)) {
            t[n].score < e.score && (t[n] = e);
            return;
          }
        }
        t.push(e);
      }
      class T {
        constructor(e, t, n) {
          (this.source = e), (this.flags = t), (this.disabled = n);
        }
        allows(e) {
          return !this.disabled || 0 == this.disabled[e];
        }
      }
      let W = (e) => e;
      class C {
        constructor(e) {
          (this.start = e.start),
            (this.shift = e.shift || W),
            (this.reduce = e.reduce || W),
            (this.reuse = e.reuse || W),
            (this.hash = e.hash || (() => 0)),
            (this.strict = !1 !== e.strict);
        }
      }
      class U extends l._b {
        constructor(e) {
          if ((super(), (this.wrappers = []), 14 != e.version))
            throw RangeError(
              `Parser version (${e.version}) doesn't match runtime version (14)`
            );
          let t = e.nodeNames.split(' ');
          this.minRepeatTerm = t.length;
          for (let n = 0; n < e.repeatNodeCount; n++) t.push('');
          let n = Object.keys(e.topRules).map((t) => e.topRules[t][1]),
            i = [];
          for (let e = 0; e < t.length; e++) i.push([]);
          function r(e, t, n) {
            i[e].push([t, t.deserialize(String(n))]);
          }
          if (e.nodeProps)
            for (let t of e.nodeProps) {
              let e = t[0];
              'string' == typeof e && (e = l.md[e]);
              for (let n = 1; n < t.length; ) {
                let i = t[n++];
                if (i >= 0) r(i, e, t[n++]);
                else {
                  let s = t[n + -i];
                  for (let a = -i; a > 0; a--) r(t[n++], e, s);
                  n++;
                }
              }
            }
          (this.nodeSet = new l.Lj(
            t.map((t, r) =>
              l.Jq.define({
                name: r >= this.minRepeatTerm ? void 0 : t,
                id: r,
                props: i[r],
                top: n.indexOf(r) > -1,
                error: 0 == r,
                skipped: e.skippedNodes && e.skippedNodes.indexOf(r) > -1,
              })
            )
          )),
            e.propSources &&
              (this.nodeSet = this.nodeSet.extend(...e.propSources)),
            (this.strict = !1),
            (this.bufferLength = l.L3);
          let s = d(e.tokenData);
          (this.context = e.context),
            (this.specializerSpecs = e.specialized || []),
            (this.specialized = new Uint16Array(this.specializerSpecs.length));
          for (let e = 0; e < this.specializerSpecs.length; e++)
            this.specialized[e] = this.specializerSpecs[e].term;
          (this.specializers = this.specializerSpecs.map(R)),
            (this.states = d(e.states, Uint32Array)),
            (this.data = d(e.stateData)),
            (this.goto = d(e.goto)),
            (this.maxTerm = e.maxTerm),
            (this.tokenizers = e.tokenizers.map((e) =>
              'number' == typeof e ? new S(s, e) : e
            )),
            (this.topRules = e.topRules),
            (this.dialects = e.dialects || {}),
            (this.dynamicPrecedences = e.dynamicPrecedences || null),
            (this.tokenPrecTable = e.tokenPrec),
            (this.termNames = e.termNames || null),
            (this.maxNode = this.nodeSet.types.length - 1),
            (this.dialect = this.parseDialect()),
            (this.top = this.topRules[Object.keys(this.topRules)[0]]);
        }
        createParse(e, t, n) {
          let i = new Z(this, e, t, n);
          for (let r of this.wrappers) i = r(i, e, t, n);
          return i;
        }
        getGoto(e, t, n = !1) {
          let i = this.goto;
          if (t >= i[0]) return -1;
          for (let r = i[t + 1]; ; ) {
            let t = i[r++],
              s = 1 & t,
              a = i[r++];
            if (s && n) return a;
            for (let n = r + (t >> 1); r < n; r++) if (i[r] == e) return a;
            if (s) return -1;
          }
        }
        hasAction(e, t) {
          let n = this.data;
          for (let i = 0; i < 2; i++)
            for (let r = this.stateSlot(e, i ? 2 : 1), s; ; r += 3) {
              if (65535 == (s = n[r])) {
                if (1 == n[r + 1]) s = n[(r = _(n, r + 2))];
                else if (2 == n[r + 1]) return _(n, r + 2);
                else break;
              }
              if (s == t || 0 == s) return _(n, r + 1);
            }
          return 0;
        }
        stateSlot(e, t) {
          return this.states[6 * e + t];
        }
        stateFlag(e, t) {
          return (this.stateSlot(e, 0) & t) > 0;
        }
        validAction(e, t) {
          if (t == this.stateSlot(e, 4)) return !0;
          for (let n = this.stateSlot(e, 1); ; n += 3) {
            if (65535 == this.data[n]) {
              if (1 != this.data[n + 1]) return !1;
              n = _(this.data, n + 2);
            }
            if (t == _(this.data, n + 1)) return !0;
          }
        }
        nextStates(e) {
          let t = [];
          for (let n = this.stateSlot(e, 1); ; n += 3) {
            if (65535 == this.data[n]) {
              if (1 == this.data[n + 1]) n = _(this.data, n + 2);
              else break;
            }
            if ((1 & this.data[n + 2]) == 0) {
              let e = this.data[n + 1];
              t.some((t, n) => 1 & n && t == e) || t.push(this.data[n], e);
            }
          }
          return t;
        }
        configure(e) {
          let t = Object.assign(Object.create(U.prototype), this);
          if (
            (e.props && (t.nodeSet = this.nodeSet.extend(...e.props)), e.top)
          ) {
            let n = this.topRules[e.top];
            if (!n) throw RangeError(`Invalid top rule name ${e.top}`);
            t.top = n;
          }
          return (
            e.tokenizers &&
              (t.tokenizers = this.tokenizers.map((t) => {
                let n = e.tokenizers.find((e) => e.from == t);
                return n ? n.to : t;
              })),
            e.specializers &&
              ((t.specializers = this.specializers.slice()),
              (t.specializerSpecs = this.specializerSpecs.map((n, i) => {
                let r = e.specializers.find((e) => e.from == n.external);
                if (!r) return n;
                let s = Object.assign(Object.assign({}, n), {external: r.to});
                return (t.specializers[i] = R(s)), s;
              }))),
            e.contextTracker && (t.context = e.contextTracker),
            e.dialect && (t.dialect = this.parseDialect(e.dialect)),
            null != e.strict && (t.strict = e.strict),
            e.wrap && (t.wrappers = t.wrappers.concat(e.wrap)),
            null != e.bufferLength && (t.bufferLength = e.bufferLength),
            t
          );
        }
        hasWrappers() {
          return this.wrappers.length > 0;
        }
        getName(e) {
          return this.termNames
            ? this.termNames[e]
            : String((e <= this.maxNode && this.nodeSet.types[e].name) || e);
        }
        get eofTerm() {
          return this.maxNode + 1;
        }
        get topNode() {
          return this.nodeSet.types[this.top[1]];
        }
        dynamicPrecedence(e) {
          let t = this.dynamicPrecedences;
          return null == t ? 0 : t[e] || 0;
        }
        parseDialect(e) {
          let t = Object.keys(this.dialects),
            n = t.map(() => !1);
          if (e)
            for (let i of e.split(' ')) {
              let e = t.indexOf(i);
              e >= 0 && (n[e] = !0);
            }
          let i = null;
          for (let e = 0; e < t.length; e++)
            if (!n[e])
              for (
                let n = this.dialects[t[e]], r;
                65535 != (r = this.data[n++]);

              )
                (i || (i = new Uint8Array(this.maxTerm + 1)))[r] = 1;
          return new T(e, n, i);
        }
        static deserialize(e) {
          return new U(e);
        }
      }
      function _(e, t) {
        return e[t] | (e[t + 1] << 16);
      }
      function R(e) {
        if (e.external) {
          let t = e.extend ? 1 : 0;
          return (n, i) => (e.external(n, i) << 1) | t;
        }
        return e.get;
      }
    },
    28699: function (e, t, n) {
      'use strict';
      n.d(t, {
        V: function () {
          return a;
        },
      });
      let i = 'undefined' == typeof Symbol ? '__ͼ' : Symbol.for('ͼ'),
        r =
          'undefined' == typeof Symbol
            ? '__styleSet' + Math.floor(1e8 * Math.random())
            : Symbol('styleSet'),
        s =
          'undefined' != typeof globalThis
            ? globalThis
            : 'undefined' != typeof window
            ? window
            : {};
      class a {
        constructor(e, t) {
          this.rules = [];
          let {finish: n} = t || {};
          function i(e) {
            return /^@/.test(e) ? [e] : e.split(/,\s*/);
          }
          for (let t in e)
            !(function e(t, r, s, a) {
              let o = [],
                O = /^@(\w+)\b/.exec(t[0]),
                l = O && 'keyframes' == O[1];
              if (O && null == r) return s.push(t[0] + ';');
              for (let n in r) {
                let a = r[n];
                if (/&/.test(n))
                  e(
                    n
                      .split(/,\s*/)
                      .map((e) => t.map((t) => e.replace(/&/, t)))
                      .reduce((e, t) => e.concat(t)),
                    a,
                    s
                  );
                else if (a && 'object' == typeof a) {
                  if (!O)
                    throw RangeError(
                      'The value of a property (' +
                        n +
                        ') should be a primitive value.'
                    );
                  e(i(n), a, o, l);
                } else
                  null != a &&
                    o.push(
                      n
                        .replace(/_.*/, '')
                        .replace(/[A-Z]/g, (e) => '-' + e.toLowerCase()) +
                        ': ' +
                        a +
                        ';'
                    );
              }
              (o.length || l) &&
                s.push(
                  (!n || O || a ? t : t.map(n)).join(', ') +
                    ' {' +
                    o.join(' ') +
                    '}'
                );
            })(i(t), e[t], this.rules);
        }
        getRules() {
          return this.rules.join('\n');
        }
        static newName() {
          let e = s[i] || 1;
          return (s[i] = e + 1), 'ͼ' + e.toString(36);
        }
        static mount(e, t) {
          (e[r] || new O(e)).mount(Array.isArray(t) ? t : [t]);
        }
      }
      let o = null;
      class O {
        constructor(e) {
          if (
            !e.head &&
            e.adoptedStyleSheets &&
            'undefined' != typeof CSSStyleSheet
          ) {
            if (o)
              return (
                (e.adoptedStyleSheets = [o.sheet].concat(e.adoptedStyleSheets)),
                (e[r] = o)
              );
            (this.sheet = new CSSStyleSheet()),
              (e.adoptedStyleSheets = [this.sheet].concat(
                e.adoptedStyleSheets
              )),
              (o = this);
          } else {
            this.styleTag = (e.ownerDocument || e).createElement('style');
            let t = e.head || e;
            t.insertBefore(this.styleTag, t.firstChild);
          }
          (this.modules = []), (e[r] = this);
        }
        mount(e) {
          let t = this.sheet,
            n = 0,
            i = 0;
          for (let r = 0; r < e.length; r++) {
            let s = e[r],
              a = this.modules.indexOf(s);
            if (
              (a < i && a > -1 && (this.modules.splice(a, 1), i--, (a = -1)),
              -1 == a)
            ) {
              if ((this.modules.splice(i++, 0, s), t))
                for (let e = 0; e < s.rules.length; e++)
                  t.insertRule(s.rules[e], n++);
            } else {
              for (; i < a; ) n += this.modules[i++].rules.length;
              (n += s.rules.length), i++;
            }
          }
          if (!t) {
            let e = '';
            for (let t = 0; t < this.modules.length; t++)
              e += this.modules[t].getRules() + '\n';
            this.styleTag.textContent = e;
          }
        }
      }
    },
    33952: function (e, t, n) {
      'use strict';
      n.d(t, {
        YG: function () {
          return f;
        },
        uY: function () {
          return r;
        },
        ue: function () {
          return i;
        },
      });
      for (
        var i = {
            8: 'Backspace',
            9: 'Tab',
            10: 'Enter',
            12: 'NumLock',
            13: 'Enter',
            16: 'Shift',
            17: 'Control',
            18: 'Alt',
            20: 'CapsLock',
            27: 'Escape',
            32: ' ',
            33: 'PageUp',
            34: 'PageDown',
            35: 'End',
            36: 'Home',
            37: 'ArrowLeft',
            38: 'ArrowUp',
            39: 'ArrowRight',
            40: 'ArrowDown',
            44: 'PrintScreen',
            45: 'Insert',
            46: 'Delete',
            59: ';',
            61: '=',
            91: 'Meta',
            92: 'Meta',
            106: '*',
            107: '+',
            108: ',',
            109: '-',
            110: '.',
            111: '/',
            144: 'NumLock',
            145: 'ScrollLock',
            160: 'Shift',
            161: 'Shift',
            162: 'Control',
            163: 'Control',
            164: 'Alt',
            165: 'Alt',
            173: '-',
            186: ';',
            187: '=',
            188: ',',
            189: '-',
            190: '.',
            191: '/',
            192: '`',
            219: '[',
            220: '\\',
            221: ']',
            222: "'",
            229: 'q',
          },
          r = {
            48: ')',
            49: '!',
            50: '@',
            51: '#',
            52: '$',
            53: '%',
            54: '^',
            55: '&',
            56: '*',
            57: '(',
            59: ':',
            61: '+',
            173: '_',
            186: ':',
            187: '+',
            188: '<',
            189: '_',
            190: '>',
            191: '?',
            192: '~',
            219: '{',
            220: '|',
            221: '}',
            222: '"',
            229: 'Q',
          },
          s =
            'undefined' != typeof navigator &&
            /Chrome\/(\d+)/.exec(navigator.userAgent),
          a =
            'undefined' != typeof navigator &&
            /Apple Computer/.test(navigator.vendor),
          o =
            'undefined' != typeof navigator &&
            /Gecko\/\d+/.test(navigator.userAgent),
          O = 'undefined' != typeof navigator && /Mac/.test(navigator.platform),
          l =
            'undefined' != typeof navigator &&
            /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(
              navigator.userAgent
            ),
          h = (s && (O || 57 > +s[1])) || (o && O),
          c = 0;
        c < 10;
        c++
      )
        i[48 + c] = i[96 + c] = String(c);
      for (var c = 1; c <= 24; c++) i[c + 111] = 'F' + c;
      for (var c = 65; c <= 90; c++)
        (i[c] = String.fromCharCode(c + 32)), (r[c] = String.fromCharCode(c));
      for (var u in i) r.hasOwnProperty(u) || (r[u] = i[u]);
      function f(e) {
        var t =
          (!(
            (h && (e.ctrlKey || e.altKey || e.metaKey)) ||
            ((a || l) && e.shiftKey && e.key && 1 == e.key.length)
          ) &&
            e.key) ||
          (e.shiftKey ? r : i)[e.keyCode] ||
          e.key ||
          'Unidentified';
        return (
          'Esc' == t && (t = 'Escape'),
          'Del' == t && (t = 'Delete'),
          'Left' == t && (t = 'ArrowLeft'),
          'Up' == t && (t = 'ArrowUp'),
          'Right' == t && (t = 'ArrowRight'),
          'Down' == t && (t = 'ArrowDown'),
          t
        );
      }
    },
  },
]);
