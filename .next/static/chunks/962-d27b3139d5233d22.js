(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [962],
  {
    55611: function (e, t, r) {
      'use strict';
      var a = r(85893),
        s = r(94184),
        l = r.n(s),
        n = r(41664),
        i = r.n(n);
      t.Z = function (e) {
        let {
            href: t,
            className: r,
            children: s,
            type: n = 'primary',
            size: o = 'md',
            label: d,
            target: c = '_self',
            ...x
          } = e,
          h = l()(
            r,
            'active:scale-[.98] transition-transform inline-flex font-bold items-center outline-none focus:outline-none focus-visible:outline focus-visible:outline-link focus:outline-offset-2 focus-visible:dark:focus:outline-link-dark leading-snug',
            {
              'bg-link text-white dark:bg-brand-dark dark:text-secondary hover:bg-opacity-80':
                'primary' === n,
              'text-primary dark:text-primary-dark shadow-secondary-button-stroke dark:shadow-secondary-button-stroke-dark hover:bg-gray-40/5 active:bg-gray-40/10 hover:dark:bg-gray-60/5 active:dark:bg-gray-60/10':
                'secondary' === n,
              'text-lg py-3 rounded-full px-4 sm:px-6': 'lg' === o,
              'text-base rounded-full px-4 py-2': 'md' === o,
            }
          );
        return (0, a.jsx)(i(), {
          href: t,
          className: h,
          ...x,
          'aria-label': d,
          target: c,
          children: s,
        });
      };
    },
    84375: function (e, t, r) {
      'use strict';
      r.d(t, {
        C: function () {
          return n;
        },
        l: function () {
          return l;
        },
      });
      var a = r(67294);
      let s = Symbol('not in error decoder context'),
        l = (0, a.createContext)(s),
        n = () => {
          let e = (0, a.useContext)(l);
          if (e === s)
            throw Error(
              'useErrorDecoder must be used in error decoder pages only'
            );
          return e;
        };
    },
    85178: function (e, t, r) {
      'use strict';
      r.d(t, {
        d: function () {
          return s;
        },
      });
      var a = r(85893);
      function s(e) {
        let {href: t, target: r, children: s, ...l} = e;
        return (0, a.jsx)('a', {
          href: t,
          target: null != r ? r : '_blank',
          rel: 'noopener',
          ...l,
          children: s,
        });
      }
    },
    63696: function (e, t, r) {
      'use strict';
      r.d(t, {
        t: function () {
          return l;
        },
      });
      var a = r(85893),
        s = r(67294);
      let l = (0, s.memo)(function () {
        let {
          className: e,
          title: t,
          size: r,
        } = arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : {className: void 0, title: void 0, size: 'md'};
        return (0,
        a.jsxs)('svg', {className: e, width: 's' === r ? '12px' : '20px', height: 's' === r ? '12px' : '20px', viewBox: '0 0 20 20', version: '1.1', xmlns: 'http://www.w3.org/2000/svg', children: [t && (0, a.jsx)('title', {children: t}), (0, a.jsx)('g', {stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd', children: (0, a.jsx)('g', {id: 'noun-labs-1201738-(2)', transform: 'translate(2, 0)', fill: 'currentColor', fillRule: 'nonzero', children: (0, a.jsx)('path', {d: 'M10.2865804,5.55665262 L10.2865804,2.22331605 L10.8591544,2.22331605 C11.0103911,2.22244799 11.1551447,2.16342155 11.2617505,2.05914367 C11.3684534,1.95486857 11.4282767,1.81370176 11.4282767,1.66667106 L11.4282767,0.556642208 C11.4282767,0.40907262 11.3678934,0.26747526 11.2605218,0.16308627 C11.1531503,0.0587028348 11.0074938,0 10.8556998,0 L5.14338868,0 C4.9915947,0 4.84594391,0.0587028348 4.73856664,0.16308627 C4.63119507,0.267469704 4.57081178,0.40907262 4.57081178,0.556642208 L4.57081178,1.66667106 C4.57081178,1.81434899 4.63119507,1.95594912 4.73856664,2.06033811 C4.8459382,2.16472155 4.9915947,2.22331605 5.14338868,2.22331605 L5.71596273,2.22331605 L5.71596273,5.55665262 C5.71596273,8.38665538 2.97295619,9.88999017 0.651686904,15.5566623 C-0.0957823782,17.360053 -2.00560068,20 7.99951567,20 C18.004632,20 16.0948137,17.3600252 15.3507732,15.5566623 C13.0124432,9.88999017 10.2865804,8.38665538 10.2865804,5.55665262 Z M9.89570197,10.709991 C10.0921412,10.709991 10.2805515,10.7858383 10.4193876,10.9209301 C10.5583466,11.0559135 10.6363652,11.2390693 10.6363652,11.4300417 C10.6363652,11.6210141 10.5583466,11.8040698 10.4193876,11.9391533 C10.2805401,12.0741367 10.0921412,12.1499813 9.89570197,12.1499813 C9.6992627,12.1499813 9.51096673,12.074134 9.37201631,11.9391533 C9.23316875,11.8040615 9.15515307,11.6210141 9.15515307,11.4300417 C9.15515307,11.2390693 9.2331716,11.0559024 9.37201631,10.9209301 C9.57264221,10.7258996 9.61239426,10.709991 9.89570197,10.709991 Z M8.98919546,9.04212824 C9.09790709,9.14792278 9.15884755,9.29158681 9.1585213,9.44110085 C9.15829001,9.59073155 9.09678989,9.73407335 8.98763252,9.83954568 C8.87847514,9.945018 8.73069852,10.0039347 8.57678157,10.0033977 C8.42286747,10.0027392 8.27565088,9.94273467 8.16727355,9.83639845 C8.05900765,9.73006224 7.99873866,9.58628988 7.99963013,9.43664806 C8.00052304,9.28788403 8.0620221,9.14542556 8.17051087,9.04048101 C8.27911107,8.93555591 8.42599335,8.87663641 8.57913312,8.87663641 C8.73291864,8.87665585 8.88047525,8.93622535 8.98919546,9.04212824 Z M7.99965585,17.9999981 C4.91377349,17.9999981 3.29882839,17.7332867 2.51364277,17.4999976 C2.37780966,17.4476975 2.26954376,17.3439641 2.21396931,17.2125528 C2.15838628,17.0811499 2.16006066,16.9334692 2.21876871,16.8033858 C2.6144474,15.5921346 3.14916224,14.4280501 3.81316983,13.3333824 C5.980145,9.82337899 8.22941036,13.8867718 10.0980836,13.8867718 C11.9666996,13.8867718 11.4695868,12.1534924 12.1827971,13.3333824 C12.8511505,14.4269112 13.3916656,15.5896902 13.794259,16.8000524 C13.8533022,16.9322137 13.8537479,17.0822749 13.7952635,17.2147751 C13.7368889,17.3472613 13.6248314,17.4504531 13.4856467,17.5000531 C12.6833967,17.7332867 11.0855382,17.9999981 7.99965585,17.9999981 Z', id: 'Shape'})})})]});
      });
    },
    1255: function (e, t, r) {
      'use strict';
      r.d(t, {
        g: function () {
          return i;
        },
      });
      var a = r(85893),
        s = r(67294),
        l = r(94184),
        n = r.n(l);
      let i = (0, s.memo)(function (e) {
        let {className: t, displayDirection: r} = e,
          s = n()(
            {
              'rotate-0': 'down' === r,
              'rotate-90': 'left' === r,
              'rotate-180': 'up' === r,
              '-rotate-90': 'right' === r,
              'rotate-90 rtl:-rotate-90': 'start' === r,
              '-rotate-90 rtl:rotate-90': 'end' === r,
            },
            t
          );
        return (0,
        a.jsx)('svg', {className: s, xmlns: 'http://www.w3.org/2000/svg', width: '20', height: '20', viewBox: '0 0 20 20', children: (0, a.jsxs)('g', {fill: 'none', fillRule: 'evenodd', transform: 'translate(-446 -398)', children: [(0, a.jsx)('path', {fill: 'currentColor', fillRule: 'nonzero', d: 'M95.8838835,240.366117 C95.3957281,239.877961 94.6042719,239.877961 94.1161165,240.366117 C93.6279612,240.854272 93.6279612,241.645728 94.1161165,242.133883 L98.6161165,246.633883 C99.1042719,247.122039 99.8957281,247.122039 100.383883,246.633883 L104.883883,242.133883 C105.372039,241.645728 105.372039,240.854272 104.883883,240.366117 C104.395728,239.877961 103.604272,239.877961 103.116117,240.366117 L99.5,243.982233 L95.8838835,240.366117 Z', transform: 'translate(356.5 164.5)'}), (0, a.jsx)('polygon', {points: '446 418 466 418 466 398 446 398'})]})});
      });
    },
    65104: function (e, t, r) {
      'use strict';
      r.d(t, {
        v: function () {
          return l;
        },
      });
      var a = r(85893),
        s = r(67294);
      let l = (0, s.memo)(function (e) {
        let {className: t} = e;
        return (0,
        a.jsxs)('svg', {className: t, width: '1em', height: '1em', viewBox: '0 0 18 18', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: [(0, a.jsx)('path', {fillRule: 'evenodd', clipRule: 'evenodd', d: 'M5.40382 15.3671C5.03332 15.1901 4.70081 14.9381 4.42481 14.6286C4.34831 14.5431 4.23931 14.5001 4.12981 14.5206L3.66181 14.6081C3.33531 14.6691 3.02032 14.4361 2.96232 14.0876L1.30981 4.12512C1.28181 3.95662 1.31731 3.7861 1.40981 3.6456C1.50231 3.5051 1.64082 3.41162 1.79932 3.38162L3.22131 3.00012C3.37681 2.97062 3.48981 2.82761 3.48981 2.65961V1.9101C3.48981 1.8276 3.49381 1.74561 3.49931 1.66461C3.50931 1.53461 3.35181 1.57211 3.35181 1.57211L1.64381 2.0076C1.18481 2.0936 0.751316 2.32662 0.451316 2.70612C0.0808162 3.17362 -0.0686885 3.77259 0.0293115 4.36459L1.68231 14.3281C1.84531 15.3081 2.65031 16.0001 3.55631 16.0001C3.66531 16.0001 3.77631 15.9896 3.88731 15.9691L5.36632 15.6916C5.52332 15.6626 5.54982 15.4366 5.40382 15.3671ZM14.9331 4.55801H12.9116C12.1351 4.55801 11.5001 3.91502 11.5001 3.12952V1.06802C11.5001 0.480524 11.0196 0 10.4321 0H7.44161C6.36911 0 5.50011 0.879508 5.50011 1.96451V12.1665C5.50011 13.179 6.33412 14 7.36262 14H14.1371C15.1661 14 16.0001 13.179 16.0001 12.1665V5.625C16.0001 5.038 15.5201 4.55801 14.9331 4.55801Z', fill: 'currentColor'}), ' ', (0, a.jsx)('path', {fillRule: 'evenodd', clipRule: 'evenodd', d: 'M12.5888 0.0914385C12.4493 0.00843847 12.5158 0.252449 12.5158 0.252449C12.5653 0.428449 12.5918 0.613451 12.5918 0.804451V2.90296C12.5918 3.17646 12.8158 3.40046 13.0903 3.40046H15.1718C15.3883 3.40046 15.5968 3.43495 15.7918 3.49845C15.7918 3.49845 15.9373 3.50844 15.9008 3.43494C15.8383 3.33744 15.7673 3.24494 15.6833 3.16044L12.8303 0.289467C12.7558 0.214467 12.6743 0.149438 12.5888 0.0914385Z', fill: 'currentColor'})]});
      });
    },
    76979: function (e, t, r) {
      'use strict';
      r.d(t, {
        D: function () {
          return l;
        },
      });
      var a = r(85893),
        s = r(67294);
      let l = (0, s.memo)(function (e) {
        let {className: t} = e;
        return (0,
        a.jsxs)('svg', {width: '1em', height: '1em', viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', className: t, children: [(0, a.jsx)('path', {d: 'M20.5 22H3.5C3.10218 22 2.72064 21.842 2.43934 21.5607C2.15804 21.2794 2 20.8978 2 20.5V15.5C2 15.3674 2.05268 15.2402 2.14645 15.1464C2.24021 15.0527 2.36739 15 2.5 15H3.5C3.63261 15 3.75979 15.0527 3.85355 15.1464C3.94732 15.2402 4 15.3674 4 15.5V20H20V15.5C20 15.3674 20.0527 15.2402 20.1464 15.1464C20.2402 15.0527 20.3674 15 20.5 15H21.5C21.6326 15 21.7598 15.0527 21.8536 15.1464C21.9473 15.2402 22 15.3674 22 15.5V20.5C22 20.8978 21.842 21.2794 21.5607 21.5607C21.2794 21.842 20.8978 22 20.5 22Z', fill: 'currentColor'}), (0, a.jsx)('path', {d: 'M10.9999 2.5V13.79L8.81994 11.61C8.72479 11.5178 8.59747 11.4662 8.46494 11.4662C8.33241 11.4662 8.20509 11.5178 8.10994 11.61L7.39994 12.32C7.30769 12.4151 7.2561 12.5425 7.2561 12.675C7.2561 12.8075 7.30769 12.9348 7.39994 13.03L10.9399 16.56C11.0785 16.7003 11.2436 16.8117 11.4255 16.8877C11.6075 16.9637 11.8027 17.0029 11.9999 17.0029C12.1971 17.0029 12.3924 16.9637 12.5743 16.8877C12.7563 16.8117 12.9214 16.7003 13.0599 16.56L16.5999 13C16.6922 12.9048 16.7438 12.7775 16.7438 12.645C16.7438 12.5125 16.6922 12.3851 16.5999 12.29L15.8899 11.58C15.7948 11.4878 15.6675 11.4362 15.5349 11.4362C15.4024 11.4362 15.2751 11.4878 15.1799 11.58L12.9999 13.79V2.5C12.9999 2.36739 12.9473 2.24021 12.8535 2.14645C12.7597 2.05268 12.6325 2 12.4999 2H11.4999C11.3673 2 11.2402 2.05268 11.1464 2.14645C11.0526 2.24021 10.9999 2.36739 10.9999 2.5Z', fill: 'currentColor'})]});
      });
    },
    59925: function (e, t, r) {
      'use strict';
      r.d(t, {
        s: function () {
          return i;
        },
      });
      var a = r(85893),
        s = r(67294),
        l = r(94184),
        n = r.n(l);
      let i = (0, s.memo)(function (e) {
        let {displayDirection: t = 'start', className: r} = e,
          s = n()(
            'duration-100 ease-in transition',
            {
              'rotate-0': 'down' === t,
              'rotate-90': 'left' === t,
              '-rotate-90': 'right' === t,
              'rotate-90 rtl:-rotate-90': 'start' === t,
              '-rotate-90 rtl:rotate-90': 'end' === t,
            },
            r
          );
        return (0,
        a.jsx)('svg', {xmlns: 'http://www.w3.org/2000/svg', width: '20', height: '20', viewBox: '0 0 20 20', className: s, style: {minWidth: 20, minHeight: 20}, children: (0, a.jsxs)('g', {fill: 'none', fillRule: 'evenodd', transform: 'translate(-446 -398)', children: [(0, a.jsx)('path', {fill: 'currentColor', fillRule: 'nonzero', d: 'M95.8838835,240.366117 C95.3957281,239.877961 94.6042719,239.877961 94.1161165,240.366117 C93.6279612,240.854272 93.6279612,241.645728 94.1161165,242.133883 L98.6161165,246.633883 C99.1042719,247.122039 99.8957281,247.122039 100.383883,246.633883 L104.883883,242.133883 C105.372039,241.645728 105.372039,240.854272 104.883883,240.366117 C104.395728,239.877961 103.604272,239.877961 103.116117,240.366117 L99.5,243.982233 L95.8838835,240.366117 Z', transform: 'translate(356.5 164.5)'}), (0, a.jsx)('polygon', {points: '446 418 466 418 466 398 446 398'})]})});
      });
    },
    32295: function (e, t, r) {
      'use strict';
      r.d(t, {
        x: function () {
          return l;
        },
      });
      var a = r(85893),
        s = r(67294);
      let l = (0, s.memo)(function (e) {
        return (0,
        a.jsxs)('svg', {width: '1em', height: '1em', viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', ...e, children: [(0, a.jsx)('path', {d: 'M20.5001 2H15.5001C15.3675 2 15.2403 2.05268 15.1465 2.14645C15.0528 2.24021 15.0001 2.36739 15.0001 2.5V3.5C15.0001 3.63261 15.0528 3.75979 15.1465 3.85355C15.2403 3.94732 15.3675 4 15.5001 4H18.5901L7.6501 14.94C7.60323 14.9865 7.56604 15.0418 7.54065 15.1027C7.51527 15.1636 7.5022 15.229 7.5022 15.295C7.5022 15.361 7.51527 15.4264 7.54065 15.4873C7.56604 15.5482 7.60323 15.6035 7.6501 15.65L8.3501 16.35C8.39658 16.3969 8.45188 16.4341 8.51281 16.4594C8.57374 16.4848 8.63909 16.4979 8.7051 16.4979C8.7711 16.4979 8.83646 16.4848 8.89738 16.4594C8.95831 16.4341 9.01362 16.3969 9.0601 16.35L20.0001 5.41V8.5C20.0001 8.63261 20.0528 8.75979 20.1465 8.85355C20.2403 8.94732 20.3675 9 20.5001 9H21.5001C21.6327 9 21.7599 8.94732 21.8537 8.85355C21.9474 8.75979 22.0001 8.63261 22.0001 8.5V3.5C22.0001 3.10218 21.8421 2.72064 21.5608 2.43934C21.2795 2.15804 20.8979 2 20.5001 2V2Z', fill: 'currentColor'}), (0, a.jsx)('path', {d: 'M21.5 13H20.5C20.3674 13 20.2402 13.0527 20.1464 13.1464C20.0527 13.2402 20 13.3674 20 13.5V20H4V4H10.5C10.6326 4 10.7598 3.94732 10.8536 3.85355C10.9473 3.75979 11 3.63261 11 3.5V2.5C11 2.36739 10.9473 2.24021 10.8536 2.14645C10.7598 2.05268 10.6326 2 10.5 2H3.5C3.10218 2 2.72064 2.15804 2.43934 2.43934C2.15804 2.72064 2 3.10218 2 3.5V20.5C2 20.8978 2.15804 21.2794 2.43934 21.5607C2.72064 21.842 3.10218 22 3.5 22H20.5C20.8978 22 21.2794 21.842 21.5607 21.5607C21.842 21.2794 22 20.8978 22 20.5V13.5C22 13.3674 21.9473 13.2402 21.8536 13.1464C21.7598 13.0527 21.6326 13 21.5 13Z', fill: 'currentColor'})]});
      });
    },
    37917: function (e, t, r) {
      'use strict';
      r.d(t, {
        S: function () {
          return l;
        },
      });
      var a = r(85893),
        s = r(67294);
      let l = (0, s.memo)(function (e) {
        let {className: t} = e;
        return (0,
        a.jsx)('svg', {width: '1em', height: '1em', viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', className: t, children: (0, a.jsx)('path', {d: 'M13.8982 5.20844C12.4626 4.88688 10.9686 4.93769 9.55821 5.35604L11.8524 3.06184C11.8989 3.0154 11.9357 2.96028 11.9608 2.89961C11.986 2.83894 11.9989 2.77391 11.9989 2.70824C11.9989 2.64256 11.986 2.57754 11.9608 2.51686C11.9357 2.45619 11.8989 2.40107 11.8524 2.35464L11.1456 1.64784C11.0992 1.60139 11.0441 1.56455 10.9834 1.53942C10.9227 1.51428 10.8577 1.50134 10.792 1.50134C10.7263 1.50134 10.6613 1.51428 10.6006 1.53942C10.54 1.56455 10.4848 1.60139 10.4384 1.64784L6.14571 5.94054C6.00654 6.07969 5.89615 6.2449 5.82083 6.42673C5.74551 6.60855 5.70675 6.80343 5.70675 7.00024C5.70675 7.19704 5.74551 7.39192 5.82083 7.57374C5.89615 7.75557 6.00654 7.92078 6.14571 8.05994L10.4387 12.3529C10.5325 12.4465 10.6595 12.4991 10.792 12.4991C10.9245 12.4991 11.0516 12.4465 11.1453 12.3529L11.8527 11.6455C11.9463 11.5518 11.9989 11.4247 11.9989 11.2922C11.9989 11.1598 11.9463 11.0327 11.8527 10.9389L8.77481 7.86104C9.99795 7.16236 11.415 6.8801 12.8125 7.05678C14.21 7.23347 15.5122 7.85953 16.523 8.84064C17.5338 9.82176 18.1983 11.1048 18.4165 12.4964C18.6347 13.888 18.3947 15.3129 17.7328 16.5562C17.0708 17.7996 16.0227 18.7942 14.7463 19.3902C13.47 19.9861 12.0345 20.1511 10.6563 19.8603C9.27798 19.5695 8.03152 18.8387 7.10469 17.778C6.17786 16.7172 5.62086 15.384 5.51761 13.9791C5.51156 13.8512 5.45689 13.7303 5.36477 13.6413C5.27265 13.5522 5.15001 13.5017 5.02191 13.5H4.02081C3.95297 13.4996 3.88574 13.5129 3.8232 13.5392C3.76065 13.5655 3.70408 13.6042 3.6569 13.6529C3.60972 13.7017 3.57291 13.7595 3.54869 13.8228C3.52448 13.8862 3.51336 13.9538 3.51601 14.0216C3.61349 15.5965 4.1473 17.1132 5.0577 18.4019C5.9681 19.6906 7.21917 20.7006 8.6709 21.3188C10.1226 21.937 11.7178 22.139 13.2778 21.9022C14.8378 21.6654 16.3011 20.9992 17.504 19.978C18.7069 18.9569 19.6019 17.6212 20.0889 16.1203C20.5759 14.6195 20.6356 13.0128 20.2614 11.4799C19.8872 9.94705 19.0938 8.54858 17.97 7.44098C16.8462 6.33339 15.4363 5.56037 13.8982 5.20844V5.20844Z', fill: 'currentColor'})});
      });
    },
    68774: function (e, t, r) {
      'use strict';
      r.d(t, {
        T: function () {
          return tl;
        },
      });
      var a = r(85893),
        s = r(67294),
        l = r(11163),
        n = r.n(l),
        i = r(94184),
        o = r.n(i);
      function d(e) {
        let {onSubmit: t = () => {}} = e,
          {asPath: r} = (0, l.useRouter)(),
          s = r.split(/[\?\#]/)[0];
        return (0, a.jsx)(m, {onSubmit: t}, s);
      }
      let c = (0, a.jsx)('svg', {
          width: '16',
          height: '18',
          viewBox: '0 0 16 18',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          children: (0, a.jsx)('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M9.36603 0.384603C9.36605 0.384617 9.36601 0.384588 9.36603 0.384603L9.45902 0.453415C9.99732 0.851783 10.3873 1.42386 10.5654 2.07648C10.7435 2.72909 10.6993 3.42385 10.44 4.04763L9.27065 6.86008H12.6316C13.5249 6.86008 14.3817 7.22121 15.0134 7.86402C15.6451 8.50683 16 9.37868 16 10.2877V13.7154C16 14.8518 15.5564 15.9416 14.7668 16.7451C13.9771 17.5486 12.9062 18 11.7895 18H5.05263C3.71259 18 2.42743 17.4583 1.47988 16.4941C0.532325 15.5299 0 14.2221 0 12.8585V11.2511C2.40928e-06 9.87711 0.463526 8.54479 1.31308 7.47688L6.66804 0.745592C6.98662 0.345136 7.44414 0.08434 7.94623 0.0171605C8.4483 -0.0500155 8.95656 0.0815891 9.36603 0.384603ZM8.37542 1.77064C8.31492 1.72587 8.23987 1.70646 8.16579 1.71637C8.09171 1.72628 8.02415 1.76477 7.97708 1.82393L2.62213 8.55522C2.0153 9.31801 1.68421 10.2697 1.68421 11.2511V12.8585C1.68421 13.7676 2.03909 14.6394 2.67079 15.2822C3.30249 15.925 4.15927 16.2862 5.05263 16.2862H11.7895C12.4595 16.2862 13.1021 16.0153 13.5759 15.5332C14.0496 15.0511 14.3158 14.3972 14.3158 13.7154V10.2877C14.3158 9.83321 14.1383 9.39729 13.8225 9.07588C13.5066 8.75448 13.0783 8.57392 12.6316 8.57392H8C7.71763 8.57392 7.45405 8.4299 7.29806 8.19039C7.14206 7.95087 7.11442 7.64774 7.22445 7.38311L8.88886 3.37986C9 3.11253 9.01896 2.81477 8.94262 2.53507C8.8663 2.25541 8.69921 2.01027 8.46853 1.83954L8.37542 1.77064Z',
            fill: 'currentColor',
          }),
        }),
        x = (0, a.jsx)('svg', {
          width: '16',
          height: '18',
          viewBox: '0 0 16 18',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          children: (0, a.jsx)('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M6.63397 17.6154C6.63395 17.6154 6.63399 17.6154 6.63397 17.6154L6.54098 17.5466C6.00268 17.1482 5.61269 16.5761 5.43458 15.9235C5.25648 15.2709 5.30069 14.5761 5.56004 13.9524L6.72935 11.1399L3.36842 11.1399C2.47506 11.1399 1.61829 10.7788 0.986585 10.136C0.354883 9.49316 8.1991e-07 8.62132 8.99384e-07 7.71225L1.19904e-06 4.28458C1.29838e-06 3.14824 0.443605 2.05844 1.23323 1.25492C2.02286 0.451403 3.09383 -1.12829e-06 4.21053 -1.03067e-06L10.9474 -4.41715e-07C12.2874 -3.24565e-07 13.5726 0.541687 14.5201 1.50591C15.4677 2.47013 16 3.77789 16 5.1415L16 6.74893C16 8.12289 15.5365 9.45521 14.6869 10.5231L9.33196 17.2544C9.01338 17.6549 8.55586 17.9157 8.05377 17.9828C7.5517 18.05 7.04344 17.9184 6.63397 17.6154ZM7.62458 16.2294C7.68508 16.2741 7.76013 16.2935 7.83421 16.2836C7.90829 16.2737 7.97585 16.2352 8.02292 16.1761L13.3779 9.44478C13.9847 8.68199 14.3158 7.73033 14.3158 6.74892L14.3158 5.1415C14.3158 4.23242 13.9609 3.36058 13.3292 2.71777C12.6975 2.07496 11.8407 1.71383 10.9474 1.71383L4.21053 1.71383C3.5405 1.71383 2.89793 1.98468 2.42415 2.46679C1.95038 2.94889 1.68421 3.60277 1.68421 4.28458L1.68421 7.71225C1.68421 8.16679 1.86166 8.60271 2.1775 8.92411C2.49335 9.24552 2.92174 9.42608 3.36842 9.42608L8 9.42608C8.28237 9.42608 8.54595 9.5701 8.70195 9.80961C8.85794 10.0491 8.88558 10.3523 8.77555 10.6169L7.11114 14.6201C7 14.8875 6.98105 15.1852 7.05738 15.4649C7.1337 15.7446 7.30079 15.9897 7.53147 16.1605L7.62458 16.2294Z',
            fill: 'currentColor',
          }),
        });
      function h(e) {
        gtag('event', 'feedback', {
          event_category: e ? 'like_button' : 'dislike_button',
          event_label: window.location.pathname,
          event_value: e ? 1 : 0,
        });
      }
      function m(e) {
        let {onSubmit: t} = e,
          [r, l] = (0, s.useState)(!1);
        return (0, a.jsxs)('div', {
          className: o()(
            'max-w-custom-xs w-80 lg:w-auto py-3 shadow-lg rounded-lg m-4 bg-wash dark:bg-gray-95 px-4 flex',
            {exit: r}
          ),
          children: [
            (0, a.jsx)('p', {
              className:
                'w-full text-lg font-bold text-primary dark:text-primary-dark me-4',
              children: r ? '谢谢你的反馈意见！' : '这个页面对你有帮助吗？',
            }),
            !r &&
              (0, a.jsx)('button', {
                'aria-label': 'Yes',
                className:
                  'px-3 rounded-lg bg-secondary-button dark:bg-secondary-button-dark text-primary dark:text-primary-dark me-2',
                onClick: () => {
                  l(!0), t(), h(!0);
                },
                children: c,
              }),
            !r &&
              (0, a.jsx)('button', {
                'aria-label': 'No',
                className:
                  'px-3 rounded-lg bg-secondary-button dark:bg-secondary-button-dark text-primary dark:text-primary-dark',
                onClick: () => {
                  l(!0), t(), h(!1);
                },
                children: x,
              }),
          ],
        });
      }
      var u = r(59925),
        p = r(63696),
        f = r(41664),
        g = r.n(f);
      function j(e) {
        let {
            href: t,
            selected: r = !1,
            title: l,
            canary: n,
            level: i,
            isExpanded: d,
            hideArrow: c,
            isPending: x,
          } = e,
          h = (0, s.useRef)(null);
        (0, s.useEffect)(() => {
          r &&
            h &&
            h.current &&
            'function' == typeof h.current.scrollIntoViewIfNeeded &&
            h.current.scrollIntoViewIfNeeded();
        }, [h, r]);
        let m = '';
        return (
          t.startsWith('https://') && (m = '_blank'),
          (0, a.jsxs)(g(), {
            href: t,
            ref: h,
            title: l,
            target: m,
            passHref: !0,
            'aria-current': r ? 'page' : void 0,
            className: o()(
              'p-2 pe-2 w-full rounded-none lg:rounded-e-2xl text-start hover:bg-gray-5 dark:hover:bg-gray-80 relative flex items-center justify-between',
              {
                'text-sm ps-6': i > 0,
                'ps-5': i < 2,
                'text-base font-bold': 0 === i,
                'text-primary dark:text-primary-dark': 0 === i && !r,
                'text-base text-secondary dark:text-secondary-dark':
                  i > 0 && !r,
                'text-base text-link dark:text-link-dark bg-highlight dark:bg-highlight-dark border-blue-40 hover:bg-highlight hover:text-link dark:hover:bg-highlight-dark dark:hover:text-link-dark':
                  r,
                'dark:bg-gray-70 bg-gray-3 dark:hover:bg-gray-70 hover:bg-gray-3':
                  x,
              }
            ),
            children: [
              (0, a.jsxs)('div', {
                children: [
                  l,
                  ' ',
                  n &&
                    (0, a.jsx)(p.t, {
                      title:
                        ' - This feature is available in the latest Canary',
                      className:
                        'ms-2 text-gray-30 dark:text-gray-60 inline-block w-4 h-4 align-[-3px]',
                    }),
                ],
              }),
              null != d &&
                !c &&
                (0, a.jsx)('span', {
                  className: o()('pe-1', {
                    'text-link dark:text-link-dark': d,
                    'text-tertiary dark:text-tertiary-dark': !d,
                  }),
                  children: (0, a.jsx)(u.s, {
                    displayDirection: d ? 'down' : 'end',
                  }),
                }),
            ],
          })
        );
      }
      var w = r(68003);
      let C = () => {
        let {events: e} = (0, l.useRouter)(),
          [t, r] = (0, s.useState)(null),
          a = (0, s.useRef)(null);
        return (
          (0, s.useEffect)(() => {
            let t = null,
              s = (e) => {
                clearTimeout(t),
                  (t = setTimeout(() => {
                    a.current !== e && ((a.current = e), r(e));
                  }, 100));
              },
              l = () => {
                r(null), clearTimeout(t);
              };
            return (
              e.on('routeChangeStart', s),
              e.on('routeChangeComplete', l),
              () => {
                e.off('routeChangeStart', s),
                  e.off('routeChangeComplete', l),
                  clearTimeout(t);
              }
            );
          }, [e]),
          t
        );
      };
      var b = r(24299);
      function v(e) {
        let {isExpanded: t, duration: r, children: l} = e,
          n = (0, s.useRef)(null),
          i = (0, s.useRef)(null),
          {getCollapseProps: d} = (0, w.z)({isExpanded: t, duration: r}),
          c = (0, s.useRef)(t);
        return (
          (0, s.useLayoutEffect)(() => {
            let e = c.current;
            if (e !== t && ((c.current = t), null !== n.current)) {
              let e = n.current;
              (e.style.pointerEvents = 'none'),
                null !== i.current && window.clearTimeout(i.current),
                (i.current = window.setTimeout(() => {
                  e.style.pointerEvents = '';
                }, r + 100));
            }
          }),
          (0, a.jsx)('div', {
            ref: n,
            className: o()(t ? 'opacity-100' : 'opacity-50'),
            style: {transition: 'opacity '.concat(r, 'ms ease-in-out')},
            children: (0, a.jsx)('div', {...d(), children: l}),
          })
        );
      }
      function k(e) {
        let {
            isForceExpanded: t,
            breadcrumbs: r,
            routeTree: n,
            level: i = 0,
          } = e,
          d = (0, l.useRouter)().asPath.split(/[\?\#]/)[0],
          c = C(),
          x = n.routes;
        return (0, a.jsx)('ul', {
          children: x.map((e, l) => {
            let {
                path: n,
                title: x,
                routes: h,
                canary: m,
                heading: u,
                hasSectionHeader: p,
                sectionHeader: f,
              } = e,
              g = d === n,
              w = null;
            if (!n || u)
              w = (0, a.jsx)(k, {
                level: i + 1,
                isForceExpanded: t,
                routeTree: {title: x, routes: h},
                breadcrumbs: [],
              });
            else if (h) {
              let e = r.length > 1 && r[r.length - 1].path === n,
                s = t || e || g;
              w = (0, a.jsxs)(
                'li',
                {
                  children: [
                    (0, a.jsx)(
                      j,
                      {
                        href: n,
                        isPending: c === n,
                        selected: g,
                        level: i,
                        title: x,
                        canary: m,
                        isExpanded: s,
                        hideArrow: t,
                      },
                      ''.concat(x, '-').concat(n, '-').concat(i, '-link')
                    ),
                    (0, a.jsx)(v, {
                      duration: 250,
                      isExpanded: s,
                      children: (0, a.jsx)(k, {
                        isForceExpanded: t,
                        routeTree: {title: x, routes: h},
                        breadcrumbs: r,
                        level: i + 1,
                      }),
                    }),
                  ],
                },
                ''.concat(x, '-').concat(n, '-').concat(i, '-heading')
              );
            } else
              w = (0, a.jsx)(
                'li',
                {
                  children: (0, a.jsx)(j, {
                    isPending: c === n,
                    href: n,
                    selected: g,
                    level: i,
                    title: x,
                    canary: m,
                  }),
                },
                ''.concat(x, '-').concat(n, '-').concat(i, '-link')
              );
            if (!p) return w;
            {
              let e = null != f ? f.replace('{{version}}', b.J.version) : '';
              return (0, a.jsxs)(
                s.Fragment,
                {
                  children: [
                    0 !== l &&
                      (0, a.jsx)('li', {
                        role: 'separator',
                        className:
                          'mt-4 mb-2 ms-5 border-b border-border dark:border-border-dark',
                      }),
                    (0, a.jsx)('h3', {
                      className: o()(
                        'mb-1 text-sm font-bold ms-5 text-tertiary dark:text-tertiary-dark',
                        0 !== l && 'mt-2'
                      ),
                      children: e,
                    }),
                  ],
                },
                ''.concat(e, '-').concat(i, '-separator')
              );
            }
          }),
        });
      }
      function y(e) {
        let {routeTree: t, breadcrumbs: r} = e;
        return (
          1 === t.routes.length && (t = t.routes[0]),
          (0, a.jsx)('div', {
            className: o()(
              'sticky top-0 lg:bottom-0 lg:h-[calc(100vh-4rem)] flex flex-col'
            ),
            children: (0, a.jsx)('div', {
              className:
                'overflow-y-scroll no-bg-scrollbar lg:w-[342px] grow bg-wash dark:bg-wash-dark',
              style: {overscrollBehavior: 'contain'},
              children: (0, a.jsxs)('aside', {
                className: o()(
                  'lg:grow flex-col w-full pb-8 lg:pb-0 lg:max-w-custom-xs z-10 hidden lg:block'
                ),
                children: [
                  (0, a.jsxs)('nav', {
                    role: 'navigation',
                    style: {'--bg-opacity': '.2'},
                    className:
                      'w-full pt-6 scrolling-touch lg:h-auto grow pe-0 lg:pe-5 lg:pb-16 md:pt-4 lg:pt-4 scrolling-gpu',
                    children: [
                      (0, a.jsx)(s.Suspense, {
                        fallback: null,
                        children: (0, a.jsx)(k, {
                          routeTree: t,
                          breadcrumbs: r,
                          isForceExpanded: !1,
                        }),
                      }),
                      (0, a.jsx)('div', {className: 'h-20'}),
                    ],
                  }),
                  (0, a.jsx)('div', {
                    className: 'fixed bottom-0 hidden lg:block',
                    children: (0, a.jsx)(d, {}),
                  }),
                ],
              }),
            }),
          })
        );
      }
      function N(e) {
        let {headings: t} = e,
          {currentIndex: r} = (function () {
            let [e, t] = (0, s.useState)(0),
              r = (0, s.useRef)(null);
            return (
              (0, s.useEffect)(() => {
                function e() {
                  let e = document.body.scrollHeight,
                    r = window.scrollY + window.innerHeight,
                    a = Array.prototype.filter.call(
                      document.getElementsByClassName('mdx-header-anchor'),
                      function (e) {
                        return (
                          'H1' === e.parentNode.nodeName ||
                          'H2' === e.parentNode.nodeName ||
                          'H3' === e.parentNode.nodeName
                        );
                      }
                    );
                  if (r >= 0 && e - r <= 0) {
                    t(a.length - 1);
                    return;
                  }
                  let s = -1;
                  for (; s < a.length - 1; ) {
                    let e = a[s + 1],
                      {top: t} = e.getBoundingClientRect();
                    if (t >= 85) break;
                    s += 1;
                  }
                  t(Math.max(s, 0));
                }
                function a() {
                  null === r.current &&
                    (r.current = window.setTimeout(() => {
                      (r.current = null), e();
                    }, 100));
                }
                return (
                  document.addEventListener('scroll', a),
                  document.addEventListener('resize', a),
                  e(),
                  () => {
                    null != r.current &&
                      (clearTimeout(r.current), (r.current = null)),
                      document.removeEventListener('scroll', a),
                      document.removeEventListener('resize', a);
                  }
                );
              }, []),
              {currentIndex: e}
            );
          })(),
          l = Math.min(r, t.length - 1);
        return (0, a.jsxs)('nav', {
          role: 'navigation',
          className: 'pt-20 sticky top-0 end-0',
          children: [
            t.length > 0 &&
              (0, a.jsx)('h2', {
                className:
                  'mb-3 lg:mb-3 uppercase tracking-wide font-bold text-sm text-secondary dark:text-secondary-dark px-4 w-full',
                children: '目录',
              }),
            (0, a.jsx)('div', {
              className:
                'h-full overflow-y-auto ps-4 max-h-[calc(100vh-7.5rem)]',
              style: {overscrollBehavior: 'contain'},
              children: (0, a.jsx)('ul', {
                className: 'space-y-2 pb-16',
                children:
                  t.length > 0 &&
                  t.map(
                    (e, t) => (
                      e.url,
                      (0, a.jsx)(
                        'li',
                        {
                          className: o()(
                            'text-sm px-2 rounded-s-xl',
                            l === t
                              ? 'bg-highlight dark:bg-highlight-dark'
                              : null,
                            {
                              'ps-4': (null == e ? void 0 : e.depth) === 3,
                              hidden: e.depth && e.depth > 3,
                            }
                          ),
                          children: (0, a.jsx)('a', {
                            className: o()(
                              l === t
                                ? 'text-link dark:text-link-dark font-bold'
                                : 'text-secondary dark:text-secondary-dark',
                              'block hover:text-link dark:hover:text-link-dark leading-normal py-2'
                            ),
                            href: e.url,
                            children: e.text,
                          }),
                        },
                        'heading-'.concat(e.url, '-').concat(t)
                      )
                    )
                  ),
              }),
            }),
          ],
        });
      }
      let L = (0, s.memo)(
        function (e) {
          let {nextRoute: t, prevRoute: r, route: s} = e;
          return !s || (null == s ? void 0 : s.heading)
            ? null
            : (0, a.jsx)(a.Fragment, {
                children:
                  (null == r ? void 0 : r.path) || (null == t ? void 0 : t.path)
                    ? (0, a.jsx)(a.Fragment, {
                        children: (0, a.jsxs)('div', {
                          className:
                            'grid grid-cols-1 gap-4 py-4 mx-auto max-w-7xl md:grid-cols-2 md:py-12',
                          children: [
                            (null == r ? void 0 : r.path)
                              ? (0, a.jsx)(R, {
                                  type: '上一页',
                                  title: r.title,
                                  href: r.path,
                                })
                              : (0, a.jsx)('div', {}),
                            (null == t ? void 0 : t.path)
                              ? (0, a.jsx)(R, {
                                  type: '下一页',
                                  title: t.title,
                                  href: t.path,
                                })
                              : (0, a.jsx)('div', {}),
                          ],
                        }),
                      })
                    : null,
              });
        },
        function (e, t) {
          var r, a;
          return (
            (null === (r = e.route) || void 0 === r ? void 0 : r.path) ===
            (null === (a = t.route) || void 0 === a ? void 0 : a.path)
          );
        }
      );
      function R(e) {
        let {href: t, title: r, type: s} = e;
        return (0, a.jsxs)(g(), {
          href: t,
          className: o()(
            'flex gap-x-4 md:gap-x-6 items-center w-full md:min-w-80 md:w-fit md:max-w-md px-4 md:px-5 py-6 border-2 border-transparent text-base leading-base text-link dark:text-link-dark rounded-lg group focus:text-link dark:focus:text-link-dark focus:bg-highlight focus:border-link dark:focus:bg-highlight-dark dark:focus:border-link-dark focus:border-opacity-100 focus:border-2 focus:ring-1 focus:ring-offset-4 focus:ring-blue-40 active:ring-0 active:ring-offset-0 hover:bg-gray-5 dark:hover:bg-gray-80',
            {'flex-row-reverse justify-self-end text-end': '下一页' === s}
          ),
          children: [
            (0, a.jsx)(u.s, {
              className:
                'inline text-tertiary dark:text-tertiary-dark group-focus:text-link dark:group-focus:text-link-dark',
              displayDirection: '上一页' === s ? 'start' : 'end',
            }),
            (0, a.jsxs)('div', {
              className: 'flex flex-col overflow-hidden',
              children: [
                (0, a.jsx)('span', {
                  className:
                    'text-sm font-bold tracking-wide no-underline uppercase text-secondary dark:text-secondary-dark group-focus:text-link dark:group-focus:text-link-dark group-focus:text-opacity-100',
                  children: s,
                }),
                (0, a.jsx)('span', {
                  className: 'text-lg break-words group-hover:underline',
                  children: r,
                }),
              ],
            }),
          ],
        });
      }
      var H = r(9008),
        M = r.n(H),
        Z = r(68744);
      function F(e) {
        return ('en' === e ? '' : e + '.') + 'react.dev';
      }
      let T = (0, l.withRouter)((e) => {
        let {
            title: t,
            titleForTitleTag: r,
            image: s = '/images/og-default.png',
            router: l,
            children: n,
            isHomePage: i,
            searchOrder: o,
          } = e,
          d = F(b.J.languageCode),
          c = 'https://'.concat(d).concat(l.asPath.split(/[\?\#]/)[0]),
          x = (null != r ? r : t) + (i ? '' : ' – React 中文文档'),
          h = x.replace(/[<>]/g, ''),
          m = i
            ? 'React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript. React is designed to let you seamlessly combine components written by independent people, teams, and organizations.'
            : 'The library for web and native user interfaces';
        return (0, a.jsxs)(M(), {
          children: [
            (0, a.jsx)('meta', {
              name: 'viewport',
              content: 'width=device-width, initial-scale=1',
            }),
            null != t && (0, a.jsx)('title', {children: x}, 'title'),
            i &&
              (0, a.jsx)(
                'meta',
                {name: 'description', content: m},
                'description'
              ),
            (0, a.jsx)('link', {rel: 'canonical', href: c}),
            (0, a.jsx)('link', {
              rel: 'alternate',
              href: c.replace(d, F('en')),
              hrefLang: 'x-default',
            }),
            Z.Z.map((e) =>
              (0, a.jsx)(
                'link',
                {rel: 'alternate', hrefLang: e, href: c.replace(d, F(e))},
                'alt-' + e
              )
            ),
            (0, a.jsx)('meta', {
              property: 'fb:app_id',
              content: '623268441017527',
            }),
            (0, a.jsx)(
              'meta',
              {property: 'og:type', content: 'website'},
              'og:type'
            ),
            (0, a.jsx)('meta', {property: 'og:url', content: c}, 'og:url'),
            null != t &&
              (0, a.jsx)(
                'meta',
                {property: 'og:title', content: x},
                'og:title'
              ),
            null != m &&
              (0, a.jsx)(
                'meta',
                {property: 'og:description', content: m},
                'og:description'
              ),
            (0, a.jsx)(
              'meta',
              {property: 'og:image', content: 'https://'.concat(d).concat(s)},
              'og:image'
            ),
            (0, a.jsx)(
              'meta',
              {name: 'twitter:card', content: 'summary_large_image'},
              'twitter:card'
            ),
            (0, a.jsx)(
              'meta',
              {name: 'twitter:site', content: '@reactjs'},
              'twitter:site'
            ),
            (0, a.jsx)(
              'meta',
              {name: 'twitter:creator', content: '@reactjs'},
              'twitter:creator'
            ),
            null != t &&
              (0, a.jsx)(
                'meta',
                {name: 'twitter:title', content: h},
                'twitter:title'
              ),
            null != m &&
              (0, a.jsx)(
                'meta',
                {name: 'twitter:description', content: m},
                'twitter:description'
              ),
            (0, a.jsx)(
              'meta',
              {name: 'twitter:image', content: 'https://'.concat(d).concat(s)},
              'twitter:image'
            ),
            (0, a.jsx)('meta', {
              name: 'google-site-verification',
              content: 'sIlAGs48RulR4DdP95YSWNKZIEtCqQmRjzn-Zq-CcD0',
            }),
            null != o &&
              (0, a.jsx)('meta', {
                name: 'algolia-search-order',
                content: '' + o,
              }),
            (0, a.jsx)('link', {
              rel: 'preload',
              href: '/fonts/Source-Code-Pro-Regular.woff2',
              as: 'font',
              type: 'font/woff2',
              crossOrigin: 'anonymous',
            }),
            (0, a.jsx)('link', {
              rel: 'preload',
              href: 'https://react.dev/fonts/Optimistic_Display_W_Md.woff2',
              as: 'font',
              type: 'font/woff2',
              crossOrigin: 'anonymous',
            }),
            (0, a.jsx)('link', {
              rel: 'preload',
              href: 'https://react.dev/fonts/Optimistic_Display_W_SBd.woff2',
              as: 'font',
              type: 'font/woff2',
              crossOrigin: 'anonymous',
            }),
            (0, a.jsx)('link', {
              rel: 'preload',
              href: 'https://react.dev/fonts/Optimistic_Display_W_Bd.woff2',
              as: 'font',
              type: 'font/woff2',
              crossOrigin: 'anonymous',
            }),
            (0, a.jsx)('link', {
              rel: 'preload',
              href: 'https://react.dev/fonts/Optimistic_Text_W_Md.woff2',
              as: 'font',
              type: 'font/woff2',
              crossOrigin: 'anonymous',
            }),
            (0, a.jsx)('link', {
              rel: 'preload',
              href: 'https://react.dev/fonts/Optimistic_Text_W_Bd.woff2',
              as: 'font',
              type: 'font/woff2',
              crossOrigin: 'anonymous',
            }),
            (0, a.jsx)('link', {
              rel: 'preload',
              href: 'https://react.dev/fonts/Optimistic_Text_W_Rg.woff2',
              as: 'font',
              type: 'font/woff2',
              crossOrigin: 'anonymous',
            }),
            (0, a.jsx)('link', {
              rel: 'preload',
              href: 'https://react.dev/fonts/Optimistic_Text_W_It.woff2',
              as: 'font',
              type: 'font/woff2',
              crossOrigin: 'anonymous',
            }),
            n,
          ],
        });
      });
      var P = function (e) {
        let {breadcrumbs: t} = e;
        return (0, a.jsx)('div', {
          className: 'flex flex-wrap',
          children: t.map(
            (e, t) =>
              e.path &&
              !e.skipBreadcrumb &&
              (0, a.jsx)(
                'div',
                {
                  className: 'flex mb-3 mt-0.5 items-center',
                  children: (0, a.jsxs)(
                    s.Fragment,
                    {
                      children: [
                        (0, a.jsx)(g(), {
                          href: e.path,
                          className:
                            'text-link dark:text-link-dark text-sm tracking-wide font-bold uppercase me-1 hover:underline',
                          children: e.title,
                        }),
                        (0, a.jsx)('span', {
                          className:
                            'inline-block me-1 text-link dark:text-link-dark text-lg rtl:rotate-180',
                          children: (0, a.jsx)('svg', {
                            width: '20',
                            height: '20',
                            viewBox: '0 0 20 20',
                            fill: 'none',
                            xmlns: 'http://www.w3.org/2000/svg',
                            children: (0, a.jsx)('path', {
                              d: 'M6.86612 13.6161C6.37796 14.1043 6.37796 14.8957 6.86612 15.3839C7.35427 15.872 8.14572 15.872 8.63388 15.3839L13.1339 10.8839C13.622 10.3957 13.622 9.60428 13.1339 9.11612L8.63388 4.61612C8.14572 4.12797 7.35427 4.12797 6.86612 4.61612C6.37796 5.10428 6.37796 5.89573 6.86612 6.38388L10.4822 10L6.86612 13.6161Z',
                              fill: 'currentColor',
                            }),
                          }),
                        }),
                      ],
                    },
                    e.path
                  ),
                },
                t
              )
          ),
        });
      };
      let S = {
        foundation: {name: '基础', classes: 'bg-yellow-50 text-white'},
        intermediate: {name: '中级', classes: 'bg-purple-40 text-white'},
        advanced: {name: '高级', classes: 'bg-green-40 text-white'},
        experimental: {name: '实验性的', classes: 'bg-ui-orange text-white'},
        deprecated: {name: '弃用', classes: 'bg-red-40 text-white'},
      };
      var _ = function (e) {
          let {text: t, variant: r, className: s} = e,
            {name: l, classes: n} = S[r];
          return (0, a.jsx)('span', {
            className: o()('me-2', s),
            children: (0, a.jsx)('span', {
              className: o()(
                'inline font-bold text-sm uppercase py-1 px-2 rounded',
                n
              ),
              children: t || l,
            }),
          });
        },
        V = r(40186),
        W = function (e) {
          let {
            title: t,
            status: r,
            canary: s,
            tags: l = [],
            breadcrumbs: n,
          } = e;
          return (0, a.jsx)('div', {
            className: 'px-5 sm:px-12 pt-3.5',
            children: (0, a.jsxs)('div', {
              className: 'max-w-4xl ms-0 2xl:mx-auto',
              children: [
                n ? (0, a.jsx)(P, {breadcrumbs: n}) : null,
                (0, a.jsxs)(V.H1, {
                  className:
                    'mt-0 text-primary dark:text-primary-dark -mx-.5 break-words',
                  children: [
                    t,
                    s &&
                      (0, a.jsx)(p.t, {
                        title:
                          ' - This feature is available in the latest Canary',
                        className:
                          'ms-4 mt-1 text-gray-50 dark:text-gray-40 inline-block w-6 h-6 align-[-1px]',
                      }),
                    r ? (0, a.jsxs)('em', {children: ['—', r]}) : '',
                  ],
                }),
                (null == l ? void 0 : l.length) > 0 &&
                  (0, a.jsx)('div', {
                    className: 'mt-4',
                    children: l.map((e) => (0, a.jsx)(_, {variant: e}, e)),
                  }),
              ],
            }),
          });
        },
        z = r(58346),
        E = r(550),
        B = r(55611),
        A = r(37917),
        I = r(7803),
        G = r(1255);
      let D = (0, s.memo)(function (e) {
        return (0,
        a.jsx)('svg', {width: '1em', height: '1em', viewBox: '0 0 20 20', ...e, children: (0, a.jsx)('path', {d: 'M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z', stroke: 'currentColor', fill: 'none', strokeWidth: '2', fillRule: 'evenodd', strokeLinecap: 'round', strokeLinejoin: 'round'})});
      });
      function O(e) {
        return (0, a.jsxs)('svg', {
          width: '100%',
          height: '100%',
          viewBox: '-10.5 -9.45 21 18.9',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          ...e,
          children: [
            (0, a.jsx)('circle', {
              cx: '0',
              cy: '0',
              r: '2',
              fill: 'currentColor',
            }),
            (0, a.jsxs)('g', {
              stroke: 'currentColor',
              strokeWidth: '1',
              fill: 'none',
              children: [
                (0, a.jsx)('ellipse', {rx: '10', ry: '4.5'}),
                (0, a.jsx)('ellipse', {
                  rx: '10',
                  ry: '4.5',
                  transform: 'rotate(60)',
                }),
                (0, a.jsx)('ellipse', {
                  rx: '10',
                  ry: '4.5',
                  transform: 'rotate(120)',
                }),
              ],
            }),
          ],
        });
      }
      var q = r(39742),
        J = r(27935),
        U = r(85178),
        K = r(78682),
        Y = r(25675),
        X = r.n(Y);
      function Q(e) {
        let {children: t, background: r = null} = e;
        return (0, a.jsx)('div', {
          className: o()(
            'mx-auto flex flex-col w-full',
            null === r && 'max-w-7xl',
            'left-card' === r &&
              'bg-gradient-left dark:bg-gradient-left-dark border-t border-primary/10 dark:border-primary-dark/10 ',
            'right-card' === r &&
              'bg-gradient-right dark:bg-gradient-right-dark border-t border-primary/5 dark:border-primary-dark/5'
          ),
          style: {contain: 'content'},
          children: (0, a.jsx)('div', {
            className:
              'flex-col gap-2 flex grow w-full my-20 lg:my-32 mx-auto items-center',
            children: t,
          }),
        });
      }
      function $(e) {
        let {children: t} = e;
        return (0, a.jsx)('h2', {
          className:
            'leading-xl font-display text-primary dark:text-primary-dark font-semibold text-5xl lg:text-6xl -mt-4 mb-7 w-full max-w-3xl lg:max-w-xl',
          children: t,
        });
      }
      function ee(e) {
        let {children: t} = e;
        return (0, a.jsx)('p', {
          className:
            'max-w-3xl mx-auto text-lg lg:text-xl text-secondary dark:text-secondary-dark leading-normal',
          children: t,
        });
      }
      function et(e) {
        let {children: t} = e;
        return (0, a.jsx)('div', {
          className:
            'px-5 lg:px-0 max-w-4xl lg:text-center text-white text-opacity-80 flex flex-col items-center justify-center',
          children: t,
        });
      }
      function er(e) {
        let {children: t} = e;
        return (0, a.jsx)('div', {
          className: 'max-w-7xl mx-auto flex flex-col w-full',
          children: t,
        });
      }
      function ea() {
        let [e, t] = (0, s.useState)(new Date()),
          r = e.toLocaleTimeString([], {hour: 'numeric', minute: 'numeric'});
        return (
          (0, s.useEffect)(() => {
            let r = 6e4 * Math.floor(+e / 6e4 + 1),
              a = setTimeout(() => {
                Date.now() > r && t(new Date());
              }, r - Date.now());
            return () => clearTimeout(a);
          }, [e]),
          (0, a.jsx)('span', {suppressHydrationWarning: !0, children: r})
        );
      }
      let es = K.routes[1];
      if ('/blog' !== es.path)
        throw Error('Could not find the blog route in sidebarBlog.json');
      let el = es.routes
        .slice(0, 4)
        .map((e) => ({
          title: e.titleForHomepage,
          icon: e.icon,
          date: e.date,
          url: e.path,
        }));
      function en() {
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsxs)('div', {
            className: 'ps-0',
            children: [
              (0, a.jsxs)('div', {
                className:
                  'mx-5 mt-12 lg:mt-24 mb-20 lg:mb-32 flex flex-col justify-center',
                children: [
                  (0, a.jsx)('div', {
                    className: 'uwu-visible flex justify-center',
                    children: (0, a.jsx)(X(), {
                      alt: 'logo by @sawaratsuki1004',
                      title: 'logo by @sawaratsuki1004',
                      loading: 'eager',
                      width: 313,
                      height: 160,
                      src: '/images/uwu.png',
                    }),
                  }),
                  (0, a.jsx)(O, {
                    className: o()(
                      'uwu-hidden mt-4 mb-3 text-brand dark:text-brand-dark w-24 lg:w-28 self-center text-sm me-0 flex origin-center transition-all ease-in-out'
                    ),
                  }),
                  (0, a.jsx)('h1', {
                    className:
                      'uwu-hidden text-5xl font-display lg:text-6xl self-center flex font-semibold leading-snug text-primary dark:text-primary-dark',
                    children: 'React',
                  }),
                  (0, a.jsx)('p', {
                    className:
                      'text-4xl font-display max-w-lg md:max-w-full py-1 text-center text-secondary dark:text-primary-dark leading-snug self-center',
                    children: '用于构建 Web 和原生交互界面的库',
                  }),
                  (0, a.jsxs)('div', {
                    className:
                      'mt-5 self-center flex gap-2 w-full sm:w-auto flex-col sm:flex-row',
                    children: [
                      (0, a.jsx)(B.Z, {
                        href: '/learn',
                        type: 'primary',
                        size: 'lg',
                        className: 'w-full sm:w-auto justify-center',
                        label: 'Learn React',
                        children: '学习 React',
                      }),
                      (0, a.jsx)(B.Z, {
                        href: '/reference/react',
                        type: 'secondary',
                        size: 'lg',
                        className: 'w-full sm:w-auto justify-center',
                        label: 'API Reference',
                        children: 'API 参考',
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsxs)(Q, {
                background: 'left-card',
                children: [
                  (0, a.jsxs)(et, {
                    children: [
                      (0, a.jsx)($, {children: '用组件创建用户界面'}),
                      (0, a.jsxs)(ee, {
                        children: [
                          'React 让你可以通过组件来构建用户界面。你可以创建像',
                          ' ',
                          (0, a.jsx)(e_, {children: 'Thumbnail'}),
                          '、',
                          (0, a.jsx)(e_, {children: 'LikeButton'}),
                          ' 和',
                          ' ',
                          (0, a.jsx)(e_, {children: 'Video'}),
                          ' 这样的组件。然后将它们组合成整个应用程序。',
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsx)(er, {children: (0, a.jsx)(ef, {})}),
                  (0, a.jsx)(et, {
                    children: (0, a.jsx)(ee, {
                      children:
                        '无论你是独自工作还是与成千上万的其他开发人员合作，使用 React 的感觉都是相同的。它旨在让你轻松地组合由独立开发者、团队或组织编写的组件。',
                    }),
                  }),
                ],
              }),
              (0, a.jsxs)(Q, {
                background: 'right-card',
                children: [
                  (0, a.jsxs)(et, {
                    children: [
                      (0, a.jsx)($, {children: '用代码和标签编写组件'}),
                      (0, a.jsxs)(ee, {
                        children: [
                          'React 组件是 JavaScript 函数。想要有条件地显示一些内容吗？使用',
                          ' ',
                          (0, a.jsx)(e_, {children: 'if'}),
                          ' 语句。',
                          (0, a.jsx)('br', {className: 'hidden lg:inline'}),
                          '想要展示一个列表？尝试使用数组的 ',
                          (0, a.jsx)(e_, {children: 'map()'}),
                          ' 方法。学习 React 就是学习编程。',
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsx)(er, {children: (0, a.jsx)(ej, {})}),
                  (0, a.jsx)(et, {
                    children: (0, a.jsx)(ee, {
                      children:
                        '这种标签语法被称为 JSX。它是由 React 推广的 JavaScript 语法扩展。将 JSX 标签与相关的渲染逻辑放在一起，使得创建、维护和删除 React 组件变得容易。',
                    }),
                  }),
                ],
              }),
              (0, a.jsxs)(Q, {
                background: 'left-card',
                children: [
                  (0, a.jsxs)(et, {
                    children: [
                      (0, a.jsx)($, {children: '在任何地方添加交互'}),
                      (0, a.jsx)(ee, {
                        children:
                          'React 组件接收数据并返回应该出现在屏幕上的内容。你可以通过响应交互（例如用户输入）向它们传递新数据。然后，React 将更新屏幕以匹配新数据。',
                      }),
                    ],
                  }),
                  (0, a.jsx)(er, {children: (0, a.jsx)(eC, {})}),
                  (0, a.jsxs)(et, {
                    children: [
                      (0, a.jsx)(ee, {
                        children:
                          '你也可以不用 React 去构建整个页面，而只是将 React 添加到现有的 HTML 页面中，在任何地方呈现交互式的 React 组件。',
                      }),
                      (0, a.jsx)('div', {
                        className:
                          'flex justify-start w-full lg:justify-center',
                        children: (0, a.jsx)(ei, {
                          color: 'gray',
                          icon: 'code',
                          href: '/learn/add-react-to-an-existing-project',
                          children: '将 React 添加到你已有的页面中',
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsxs)(Q, {
                background: 'right-card',
                children: [
                  (0, a.jsxs)(et, {
                    children: [
                      (0, a.jsxs)($, {
                        children: [
                          '使用框架',
                          (0, a.jsx)('br', {className: 'hidden lg:inline'}),
                          '进行全栈开发',
                        ],
                      }),
                      (0, a.jsxs)(ee, {
                        children: [
                          'React 是一个库。它允许你将组件放在一起，但不关注路由和数据获取。要使用 React 构建整个应用程序，我们建议使用像',
                          ' ',
                          (0, a.jsx)(q.Z, {
                            href: 'https://nextjs.org',
                            children: 'Next.js',
                          }),
                          ' 或',
                          ' ',
                          (0, a.jsx)(q.Z, {
                            href: 'https://remix.run',
                            children: 'Remix',
                          }),
                          ' 这样的全栈 React 框架。',
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsx)(er, {children: (0, a.jsx)(ev, {})}),
                  (0, a.jsxs)(et, {
                    children: [
                      (0, a.jsx)(ee, {
                        children:
                          'React 也是一种架构。实现它的框架可以在服务端甚至是构建阶段使用异步组件来获取数据，也可以从文件或数据库读取数据，并将其传递给交互式组件。',
                      }),
                      (0, a.jsx)('div', {
                        className:
                          'flex justify-start w-full lg:justify-center',
                        children: (0, a.jsx)(ei, {
                          color: 'gray',
                          icon: 'framework',
                          href: '/learn/start-a-new-react-project',
                          children: '使用框架开始一个新项目',
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsx)(Q, {
                background: 'left-card',
                children: (0, a.jsxs)('div', {
                  className: 'mx-auto flex flex-col w-full',
                  children: [
                    (0, a.jsxs)('div', {
                      className:
                        'mx-auto max-w-4xl lg:text-center items-center px-5 flex flex-col',
                      children: [
                        (0, a.jsx)($, {children: '博采众长'}),
                        (0, a.jsx)(ee, {
                          children:
                            '人们因为不同的原因偏好 Web 应用或原生应用。React 让你使用相同的技能构建 Web 应用程序和原生应用程序。它依赖于每个平台独特的优势，使你的界面就像原生一样。',
                        }),
                      ],
                    }),
                    (0, a.jsxs)('div', {
                      className:
                        'max-w-7xl mx-auto flex flex-col lg:flex-row mt-16 mb-20 lg:mb-28 px-5 gap-20 lg:gap-5',
                      children: [
                        (0, a.jsxs)('div', {
                          className: 'relative lg:w-6/12 flex',
                          children: [
                            (0, a.jsx)('div', {
                              className:
                                'absolute -bottom-8 lg:-bottom-10 z-10 w-full',
                              children: (0, a.jsx)(eI, {}),
                            }),
                            (0, a.jsx)(eN, {
                              hasRefresh: !1,
                              domain: 'example.com',
                              children: (0, a.jsxs)('div', {
                                className: 'relative overflow-hidden',
                                children: [
                                  (0, a.jsx)('div', {
                                    className:
                                      'absolute inset-0 bg-gradient-right',
                                  }),
                                  (0, a.jsx)('div', {
                                    className: 'bg-wash relative h-14 w-full',
                                  }),
                                  (0, a.jsxs)('div', {
                                    className:
                                      'relative flex items-start justify-center flex-col flex-1 pb-16 pt-5 gap-3 px-5 lg:px-10 lg:pt-8',
                                    children: [
                                      (0, a.jsx)('h4', {
                                        className:
                                          'leading-tight text-primary font-semibold text-3xl lg:text-4xl',
                                        children: '不忘初心',
                                      }),
                                      (0, a.jsx)('p', {
                                        className:
                                          'lg:text-xl leading-normal text-secondary',
                                        children:
                                          '人们期望网页加载速度更快。在服务器上，React 可以让你在获取数据的同时开始流式传输 HTML，在任何 JavaScript 代码加载之前逐步填充剩余内容。在客户端，即使是在渲染过程中，React 也会使用标准的 Web API 使 UI 快速响应。',
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        (0, a.jsxs)('div', {
                          className: 'relative lg:w-6/12 flex',
                          children: [
                            (0, a.jsx)('div', {
                              className:
                                'absolute -bottom-8 lg:-bottom-10 z-10 w-full',
                              children: (0, a.jsx)(eA, {}),
                            }),
                            (0, a.jsx)('figure', {
                              className: 'mx-auto max-w-3xl h-auto',
                              children: (0, a.jsx)('div', {
                                className:
                                  'p-2.5 bg-gray-95 dark:bg-black rounded-2xl shadow-nav dark:shadow-nav-dark',
                                children: (0, a.jsxs)('div', {
                                  className:
                                    'bg-gradient-right dark:bg-gradient-right-dark px-3 sm:px-3 pb-12 lg:pb-20 rounded-lg overflow-hidden',
                                  children: [
                                    (0, a.jsxs)('div', {
                                      className:
                                        'select-none w-full h-14 flex flex-row items-start pt-3 -mb-2.5 justify-between text-tertiary dark:text-tertiary-dark',
                                      children: [
                                        (0, a.jsx)('span', {
                                          className:
                                            'uppercase tracking-wide leading-none font-bold text-sm text-tertiary dark:text-tertiary-dark',
                                          children: (0, a.jsx)(ea, {}),
                                        }),
                                        (0, a.jsxs)('div', {
                                          className: 'gap-2 flex -mt-0.5',
                                          children: [
                                            (0, a.jsx)('svg', {
                                              width: '16',
                                              height: '20',
                                              viewBox: '0 0 72 72',
                                              fill: 'none',
                                              xmlns:
                                                'http://www.w3.org/2000/svg',
                                              children: (0, a.jsx)('path', {
                                                fillRule: 'evenodd',
                                                clipRule: 'evenodd',
                                                d: 'M34.852 6.22836C35.973 5.76401 37.2634 6.02068 38.1214 6.87868L53.1214 21.8787C53.7485 22.5058 54.066 23.3782 53.9886 24.2617C53.9113 25.1451 53.447 25.9491 52.7205 26.4577L39.0886 36.0003L52.7204 45.5423C53.447 46.0508 53.9113 46.8548 53.9886 47.7383C54.066 48.6218 53.7485 49.4942 53.1214 50.1213L38.1214 65.1213C37.2634 65.9793 35.973 66.236 34.852 65.7716C33.731 65.3073 33.0001 64.2134 33.0001 63V40.2624L22.7205 47.4583C21.3632 48.4085 19.4926 48.0784 18.5424 46.721C17.5922 45.3637 17.9223 43.4931 19.2797 42.543L28.6258 36.0004L19.2797 29.4583C17.9224 28.5082 17.5922 26.6376 18.5424 25.2803C19.4925 23.9229 21.3631 23.5928 22.7204 24.5429L33.0001 31.7384V9C33.0001 7.78661 33.731 6.6927 34.852 6.22836ZM39.0001 43.2622L46.3503 48.4072L39.0001 55.7574V43.2622ZM39.0001 28.7382V16.2426L46.3503 23.5929L39.0001 28.7382Z',
                                                fill: 'currentColor',
                                              }),
                                            }),
                                            (0, a.jsxs)('svg', {
                                              width: '16',
                                              height: '20',
                                              viewBox: '0 0 72 72',
                                              fill: 'none',
                                              xmlns:
                                                'http://www.w3.org/2000/svg',
                                              children: [
                                                (0, a.jsx)('path', {
                                                  d: 'M9 27C9.82864 27 10.5788 26.664 11.1217 26.1209C11.2116 26.0355 11.3037 25.9526 11.397 25.871C11.625 25.6714 11.9885 25.3677 12.4871 24.9938C13.4847 24.2455 15.0197 23.219 17.0912 22.1833C21.2243 20.1167 27.5179 18 35.9996 18C44.4813 18 50.7748 20.1167 54.9079 22.1833C56.9794 23.219 58.5144 24.2455 59.5121 24.9938C59.6056 25.0639 60.8802 26.1233 60.8802 26.1233C61.423 26.6652 62.1724 27 63 27C64.6569 27 66 25.6569 66 24C66 22.8871 65.3475 22.0506 64.5532 21.3556C64.2188 21.0629 63.7385 20.6635 63.1121 20.1938C61.8597 19.2545 60.0197 18.031 57.5912 16.8167C52.7243 14.3833 45.5179 12 35.9996 12C26.4813 12 19.2748 14.3833 14.4079 16.8167C11.9794 18.031 10.1394 19.2545 8.88706 20.1938C8.26066 20.6635 7.78035 21.0629 7.44593 21.3556C7.2605 21.5178 7.07794 21.6834 6.9016 21.8555C6.33334 22.417 6 23.1999 6 24C6 25.6569 7.34315 27 9 27Z',
                                                  fill: 'currentColor',
                                                }),
                                                (0, a.jsx)('path', {
                                                  fillRule: 'evenodd',
                                                  clipRule: 'evenodd',
                                                  d: 'M26.1116 48.631C24.2868 50.4378 21 49.0661 21 46.5C21 45.6707 21.3365 44.92 21.8804 44.3769C21.9856 44.2702 22.0973 44.1695 22.209 44.0697C22.3915 43.9065 22.6466 43.6885 22.9713 43.4344C23.6195 42.9271 24.5536 42.2694 25.7509 41.6163C28.1445 40.3107 31.6365 39 35.9999 39C40.3634 39 43.8554 40.3107 46.249 41.6163C47.4463 42.2694 48.3804 42.9271 49.0286 43.4344C50.0234 44.213 51 45.134 51 46.5C51 48.1569 49.6569 49.5 48 49.5C47.1724 49.5 46.4231 49.1649 45.8803 48.623C45.7028 48.4617 45.5197 48.3073 45.3307 48.1594C44.9007 47.8229 44.2411 47.3556 43.3759 46.8837C41.6445 45.9393 39.1365 45 35.9999 45C32.8634 45 30.3554 45.9393 28.624 46.8837C27.7588 47.3556 27.0992 47.8229 26.6692 48.1594C26.3479 48.4109 26.155 48.5899 26.1116 48.631Z',
                                                  fill: 'currentColor',
                                                }),
                                                (0, a.jsx)('path', {
                                                  d: 'M36 63C39.3137 63 42 60.3137 42 57C42 53.6863 39.3137 51 36 51C32.6863 51 30 53.6863 30 57C30 60.3137 32.6863 63 36 63Z',
                                                  fill: 'currentColor',
                                                }),
                                                (0, a.jsx)('path', {
                                                  d: 'M15 39C13.3431 39 12 37.6569 12 36C12 34.3892 13.3933 33.3427 14.5534 32.4503C15.5841 31.6574 17.0871 30.6231 19.04 29.5952C22.9506 27.537 28.6773 25.5 35.9997 25.5C43.3222 25.5 49.0488 27.537 52.9595 29.5952C54.9123 30.6231 56.4154 31.6574 57.4461 32.4503C57.9619 32.847 58.361 33.1846 58.6407 33.4324C59.4024 34.1073 60 34.9345 60 36C60 37.6569 58.6569 39 57 39C56.1737 39 55.4255 38.6662 54.8829 38.1258C54.5371 37.7978 54.1653 37.4964 53.7878 37.206C52.9903 36.5926 51.7746 35.7519 50.165 34.9048C46.9506 33.213 42.1773 31.5 35.9997 31.5C29.8222 31.5 25.0488 33.213 21.8345 34.9048C20.2248 35.7519 19.0091 36.5926 18.2117 37.206C17.6144 37.6654 17.2549 37.9951 17.1459 38.098C16.5581 38.6591 15.8222 39 15 39Z',
                                                  fill: 'currentColor',
                                                }),
                                              ],
                                            }),
                                            (0, a.jsxs)('svg', {
                                              width: '20',
                                              height: '20',
                                              viewBox: '0 0 72 72',
                                              fill: 'none',
                                              xmlns:
                                                'http://www.w3.org/2000/svg',
                                              children: [
                                                (0, a.jsx)('path', {
                                                  d: 'M12.9533 26.0038C13.224 24.7829 14.3285 24 15.579 24H50.421C51.6715 24 52.776 24.7829 53.0467 26.0038C53.4754 27.937 54 31.2691 54 36C54 40.7309 53.4754 44.063 53.0467 45.9962C52.776 47.2171 51.6715 48 50.421 48H15.579C14.3285 48 13.224 47.2171 12.9533 45.9962C12.5246 44.063 12 40.7309 12 36C12 31.2691 12.5246 27.937 12.9533 26.0038Z',
                                                  fill: 'currentColor',
                                                }),
                                                (0, a.jsx)('path', {
                                                  fillRule: 'evenodd',
                                                  clipRule: 'evenodd',
                                                  d: 'M12.7887 15C8.77039 15 5.23956 17.668 4.48986 21.6158C3.74326 25.5473 3 30.7737 3 36C3 41.2263 3.74326 46.4527 4.48986 50.3842C5.23956 54.332 8.77039 57 12.7887 57H53.2113C57.2296 57 60.7604 54.332 61.5101 50.3842C61.8155 48.7765 62.1202 46.9522 62.3738 45H63.7918C64.5731 45 65.3283 44.8443 66 44.5491C67.2821 43.9857 68.2596 42.9142 68.5322 41.448C68.7927 40.0466 69 38.2306 69 36C69 33.7694 68.7927 31.9534 68.5322 30.552C68.2596 29.0858 67.2821 28.0143 66 27.4509C65.3283 27.1557 64.5731 27 63.7918 27H62.3738C62.1202 25.0478 61.8155 23.2235 61.5101 21.6158C60.7604 17.668 57.2296 15 53.2113 15H12.7887ZM53.2113 21H12.7887C11.3764 21 10.5466 21.8816 10.3845 22.7352C9.67563 26.4681 9 31.29 9 36C9 40.71 9.67563 45.5319 10.3845 49.2648C10.5466 50.1184 11.3764 51 12.7887 51H53.2113C54.6236 51 55.4534 50.1184 55.6155 49.2648C56.3244 45.5319 57 40.71 57 36C57 31.29 56.3244 26.4681 55.6155 22.7352C55.4534 21.8816 54.6236 21 53.2113 21Z',
                                                  fill: 'currentColor',
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)('div', {
                                      className:
                                        'flex flex-col items-start justify-center pt-0 gap-3 px-2.5 lg:pt-8 lg:px-8',
                                      children: [
                                        (0, a.jsx)('h4', {
                                          className:
                                            'leading-tight text-primary dark:text-primary-dark font-semibold text-3xl lg:text-4xl',
                                          children: '开发真正的原生应用',
                                        }),
                                        (0, a.jsxs)('p', {
                                          className:
                                            'h-full lg:text-xl text-secondary dark:text-secondary-dark leading-normal',
                                          children: [
                                            '人们希望原生应用程序都有和自己使用的平台相一致的体验。',
                                            (0, a.jsx)(q.Z, {
                                              href: 'https://reactnative.dev',
                                              children: 'React Native',
                                            }),
                                            ' ',
                                            '和',
                                            ' ',
                                            (0, a.jsx)(q.Z, {
                                              href: 'https://github.com/expo/expo',
                                              children: 'Expo',
                                            }),
                                            ' ',
                                            '让你可以使用 React 构建 Android、iOS 等应用程序。它们的样式和体验都和原生应用程序一样，因为它们的用户界面是真正的原生用户界面。这不是一个 Web 视图——你的 React 组件由平台提供的真实 Android 或 iOS 视图来渲染。',
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsxs)('div', {
                      className:
                        'px-5 lg:px-0 max-w-4xl mx-auto lg:text-center text-secondary dark:text-secondary-dark',
                      children: [
                        (0, a.jsx)(ee, {
                          children:
                            '使用 React，你可以成为 Web 和原生应用的开发人员。 你的团队可以在不牺牲用户体验的情况下发布到各个平台。你的组织可以忽略平台差异，并拥有端到端的全部功能。',
                        }),
                        (0, a.jsx)('div', {
                          className:
                            'flex justify-start w-full lg:justify-center',
                          children: (0, a.jsx)(ei, {
                            color: 'gray',
                            icon: 'native',
                            href: 'https://reactnative.dev/',
                            children: '为原生平台构建',
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, a.jsx)(Q, {
                background: 'right-card',
                children: (0, a.jsx)('div', {
                  className: 'max-w-7xl mx-auto flex flex-col lg:flex-row px-5',
                  children: (0, a.jsxs)('div', {
                    className:
                      'max-w-3xl lg:max-w-7xl gap-5 flex flex-col lg:flex-row lg:px-5',
                    children: [
                      (0, a.jsxs)('div', {
                        className:
                          'w-full lg:w-6/12 max-w-3xl flex flex-col items-start justify-start lg:ps-5 lg:pe-10',
                        children: [
                          (0, a.jsx)($, {children: '充分测试，安心升级'}),
                          (0, a.jsx)(ee, {
                            children:
                              'React 非常谨慎地处理每个改动。每个 React 提交都在拥有超过十亿用户的关键业务页面上进行测试。Meta 的 10 万个 React 组件帮助验证每种迁移策略。',
                          }),
                          (0, a.jsxs)('div', {
                            className: 'order-last pt-5',
                            children: [
                              (0, a.jsx)(ee, {
                                children:
                                  'React 团队始终在研究如何改进 React。一些研究需要数年才能得到回报。React 对将研究想法转化为生产具有高标准要求，只有经过证明的方法才能成为 React 的一部分。',
                              }),
                              (0, a.jsx)('div', {
                                className:
                                  'hidden lg:flex justify-start w-full',
                                children: (0, a.jsx)(ei, {
                                  color: 'gray',
                                  icon: 'news',
                                  href: '/blog',
                                  children: '阅读更多 React 新闻',
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsxs)('div', {
                        className: 'w-full lg:w-6/12',
                        children: [
                          (0, a.jsxs)('p', {
                            className:
                              'uppercase tracking-wide font-bold text-sm text-tertiary dark:text-tertiary-dark flex flex-row gap-2 items-center mt-5 lg:-mt-2 w-full',
                            children: [(0, a.jsx)(G.g, {}), '最新 React 新闻'],
                          }),
                          (0, a.jsxs)('div', {
                            className:
                              'flex-col sm:flex-row flex-wrap flex gap-5 text-start my-5',
                            children: [
                              (0, a.jsx)('div', {
                                className: 'flex-1 min-w-[40%] text-start',
                                children: (0, a.jsx)(I.Z, {...el[0]}),
                              }),
                              (0, a.jsx)('div', {
                                className: 'flex-1 min-w-[40%] text-start',
                                children: (0, a.jsx)(I.Z, {...el[1]}),
                              }),
                              (0, a.jsx)('div', {
                                className: 'flex-1 min-w-[40%] text-start',
                                children: (0, a.jsx)(I.Z, {...el[2]}),
                              }),
                              (0, a.jsx)('div', {
                                className: 'hidden sm:flex-1 sm:inline',
                                children: (0, a.jsx)(I.Z, {...el[3]}),
                              }),
                            ],
                          }),
                          (0, a.jsx)('div', {
                            className: 'flex lg:hidden justify-start w-full',
                            children: (0, a.jsx)(ei, {
                              color: 'gray',
                              icon: 'news',
                              href: '/blog',
                              children: '阅读更多 React 新闻',
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
              (0, a.jsxs)(Q, {
                background: 'left-card',
                children: [
                  (0, a.jsxs)('div', {
                    className: 'w-full',
                    children: [
                      (0, a.jsx)('div', {
                        className: 'mx-auto flex flex-col max-w-4xl',
                        children: (0, a.jsxs)(et, {
                          children: [
                            (0, a.jsx)($, {children: '加入数百万人的社区'}),
                            (0, a.jsx)(ee, {
                              children:
                                '你并不孤单。每个月有来自世界各地的两百万开发者访问 React 文档。React 可以让人们达成共识。',
                            }),
                          ],
                        }),
                      }),
                      (0, a.jsx)(ex, {}),
                      (0, a.jsx)('div', {
                        className: 'mx-auto flex flex-col max-w-4xl',
                        children: (0, a.jsx)(et, {
                          children: (0, a.jsx)(ee, {
                            children:
                              '这就是为什么 React 不仅仅是一个库、一种架构，甚至不只是一个生态系统。React 是一个社区。在这里你可以寻求帮助，发现机会并结交新朋友。你将会遇到开发者和设计师、初学者和专家、研究人员和艺术家、教师和学生等各行各业的人士。我们的背景可能非常不同，但 React 让我们所有人都能够共同创建用户界面。',
                          }),
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsxs)('div', {
                    className:
                      'mt-20 px-5 lg:px-0 mb-6 max-w-4xl text-center text-opacity-80',
                    children: [
                      (0, a.jsx)('div', {
                        className: 'uwu-visible flex justify-center',
                        children: (0, a.jsx)('img', {
                          alt: 'logo by @sawaratsuki1004',
                          title: 'logo by @sawaratsuki1004',
                          className: 'uwu-visible mb-10 lg:mb-8 h-24 lg:h-32',
                          src: '/images/uwu.png',
                        }),
                      }),
                      (0, a.jsx)(O, {
                        className:
                          'uwu-hidden text-brand dark:text-brand-dark w-24 lg:w-28 mb-10 lg:mb-8 mt-12 h-auto mx-auto self-start',
                      }),
                      (0, a.jsxs)($, {
                        children: [
                          '欢迎来到 ',
                          (0, a.jsx)('br', {className: 'hidden lg:inline'}),
                          'React 社区',
                        ],
                      }),
                      (0, a.jsx)(B.Z, {
                        href: '/learn',
                        type: 'primary',
                        size: 'lg',
                        label: 'Take the Tutorial',
                        children: '开始 React 之旅',
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function ei(e) {
        let t,
          r,
          {children: s, icon: l, href: n} = e;
        return (
          n.startsWith('https://')
            ? (t = U.d)
            : ((t = g()), (r = {legacyBehavior: !1})),
          (0, a.jsxs)(t, {
            ...r,
            href: n,
            className:
              'focus:outline-none focus-visible:outline focus-visible:outline-link focus:outline-offset-2 focus-visible:dark:focus:outline-link-dark group cursor-pointer w-auto justify-center inline-flex font-bold items-center mt-10 outline-none hover:bg-gray-40/5 active:bg-gray-40/10 hover:dark:bg-gray-60/5 active:dark:bg-gray-60/10 leading-tight hover:bg-opacity-80 text-lg py-2.5 rounded-full px-4 sm:px-6 ease-in-out shadow-secondary-button-stroke dark:shadow-secondary-button-stroke-dark text-primary dark:text-primary-dark',
            children: [
              'native' === l &&
                (0, a.jsxs)('svg', {
                  className: 'me-2.5 text-primary dark:text-primary-dark',
                  fill: 'none',
                  width: '24',
                  height: '24',
                  viewBox: '0 0 72 72',
                  'aria-hidden': 'true',
                  children: [
                    (0, a.jsxs)('g', {
                      clipPath: 'url(#clip0_8_10998)',
                      children: [
                        (0, a.jsx)('path', {
                          d: 'M54.0001 15H18.0001C16.3432 15 15.0001 16.3431 15.0001 18V42H33V48H12.9567L9.10021 57L24.0006 57C24.0006 55.3431 25.3437 54 27.0006 54H33V57.473C33 59.3786 33.3699 61.2582 34.0652 63H9.10021C4.79287 63 1.88869 58.596 3.5852 54.6368L9.0001 42V18C9.0001 13.0294 13.0295 9 18.0001 9H54.0001C58.9707 9 63.0001 13.0294 63.0001 18V25.4411C62.0602 25.0753 61.0589 24.8052 60.0021 24.6458C59.0567 24.5032 58.0429 24.3681 57.0001 24.2587V18C57.0001 16.3431 55.6569 15 54.0001 15Z',
                          fill: 'currentColor',
                        }),
                        (0, a.jsx)('path', {
                          d: 'M48 42C48 40.3431 49.3431 39 51 39H54C55.6569 39 57 40.3431 57 42C57 43.6569 55.6569 45 54 45H51C49.3431 45 48 43.6569 48 42Z',
                          fill: 'currentColor',
                        }),
                        (0, a.jsx)('path', {
                          fillRule: 'evenodd',
                          clipRule: 'evenodd',
                          d: 'M45.8929 30.5787C41.8093 31.1947 39 34.8257 39 38.9556V57.473C39 61.6028 41.8093 65.2339 45.8929 65.8499C48.0416 66.174 50.3981 66.4286 52.5 66.4286C54.6019 66.4286 56.9584 66.174 59.1071 65.8499C63.1907 65.2339 66 61.6028 66 57.473V38.9556C66 34.8258 63.1907 31.1947 59.1071 30.5787C56.9584 30.2545 54.6019 30 52.5 30C50.3981 30 48.0416 30.2545 45.8929 30.5787ZM60 57.473V38.9556C60 37.4615 59.0438 36.637 58.2121 36.5116C56.2014 36.2082 54.1763 36 52.5 36C50.8237 36 48.7986 36.2082 46.7879 36.5116C45.9562 36.637 45 37.4615 45 38.9556V57.473C45 58.9671 45.9562 59.7916 46.7879 59.917C48.7986 60.2203 50.8237 60.4286 52.5 60.4286C54.1763 60.4286 56.2014 60.2203 58.2121 59.917C59.0438 59.7916 60 58.9671 60 57.473Z',
                          fill: 'currentColor',
                        }),
                      ],
                    }),
                    (0, a.jsx)('defs', {
                      children: (0, a.jsx)('clipPath', {
                        id: 'clip0_8_10998',
                        children: (0, a.jsx)('rect', {
                          width: '72',
                          height: '72',
                          fill: 'white',
                        }),
                      }),
                    }),
                  ],
                }),
              'framework' === l &&
                (0, a.jsxs)('svg', {
                  className: 'me-2.5 text-primary dark:text-primary-dark',
                  fill: 'none',
                  width: '24',
                  height: '24',
                  viewBox: '0 0 72 72',
                  'aria-hidden': 'true',
                  children: [
                    (0, a.jsx)('g', {
                      clipPath: 'url(#clip0_10_21081)',
                      children: (0, a.jsx)('path', {
                        fillRule: 'evenodd',
                        clipRule: 'evenodd',
                        d: 'M44.9136 29.0343C46.8321 26.9072 48 24.09 48 21C48 14.3726 42.6274 9 36 9C29.3726 9 24 14.3726 24 21C24 24.0904 25.1682 26.9079 27.0871 29.0351L21.0026 39.3787C20.0429 39.1315 19.0368 39 18 39C11.3726 39 6 44.3726 6 51C6 57.6274 11.3726 63 18 63C23.5915 63 28.2898 59.1757 29.6219 54H42.3781C43.7102 59.1757 48.4085 63 54 63C60.6274 63 66 57.6274 66 51C66 44.3726 60.6274 39 54 39C52.9614 39 51.9537 39.1319 50.9926 39.38L44.9136 29.0343ZM42 21C42 24.3137 39.3137 27 36 27C32.6863 27 30 24.3137 30 21C30 17.6863 32.6863 15 36 15C39.3137 15 42 17.6863 42 21ZM39.9033 32.3509C38.6796 32.7716 37.3665 33 36 33C34.6338 33 33.321 32.7717 32.0975 32.3512L26.2523 42.288C27.8635 43.8146 29.0514 45.7834 29.6219 48H42.3781C42.9482 45.785 44.1348 43.8175 45.7441 42.2913L39.9033 32.3509ZM54 57C50.6863 57 48 54.3137 48 51C48 47.6863 50.6863 45 54 45C57.3137 45 60 47.6863 60 51C60 54.3137 57.3137 57 54 57ZM24 51C24 47.6863 21.3137 45 18 45C14.6863 45 12 47.6863 12 51C12 54.3137 14.6863 57 18 57C21.3137 57 24 54.3137 24 51Z',
                        fill: 'currentColor',
                      }),
                    }),
                    (0, a.jsx)('defs', {
                      children: (0, a.jsx)('clipPath', {
                        id: 'clip0_10_21081',
                        children: (0, a.jsx)('rect', {
                          width: '72',
                          height: '72',
                          fill: 'white',
                        }),
                      }),
                    }),
                  ],
                }),
              'code' === l &&
                (0, a.jsxs)('svg', {
                  className: 'me-2.5 text-primary dark:text-primary-dark',
                  fill: 'none',
                  width: '24',
                  height: '24',
                  viewBox: '0 0 72 72',
                  'aria-hidden': 'true',
                  children: [
                    (0, a.jsxs)('g', {
                      clipPath: 'url(#clip0_8_9064)',
                      children: [
                        (0, a.jsx)('path', {
                          d: 'M44.7854 22.1142C45.4008 20.5759 44.6525 18.83 43.1142 18.2146C41.5758 17.5993 39.8299 18.3475 39.2146 19.8859L27.2146 49.8859C26.5992 51.4242 27.3475 53.1702 28.8858 53.7855C30.4242 54.4008 32.1701 53.6526 32.7854 52.1142L44.7854 22.1142Z',
                          fill: 'currentColor',
                        }),
                        (0, a.jsx)('path', {
                          d: 'M9.87868 38.1214C8.70711 36.9498 8.70711 35.0503 9.87868 33.8787L18.8787 24.8787C20.0503 23.7072 21.9497 23.7072 23.1213 24.8787C24.2929 26.0503 24.2929 27.9498 23.1213 29.1214L16.2426 36.0001L23.1213 42.8787C24.2929 44.0503 24.2929 45.9498 23.1213 47.1214C21.9497 48.293 20.0503 48.293 18.8787 47.1214L9.87868 38.1214Z',
                          fill: 'currentColor',
                        }),
                        (0, a.jsx)('path', {
                          d: 'M62.1213 33.8787L53.1213 24.8787C51.9497 23.7072 50.0503 23.7072 48.8787 24.8787C47.7071 26.0503 47.7071 27.9498 48.8787 29.1214L55.7574 36.0001L48.8787 42.8787C47.7071 44.0503 47.7071 45.9498 48.8787 47.1214C50.0503 48.293 51.9497 48.293 53.1213 47.1214L62.1213 38.1214C63.2929 36.9498 63.2929 35.0503 62.1213 33.8787Z',
                          fill: 'currentColor',
                        }),
                      ],
                    }),
                    (0, a.jsx)('defs', {
                      children: (0, a.jsx)('clipPath', {
                        id: 'clip0_8_9064',
                        children: (0, a.jsx)('rect', {
                          width: '72',
                          height: '72',
                          fill: 'white',
                        }),
                      }),
                    }),
                  ],
                }),
              'news' === l &&
                (0, a.jsx)('svg', {
                  className: 'me-2.5 text-primary dark:text-primary-dark',
                  fill: 'none',
                  width: '24',
                  height: '24',
                  viewBox: '0 0 72 72',
                  'aria-hidden': 'true',
                  children: (0, a.jsx)('path', {
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    d: 'M12.7101 56.3758C13.0724 56.7251 13.6324 57 14.3887 57H57.6113C58.3676 57 58.9276 56.7251 59.2899 56.3758C59.6438 56.0346 59.8987 55.5407 59.9086 54.864C59.9354 53.022 59.9591 50.7633 59.9756 48H12.0244C12.0409 50.7633 12.0645 53.022 12.0914 54.864C12.1013 55.5407 12.3562 56.0346 12.7101 56.3758ZM12.0024 42H59.9976C59.9992 41.0437 60 40.0444 60 39C60 29.5762 59.9327 22.5857 59.8589 17.7547C59.8359 16.2516 58.6168 15 56.9938 15L15.0062 15C13.3832 15 12.1641 16.2516 12.1411 17.7547C12.0673 22.5857 12 29.5762 12 39C12 40.0444 12.0008 41.0437 12.0024 42ZM65.8582 17.6631C65.7843 12.8227 61.8348 9 56.9938 9H15.0062C10.1652 9 6.21572 12.8227 6.1418 17.6631C6.06753 22.5266 6 29.5477 6 39C6 46.2639 6.03988 51.3741 6.09205 54.9515C6.15893 59.537 9.80278 63 14.3887 63H57.6113C62.1972 63 65.8411 59.537 65.9079 54.9515C65.9601 51.3741 66 46.2639 66 39C66 29.5477 65.9325 22.5266 65.8582 17.6631ZM39 21C37.3431 21 36 22.3431 36 24C36 25.6569 37.3431 27 39 27H51C52.6569 27 54 25.6569 54 24C54 22.3431 52.6569 21 51 21H39ZM36 33C36 31.3431 37.3431 30 39 30H51C52.6569 30 54 31.3431 54 33C54 34.6569 52.6569 36 51 36H39C37.3431 36 36 34.6569 36 33ZM24 33C27.3137 33 30 30.3137 30 27C30 23.6863 27.3137 21 24 21C20.6863 21 18 23.6863 18 27C18 30.3137 20.6863 33 24 33Z',
                    fill: 'currentColor',
                  }),
                }),
              s,
              (0, a.jsxs)('svg', {
                className: 'text-primary dark:text-primary-dark rtl:rotate-180',
                fill: 'none',
                width: '24',
                height: '24',
                viewBox: '0 0 72 72',
                'aria-hidden': 'true',
                children: [
                  (0, a.jsx)('path', {
                    className:
                      'transition-transform ease-in-out translate-x-[-8px] group-hover:translate-x-[8px]',
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    d: 'M40.0001 19.0245C41.0912 17.7776 42.9864 17.6513 44.2334 18.7423L58.9758 33.768C59.6268 34.3377 60.0002 35.1607 60.0002 36.0257C60.0002 36.8908 59.6268 37.7138 58.9758 38.2835L44.2335 53.3078C42.9865 54.3988 41.0913 54.2725 40.0002 53.0256C38.9092 51.7786 39.0355 49.8835 40.2824 48.7924L52.4445 36.0257L40.2823 23.2578C39.0354 22.1667 38.9091 20.2714 40.0001 19.0245Z',
                    fill: 'currentColor',
                  }),
                  (0, a.jsx)('path', {
                    className:
                      'opacity-0 ease-in-out transition-opacity group-hover:opacity-100',
                    d: 'M60 36.0273C60 37.6842 58.6569 39.0273 57 39.0273H15C13.3431 39.0273 12 37.6842 12 36.0273C12 34.3704 13.3431 33.0273 15 33.0273H57C58.6569 33.0273 60 34.3704 60 36.0273Z',
                    fill: 'currentColor',
                  }),
                ],
              }),
            ],
          })
        );
      }
      let eo = '/images/home/conf2021/cover.svg',
        ed = '/images/home/conf2019/cover.svg',
        ec = [
          {
            src: '/images/home/community/react_conf_fun.webp',
            alt: 'People singing karaoke at React Conf',
          },
          {
            src: '/images/home/community/react_india_sunil.webp',
            alt: 'Sunil Pai speaking at React India',
          },
          {
            src: '/images/home/community/react_conf_hallway.webp',
            alt: 'A hallway conversation between two people at React Conf',
          },
          {
            src: '/images/home/community/react_india_hallway.webp',
            alt: 'A hallway conversation at React India',
          },
          {
            src: '/images/home/community/react_conf_elizabet.webp',
            alt: 'Elizabet Oliveira speaking at React Conf',
          },
          {
            src: '/images/home/community/react_india_selfie.webp',
            alt: 'People taking a group selfie at React India',
          },
          {
            src: '/images/home/community/react_conf_nat.webp',
            alt: 'Nat Alison speaking at React Conf',
          },
          {
            src: '/images/home/community/react_india_team.webp',
            alt: 'Organizers greeting attendees at React India',
          },
        ];
      function ex() {
        let e = (0, s.useRef)(),
          [t, r] = (0, s.useState)(!1);
        (0, s.useEffect)(() => {
          let t = new IntersectionObserver(
            (e) => {
              e.forEach((e) => {
                r(e.isIntersecting);
              });
            },
            {root: null, rootMargin: ''.concat(window.innerHeight, 'px 0px')}
          );
          return t.observe(e.current), () => t.disconnect();
        }, []);
        let [l, n] = (0, s.useState)(!0);
        return (
          (0, s.useEffect)(() => {
            if (!l) return;
            let t = parseInt(2.5 * window.innerHeight),
              r = new IntersectionObserver(
                (e) => {
                  e.forEach((e) => {
                    e.isIntersecting && n(!1);
                  });
                },
                {root: null, rootMargin: ''.concat(t, 'px 0px')}
              );
            return r.observe(e.current), () => r.disconnect();
          }, [l]),
          (0, s.useEffect)(() => {
            let e = setTimeout(() => {
              n(!1);
            }, 2e4);
            return () => clearTimeout(e);
          }, []),
          (0, a.jsxs)('div', {
            ref: e,
            className:
              'relative flex overflow-x-hidden overflow-y-visible w-auto',
            children: [
              (0, a.jsx)('div', {
                className:
                  'w-full py-12 lg:py-20 whitespace-nowrap flex flex-row animate-marquee lg:animate-large-marquee',
                style: {animationPlayState: t ? 'running' : 'paused'},
                children: (0, a.jsx)(eh, {isLazy: l}),
              }),
              (0, a.jsx)('div', {
                'aria-hidden': 'true',
                className:
                  'w-full absolute top-0 py-12 lg:py-20 whitespace-nowrap flex flex-row animate-marquee2 lg:animate-large-marquee2',
                style: {animationPlayState: t ? 'running' : 'paused'},
                children: (0, a.jsx)(eh, {isLazy: l}),
              }),
            ],
          })
        );
      }
      let eh = (0, s.memo)(function (e) {
        let {isLazy: t} = e;
        return (0, a.jsx)(a.Fragment, {
          children: ec.map((e, r) => {
            let {src: s, alt: l} = e;
            return (0, a.jsx)(
              'div',
              {
                className: o()(
                  'group flex justify-center px-5 min-w-[50%] lg:min-w-[25%] rounded-2xl relative'
                ),
                children: (0, a.jsx)('div', {
                  className: o()(
                    'h-auto relative rounded-2xl overflow-hidden before:-skew-x-12 before:absolute before:inset-0 before:-translate-x-full group-hover:before:animate-[shimmer_1s_forwards] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent transition-all ease-in-out duration-300',
                    r % 2 == 0
                      ? 'rotate-2 group-hover:rotate-[-1deg] group-hover:scale-110 group-hover:shadow-lg lg:group-hover:shadow-2xl'
                      : 'group-hover:rotate-1 group-hover:scale-110 group-hover:shadow-lg lg:group-hover:shadow-2xl rotate-[-2deg]'
                  ),
                  children: (0, a.jsx)('img', {
                    loading: t ? 'lazy' : 'eager',
                    src: s,
                    alt: l,
                    className:
                      'aspect-[4/3] h-full w-full flex object-cover rounded-2xl bg-gray-10 dark:bg-gray-80',
                  }),
                }),
              },
              r
            );
          }),
        });
      });
      function em(e) {
        let {
            filename: t,
            left: r,
            right: l,
            activeArea: n,
            hoverTopOffset: i = 0,
          } = e,
          d = (0, s.useRef)(null);
        (0, s.useEffect)(() => {
          let e = d.current,
            t = !1,
            r = performance.now();
          function a() {
            t || ((t = !0), (e.style.pointerEvents = 'none')),
              (r = performance.now());
          }
          window.addEventListener('scroll', a);
          let s = setInterval(function () {
            t &&
              performance.now() - r > 150 &&
              ((t = !1), (e.style.pointerEvents = ''));
          }, 60);
          return () => {
            window.removeEventListener('scroll', a), clearInterval(s);
          };
        }, [d]);
        let [c, x] = (0, s.useState)([]);
        return (
          (0, s.useEffect)(() => {
            if (n) {
              let e = d.current.querySelectorAll(
                  '[data-hover="' + n.name + '"]'
                ),
                t = Array.from(e)
                  .map((e) => {
                    let t = d.current.getBoundingClientRect(),
                      r = e.getBoundingClientRect(),
                      a = Math.round(r.top - t.top) - 8,
                      s = Math.round(r.bottom - t.top) + 8,
                      l = Math.round(r.left - t.left) - 8,
                      n = Math.round(r.right - t.left) + 8;
                    return (a = Math.max(a, i)) >=
                      (s = Math.min(s, t.height - 12))
                      ? null
                      : {
                          width: n - l + 'px',
                          height: s - a + 'px',
                          transform: 'translate('
                            .concat(l, 'px, ')
                            .concat(a, 'px)'),
                        };
                  })
                  .filter((e) => null !== e);
              x(t);
            }
          }, [n, i]),
          (0, a.jsx)('div', {
            className: 'lg:ps-10 lg:pe-5 w-full',
            children: (0, a.jsx)('div', {
              className:
                'mt-12 mb-2 lg:my-16 max-w-7xl mx-auto flex flex-col w-full lg:rounded-2xl lg:bg-card lg:dark:bg-card-dark',
              children: (0, a.jsxs)('div', {
                className:
                  'flex-col gap-0 lg:gap-5 lg:rounded-2xl lg:bg-gray-10 lg:dark:bg-gray-70 shadow-inner-border dark:shadow-inner-border-dark lg:flex-row flex grow w-full mx-auto items-center bg-cover bg-center lg:bg-right ltr:lg:bg-[length:60%_100%] bg-no-repeat bg-meta-gradient dark:bg-meta-gradient-dark',
                children: [
                  (0, a.jsxs)('div', {
                    className:
                      'lg:-m-5 h-full shadow-nav dark:shadow-nav-dark lg:rounded-2xl bg-wash dark:bg-gray-95 w-full flex grow flex-col',
                    children: [
                      (0, a.jsx)('div', {
                        className:
                          'w-full bg-card dark:bg-wash-dark lg:rounded-t-2xl border-b border-black/5 dark:border-white/5',
                        children: (0, a.jsx)('h3', {
                          className:
                            'text-sm my-1 mx-5 text-tertiary dark:text-tertiary-dark select-none text-start',
                          children: t,
                        }),
                      }),
                      r,
                    ],
                  }),
                  (0, a.jsxs)('div', {
                    ref: d,
                    className:
                      'relative mt-0 lg:-my-20 w-full p-2.5 xs:p-5 lg:p-10 flex grow justify-center',
                    children: [
                      l,
                      (0, a.jsx)('div', {
                        className: o()(
                          'absolute z-10 inset-0 pointer-events-none transition-opacity transform-gpu',
                          n ? 'opacity-100' : 'opacity-0'
                        ),
                        children: c.map((e, t) =>
                          (0, a.jsx)(
                            'div',
                            {
                              className:
                                'top-0 start-0 bg-blue-30/5 border-2 border-link dark:border-link-dark absolute rounded-lg',
                              style: e,
                            },
                            t
                          )
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          })
        );
      }
      function eu(e) {
        let t;
        let [r, a] = (0, s.useState)(null),
          l = e.get(r);
        if (l) {
          var n;
          let e = null !== (n = l.lines) && void 0 !== n ? n : [r];
          t = '```js {' + e.map((e) => e + 1).join(',') + '}';
        }
        return [l, t, a];
      }
      let ep = new Map([
        [2, {name: 'Video'}],
        [3, {name: 'Thumbnail'}],
        [4, {name: 'a'}],
        [5, {name: 'h3'}],
        [6, {name: 'p'}],
        [7, {name: 'a'}],
        [8, {name: 'LikeButton'}],
        [9, {name: 'Video'}],
      ]);
      function ef() {
        let [e, t, r] = eu(ep);
        return (0, a.jsx)(em, {
          filename: 'Video.js',
          activeArea: e,
          left: (0, a.jsx)(J.Z, {
            onLineHover: r,
            isFromPackageImport: !1,
            noShadow: !0,
            noMargin: !0,
            children: (0, a.jsx)('div', {
              meta: t,
              children:
                'function Video({ video }) {\n  return (\n    <div>\n      <Thumbnail video={video} />\n      <a href={video.url}>\n        <h3>{video.title}</h3>\n        <p>{video.description}</p>\n      </a>\n      <LikeButton video={video} />\n    </div>\n  );\n}\n          ',
            }),
          }),
          right: (0, a.jsx)(ek, {
            height: '113px',
            children: (0, a.jsx)(eS, {
              video: {
                id: 'ex1-0',
                title: 'My video',
                description: 'Video description',
                image: 'blue',
                url: null,
              },
            }),
          }),
        });
      }
      let eg = new Map([
        [8, {name: 'VideoList'}],
        [9, {name: 'h2'}],
        [11, {name: 'Video', lines: [11]}],
        [13, {name: 'VideoList'}],
      ]);
      function ej() {
        let [e, t, r] = eu(eg);
        return (0, a.jsx)(em, {
          filename: 'VideoList.js',
          activeArea: e,
          left: (0, a.jsx)(J.Z, {
            onLineHover: r,
            isFromPackageImport: !1,
            noShadow: !0,
            noMargin: !0,
            children: (0, a.jsx)('div', {
              meta: t,
              children:
                "function VideoList({ videos, emptyHeading }) {\n  const count = videos.length;\n  let heading = emptyHeading;\n  if (count > 0) {\n    const noun = count > 1 ? 'Videos' : 'Video';\n    heading = count + ' ' + noun;\n  }\n  return (\n    <section>\n      <h2>{heading}</h2>\n      {videos.map(video =>\n        <Video key={video.id} video={video} />\n      )}\n    </section>\n  );\n}",
            }),
          }),
          right: (0, a.jsx)(ek, {
            height: '22rem',
            noShadow: !1,
            noPadding: !0,
            children: (0, a.jsx)('div', {
              className: 'm-4',
              children: (0, a.jsx)(eZ, {
                videos: [
                  {
                    id: 'ex2-0',
                    title: 'First video',
                    description: 'Video description',
                    image: 'blue',
                  },
                  {
                    id: 'ex2-1',
                    title: 'Second video',
                    description: 'Video description',
                    image: 'red',
                  },
                  {
                    id: 'ex2-2',
                    title: 'Third video',
                    description: 'Video description',
                    image: 'green',
                  },
                ],
              }),
            }),
          }),
        });
      }
      let ew = new Map([
        [6, {name: 'SearchableVideoList'}],
        [7, {name: 'SearchInput', lines: [7, 8, 9]}],
        [8, {name: 'SearchInput', lines: [7, 8, 9]}],
        [9, {name: 'SearchInput', lines: [7, 8, 9]}],
        [10, {name: 'VideoList', lines: [10, 11, 12]}],
        [11, {name: 'VideoList', lines: [10, 11, 12]}],
        [12, {name: 'VideoList', lines: [10, 11, 12]}],
        [13, {name: 'SearchableVideoList'}],
      ]);
      function eC() {
        let [e, t, r] = eu(ew);
        return (0, a.jsx)(em, {
          filename: 'SearchableVideoList.js',
          activeArea: e,
          hoverTopOffset: 60,
          left: (0, a.jsx)(J.Z, {
            onLineHover: r,
            isFromPackageImport: !1,
            noShadow: !0,
            noMargin: !0,
            children: (0, a.jsx)('div', {
              meta: t,
              children:
                "import { useState } from 'react';\n\nfunction SearchableVideoList({ videos }) {\n  const [searchText, setSearchText] = useState('');\n  const foundVideos = filterVideos(videos, searchText);\n  return (\n    <>\n      <SearchInput\n        value={searchText}\n        onChange={newText => setSearchText(newText)} />\n      <VideoList\n        videos={foundVideos}\n        emptyHeading={`No matches for “${searchText}”`} />\n    </>\n  );\n}",
            }),
          }),
          right: (0, a.jsx)(eN, {
            domain: 'example.com',
            path: 'videos.html',
            children: (0, a.jsxs)(ek, {
              noShadow: !1,
              noPadding: !0,
              contentMarginTop: '72px',
              height: '30rem',
              children: [
                (0, a.jsx)('h1', {
                  className: 'mx-4 mb-1 font-bold text-3xl text-primary',
                  children: 'React Videos',
                }),
                (0, a.jsx)('p', {
                  className: 'mx-4 mb-0 leading-snug text-secondary text-xl',
                  children: 'A brief history of React',
                }),
                (0, a.jsx)('div', {
                  className: 'px-4 pb-4',
                  children: (0, a.jsx)(eM, {
                    videos: [
                      {
                        id: 'vids-0',
                        title: 'React: The Documentary',
                        description: 'The origin story of React',
                        image: '/images/home/videos/documentary.webp',
                        url: 'https://www.youtube.com/watch?v=8pDqJVdNa44',
                      },
                      {
                        id: 'vids-1',
                        title: 'Rethinking Best Practices',
                        description: 'Pete Hunt (2013)',
                        image: '/images/home/videos/rethinking.jpg',
                        url: 'https://www.youtube.com/watch?v=x7cQ3mrcKaY',
                      },
                      {
                        id: 'vids-2',
                        title: 'Introducing React Native',
                        description: 'Tom Occhino (2015)',
                        image: '/images/home/videos/rn.jpg',
                        url: 'https://www.youtube.com/watch?v=KVZ-P-ZI6W4',
                      },
                      {
                        id: 'vids-3',
                        title: 'Introducing React Hooks',
                        description: 'Sophie Alpert and Dan Abramov (2018)',
                        image: '/images/home/videos/hooks.jpg',
                        url: 'https://www.youtube.com/watch?v=V-QO-KO90iQ',
                      },
                      {
                        id: 'vids-4',
                        title: 'Introducing Server Components',
                        description: 'Dan Abramov and Lauren Tan (2020)',
                        image: '/images/home/videos/rsc.jpg',
                        url: 'https://www.youtube.com/watch?v=TQQPAU21ZUw',
                      },
                    ],
                  }),
                }),
              ],
            }),
          }),
        });
      }
      let eb = new Map([
        [6, {name: 'ConferenceLayout'}],
        [7, {name: 'Suspense'}],
        [8, {name: 'SearchableVideoList'}],
        [9, {name: 'Suspense'}],
        [10, {name: 'ConferenceLayout'}],
        [17, {name: 'SearchableVideoList'}],
      ]);
      function ev() {
        let [e, t, r] = eu(eb),
          [l, n] = (0, s.useState)('react-conf-2021'),
          [i, o] = (0, s.useState)(!1);
        return (0, a.jsx)(em, {
          filename: 'confs/[slug].js',
          activeArea: e,
          hoverTopOffset: 60,
          left: (0, a.jsx)(J.Z, {
            onLineHover: r,
            isFromPackageImport: !1,
            noShadow: !0,
            noMargin: !0,
            children: (0, a.jsx)('div', {
              meta: t,
              children:
                "import { db } from './database.js';\nimport { Suspense } from 'react';\n\nasync function ConferencePage({ slug }) {\n  const conf = await db.Confs.find({ slug });\n  return (\n    <ConferenceLayout conf={conf}>\n      <Suspense fallback={<TalksLoading />}>\n        <Talks confId={conf.id} />\n      </Suspense>\n    </ConferenceLayout>\n  );\n}\n\nasync function Talks({ confId }) {\n  const talks = await db.Talks.findAll({ confId });\n  const videos = talks.map(talk => talk.video);\n  return <SearchableVideoList videos={videos} />;\n}",
            }),
          }),
          right: (0, a.jsx)(ey.Provider, {
            value: {
              slug: l,
              navigate: function (e) {
                n(e), o(!0);
              },
            },
            children: (0, a.jsx)(eN, {
              domain: 'example.com',
              path: 'confs/' + l,
              hasRefresh: !0,
              hasPulse: !0,
              children: (0, a.jsx)(ek, {
                noPadding: !0,
                noShadow: !0,
                contentMarginTop: '56px',
                height: '35rem',
                children: (0, a.jsx)(s.Suspense, {
                  fallback: null,
                  children: (0, a.jsxs)('div', {
                    style: {animation: i ? 'fadein 200ms' : null},
                    children: [
                      (0, a.jsx)('link', {
                        rel: 'preload',
                        href: ed,
                        as: 'image',
                      }),
                      (0, a.jsx)('link', {
                        rel: 'preload',
                        href: eo,
                        as: 'image',
                      }),
                      (0, a.jsx)(eL, {slug: l}),
                    ],
                  }),
                }),
              }),
            }),
          }),
        });
      }
      function ek(e) {
        let {
          children: t,
          noPadding: r,
          noShadow: s,
          height: l,
          contentMarginTop: n,
        } = e;
        return (0, a.jsx)('div', {
          className: o()(
            'max-w-3xl rounded-2xl mx-auto text-secondary leading-normal bg-white overflow-hidden w-full overflow-y-auto',
            s ? 'shadow-none' : 'shadow-nav dark:shadow-nav-dark'
          ),
          style: {height: l},
          children: (0, a.jsx)('div', {
            className: r ? 'p-0' : 'p-4',
            style: {contentVisibility: 'auto', marginTop: n},
            children: t,
          }),
        });
      }
      let ey = (0, s.createContext)(null);
      function eN(e) {
        let {children: t, hasPulse: r, hasRefresh: l, domain: n, path: i} = e,
          [d, c] = (0, s.useState)(0),
          x = r && 0 === d,
          [h, m] = (0, s.useState)(!1),
          u = (0, s.useRef)(null);
        return (
          (0, s.useEffect)(() => {
            if (!x) return;
            let e = new IntersectionObserver(
              (e) => {
                e.forEach((e) => {
                  m(e.isIntersecting);
                });
              },
              {root: null, rootMargin: '0px 0px'}
            );
            return e.observe(u.current), () => e.disconnect();
          }, [x]),
          (0, a.jsxs)('div', {
            className:
              'mx-auto max-w-3xl shadow-nav dark:shadow-nav-dark relative overflow-hidden w-full dark:border-opacity-10 rounded-2xl',
            children: [
              (0, a.jsxs)('div', {
                className:
                  'w-full h-14 rounded-t-2xl shadow-outer-border backdrop-filter overflow-hidden backdrop-blur-lg backdrop-saturate-200 bg-white bg-opacity-90 z-10 absolute top-0 px-3 gap-2 flex flex-row items-center',
                children: [
                  (0, a.jsxs)('div', {
                    className:
                      'select-none h-8 relative bg-gray-30/20 text-sm text-tertiary text-center rounded-full w-full flex-row flex space-between items-center',
                    children: [
                      l && (0, a.jsx)('div', {className: 'h-4 w-6'}),
                      (0, a.jsxs)('div', {
                        className:
                          'w-full leading-snug flex flex-row items-center justify-center',
                        children: [
                          (0, a.jsx)('svg', {
                            className: 'text-tertiary me-1 opacity-60',
                            width: '12',
                            height: '12',
                            viewBox: '0 0 44 44',
                            fill: 'none',
                            xmlns: 'http://www.w3.org/2000/svg',
                            children: (0, a.jsx)('path', {
                              fillRule: 'evenodd',
                              clipRule: 'evenodd',
                              d: 'M22 4C17.0294 4 13 8.0294 13 13V16H12.3103C10.5296 16 8.8601 16.8343 8.2855 18.5198C7.6489 20.387 7 23.4148 7 28C7 32.5852 7.6489 35.613 8.2855 37.4802C8.8601 39.1657 10.5296 40 12.3102 40H31.6897C33.4704 40 35.1399 39.1657 35.7145 37.4802C36.3511 35.613 37 32.5852 37 28C37 23.4148 36.3511 20.387 35.7145 18.5198C35.1399 16.8343 33.4704 16 31.6897 16H31V13C31 8.0294 26.9706 4 22 4ZM25 16V13C25 11.3431 23.6569 10 22 10C20.3431 10 19 11.3431 19 13V16H25Z',
                              fill: 'currentColor',
                            }),
                          }),
                          (0, a.jsxs)('span', {
                            className: 'text-gray-30',
                            children: [n, null != i && '/'],
                          }),
                          i,
                        ],
                      }),
                      l &&
                        (0, a.jsxs)('div', {
                          ref: u,
                          className: o()(
                            'relative rounded-full flex justify-center items-center ',
                            x && h && 'animation-pulse-button'
                          ),
                          children: [
                            x &&
                              h &&
                              (0, a.jsx)('div', {
                                className:
                                  'z-0 absolute shadow-[0_0_0_8px_rgba(0,0,0,0.5)] inset-0 rounded-full animation-pulse-shadow',
                              }),
                            (0, a.jsx)('button', {
                              'aria-label': 'Reload',
                              onClick: function () {
                                (eD = new Map()),
                                  (eO = new Map()),
                                  c((e) => e + 1);
                              },
                              className:
                                'z-10 flex items-center p-1.5 rounded-full cursor-pointer justify-center bg-[#ebecef] hover:bg-[#d3d7de]',
                              children: (0, a.jsx)(A.S, {
                                className: 'text-tertiary text-lg',
                              }),
                            }),
                          ],
                        }),
                    ],
                  }),
                  d > 0 &&
                    (0, a.jsx)(
                      'div',
                      {
                        className:
                          'z-10 loading h-0.5 bg-link transition-all duration-200 absolute bottom-0 start-0',
                        style: {
                          animation: 'progressbar '.concat(
                            eq + 100,
                            'ms ease-in-out'
                          ),
                        },
                      },
                      d
                    ),
                ],
              }),
              (0, a.jsx)(
                'div',
                {className: 'h-full flex flex-1', children: t},
                d
              ),
            ],
          })
        );
      }
      function eL(e) {
        let {slug: t} = e,
          r = eG(
            (function (e) {
              if (eD.has(e)) return eD.get(e);
              let t = new Promise((t) => {
                setTimeout(() => {
                  'react-conf-2021' === e
                    ? t({id: 0, cover: eo, name: 'React Conf 2021'})
                    : 'react-conf-2019' === e &&
                      t({id: 1, cover: ed, name: 'React Conf 2019'});
                }, 250);
              });
              return eD.set(e, t), t;
            })(t)
          );
        return (0, a.jsx)(eT, {
          conf: r,
          children: (0, a.jsx)('div', {
            'data-hover': 'Suspense',
            children: (0, a.jsx)(s.Suspense, {
              fallback: (0, a.jsx)(eR, {}),
              children: (0, a.jsx)(eH, {confId: r.id}),
            }),
          }),
        });
      }
      function eR() {
        return (0, a.jsx)('div', {
          className: 'flex flex-col items-center h-[25rem] overflow-hidden',
          children: (0, a.jsx)('div', {
            className: 'w-full',
            children: (0, a.jsx)('div', {
              className:
                'relative overflow-hidden before:-skew-x-12 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/50 before:to-transparent',
              children: (0, a.jsxs)('div', {
                className: 'space-y-4',
                children: [
                  (0, a.jsx)('div', {
                    className: 'pt-4 pb-1',
                    children: (0, a.jsx)('div', {
                      className: 'h-10 w-full rounded-full bg-gray-10',
                    }),
                  }),
                  (0, a.jsx)('div', {
                    className: 'pb-1',
                    children: (0, a.jsx)('div', {
                      className: 'h-5 w-20 rounded-lg bg-gray-10',
                    }),
                  }),
                  (0, a.jsxs)('div', {
                    className: 'flex flex-row items-center gap-3',
                    children: [
                      (0, a.jsx)('div', {
                        className:
                          'aspect-video w-32 xs:w-36 rounded-lg bg-gray-10',
                      }),
                      (0, a.jsxs)('div', {
                        className: 'flex flex-col gap-2',
                        children: [
                          (0, a.jsx)('div', {
                            className: 'h-3 w-40 rounded-lg bg-gray-10',
                          }),
                          (0, a.jsx)('div', {
                            className: 'h-3 w-32 rounded-lg bg-gray-10',
                          }),
                          (0, a.jsx)('div', {
                            className: 'h-3 w-24 rounded-lg bg-gray-10',
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)('div', {
                    className: 'flex flex-row items-center gap-3',
                    children: [
                      (0, a.jsx)('div', {
                        className:
                          'aspect-video w-32 xs:w-36 rounded-lg bg-gray-10',
                      }),
                      (0, a.jsxs)('div', {
                        className: 'flex flex-col gap-2',
                        children: [
                          (0, a.jsx)('div', {
                            className: 'h-3 w-40 rounded-lg bg-gray-10',
                          }),
                          (0, a.jsx)('div', {
                            className: 'h-3 w-32 rounded-lg bg-gray-10',
                          }),
                          (0, a.jsx)('div', {
                            className: 'h-3 w-24 rounded-lg bg-gray-10',
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)('div', {
                    className: 'flex flex-row items-center gap-3',
                    children: [
                      (0, a.jsx)('div', {
                        className:
                          'aspect-video w-32 xs:w-36 rounded-lg bg-gray-10',
                      }),
                      (0, a.jsxs)('div', {
                        className: 'flex flex-col gap-2',
                        children: [
                          (0, a.jsx)('div', {
                            className: 'h-3 w-40 rounded-lg bg-gray-10',
                          }),
                          (0, a.jsx)('div', {
                            className: 'h-3 w-32 rounded-lg bg-gray-10',
                          }),
                          (0, a.jsx)('div', {
                            className: 'h-3 w-24 rounded-lg bg-gray-10',
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)('div', {
                    className: 'flex flex-row items-center gap-3',
                    children: [
                      (0, a.jsx)('div', {
                        className:
                          'aspect-video w-32 xs:w-36 rounded-lg bg-gray-10',
                      }),
                      (0, a.jsxs)('div', {
                        className: 'flex flex-col gap-2',
                        children: [
                          (0, a.jsx)('div', {
                            className: 'h-3 w-40 rounded-lg bg-gray-10',
                          }),
                          (0, a.jsx)('div', {
                            className: 'h-3 w-32 rounded-lg bg-gray-10',
                          }),
                          (0, a.jsx)('div', {
                            className: 'h-3 w-24 rounded-lg bg-gray-10',
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        });
      }
      function eH(e) {
        let {confId: t} = e,
          r = eG(
            (function (e) {
              if (eO.has(e)) return eO.get(e);
              let t = new Promise((t) => {
                setTimeout(() => {
                  0 === e
                    ? t([
                        {
                          id: 'conf-2021-0',
                          title: 'React 18 Keynote',
                          description: 'The React Team',
                          url: 'https://www.youtube.com/watch?v=FZ0cG47msEk&list=PLNG_1j3cPCaZZ7etkzWA7JfdmKWT0pMsa&index=1',
                          image: {
                            speakers: [
                              '/images/home/conf2021/andrew.jpg',
                              '/images/home/conf2021/lauren.jpg',
                              '/images/home/conf2021/juan.jpg',
                              '/images/home/conf2021/rick.jpg',
                            ],
                          },
                        },
                        {
                          id: 'conf-2021-1',
                          title: 'React 18 for App Developers',
                          description: 'Shruti Kapoor',
                          url: 'https://www.youtube.com/watch?v=ytudH8je5ko&list=PLNG_1j3cPCaZZ7etkzWA7JfdmKWT0pMsa&index=2',
                          image: {
                            speakers: ['/images/home/conf2021/shruti.jpg'],
                          },
                        },
                        {
                          id: 'conf-2021-2',
                          title: 'Streaming Server Rendering with Suspense',
                          description: 'Shaundai Person',
                          url: 'https://www.youtube.com/watch?v=pj5N-Khihgc&list=PLNG_1j3cPCaZZ7etkzWA7JfdmKWT0pMsa&index=3',
                          image: {
                            speakers: ['/images/home/conf2021/shaundai.jpg'],
                          },
                        },
                        {
                          id: 'conf-2021-3',
                          title: 'The First React Working Group',
                          description: 'Aakansha Doshi',
                          url: 'https://www.youtube.com/watch?v=qn7gRClrC9U&list=PLNG_1j3cPCaZZ7etkzWA7JfdmKWT0pMsa&index=4',
                          image: {
                            speakers: ['/images/home/conf2021/aakansha.jpg'],
                          },
                        },
                        {
                          id: 'conf-2021-4',
                          title: 'React Developer Tooling',
                          description: 'Brian Vaughn',
                          url: 'https://www.youtube.com/watch?v=oxDfrke8rZg&list=PLNG_1j3cPCaZZ7etkzWA7JfdmKWT0pMsa&index=5',
                          image: {
                            speakers: ['/images/home/conf2021/brian.jpg'],
                          },
                        },
                        {
                          id: 'conf-2021-5',
                          title: 'React without memo',
                          description: 'Xuan Huang (黄玄)',
                          url: 'https://www.youtube.com/watch?v=lGEMwh32soc&list=PLNG_1j3cPCaZZ7etkzWA7JfdmKWT0pMsa&index=6',
                          image: {speakers: ['/images/home/conf2021/xuan.jpg']},
                        },
                        {
                          id: 'conf-2021-6',
                          title: 'React Docs Keynote',
                          description: 'Rachel Nabors',
                          url: 'https://www.youtube.com/watch?v=mneDaMYOKP8&list=PLNG_1j3cPCaZZ7etkzWA7JfdmKWT0pMsa&index=7',
                          image: {
                            speakers: ['/images/home/conf2021/rachel.jpg'],
                          },
                        },
                        {
                          id: 'conf-2021-7',
                          title: 'Things I Learnt from the New React Docs',
                          description: "Debbie O'Brien",
                          url: 'https://www.youtube.com/watch?v=-7odLW_hG7s&list=PLNG_1j3cPCaZZ7etkzWA7JfdmKWT0pMsa&index=8',
                          image: {
                            speakers: ['/images/home/conf2021/debbie.jpg'],
                          },
                        },
                        {
                          id: 'conf-2021-8',
                          title: 'Learning in the Browser',
                          description: 'Sarah Rainsberger',
                          url: 'https://www.youtube.com/watch?v=5X-WEQflCL0&list=PLNG_1j3cPCaZZ7etkzWA7JfdmKWT0pMsa&index=9',
                          image: {
                            speakers: ['/images/home/conf2021/sarah.jpg'],
                          },
                        },
                        {
                          id: 'conf-2021-9',
                          title: 'The ROI of Designing with React',
                          description: 'Linton Ye',
                          url: 'https://www.youtube.com/watch?v=7cPWmID5XAk&list=PLNG_1j3cPCaZZ7etkzWA7JfdmKWT0pMsa&index=10',
                          image: {
                            speakers: ['/images/home/conf2021/linton.jpg'],
                          },
                        },
                        {
                          id: 'conf-2021-10',
                          title: 'Interactive Playgrounds with React',
                          description: 'Delba de Oliveira',
                          url: 'https://www.youtube.com/watch?v=zL8cz2W0z34&list=PLNG_1j3cPCaZZ7etkzWA7JfdmKWT0pMsa&index=11',
                          image: {
                            speakers: ['/images/home/conf2021/delba.jpg'],
                          },
                        },
                        {
                          id: 'conf-2021-11',
                          title: 'Re-introducing Relay',
                          description: 'Robert Balicki',
                          url: 'https://www.youtube.com/watch?v=lhVGdErZuN4&list=PLNG_1j3cPCaZZ7etkzWA7JfdmKWT0pMsa&index=12',
                          image: {
                            speakers: ['/images/home/conf2021/robert.jpg'],
                          },
                        },
                        {
                          id: 'conf-2021-12',
                          title: 'React Native Desktop',
                          description: 'Eric Rozell and Steven Moyes',
                          url: 'https://www.youtube.com/watch?v=9L4FFrvwJwY&list=PLNG_1j3cPCaZZ7etkzWA7JfdmKWT0pMsa&index=13',
                          image: {
                            speakers: [
                              '/images/home/conf2021/eric.jpg',
                              '/images/home/conf2021/steven.jpg',
                            ],
                          },
                        },
                        {
                          id: 'conf-2021-13',
                          title: 'On-device Machine Learning for React Native',
                          description: 'Roman R\xe4dle',
                          url: 'https://www.youtube.com/watch?v=NLj73vrc2I8&list=PLNG_1j3cPCaZZ7etkzWA7JfdmKWT0pMsa&index=14',
                          image: {
                            speakers: ['/images/home/conf2021/roman.jpg'],
                          },
                        },
                        {
                          id: 'conf-2021-14',
                          title: 'React 18 for External Store Libraries',
                          description: 'Daishi Kato',
                          url: 'https://www.youtube.com/watch?v=oPfSC5bQPR8&list=PLNG_1j3cPCaZZ7etkzWA7JfdmKWT0pMsa&index=15',
                          image: {
                            speakers: ['/images/home/conf2021/daishi.jpg'],
                          },
                        },
                        {
                          id: 'conf-2021-15',
                          title: 'Building Accessible Components with React 18',
                          description: 'Diego Haz',
                          url: 'https://www.youtube.com/watch?v=dcm8fjBfro8&list=PLNG_1j3cPCaZZ7etkzWA7JfdmKWT0pMsa&index=16',
                          image: {
                            speakers: ['/images/home/conf2021/diego.jpg'],
                          },
                        },
                        {
                          id: 'conf-2021-16',
                          title:
                            'Accessible Japanese Form Components with React',
                          description: 'Tafu Nakazaki',
                          url: 'https://www.youtube.com/watch?v=S4a0QlsH0pU&list=PLNG_1j3cPCaZZ7etkzWA7JfdmKWT0pMsa&index=17',
                          image: {speakers: ['/images/home/conf2021/tafu.jpg']},
                        },
                        {
                          id: 'conf-2021-17',
                          title: 'UI Tools for Artists',
                          description: 'Lyle Troxell',
                          url: 'https://www.youtube.com/watch?v=b3l4WxipFsE&list=PLNG_1j3cPCaZZ7etkzWA7JfdmKWT0pMsa&index=18',
                          image: {speakers: ['/images/home/conf2021/lyle.jpg']},
                        },
                        {
                          id: 'conf-2021-18',
                          title: 'Hydrogen + React 18',
                          description: 'Helen Lin',
                          url: 'https://www.youtube.com/watch?v=HS6vIYkSNks&list=PLNG_1j3cPCaZZ7etkzWA7JfdmKWT0pMsa&index=19',
                          image: {
                            speakers: ['/images/home/conf2021/helen.jpg'],
                          },
                        },
                      ])
                    : 1 === e &&
                      t([
                        {
                          id: 'conf-2019-0',
                          title: 'Keynote (Part 1)',
                          description: 'Tom Occhino',
                          url: 'https://www.youtube.com/watch?v=QnZHO7QvjaM&list=PLPxbbTqCLbGHPxZpw4xj_Wwg8-fdNxJRh',
                          image: {speakers: ['/images/home/conf2019/tom.jpg']},
                        },
                        {
                          id: 'conf-2019-1',
                          title: 'Keynote (Part 2)',
                          description: 'Yuzhi Zheng',
                          url: 'https://www.youtube.com/watch?v=uXEEL9mrkAQ&list=PLPxbbTqCLbGHPxZpw4xj_Wwg8-fdNxJRh&index=2',
                          image: {
                            speakers: [
                              'https://conf2019.reactjs.org/img/speakers/yuzhi.jpg',
                            ],
                          },
                        },
                        {
                          id: 'conf-2019-2',
                          title:
                            'Building The New Facebook With React and Relay (Part 1)',
                          description: 'Frank Yan',
                          url: 'https://www.youtube.com/watch?v=9JZHodNR184&list=PLPxbbTqCLbGHPxZpw4xj_Wwg8-fdNxJRh&index=3',
                          image: {
                            speakers: ['/images/home/conf2019/frank.jpg'],
                          },
                        },
                        {
                          id: 'conf-2019-3',
                          title:
                            'Building The New Facebook With React and Relay (Part 2)',
                          description: 'Ashley Watkins',
                          url: 'https://www.youtube.com/watch?v=KT3XKDBZW7M&list=PLPxbbTqCLbGHPxZpw4xj_Wwg8-fdNxJRh&index=4',
                          image: {
                            speakers: ['/images/home/conf2019/ashley.jpg'],
                          },
                        },
                        {
                          id: 'conf-2019-4',
                          title:
                            'How Our Team Is Using React Native to Save The World',
                          description: 'Tania Papazafeiropoulou',
                          url: 'https://www.youtube.com/watch?v=zVHWugBPGBE&list=PLPxbbTqCLbGHPxZpw4xj_Wwg8-fdNxJRh&index=5',
                          image: {
                            speakers: ['/images/home/conf2019/tania.jpg'],
                          },
                        },
                        {
                          id: 'conf-2019-5',
                          title:
                            'Using Hooks and Codegen to Bring the Benefits of GraphQL to REST APIs',
                          description: 'Tejas Kumar',
                          url: 'https://www.youtube.com/watch?v=cdsnzfJUqm0&list=PLPxbbTqCLbGHPxZpw4xj_Wwg8-fdNxJRh&index=6',
                          image: {
                            speakers: ['/images/home/conf2019/tejas.jpg'],
                          },
                        },
                        {
                          id: 'conf-2019-6',
                          title: 'Building a Custom React Renderer',
                          description: 'Sophie Alpert',
                          url: 'https://www.youtube.com/watch?v=CGpMlWVcHok&list=PLPxbbTqCLbGHPxZpw4xj_Wwg8-fdNxJRh&index=7',
                          image: {
                            speakers: ['/images/home/conf2019/sophie.jpg'],
                          },
                        },
                        {
                          id: 'conf-2019-7',
                          title: 'Is React Translated Yet?',
                          description: 'Nat Alison',
                          url: 'https://www.youtube.com/watch?v=lLE4Jqaek5k&list=PLPxbbTqCLbGHPxZpw4xj_Wwg8-fdNxJRh&index=12',
                          image: {speakers: ['/images/home/conf2019/nat.jpg']},
                        },
                        {
                          id: 'conf-2019-8',
                          title:
                            'Building (And Re-Building) the Airbnb Design System',
                          description: 'Maja Wichrowska and Tae Kim',
                          url: 'https://www.youtube.com/watch?v=fHQ1WSx41CA&list=PLPxbbTqCLbGHPxZpw4xj_Wwg8-fdNxJRh&index=13',
                          image: {
                            speakers: [
                              '/images/home/conf2019/maja.jpg',
                              '/images/home/conf2019/tae.jpg',
                            ],
                          },
                        },
                        {
                          id: 'conf-2019-9',
                          title: 'Accessibility Is a Marathon, Not a Sprint',
                          description: 'Brittany Feenstra',
                          url: 'https://www.youtube.com/watch?v=ONSD-t4gBb8&list=PLPxbbTqCLbGHPxZpw4xj_Wwg8-fdNxJRh&index=14',
                          image: {
                            speakers: ['/images/home/conf2019/brittany.jpg'],
                          },
                        },
                        {
                          id: 'conf-2019-10',
                          title: 'The State of React State in 2019',
                          description: 'Becca Bailey',
                          url: 'https://www.youtube.com/watch?v=wUMMUyQtMSg&list=PLPxbbTqCLbGHPxZpw4xj_Wwg8-fdNxJRh&index=15',
                          image: {
                            speakers: ['/images/home/conf2019/becca.jpg'],
                          },
                        },
                        {
                          id: 'conf-2019-11',
                          title: 'Let’s Program Like It’s 1999',
                          description: 'Lee Byron',
                          url: 'https://www.youtube.com/watch?v=vG8WpLr6y_U&list=PLPxbbTqCLbGHPxZpw4xj_Wwg8-fdNxJRh&index=16',
                          image: {speakers: ['/images/home/conf2019/lee.jpg']},
                        },
                        {
                          id: 'conf-2019-12',
                          title: 'React Developer Tooling',
                          description: 'Brian Vaughn',
                          url: 'https://www.youtube.com/watch?v=Mjrfb1r3XEM&list=PLPxbbTqCLbGHPxZpw4xj_Wwg8-fdNxJRh&index=17',
                          image: {
                            speakers: ['/images/home/conf2019/brian.jpg'],
                          },
                        },
                        {
                          id: 'conf-2019-13',
                          title: 'Data Fetching With Suspense In Relay',
                          description: 'Joe Savona',
                          url: 'https://www.youtube.com/watch?v=Tl0S7QkxFE4&list=PLPxbbTqCLbGHPxZpw4xj_Wwg8-fdNxJRh&index=18',
                          image: {speakers: ['/images/home/conf2019/joe.jpg']},
                        },
                        {
                          id: 'conf-2019-14',
                          title: 'Automatic Visualizations of the Frontend',
                          description: 'Cameron Yick',
                          url: 'https://www.youtube.com/watch?v=SbreAPNmZOk&list=PLPxbbTqCLbGHPxZpw4xj_Wwg8-fdNxJRh&index=19',
                          image: {
                            speakers: ['/images/home/conf2019/cameron.jpg'],
                          },
                        },
                        {
                          id: 'conf-2019-15',
                          title: 'React Is Fiction',
                          description: 'Jenn Creighton',
                          url: 'https://www.youtube.com/watch?v=kqh4lz2Lkzs&list=PLPxbbTqCLbGHPxZpw4xj_Wwg8-fdNxJRh&index=20',
                          image: {speakers: ['/images/home/conf2019/jenn.jpg']},
                        },
                        {
                          id: 'conf-2019-16',
                          title: 'Progressive Web Animations',
                          description: 'Alexandra Holachek',
                          url: 'https://www.youtube.com/watch?v=laPsceJ4tTY&list=PLPxbbTqCLbGHPxZpw4xj_Wwg8-fdNxJRh&index=21',
                          image: {
                            speakers: ['/images/home/conf2019/alexandra.jpg'],
                          },
                        },
                        {
                          id: 'conf-2019-17',
                          title:
                            'Creating Games, Animations and Interactions with the Wick Editor',
                          description: 'Luca Damasco',
                          url: 'https://www.youtube.com/watch?v=laPsceJ4tTY&list=PLPxbbTqCLbGHPxZpw4xj_Wwg8-fdNxJRh&index=21',
                          image: {speakers: ['/images/home/conf2019/luca.jpg']},
                        },
                        {
                          id: 'conf-2019-18',
                          title: 'Building React-Select',
                          description: 'Jed Watson',
                          url: 'https://www.youtube.com/watch?v=yS0jUnmBujE&list=PLPxbbTqCLbGHPxZpw4xj_Wwg8-fdNxJRh&index=25',
                          image: {speakers: ['/images/home/conf2019/jed.jpg']},
                        },
                        {
                          id: 'conf-2019-19',
                          title:
                            'Promoting Transparency in Government Spending with React',
                          description: 'Lizzie Salita',
                          url: 'https://www.youtube.com/watch?v=CVfXICcNfHE&list=PLPxbbTqCLbGHPxZpw4xj_Wwg8-fdNxJRh&index=26',
                          image: {
                            speakers: ['/images/home/conf2019/lizzie.jpg'],
                          },
                        },
                        {
                          id: 'conf-2019-20',
                          title:
                            'Wonder-driven Development: Using React to Make a Spaceship',
                          description: 'Alex Anderson',
                          url: 'https://www.youtube.com/watch?v=aV0uOPWHKt4&list=PLPxbbTqCLbGHPxZpw4xj_Wwg8-fdNxJRh&index=27',
                          image: {speakers: ['/images/home/conf2019/alex.jpg']},
                        },
                      ]);
                }, eq);
              });
              return eO.set(e, t), t;
            })(t)
          );
        return (0, a.jsx)(eM, {videos: r});
      }
      function eM(e) {
        let {videos: t} = e,
          [r, l] = (0, s.useState)(''),
          n = (function (e, t) {
            let r = t
              .toLowerCase()
              .split(' ')
              .filter((e) => '' !== e);
            return 0 === r.length
              ? e
              : e.filter((e) => {
                  let t = (e.title + ' ' + e.description)
                    .toLowerCase()
                    .split(' ');
                  return r.every((e) => t.some((t) => t.startsWith(e)));
                });
          })(t, r);
        return (0, a.jsxs)('div', {
          className: 'mt-3',
          'data-hover': 'SearchableVideoList',
          children: [
            (0, a.jsx)(eF, {value: r, onChange: l}),
            (0, a.jsx)(eZ, {
              videos: n,
              emptyHeading: 'No matches for “'.concat(r, '”'),
            }),
          ],
        });
      }
      function eZ(e) {
        let {videos: t, emptyHeading: r} = e,
          s = r,
          l = t.length;
        return (
          l > 0 && (s = l + ' ' + (l > 1 ? 'Videos' : 'Video')),
          (0, a.jsxs)('section', {
            className: 'relative',
            'data-hover': 'VideoList',
            children: [
              (0, a.jsx)('h2', {
                className: 'font-bold text-xl text-primary mb-4 leading-snug',
                'data-hover': 'h2',
                children: s,
              }),
              (0, a.jsx)('div', {
                className: 'flex flex-col gap-4',
                children: t.map((e) => (0, a.jsx)(eS, {video: e}, e.id)),
              }),
            ],
          })
        );
      }
      function eF(e) {
        let {value: t, onChange: r} = e,
          l = (0, s.useId)();
        return (0, a.jsxs)('form', {
          className: 'mb-3 py-1',
          'data-hover': 'SearchInput',
          onSubmit: (e) => e.preventDefault(),
          children: [
            (0, a.jsx)('label', {
              htmlFor: l,
              className: 'sr-only',
              children: 'Search',
            }),
            (0, a.jsxs)('div', {
              className: 'relative w-full',
              children: [
                (0, a.jsx)('div', {
                  className:
                    'absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none',
                  children: (0, a.jsx)(D, {className: 'text-gray-30 w-4'}),
                }),
                (0, a.jsx)('input', {
                  type: 'text',
                  id: l,
                  className:
                    'flex ps-11 py-4 h-10 w-full text-start bg-secondary-button outline-none betterhover:hover:bg-opacity-80 pointer items-center text-primary rounded-full align-middle text-base',
                  placeholder: 'Search',
                  value: t,
                  onChange: (e) => r(e.target.value),
                }),
              ],
            }),
          ],
        });
      }
      function eT(e) {
        let {conf: t, children: r} = e,
          {slug: l, navigate: n} = (0, s.useContext)(ey),
          [i, d] = (0, s.useTransition)();
        return (0, a.jsxs)('div', {
          className: o()(
            'transition-opacity delay-100',
            i ? 'opacity-90' : 'opacity-100'
          ),
          'data-hover': 'ConferenceLayout',
          children: [
            (0, a.jsx)(eP, {
              background: t.cover,
              children: (0, a.jsxs)('select', {
                'aria-label': 'Event',
                defaultValue: l,
                onChange: (e) => {
                  d(() => {
                    n(e.target.value);
                  });
                },
                className:
                  'appearance-none pe-8 ps-2 bg-transparent text-primary-dark text-2xl font-bold mb-0.5',
                style: {
                  backgroundSize: '4px 4px, 4px 4px',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition:
                    'calc(100% - 20px) calc(1px + 50%),calc(100% - 16px) calc(1px + 50%)',
                  backgroundImage:
                    'linear-gradient(45deg,transparent 50%,currentColor 50%),linear-gradient(135deg,currentColor 50%,transparent 50%)',
                },
                children: [
                  (0, a.jsx)('option', {
                    className:
                      'bg-wash dark:bg-wash-dark text-primary dark:text-primary-dark',
                    value: 'react-conf-2021',
                    children: 'React Conf 2021',
                  }),
                  (0, a.jsx)('option', {
                    className:
                      'bg-wash dark:bg-wash-dark text-primary dark:text-primary-dark',
                    value: 'react-conf-2019',
                    children: 'React Conf 2019',
                  }),
                ],
              }),
            }),
            (0, a.jsx)('div', {className: 'px-4 pb-4', children: r}, t.id),
          ],
        });
      }
      function eP(e) {
        let {background: t, children: r} = e;
        return (0, a.jsxs)('div', {
          className: 'h-40 overflow-hidden relative items-center flex',
          children: [
            (0, a.jsx)('div', {
              className:
                'absolute inset-0 px-4 py-2 flex items-end bg-gradient-to-t from-black/40 via-black/0',
              children: r,
            }),
            (0, a.jsx)('img', {
              src: t,
              width: 500,
              height: 263,
              alt: '',
              className: 'w-full object-cover',
            }),
          ],
        });
      }
      function eS(e) {
        let {video: t} = e;
        return (0, a.jsxs)('div', {
          className: 'flex flex-row items-center gap-3',
          'data-hover': 'Video',
          children: [
            (0, a.jsx)(eV, {video: t}),
            (0, a.jsxs)('a', {
              href: t.url,
              target: '_blank',
              rel: 'noreferrer',
              className:
                'outline-link dark:outline-link outline-offset-4 group flex flex-col flex-1 gap-0.5',
              'data-hover': 'a',
              children: [
                (0, a.jsx)('h3', {
                  className: o()(
                    'text-base leading-tight text-primary font-bold',
                    t.url && 'group-hover:underline'
                  ),
                  'data-hover': 'h3',
                  children: t.title,
                }),
                (0, a.jsx)('p', {
                  className: 'text-tertiary text-sm leading-snug',
                  'data-hover': 'p',
                  children: t.description,
                }),
              ],
            }),
            (0, a.jsx)(eE, {video: t}),
          ],
        });
      }
      function e_(e) {
        let {children: t} = e;
        return (0, a.jsx)('code', {
          dir: 'ltr',
          className:
            'font-mono inline rounded-lg bg-gray-15/40 dark:bg-secondary-button-dark py-0.5 px-1 text-left',
          children: t,
        });
      }
      function eV(e) {
        let {video: t} = e,
          {image: r} = t;
        return (0, a.jsx)('a', {
          'data-hover': 'Thumbnail',
          href: t.url,
          target: '_blank',
          rel: 'noreferrer',
          'aria-hidden': 'true',
          tabIndex: -1,
          className: o()(
            'outline-link dark:outline-link outline-offset-2 aspect-video w-32 xs:w-36 select-none flex-col shadow-inner-border rounded-lg flex items-center overflow-hidden justify-center align-middle text-white/50 bg-cover bg-white bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))]',
            'blue' === r && 'from-yellow-50 via-blue-50 to-purple-60',
            'red' === r && 'from-yellow-50 via-red-50 to-purple-60',
            'green' === r && 'from-yellow-50 via-green-50 to-purple-60',
            'purple' === r && 'from-yellow-50 via-purple-50 to-purple-60',
            'object' == typeof r && 'from-gray-80 via-gray-95 to-gray-70',
            t.url && 'hover:opacity-95 transition-opacity'
          ),
          style: {
            backgroundImage:
              'string' == typeof r && r.startsWith('/')
                ? 'url(' + r + ')'
                : null,
          },
          children:
            'string' != typeof r
              ? (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)('div', {
                      className:
                        'transition-opacity mt-2.5 -space-x-2 flex flex-row w-full justify-center',
                      children: r.speakers.map((e, t) =>
                        (0, a.jsx)(
                          'img',
                          {
                            className:
                              'h-8 w-8 border-2 shadow-md border-gray-70 object-cover rounded-full',
                            src: e,
                            alt: '',
                          },
                          t
                        )
                      ),
                    }),
                    (0, a.jsx)('div', {
                      className: 'mt-1',
                      children: (0, a.jsxs)('span', {
                        className:
                          'inline-flex text-xs font-normal items-center text-primary-dark py-1 whitespace-nowrap outline-link px-1.5 rounded-lg',
                        children: [
                          (0, a.jsx)(O, {
                            className:
                              'text-xs me-1 w-4 h-4 text-brand text-brand-dark',
                          }),
                          'React Conf',
                        ],
                      }),
                    }),
                  ],
                })
              : r.startsWith('/')
              ? null
              : (0, a.jsx)(eW, {}),
        });
      }
      function eW() {
        return (0, a.jsx)('svg', {
          className: 'drop-shadow-xl',
          width: '36',
          height: '36',
          viewBox: '0 0 72 72',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          children: (0, a.jsx)('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M36 69C54.2254 69 69 54.2254 69 36C69 17.7746 54.2254 3 36 3C17.7746 3 3 17.7746 3 36C3 54.2254 17.7746 69 36 69ZM52.1716 38.6337L28.4366 51.5801C26.4374 52.6705 24 51.2235 24 48.9464V23.0536C24 20.7764 26.4374 19.3295 28.4366 20.4199L52.1716 33.3663C54.2562 34.5034 54.2562 37.4966 52.1716 38.6337Z',
            fill: 'currentColor',
          }),
        });
      }
      let ez = new Set();
      function eE(e) {
        let {video: t} = e,
          [r, l] = (0, s.useState)(() => ez.has(t.id)),
          [n, i] = (0, s.useState)(!1);
        return (0, a.jsxs)('button', {
          'data-hover': 'LikeButton',
          className: o()(
            'outline-none focus:bg-red-50/5 focus:text-red-50 relative flex items-center justify-center w-10 h-10 cursor-pointer rounded-full hover:bg-card active:scale-95 active:bg-red-50/5 active:text-red-50',
            r ? 'text-red-50' : 'text-tertiary'
          ),
          'aria-label': r ? 'Unsave' : 'Save',
          onClick: () => {
            let e = !r;
            e ? ez.add(t.id) : ez.delete(t.id), i(!0), l(e);
          },
          children: [
            (0, a.jsx)('svg', {
              className: 'absolute overflow-visible',
              viewBox: '0 0 24 24',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
              children: (0, a.jsx)('circle', {
                className: o()(
                  'text-red-50/50 origin-center transition-all ease-in-out',
                  r && n && 'animate-[circle_.3s_forwards]'
                ),
                cx: '12',
                cy: '12',
                r: '11.5',
                fill: 'transparent',
                strokeWidth: '0',
                stroke: 'currentColor',
              }),
            }),
            r
              ? (0, a.jsx)('svg', {
                  className: o()(
                    'w-6 h-6 origin-center transition-all ease-in-out',
                    r && n && 'animate-[scale_.35s_ease-in-out_forwards]'
                  ),
                  viewBox: '0 0 24 24',
                  fill: 'none',
                  xmlns: 'http://www.w3.org/2000/svg',
                  children: (0, a.jsx)('path', {
                    d: 'M12 23a.496.496 0 0 1-.26-.074C7.023 19.973 0 13.743 0 8.68c0-4.12 2.322-6.677 6.058-6.677 2.572 0 5.108 2.387 5.134 2.41l.808.771.808-.771C12.834 4.387 15.367 2 17.935 2 21.678 2 24 4.558 24 8.677c0 5.06-7.022 11.293-11.74 14.246a.496.496 0 0 1-.26.074V23z',
                    fill: 'currentColor',
                  }),
                })
              : (0, a.jsx)('svg', {
                  className: 'w-6 h-6',
                  viewBox: '0 0 24 24',
                  fill: 'none',
                  xmlns: 'http://www.w3.org/2000/svg',
                  children: (0, a.jsx)('path', {
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    d: 'm12 5.184-.808-.771-.004-.004C11.065 4.299 8.522 2.003 6 2.003c-3.736 0-6 2.558-6 6.677 0 4.47 5.471 9.848 10 13.079.602.43 1.187.82 1.74 1.167A.497.497 0 0 0 12 23v-.003c.09 0 .182-.026.26-.074C16.977 19.97 24 13.737 24 8.677 24 4.557 21.743 2 18 2c-2.569 0-5.166 2.387-5.192 2.413L12 5.184zm-.002 15.525c2.071-1.388 4.477-3.342 6.427-5.47C20.72 12.733 22 10.401 22 8.677c0-1.708-.466-2.855-1.087-3.55C20.316 4.459 19.392 4 18 4c-.726 0-1.63.364-2.5.9-.67.412-1.148.82-1.266.92-.03.025-.037.031-.019.014l-.013.013L12 7.949 9.832 5.88a10.08 10.08 0 0 0-1.33-.977C7.633 4.367 6.728 4.003 6 4.003c-1.388 0-2.312.459-2.91 1.128C2.466 5.826 2 6.974 2 8.68c0 1.726 1.28 4.058 3.575 6.563 1.948 2.127 4.352 4.078 6.423 5.466z',
                    fill: 'currentColor',
                  }),
                }),
          ],
        });
      }
      function eB(e) {
        let {children: t} = e;
        return (0, a.jsx)('svg', {
          className:
            'w-16 h-16 lg:w-20 lg:h-20 rounded-2xl lg:rounded-3xl shadow-nav bg-wash',
          viewBox: '0 0 120 120',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          children: t,
        });
      }
      function eA() {
        return (0, a.jsxs)('div', {
          className: 'flex items-center justify-center gap-5',
          children: [
            (0, a.jsx)(eB, {
              children: (0, a.jsx)('path', {
                d: 'M89.9356 44.0658C89.4752 44.4231 81.3451 49.0042 81.3451 59.1906C81.3451 70.9729 91.6903 75.1411 91.9999 75.2443C91.9523 75.4984 90.3564 80.9529 86.5455 86.5105C83.1474 91.4013 79.5984 96.2841 74.1995 96.2841C68.8006 96.2841 67.4112 93.148 61.1787 93.148C55.105 93.148 52.9454 96.3873 48.007 96.3873C43.0686 96.3873 39.6229 91.8618 35.6611 86.3041C31.072 79.7778 27.3643 69.639 27.3643 60.0163C27.3643 44.5819 37.3998 36.3963 47.2766 36.3963C52.5246 36.3963 56.8993 39.842 60.1942 39.842C63.3303 39.842 68.221 36.1898 74.1916 36.1898C76.4543 36.1898 84.5844 36.3963 89.9356 44.0658ZM71.3572 29.6556C73.8264 26.7259 75.573 22.6609 75.573 18.5958C75.573 18.0321 75.5254 17.4605 75.4222 17C71.4048 17.1509 66.6252 19.6756 63.7432 23.0182C61.4804 25.5906 59.3685 29.6556 59.3685 33.7762C59.3685 34.3955 59.4717 35.0148 59.5193 35.2133C59.7734 35.2609 60.1863 35.3165 60.5991 35.3165C64.2036 35.3165 68.7371 32.9029 71.3572 29.6556Z',
                fill: 'black',
              }),
            }),
            (0, a.jsxs)(eB, {
              children: [
                (0, a.jsx)('path', {
                  d: 'M22.1378 84.6843C19.1119 84.6843 16 87.1151 16 91.363C16 95.259 18.7358 98 22.1378 98C24.9457 98 26.1963 96.1105 26.1963 96.1105V96.9286C26.2071 97.1436 26.2971 97.3469 26.4489 97.4991C26.6008 97.6513 26.8036 97.7416 27.018 97.7523H29.0473V84.9626H26.1963V86.5864C26.1963 86.5864 24.9346 84.6843 22.1378 84.6843ZM22.6458 87.3002C25.1359 87.3002 26.4434 89.4958 26.4434 91.3686C26.4434 93.4557 24.8916 95.4371 22.65 95.4371C20.7775 95.4371 18.9023 93.9163 18.9023 91.3422C18.9009 89.0102 20.5152 87.2932 22.6458 87.2932V87.3002Z',
                  fill: 'black',
                }),
                (0, a.jsx)('path', {
                  d: 'M33.01 97.7636C32.9013 97.7667 32.793 97.7475 32.692 97.7072C32.5909 97.6669 32.4991 97.6063 32.4222 97.5292C32.3452 97.4521 32.2848 97.3601 32.2446 97.2587C32.2044 97.1574 32.1852 97.0489 32.1883 96.9399V84.9628H35.0407V86.5462C35.6861 85.5722 36.9478 84.6692 38.8855 84.6692C42.0529 84.6692 43.7435 87.1988 43.7435 89.5655V97.7636H41.7573C41.5268 97.7625 41.3061 97.6703 41.1431 97.5069C40.9801 97.3435 40.8881 97.1223 40.887 96.8912V90.2C40.887 88.8893 40.0861 87.2962 38.2317 87.2962C36.2316 87.2962 35.0393 89.1912 35.0393 90.975V97.7636H33.01Z',
                  fill: 'black',
                }),
                (0, a.jsx)('path', {
                  d: 'M52.0506 84.6843C49.0248 84.6843 45.9128 87.1151 45.9128 91.363C45.9128 95.259 48.6486 98 52.0506 98C54.8641 98 56.1133 96.1105 56.1133 96.1105V96.9286C56.1241 97.1436 56.2141 97.3469 56.3659 97.4991C56.5178 97.6513 56.7206 97.7416 56.9351 97.7523H58.9643V78.5747H56.1133V86.5919C56.1133 86.5919 54.8475 84.6843 52.0506 84.6843ZM52.5586 87.3002C55.0487 87.3002 56.3562 89.4958 56.3562 91.3686C56.3562 93.4557 54.8045 95.4371 52.5628 95.4371C50.6904 95.4371 48.8152 93.9163 48.8152 91.3422C48.8138 89.0102 50.4225 87.2932 52.5586 87.2932V87.3002Z',
                  fill: 'black',
                }),
                (0, a.jsx)('path', {
                  d: 'M62.9232 97.7634C62.8145 97.7665 62.7064 97.7473 62.6054 97.707C62.5044 97.6667 62.4126 97.6061 62.3358 97.5289C62.259 97.4518 62.1987 97.3598 62.1587 97.2584C62.1186 97.1571 62.0996 97.0487 62.1029 96.9397V84.9626H64.9539V87.0942C65.4438 85.9004 66.5029 84.8179 68.385 84.8179C68.7253 84.8211 69.0648 84.8532 69.3997 84.9139V87.8692C68.9654 87.7128 68.5078 87.631 68.0464 87.6271C66.0462 87.6271 64.9539 89.5222 64.9539 91.3073V97.7634H62.9232Z',
                  fill: 'black',
                }),
                (0, a.jsx)('path', {
                  d: 'M86.6997 97.7635C86.591 97.7668 86.4826 97.7477 86.3815 97.7075C86.2803 97.6673 86.1884 97.6067 86.1114 97.5295C86.0345 97.4524 85.9741 97.3603 85.9339 97.2589C85.8938 97.1574 85.8748 97.0489 85.878 96.9398V84.9626H88.7318V97.7635H86.6997Z',
                  fill: 'black',
                }),
                (0, a.jsx)('path', {
                  d: 'M97.089 84.6843C94.0632 84.6843 90.9526 87.1151 90.9526 91.363C90.9526 95.259 93.6884 98 97.089 98C99.897 98 101.149 96.1105 101.149 96.1105V96.9286C101.16 97.1436 101.25 97.3469 101.402 97.4991C101.553 97.6513 101.756 97.7416 101.971 97.7523H104V78.5747H101.149V86.5919C101.149 86.5919 99.8873 84.6843 97.089 84.6843ZM97.5971 87.3002C100.095 87.3002 101.395 89.4958 101.395 91.3686C101.395 93.4557 99.8429 95.4371 97.6026 95.4371C95.7288 95.4371 93.855 93.9163 93.855 91.3422C93.8536 89.0102 95.4678 87.2932 97.5971 87.2932V87.3002Z',
                  fill: 'black',
                }),
                (0, a.jsx)('path', {
                  d: 'M87.2813 82.2103C88.3231 82.2103 89.1676 81.3637 89.1676 80.3194C89.1676 79.2751 88.3231 78.4285 87.2813 78.4285C86.2395 78.4285 85.395 79.2751 85.395 80.3194C85.395 81.3637 86.2395 82.2103 87.2813 82.2103Z',
                  fill: 'black',
                }),
                (0, a.jsx)('path', {
                  d: 'M76.9184 84.6731C73.7496 84.6731 70.2712 87.0496 70.2712 91.3407C70.2712 95.2547 73.236 97.9999 76.9143 97.9999C81.4475 97.9999 83.66 94.3475 83.66 91.3643C83.66 87.705 80.8104 84.6731 76.9212 84.6731H76.9184ZM76.9282 87.3432C79.1198 87.3432 80.7549 89.1131 80.7549 91.3476C80.7549 93.6226 79.0199 95.3827 76.9351 95.3827C75.0002 95.3827 73.1194 93.8035 73.1194 91.3922C73.1194 88.9405 74.9086 87.3488 76.9282 87.3488V87.3432Z',
                  fill: 'black',
                }),
                (0, a.jsx)('path', {
                  d: 'M81.4769 35.895L88.7723 23.2263C88.9677 22.8863 89.021 22.4826 88.9207 22.1034C88.8203 21.7241 88.5743 21.4 88.2365 21.2018C88.0696 21.1035 87.8848 21.0394 87.693 21.0133C87.5011 20.9871 87.306 20.9993 87.119 21.0493C86.9319 21.0992 86.7566 21.1859 86.6031 21.3043C86.4497 21.4227 86.3213 21.5704 86.2253 21.7389L78.8355 34.5704C73.196 31.988 66.85 30.5493 60.0237 30.5493C53.1975 30.5493 46.8501 31.988 41.212 34.5704L33.8208 21.7389C33.7265 21.565 33.5983 21.4118 33.4439 21.2884C33.2895 21.165 33.1119 21.0739 32.9217 21.0205C32.7316 20.9671 32.5326 20.9524 32.3367 20.9774C32.1408 21.0025 31.9519 21.0666 31.7811 21.1661C31.6104 21.2656 31.4613 21.3984 31.3427 21.5567C31.224 21.715 31.1383 21.8955 31.0904 22.0876C31.0426 22.2797 31.0337 22.4794 31.0643 22.675C31.0948 22.8706 31.1642 23.0581 31.2683 23.2263L38.5623 35.895C25.9827 42.7268 17.4645 55.4915 16.0557 70.4337H104C102.587 55.4915 94.0661 42.7268 81.4769 35.895ZM39.8365 58.053C39.1072 58.0533 38.3943 57.8368 37.7878 57.4308C37.1814 57.0248 36.7086 56.4477 36.4294 55.7723C36.1502 55.097 36.0771 54.3538 36.2193 53.6368C36.3615 52.9199 36.7126 52.2612 37.2283 51.7443C37.744 51.2274 38.401 50.8754 39.1162 50.7329C39.8315 50.5903 40.5728 50.6636 41.2465 50.9435C41.9202 51.2234 42.496 51.6973 42.9009 52.3052C43.3059 52.9131 43.5219 53.6278 43.5217 54.3589C43.5209 55.3389 43.132 56.2785 42.4405 56.9712C41.749 57.6639 40.8113 58.053 39.8337 58.053H39.8365ZM80.2068 58.053C79.4776 58.053 78.7648 57.8363 78.1585 57.4301C77.5523 57.024 77.0798 56.4467 76.8008 55.7714C76.5218 55.096 76.4488 54.3529 76.5912 53.636C76.7336 52.9191 77.0848 52.2606 77.6005 51.7438C78.1162 51.2271 78.7733 50.8752 79.4885 50.7328C80.2037 50.5903 80.945 50.6637 81.6186 50.9436C82.2922 51.2235 82.8679 51.6974 83.2728 52.3053C83.6777 52.9133 83.8937 53.6279 83.8934 54.3589C83.8932 54.8443 83.7976 55.3249 83.6121 55.7733C83.4266 56.2217 83.1548 56.629 82.8122 56.9721C82.4695 57.3152 82.0629 57.5872 81.6154 57.7727C81.1679 57.9581 80.6883 58.0534 80.2041 58.053H80.2068Z',
                  fill: '#32DE84',
                }),
              ],
            }),
          ],
        });
      }
      function eI() {
        return (0, a.jsxs)('div', {
          className: 'flex items-center justify-center gap-3',
          children: [
            (0, a.jsxs)(eB, {
              children: [
                (0, a.jsxs)('g', {
                  clipPath: 'url(#ee)',
                  children: [
                    (0, a.jsx)('path', {
                      d: 'm60 81.99c12.15 0 22-9.8497 22-22 0-12.15-9.8497-22-22-22s-22 9.8498-22 22c0 12.15 9.8497 22 22 22z',
                      fill: '#fff',
                    }),
                    (0, a.jsx)('path', {
                      d: 'm60 38h38.099c-3.8606-6.6892-9.4144-12.244-16.103-16.106-6.6884-3.862-14.276-5.8948-21.999-5.8943-7.7232 5e-4 -15.31 2.0345-21.998 5.8973-6.6879 3.8629-12.241 9.4184-16.101 16.108l19.05 32.995 0.017-0.0044c-1.9378-3.3417-2.9604-7.1352-2.9648-10.998-0.0043-3.8629 1.0098-7.6586 2.9401-11.005 1.9303-3.346 4.7086-6.124 8.0548-8.0539 3.3463-1.93 7.1422-2.9437 11.005-2.9389z',
                      fill: 'url(#cc)',
                    }),
                    (0, a.jsx)('path', {
                      d: 'm60 77.417c9.619 0 17.417-7.7977 17.417-17.417 0-9.6189-7.7977-17.417-17.417-17.417-9.6189 0-17.417 7.7977-17.417 17.417 0 9.619 7.7977 17.417 17.417 17.417z',
                      fill: '#1A73E8',
                    }),
                    (0, a.jsx)('path', {
                      d: 'm79.05 71.006-19.05 32.994c7.7233 1e-3 15.311-2.031 21.999-5.8925 6.6886-3.8614 12.243-9.4158 16.104-16.105 3.8607-6.6888 5.8927-14.276 5.8917-22-1e-3 -7.7232-2.036-15.31-5.8996-21.997h-38.099l-0.0045 0.017c3.8629-0.0074 7.6595 1.0036 11.007 2.9313 3.3476 1.9277 6.1278 4.7038 8.0604 8.0485s2.9492 7.1398 2.9474 11.003c-0.0017 3.8629-1.0219 7.657-2.9575 11z',
                      fill: 'url(#bb)',
                    }),
                    (0, a.jsx)('path', {
                      d: 'm40.949 71.006-19.049-32.995c-3.8626 6.688-5.8963 14.275-5.8966 21.998s2.0328 15.31 5.8949 21.999 9.4171 12.242 16.106 16.102c6.6893 3.8603 14.277 5.8913 22 5.8893l19.049-32.994-0.0123-0.0124c-1.925 3.349-4.699 6.1314-8.0422 8.0666s-7.1375 2.9549-11 2.9562-7.6579-1.0158-11.002-2.9488c-3.3445-1.9329-6.1203-4.7134-8.0476-8.0612z',
                      fill: 'url(#aa)',
                    }),
                  ],
                }),
                (0, a.jsxs)('defs', {
                  children: [
                    (0, a.jsxs)('linearGradient', {
                      id: 'cc',
                      x1: '21.898',
                      x2: '98.099',
                      y1: '43.5',
                      y2: '43.5',
                      gradientUnits: 'userSpaceOnUse',
                      children: [
                        (0, a.jsx)('stop', {stopColor: '#D93025', offset: '0'}),
                        (0, a.jsx)('stop', {stopColor: '#EA4335', offset: '1'}),
                      ],
                    }),
                    (0, a.jsxs)('linearGradient', {
                      id: 'bb',
                      x1: '53.99',
                      x2: '92.09',
                      y1: '103.41',
                      y2: '37.42',
                      gradientUnits: 'userSpaceOnUse',
                      children: [
                        (0, a.jsx)('stop', {stopColor: '#FCC934', offset: '0'}),
                        (0, a.jsx)('stop', {stopColor: '#FBBC04', offset: '1'}),
                      ],
                    }),
                    (0, a.jsxs)('linearGradient', {
                      id: 'aa',
                      x1: '64.763',
                      x2: '26.663',
                      y1: '101.25',
                      y2: '35.261',
                      gradientUnits: 'userSpaceOnUse',
                      children: [
                        (0, a.jsx)('stop', {stopColor: '#1E8E3E', offset: '0'}),
                        (0, a.jsx)('stop', {stopColor: '#34A853', offset: '1'}),
                      ],
                    }),
                    (0, a.jsx)('clipPath', {
                      id: 'ee',
                      children: (0, a.jsx)('rect', {
                        transform: 'translate(16 16)',
                        width: '88',
                        height: '88',
                        fill: '#fff',
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsxs)(eB, {
              children: [
                (0, a.jsx)('path', {
                  d: 'm101.3 42.856c-1.9371-4.6598-5.8655-9.691-8.9417-11.282 2.1941 4.2494 3.7168 8.8131 4.5137 13.529l0.0081 0.0748c-5.0393-12.564-13.585-17.63-20.564-28.66-0.3605-0.5624-0.7106-1.1313-1.05-1.7066-0.175-0.3005-0.3388-0.6074-0.491-0.92-0.2895-0.5606-0.5126-1.153-0.6647-1.7653 2e-4 -0.0282-0.01-0.0556-0.0287-0.0768s-0.0445-0.0348-0.0725-0.0382c-0.0275-0.0075-0.0565-0.0075-0.084 0-0.0057 0-0.0149 0.0104-0.0218 0.0127s-0.0219 0.0126-0.0322 0.0172l0.0172-0.0299c-11.195 6.555-14.994 18.69-15.343 24.76-4.4708 0.3074-8.7453 1.9549-12.266 4.7277-0.3673-0.3111-0.7512-0.6021-1.15-0.8717-1.0156-3.5547-1.0588-7.3168-0.1253-10.894-4.1114 1.9917-7.7645 4.8151-10.728 8.2915h-0.0207c-1.7664-2.239-1.6422-9.622-1.541-11.164-0.5225 0.21-1.0214 0.4749-1.4881 0.7901-1.5593 1.1129-3.0171 2.3617-4.3562 3.7317-1.5259 1.5472-2.9196 3.2193-4.1664 4.9991v0.0069-0.0081c-2.8656 4.0625-4.898 8.6523-5.98 13.504l-0.0598 0.2944c-0.1644 0.9247-0.3105 1.8525-0.4382 2.783 0 0.0333-0.0069 0.0644-0.0103 0.0977-0.3902 2.0279-0.6319 4.0815-0.7234 6.1445v0.23c0.0098 11.16 4.2056 21.91 11.758 30.126 7.5526 8.216 17.912 13.3 29.032 14.247s22.19-2.312 31.023-9.132c8.8332-6.8204 14.786-16.706 16.683-27.704 0.075-0.575 0.136-1.1443 0.203-1.725 0.918-7.5875-0.076-15.284-2.891-22.389zm-51.371 34.889c0.2082 0.1001 0.4037 0.2082 0.6176 0.3036l0.031 0.0196c-0.2162-0.1035-0.4324-0.2112-0.6486-0.3232zm46.954-32.556v-0.0425l0.0081 0.0471-0.0081-0.0046z',
                  fill: 'url(#l)',
                }),
                (0, a.jsx)('path', {
                  d: 'm101.3 42.856c-1.9371-4.6598-5.8655-9.691-8.9417-11.282 2.1941 4.2494 3.7168 8.8131 4.5137 13.529v0.0426l0.0081 0.0471c3.4349 9.8307 2.9384 20.609-1.3869 30.082-5.1083 10.961-17.473 22.195-36.828 21.649-20.913-0.5923-39.33-16.11-42.773-36.436-0.6268-3.205 0-4.83 0.3151-7.4347-0.4299 2.0233-0.6697 4.0823-0.7165 6.1502v0.23c0.0098 11.16 4.2056 21.91 11.758 30.126 7.5526 8.216 17.912 13.3 29.032 14.247s22.19-2.312 31.023-9.1321c8.8332-6.8204 14.786-16.706 16.683-27.704 0.075-0.575 0.136-1.1443 0.203-1.725 0.918-7.5875-0.076-15.284-2.891-22.389z',
                  fill: 'url(#i)',
                }),
                (0, a.jsx)('path', {
                  d: 'm101.3 42.856c-1.9371-4.6598-5.8655-9.691-8.9417-11.282 2.1941 4.2494 3.7168 8.8131 4.5137 13.529v0.0426l0.0081 0.0471c3.4349 9.8307 2.9384 20.609-1.3869 30.082-5.1083 10.961-17.473 22.195-36.828 21.649-20.913-0.5923-39.33-16.11-42.773-36.436-0.6268-3.205 0-4.83 0.3151-7.4347-0.4299 2.0233-0.6697 4.0823-0.7165 6.1502v0.23c0.0098 11.16 4.2056 21.91 11.758 30.126 7.5526 8.216 17.912 13.3 29.032 14.247s22.19-2.312 31.023-9.1321c8.8332-6.8204 14.786-16.706 16.683-27.704 0.075-0.575 0.136-1.1443 0.203-1.725 0.918-7.5875-0.076-15.284-2.891-22.389z',
                  fill: 'url(#h)',
                }),
                (0, a.jsx)('path', {
                  d: 'm79.644 48.095c0.0966 0.0678 0.1863 0.1357 0.2772 0.2035-1.1196-1.9852-2.5133-3.8028-4.14-5.3992-13.853-13.855-3.6306-30.042-1.9067-30.864l0.0172-0.0253c-11.195 6.555-14.994 18.69-15.343 24.76 0.5198-0.0357 1.035-0.0794 1.5663-0.0794 3.9723 0.0073 7.8719 1.0664 11.302 3.0696 3.4303 2.0031 6.2689 4.879 8.2272 8.335z',
                  fill: 'url(#g)',
                }),
                (0, a.jsx)('path', {
                  d: 'm60.144 50.862c-0.0736 1.1086-3.9905 4.9323-5.3602 4.9323-12.674 0-14.732 7.6671-14.732 7.6671 0.5612 6.4561 5.06 11.774 10.498 14.587 0.2484 0.1288 0.5002 0.2449 0.7521 0.3588 0.4362 0.1932 0.8724 0.3718 1.3087 0.5359 1.8664 0.6605 3.8212 1.0377 5.7994 1.1189 22.215 1.0419 26.518-26.565 10.487-34.576 3.7818-0.492 7.6116 0.4378 10.747 2.6094-1.9583-3.4561-4.7969-6.3319-8.2272-8.3351-3.4302-2.0031-7.3298-3.0622-11.302-3.0695-0.529 0-1.0465 0.0437-1.5663 0.0794-4.4708 0.3073-8.7453 1.9548-12.266 4.7276 0.6797 0.575 1.4467 1.3432 3.0625 2.936 3.0245 2.9796 10.781 6.0662 10.798 6.4285z',
                  fill: 'url(#f)',
                }),
                (0, a.jsx)('path', {
                  d: 'm60.144 50.862c-0.0736 1.1086-3.9905 4.9323-5.3602 4.9323-12.674 0-14.732 7.6671-14.732 7.6671 0.5612 6.4561 5.06 11.774 10.498 14.587 0.2484 0.1288 0.5002 0.2449 0.7521 0.3588 0.4362 0.1932 0.8724 0.3718 1.3087 0.5359 1.8664 0.6605 3.8212 1.0377 5.7994 1.1189 22.215 1.0419 26.518-26.565 10.487-34.576 3.7818-0.492 7.6116 0.4378 10.747 2.6094-1.9583-3.4561-4.7969-6.3319-8.2272-8.3351-3.4302-2.0031-7.3298-3.0622-11.302-3.0695-0.529 0-1.0465 0.0437-1.5663 0.0794-4.4708 0.3073-8.7453 1.9548-12.266 4.7276 0.6797 0.575 1.4467 1.3432 3.0625 2.936 3.0245 2.9796 10.781 6.0662 10.798 6.4285z',
                  fill: 'url(#e)',
                }),
                (0, a.jsx)('path', {
                  d: 'm44.205 40.015c0.3611 0.23 0.6589 0.4301 0.92 0.6107-1.0156-3.5547-1.0589-7.3168-0.1254-10.894-4.1113 1.9917-7.7644 4.8151-10.728 8.2915 0.2173-0.0057 6.6826-0.1219 9.9337 1.9918z',
                  fill: 'url(#d)',
                }),
                (0, a.jsx)('path', {
                  d: 'm15.902 60.487c3.4397 20.325 21.86 35.843 42.773 36.436 19.354 0.5474 31.719-10.688 36.828-21.649 4.3254-9.4729 4.8223-20.251 1.3869-30.082v-0.0425c0-0.0334-0.0069-0.0529 0-0.0426l0.0081 0.0748c1.5812 10.324-3.6697 20.325-11.878 27.088l-0.0253 0.0575c-15.994 13.026-31.301 7.8591-34.399 5.75-0.2162-0.1035-0.4324-0.2112-0.6486-0.3231-9.3253-4.4574-13.178-12.954-12.352-20.24-2.2137 0.0326-4.3893-0.5774-6.2632-1.7561-1.874-1.1788-3.3659-2.8757-4.295-4.8852 2.4479-1.4997 5.2391-2.3475 8.1075-2.4626 2.8685-0.1152 5.7186 0.5062 8.2789 1.8048 5.2783 2.3962 11.285 2.6323 16.735 0.6578-0.0173-0.3622-7.774-3.45-10.798-6.4285-1.6158-1.5927-2.3828-2.3598-3.0625-2.9359-0.3673-0.3112-0.7512-0.6022-1.15-0.8717-0.2645-0.1806-0.5623-0.3761-0.92-0.6107-3.251-2.1137-9.7163-1.9975-9.9302-1.9918h-0.0207c-1.7664-2.239-1.6422-9.622-1.541-11.164-0.5226 0.21-1.0214 0.4749-1.4881 0.7901-1.5594 1.1129-3.0171 2.3617-4.3562 3.7317-1.5314 1.5428-2.9309 3.2111-4.1837 4.9876v0.0069-0.0081c-2.8656 4.0624-4.898 8.6523-5.98 13.504-0.0219 0.0908-1.6054 7.0138-0.8246 10.604z',
                  fill: 'url(#c)',
                }),
                (0, a.jsx)('path', {
                  d: 'm75.784 42.9c1.6271 1.5982 3.0208 3.4178 4.14 5.405 0.2449 0.1852 0.4738 0.3692 0.6681 0.5474 10.105 9.315 4.8105 22.482 4.416 23.42 8.2087-6.7632 13.455-16.765 11.878-27.088-5.0416-12.57-13.587-17.635-20.567-28.666-0.3605-0.5624-0.7106-1.1313-1.05-1.7066-0.175-0.3005-0.3388-0.6074-0.491-0.92-0.2895-0.5606-0.5126-1.153-0.6647-1.7653 2e-4 -0.0282-0.01-0.0556-0.0287-0.0768s-0.0445-0.0348-0.0725-0.0382c-0.0275-0.0075-0.0565-0.0075-0.084 0-0.0057 0-0.0149 0.0104-0.0218 0.0127s-0.0219 0.0126-0.0322 0.0172c-1.7239 0.8177-11.946 17.004 1.909 30.859z',
                  fill: 'url(#b)',
                }),
                (0, a.jsx)('path', {
                  d: 'm80.585 48.846c-0.2142-0.1927-0.4371-0.3754-0.6682-0.5474-0.0908-0.0679-0.1805-0.1357-0.2771-0.2036-3.1351-2.1715-6.965-3.1014-10.747-2.6093 16.031 8.0155 11.73 35.618-10.487 34.576-1.9781-0.0812-3.933-0.4584-5.7994-1.119-0.4362-0.1633-0.8725-0.3419-1.3087-0.5359-0.2519-0.115-0.5037-0.23-0.7521-0.3588l0.031 0.0196c3.0981 2.1148 18.4 7.2818 34.399-5.75l0.0253-0.0575c0.399-0.9315 5.6936-14.102-4.416-23.414z',
                  fill: 'url(#a)',
                }),
                (0, a.jsx)('path', {
                  d: 'm40.052 63.462s2.0573-7.667 14.732-7.667c1.3696 0 5.29-3.8238 5.3601-4.9324-5.4501 1.9745-11.456 1.7384-16.735-0.6578-2.5602-1.2986-5.4104-1.9199-8.2788-1.8048-2.8684 0.1152-5.6596 0.963-8.1075 2.4626 0.9291 2.0095 2.421 3.7064 4.2949 4.8852 1.874 1.1788 4.0496 1.7888 6.2632 1.7561-0.8257 7.2875 3.0268 15.784 12.352 20.24 0.2081 0.1 0.4036 0.2081 0.6175 0.3036-5.4429-2.8118-9.9371-8.1294-10.498-14.586z',
                  fill: 'url(#k)',
                }),
                (0, a.jsx)('path', {
                  d: 'm101.3 42.856c-1.9371-4.6598-5.8655-9.691-8.9417-11.282 2.1941 4.2494 3.7168 8.8131 4.5137 13.529l0.0081 0.0748c-5.0393-12.564-13.585-17.63-20.564-28.66-0.3605-0.5624-0.7106-1.1313-1.05-1.7066-0.175-0.3005-0.3388-0.6074-0.491-0.92-0.2895-0.5606-0.5126-1.153-0.6647-1.7653 2e-4 -0.0282-0.01-0.0556-0.0287-0.0768s-0.0445-0.0348-0.0725-0.0382c-0.0275-0.0075-0.0565-0.0075-0.084 0-0.0057 0-0.0149 0.0104-0.0218 0.0127s-0.0219 0.0126-0.0322 0.0172l0.0172-0.0299c-11.195 6.555-14.994 18.69-15.343 24.76 0.5198-0.0356 1.035-0.0793 1.5663-0.0793 3.9723 0.0073 7.8719 1.0663 11.302 3.0695 3.4303 2.0032 6.2689 4.879 8.2272 8.335-3.1351-2.1715-6.9649-3.1014-10.747-2.6093 16.031 8.0155 11.73 35.618-10.487 34.576-1.9782-0.0813-3.933-0.4584-5.7994-1.119-0.4363-0.1633-0.8725-0.3419-1.3087-0.5359-0.2519-0.115-0.5037-0.23-0.7521-0.3588l0.031 0.0196c-0.2162-0.1035-0.4324-0.2112-0.6486-0.3232 0.2082 0.1001 0.4037 0.2082 0.6176 0.3036-5.443-2.8129-9.9372-8.1305-10.498-14.587 0 0 2.0574-7.667 14.732-7.667 1.3697 0 5.29-3.8238 5.3602-4.9324-0.0173-0.3622-7.774-3.45-10.798-6.4285-1.6158-1.5927-2.3828-2.3598-3.0625-2.9359-0.3673-0.3111-0.7512-0.6021-1.15-0.8717-1.0156-3.5547-1.0588-7.3168-0.1253-10.894-4.1114 1.9917-7.7645 4.8151-10.728 8.2915h-0.0207c-1.7664-2.239-1.6422-9.622-1.541-11.164-0.5225 0.21-1.0214 0.4749-1.4881 0.7901-1.5593 1.1129-3.0171 2.3617-4.3562 3.7317-1.5259 1.5472-2.9196 3.2193-4.1664 4.9991v0.0069-0.0081c-2.8656 4.0625-4.898 8.6523-5.98 13.504l-0.0598 0.2944c-0.084 0.3921-0.46 2.3839-0.5141 2.8117v0c-0.3439 2.0561-0.5636 4.131-0.6578 6.2135v0.23c0.0098 11.16 4.2056 21.91 11.758 30.126 7.5526 8.216 17.912 13.3 29.032 14.247s22.19-2.312 31.023-9.132c8.8332-6.8204 14.786-16.706 16.683-27.704 0.075-0.575 0.136-1.1443 0.203-1.725 0.918-7.5875-0.076-15.284-2.891-22.389z',
                  fill: 'url(#j)',
                }),
                (0, a.jsxs)('defs', {
                  children: [
                    (0, a.jsxs)('linearGradient', {
                      id: 'l',
                      x1: '95.404',
                      x2: '21.414',
                      y1: '26.252',
                      y2: '97.638',
                      gradientUnits: 'userSpaceOnUse',
                      children: [
                        (0, a.jsx)('stop', {
                          stopColor: '#FFF44F',
                          offset: '.048',
                        }),
                        (0, a.jsx)('stop', {
                          stopColor: '#FFE847',
                          offset: '.111',
                        }),
                        (0, a.jsx)('stop', {
                          stopColor: '#FFC830',
                          offset: '.225',
                        }),
                        (0, a.jsx)('stop', {
                          stopColor: '#FF980E',
                          offset: '.368',
                        }),
                        (0, a.jsx)('stop', {
                          stopColor: '#FF8B16',
                          offset: '.401',
                        }),
                        (0, a.jsx)('stop', {
                          stopColor: '#FF672A',
                          offset: '.462',
                        }),
                        (0, a.jsx)('stop', {
                          stopColor: '#FF3647',
                          offset: '.534',
                        }),
                        (0, a.jsx)('stop', {
                          stopColor: '#E31587',
                          offset: '.705',
                        }),
                      ],
                    }),
                    (0, a.jsxs)('radialGradient', {
                      id: 'i',
                      cx: '0',
                      cy: '0',
                      r: '1',
                      gradientTransform:
                        'translate(91.985 22.211) scale(92.916 92.917)',
                      gradientUnits: 'userSpaceOnUse',
                      children: [
                        (0, a.jsx)('stop', {
                          stopColor: '#FFBD4F',
                          offset: '.129',
                        }),
                        (0, a.jsx)('stop', {
                          stopColor: '#FFAC31',
                          offset: '.186',
                        }),
                        (0, a.jsx)('stop', {
                          stopColor: '#FF9D17',
                          offset: '.247',
                        }),
                        (0, a.jsx)('stop', {
                          stopColor: '#FF980E',
                          offset: '.283',
                        }),
                        (0, a.jsx)('stop', {
                          stopColor: '#FF563B',
                          offset: '.403',
                        }),
                        (0, a.jsx)('stop', {
                          stopColor: '#FF3750',
                          offset: '.467',
                        }),
                        (0, a.jsx)('stop', {
                          stopColor: '#F5156C',
                          offset: '.71',
                        }),
                        (0, a.jsx)('stop', {
                          stopColor: '#EB0878',
                          offset: '.782',
                        }),
                        (0, a.jsx)('stop', {
                          stopColor: '#E50080',
                          offset: '.86',
                        }),
                      ],
                    }),
                    (0, a.jsxs)('radialGradient', {
                      id: 'h',
                      cx: '0',
                      cy: '0',
                      r: '1',
                      gradientTransform:
                        'translate(58.032 60.198) scale(92.916 92.917)',
                      gradientUnits: 'userSpaceOnUse',
                      children: [
                        (0, a.jsx)('stop', {
                          stopColor: '#960E18',
                          offset: '.3',
                        }),
                        (0, a.jsx)('stop', {
                          stopColor: '#B11927',
                          stopOpacity: '.74',
                          offset: '.351',
                        }),
                        (0, a.jsx)('stop', {
                          stopColor: '#DB293D',
                          stopOpacity: '.343',
                          offset: '.435',
                        }),
                        (0, a.jsx)('stop', {
                          stopColor: '#F5334B',
                          stopOpacity: '.094',
                          offset: '.497',
                        }),
                        (0, a.jsx)('stop', {
                          stopColor: '#FF3750',
                          stopOpacity: '0',
                          offset: '.53',
                        }),
                      ],
                    }),
                    (0, a.jsxs)('radialGradient', {
                      id: 'g',
                      cx: '0',
                      cy: '0',
                      r: '1',
                      gradientTransform:
                        'translate(69.234 1.1246) scale(67.314)',
                      gradientUnits: 'userSpaceOnUse',
                      children: [
                        (0, a.jsx)('stop', {
                          stopColor: '#FFF44F',
                          offset: '.132',
                        }),
                        (0, a.jsx)('stop', {
                          stopColor: '#FFDC3E',
                          offset: '.252',
                        }),
                        (0, a.jsx)('stop', {
                          stopColor: '#FF9D12',
                          offset: '.506',
                        }),
                        (0, a.jsx)('stop', {
                          stopColor: '#FF980E',
                          offset: '.526',
                        }),
                      ],
                    }),
                    (0, a.jsxs)('radialGradient', {
                      id: 'f',
                      cx: '0',
                      cy: '0',
                      r: '1',
                      gradientTransform:
                        'translate(47.755 84.468) scale(44.242 44.242)',
                      gradientUnits: 'userSpaceOnUse',
                      children: [
                        (0, a.jsx)('stop', {
                          stopColor: '#3A8EE6',
                          offset: '.353',
                        }),
                        (0, a.jsx)('stop', {
                          stopColor: '#5C79F0',
                          offset: '.472',
                        }),
                        (0, a.jsx)('stop', {
                          stopColor: '#9059FF',
                          offset: '.669',
                        }),
                        (0, a.jsx)('stop', {stopColor: '#C139E6', offset: '1'}),
                      ],
                    }),
                    (0, a.jsxs)('radialGradient', {
                      id: 'e',
                      cx: '0',
                      cy: '0',
                      r: '1',
                      gradientTransform:
                        'translate(63.11 52.583) rotate(-13.592) scale(23.457 27.462)',
                      gradientUnits: 'userSpaceOnUse',
                      children: [
                        (0, a.jsx)('stop', {
                          stopColor: '#9059FF',
                          stopOpacity: '0',
                          offset: '.206',
                        }),
                        (0, a.jsx)('stop', {
                          stopColor: '#8C4FF3',
                          stopOpacity: '.064',
                          offset: '.278',
                        }),
                        (0, a.jsx)('stop', {
                          stopColor: '#7716A8',
                          stopOpacity: '.45',
                          offset: '.747',
                        }),
                        (0, a.jsx)('stop', {
                          stopColor: '#6E008B',
                          stopOpacity: '.6',
                          offset: '.975',
                        }),
                      ],
                    }),
                    (0, a.jsxs)('radialGradient', {
                      id: 'd',
                      cx: '0',
                      cy: '0',
                      r: '1',
                      gradientTransform:
                        'translate(56.859 18.409) scale(31.827)',
                      gradientUnits: 'userSpaceOnUse',
                      children: [
                        (0, a.jsx)('stop', {stopColor: '#FFE226', offset: '0'}),
                        (0, a.jsx)('stop', {
                          stopColor: '#FFDB27',
                          offset: '.121',
                        }),
                        (0, a.jsx)('stop', {
                          stopColor: '#FFC82A',
                          offset: '.295',
                        }),
                        (0, a.jsx)('stop', {
                          stopColor: '#FFA930',
                          offset: '.502',
                        }),
                        (0, a.jsx)('stop', {
                          stopColor: '#FF7E37',
                          offset: '.732',
                        }),
                        (0, a.jsx)('stop', {
                          stopColor: '#FF7139',
                          offset: '.792',
                        }),
                      ],
                    }),
                    (0, a.jsxs)('radialGradient', {
                      id: 'c',
                      cx: '0',
                      cy: '0',
                      r: '1',
                      gradientTransform:
                        'translate(81.876 -1.7782) scale(135.79)',
                      gradientUnits: 'userSpaceOnUse',
                      children: [
                        (0, a.jsx)('stop', {
                          stopColor: '#FFF44F',
                          offset: '.113',
                        }),
                        (0, a.jsx)('stop', {
                          stopColor: '#FF980E',
                          offset: '.456',
                        }),
                        (0, a.jsx)('stop', {
                          stopColor: '#FF5634',
                          offset: '.622',
                        }),
                        (0, a.jsx)('stop', {
                          stopColor: '#FF3647',
                          offset: '.716',
                        }),
                        (0, a.jsx)('stop', {
                          stopColor: '#E31587',
                          offset: '.904',
                        }),
                      ],
                    }),
                    (0, a.jsxs)('radialGradient', {
                      id: 'b',
                      cx: '0',
                      cy: '0',
                      r: '1',
                      gradientTransform:
                        'translate(70.431 5.7724) rotate(83.976) scale(99.526 65.318)',
                      gradientUnits: 'userSpaceOnUse',
                      children: [
                        (0, a.jsx)('stop', {stopColor: '#FFF44F', offset: '0'}),
                        (0, a.jsx)('stop', {
                          stopColor: '#FFE847',
                          offset: '.06',
                        }),
                        (0, a.jsx)('stop', {
                          stopColor: '#FFC830',
                          offset: '.168',
                        }),
                        (0, a.jsx)('stop', {
                          stopColor: '#FF980E',
                          offset: '.304',
                        }),
                        (0, a.jsx)('stop', {
                          stopColor: '#FF8B16',
                          offset: '.356',
                        }),
                        (0, a.jsx)('stop', {
                          stopColor: '#FF672A',
                          offset: '.455',
                        }),
                        (0, a.jsx)('stop', {
                          stopColor: '#FF3647',
                          offset: '.57',
                        }),
                        (0, a.jsx)('stop', {
                          stopColor: '#E31587',
                          offset: '.737',
                        }),
                      ],
                    }),
                    (0, a.jsxs)('radialGradient', {
                      id: 'a',
                      cx: '0',
                      cy: '0',
                      r: '1',
                      gradientTransform:
                        'translate(56.11 30.198) scale(84.778)',
                      gradientUnits: 'userSpaceOnUse',
                      children: [
                        (0, a.jsx)('stop', {
                          stopColor: '#FFF44F',
                          offset: '.137',
                        }),
                        (0, a.jsx)('stop', {
                          stopColor: '#FF980E',
                          offset: '.48',
                        }),
                        (0, a.jsx)('stop', {
                          stopColor: '#FF5634',
                          offset: '.592',
                        }),
                        (0, a.jsx)('stop', {
                          stopColor: '#FF3647',
                          offset: '.655',
                        }),
                        (0, a.jsx)('stop', {
                          stopColor: '#E31587',
                          offset: '.904',
                        }),
                      ],
                    }),
                    (0, a.jsxs)('radialGradient', {
                      id: 'k',
                      cx: '0',
                      cy: '0',
                      r: '1',
                      gradientTransform:
                        'translate(78.488 35.16) scale(92.789)',
                      gradientUnits: 'userSpaceOnUse',
                      children: [
                        (0, a.jsx)('stop', {
                          stopColor: '#FFF44F',
                          offset: '.094',
                        }),
                        (0, a.jsx)('stop', {
                          stopColor: '#FFE141',
                          offset: '.231',
                        }),
                        (0, a.jsx)('stop', {
                          stopColor: '#FFAF1E',
                          offset: '.509',
                        }),
                        (0, a.jsx)('stop', {
                          stopColor: '#FF980E',
                          offset: '.626',
                        }),
                      ],
                    }),
                    (0, a.jsxs)('linearGradient', {
                      id: 'j',
                      x1: '94.515',
                      x2: '31.557',
                      y1: '25.87',
                      y2: '88.827',
                      gradientUnits: 'userSpaceOnUse',
                      children: [
                        (0, a.jsx)('stop', {
                          stopColor: '#FFF44F',
                          stopOpacity: '.8',
                          offset: '.167',
                        }),
                        (0, a.jsx)('stop', {
                          stopColor: '#FFF44F',
                          stopOpacity: '.634',
                          offset: '.266',
                        }),
                        (0, a.jsx)('stop', {
                          stopColor: '#FFF44F',
                          stopOpacity: '.217',
                          offset: '.489',
                        }),
                        (0, a.jsx)('stop', {
                          stopColor: '#FFF44F',
                          stopOpacity: '0',
                          offset: '.6',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsxs)(eB, {
              children: [
                (0, a.jsx)('path', {
                  d: 'm60 104c24.3 0 44-19.7 44-44s-19.7-44-44-44-44 19.7-44 44 19.7 44 44 44z',
                  fill: 'url(#aaa)',
                }),
                (0, a.jsx)('path', {
                  d: 'm60.002 100.1v-6.756',
                  stroke: '#fff',
                  strokeLinecap: 'square',
                  strokeWidth: '.84706',
                }),
                (0, a.jsx)('path', {
                  d: 'm60.002 26.624v-6.7563',
                  stroke: '#fff',
                  strokeLinecap: 'square',
                  strokeWidth: '.84706',
                }),
                (0, a.jsx)('path', {
                  d: 'm53.018 99.512 1.1732-6.6536m11.585-65.704 1.1732-6.6536',
                  stroke: '#fff',
                  strokeLinecap: 'square',
                  strokeWidth: '.84706',
                }),
                (0, a.jsx)('path', {
                  d: 'm46.278 97.689 2.3108-6.3488m22.819-62.694 2.3108-6.3488',
                  stroke: '#fff',
                  strokeLinecap: 'square',
                  strokeWidth: '.84706',
                }),
                (0, a.jsx)('path', {
                  d: 'm39.91 94.765 3.3781-5.851m33.359-57.779 3.3782-5.8511',
                  stroke: '#fff',
                  strokeLinecap: 'square',
                  strokeWidth: '.84706',
                }),
                (0, a.jsx)('path', {
                  d: 'm34.252 90.737 4.3428-5.1756m42.885-51.109 4.3429-5.1756',
                  stroke: '#fff',
                  strokeLinecap: 'square',
                  strokeWidth: '.84706',
                }),
                (0, a.jsx)('path', {
                  d: 'm29.227 85.774 5.1756-4.3428m51.109-42.885 5.1756-4.3428',
                  stroke: '#fff',
                  strokeLinecap: 'square',
                  strokeWidth: '.84706',
                }),
                (0, a.jsx)('path', {
                  d: 'm25.244 80.033 5.8511-3.3781m57.779-33.359 5.8511-3.3781',
                  stroke: '#fff',
                  strokeLinecap: 'square',
                  strokeWidth: '.84706',
                }),
                (0, a.jsx)('path', {
                  d: 'm22.238 73.725 6.3488-2.3108m62.694-22.819 6.3488-2.3108',
                  stroke: '#fff',
                  strokeLinecap: 'square',
                  strokeWidth: '.84706',
                }),
                (0, a.jsx)('path', {
                  d: 'm20.469 67.009 6.6535-1.1733m65.704-11.585 6.6536-1.1732',
                  stroke: '#fff',
                  strokeLinecap: 'square',
                  strokeWidth: '.84706',
                }),
                (0, a.jsx)('path', {
                  d: 'm19.9 60.002h6.7563m66.718 0h6.7558',
                  stroke: '#fff',
                  strokeLinecap: 'square',
                  strokeWidth: '.84706',
                }),
                (0, a.jsx)('path', {
                  d: 'm20.488 53.062 6.6536 1.1732m65.704 11.585 6.6536 1.1732',
                  stroke: '#fff',
                  strokeLinecap: 'square',
                  strokeWidth: '.84706',
                }),
                (0, a.jsx)('path', {
                  d: 'm22.309 46.295 6.3488 2.3108m62.694 22.819 6.3488 2.3108',
                  stroke: '#fff',
                  strokeLinecap: 'square',
                  strokeWidth: '.84706',
                }),
                (0, a.jsx)('path', {
                  d: 'm25.229 39.99 5.8511 3.3781m57.779 33.359 5.851 3.3781',
                  stroke: '#fff',
                  strokeLinecap: 'square',
                  strokeWidth: '.84706',
                }),
                (0, a.jsx)('path', {
                  d: 'm29.24 34.19 5.1756 4.3428m51.109 42.885 5.1756 4.3429',
                  stroke: '#fff',
                  strokeLinecap: 'square',
                  strokeWidth: '.84706',
                }),
                (0, a.jsx)('path', {
                  d: 'm34.166 29.281 4.3428 5.1756m42.885 51.109 4.3428 5.1755',
                  stroke: '#fff',
                  strokeLinecap: 'square',
                  strokeWidth: '.84706',
                }),
                (0, a.jsx)('path', {
                  d: 'm39.918 25.256 3.3781 5.8511m33.359 57.779 3.3781 5.8511',
                  stroke: '#fff',
                  strokeLinecap: 'square',
                  strokeWidth: '.84706',
                }),
                (0, a.jsx)('path', {
                  d: 'm46.28 22.3 2.3108 6.3487m22.819 62.694 2.3107 6.3488',
                  stroke: '#fff',
                  strokeLinecap: 'square',
                  strokeWidth: '.84706',
                }),
                (0, a.jsx)('path', {
                  d: 'm52.992 20.554 1.1733 6.6536m11.585 65.704 1.1732 6.6536',
                  stroke: '#fff',
                  strokeLinecap: 'square',
                  strokeWidth: '.84706',
                }),
                (0, a.jsx)('path', {
                  d: 'm56.484 99.953 0.2945-3.3653m6.4037-73.194 0.2944-3.3653',
                  stroke: '#fff',
                  strokeLinecap: 'square',
                  strokeWidth: '.84706',
                }),
                (0, a.jsx)('path', {
                  d: 'm49.629 98.788 0.8743-3.263m19.016-70.97 0.8743-3.263',
                  stroke: '#fff',
                  strokeLinecap: 'square',
                  strokeWidth: '.84706',
                }),
                (0, a.jsx)('path', {
                  d: 'm43.024 96.33 1.4276-3.0616m31.052-66.59 1.4277-3.0616',
                  stroke: '#fff',
                  strokeLinecap: 'square',
                  strokeWidth: '.84706',
                }),
                (0, a.jsx)('path', {
                  d: 'm36.978 92.875 1.9376-2.7672m42.143-60.186 1.9376-2.7672',
                  stroke: '#fff',
                  strokeLinecap: 'square',
                  strokeWidth: '.84706',
                }),
                (0, a.jsx)('path', {
                  d: 'm31.658 88.369 2.3887-2.3886m51.954-51.954 2.3887-2.3886',
                  stroke: '#fff',
                  strokeLinecap: 'square',
                  strokeWidth: '.84706',
                }),
                (0, a.jsx)('path', {
                  d: 'm27.141 83.051 2.7672-1.9376m60.186-42.143 2.7672-1.9376',
                  stroke: '#fff',
                  strokeLinecap: 'square',
                  strokeWidth: '.84706',
                }),
                (0, a.jsx)('path', {
                  d: 'm23.653 76.966 3.0616-1.4277m66.59-31.052 3.0617-1.4276',
                  stroke: '#fff',
                  strokeLinecap: 'square',
                  strokeWidth: '.84706',
                }),
                (0, a.jsx)('path', {
                  d: 'm21.24 70.41 3.263-0.8744m70.97-19.016 3.263-0.8743',
                  stroke: '#fff',
                  strokeLinecap: 'square',
                  strokeWidth: '.84706',
                }),
                (0, a.jsx)('path', {
                  d: 'm20 63.507 3.3653-0.2944m73.194-6.4037 3.3652-0.2944',
                  stroke: '#fff',
                  strokeLinecap: 'square',
                  strokeWidth: '.84706',
                }),
                (0, a.jsx)('path', {
                  d: 'm20.03 56.514 3.3653 0.2944m73.194 6.4037 3.3653 0.2944',
                  stroke: '#fff',
                  strokeLinecap: 'square',
                  strokeWidth: '.84706',
                }),
                (0, a.jsx)('path', {
                  d: 'm21.19 49.657 3.2631 0.8743m70.97 19.016 3.263 0.8744',
                  stroke: '#fff',
                  strokeLinecap: 'square',
                  strokeWidth: '.84706',
                }),
                (0, a.jsx)('path', {
                  d: 'm23.624 43.042 3.0616 1.4276m66.59 31.052 3.0616 1.4277',
                  stroke: '#fff',
                  strokeLinecap: 'square',
                  strokeWidth: '.84706',
                }),
                (0, a.jsx)('path', {
                  d: 'm27.127 37.029 2.7671 1.9376m60.186 42.143 2.7672 1.9376',
                  stroke: '#fff',
                  strokeLinecap: 'square',
                  strokeWidth: '.84706',
                }),
                (0, a.jsx)('path', {
                  d: 'm31.654 31.661 2.3887 2.3887m51.954 51.954 2.3887 2.3887',
                  stroke: '#fff',
                  strokeLinecap: 'square',
                  strokeWidth: '.84706',
                }),
                (0, a.jsx)('path', {
                  d: 'm36.935 27.134 1.9376 2.7672m42.143 60.186 1.9376 2.7672',
                  stroke: '#fff',
                  strokeLinecap: 'square',
                  strokeWidth: '.84706',
                }),
                (0, a.jsx)('path', {
                  d: 'm43.044 23.676 1.4276 3.0616m31.052 66.59 1.4277 3.0616',
                  stroke: '#fff',
                  strokeLinecap: 'square',
                  strokeWidth: '.84706',
                }),
                (0, a.jsx)('path', {
                  d: 'm49.59 21.297 0.8743 3.263m19.016 70.97 0.8743 3.263',
                  stroke: '#fff',
                  strokeLinecap: 'square',
                  strokeWidth: '.84706',
                }),
                (0, a.jsx)('path', {
                  d: 'm56.449 20.063 0.2944 3.3653m6.4037 73.194 0.2944 3.3652',
                  stroke: '#fff',
                  strokeLinecap: 'square',
                  strokeWidth: '.84706',
                }),
                (0, a.jsx)('path', {
                  d: 'm91.222 33.87-34.71 22.211-27.785 30.15 34.879-21.704 27.616-30.656z',
                  clipRule: 'evenodd',
                  fill: '#fff',
                  fillRule: 'evenodd',
                }),
                (0, a.jsx)('path', {
                  d: 'm91.222 33.87-34.71 22.211 7.094 8.4453 27.616-30.656z',
                  clipRule: 'evenodd',
                  fill: '#FF3B30',
                  fillRule: 'evenodd',
                }),
                (0, a.jsx)('defs', {
                  children: (0, a.jsxs)('linearGradient', {
                    id: 'aaa',
                    x1: '59.999',
                    x2: '59.999',
                    y1: '104.01',
                    y2: '15.992',
                    gradientUnits: 'userSpaceOnUse',
                    children: [
                      (0, a.jsx)('stop', {stopColor: '#1E6FF1', offset: '0'}),
                      (0, a.jsx)('stop', {stopColor: '#28CEFB', offset: '1'}),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      }
      function eG(e) {
        if ('fulfilled' === e.status) return e.value;
        if ('rejected' === e.status) throw e.reason;
        if ('pending' === e.status) throw e;
        throw (
          ((e.status = 'pending'),
          e.then(
            (t) => {
              (e.status = 'fulfilled'), (e.value = t);
            },
            (t) => {
              (e.status = 'rejected'), (e.reason = t);
            }
          ),
          e)
        );
      }
      let eD = new Map(),
        eO = new Map(),
        eq = 1e3;
      var eJ = r(58509);
      let eU = (0, s.memo)(function (e) {
          return (0,
          a.jsxs)('svg', {xmlns: 'http://www.w3.org/2000/svg', width: '1.33em', height: '1.33em', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', ...e, children: [(0, a.jsx)('line', {x1: 18, y1: 6, x2: 6, y2: 18}), (0, a.jsx)('line', {x1: 6, y1: 6, x2: 18, y2: 18})]});
        }),
        eK = (0, s.memo)(function (e) {
          return (0,
          a.jsxs)('svg', {width: '1.33em', height: '1.33em', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round', ...e, children: [(0, a.jsx)('line', {x1: '3', y1: '12', x2: '21', y2: '12'}), (0, a.jsx)('line', {x1: '3', y1: '6', x2: '21', y2: '6'}), (0, a.jsx)('line', {x1: '3', y1: '18', x2: '21', y2: '18'})]});
        });
      var eY = r(73935);
      function eX(e) {
        let {hit: t, children: r} = e;
        return (0, a.jsx)(g(), {href: t.url.replace(), children: r});
      }
      let eQ = {
          appId: b.J.algolia.appId,
          apiKey: b.J.algolia.apiKey,
          indexName: b.J.algolia.indexName,
        },
        e$ = (0, s.lazy)(() =>
          r
            .e(161)
            .then(r.bind(r, 37300))
            .then((e) => ({default: e.DocSearchModal}))
        );
      function e1(e) {
        let {
          isOpen: t,
          onOpen: r,
          onClose: l,
          searchParameters: i = {
            hitsPerPage: 30,
            attributesToHighlight: [
              'hierarchy.lvl0',
              'hierarchy.lvl1',
              'hierarchy.lvl2',
              'hierarchy.lvl3',
              'hierarchy.lvl4',
              'hierarchy.lvl5',
              'hierarchy.lvl6',
              'content',
            ],
          },
        } = e;
        return (
          !(function (e) {
            let {isOpen: t, onOpen: r, onClose: a} = e;
            (0, s.useEffect)(() => {
              function e(e) {
                var s, l;
                ((27 === e.keyCode && t) ||
                  ('k' === e.key && (e.metaKey || e.ctrlKey)) ||
                  ((l = (s = e.target).tagName),
                  !s.isContentEditable &&
                    'INPUT' !== l &&
                    'SELECT' !== l &&
                    'TEXTAREA' !== l &&
                    '/' === e.key &&
                    !t)) &&
                  (e.preventDefault(),
                  t
                    ? a()
                    : !document.body.classList.contains('DocSearch--active') &&
                      (document.body.classList.contains('DocSearch--active') ||
                        r()));
              }
              return (
                window.addEventListener('keydown', e),
                function () {
                  window.removeEventListener('keydown', e);
                }
              );
            }, [t, r, a]);
          })({isOpen: t, onOpen: r, onClose: l}),
          (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(M(), {
                children: (0, a.jsx)('link', {
                  rel: 'preconnect',
                  href: 'https://'.concat(eQ.appId, '-dsn.algolia.net'),
                }),
              }),
              t &&
                (0, eY.createPortal)(
                  (0, a.jsx)(e$, {
                    ...eQ,
                    searchParameters: i,
                    onClose: l,
                    navigator: {
                      navigate(e) {
                        let {itemUrl: t} = e;
                        n().push(t);
                      },
                    },
                    transformItems: (e) =>
                      e.map((e) => {
                        let t = new URL(e.url);
                        return {
                          ...e,
                          url: e.url
                            .replace(t.origin, '')
                            .replace('#__next', ''),
                        };
                      }),
                    hitComponent: eX,
                  }),
                  document.body
                ),
            ],
          })
        );
      }
      var e0 = r(8770),
        e2 = r(65104),
        e3 = r(76979),
        e5 = r(32295);
      function e4(e) {
        let {children: t, onSelect: r} = e;
        return (0, a.jsx)(e0.ck, {
          className:
            'flex items-center hover:bg-border dark:hover:bg-border-dark ps-6 pe-4 py-2 w-full text-base cursor-pointer',
          onSelect: r,
          children: t,
        });
      }
      function e6(e) {
        let {fileName: t, href: r, children: s} = e;
        return (0, a.jsx)('a', {
          download: t,
          href: r,
          className: 'flex items-center w-full',
          children: (0, a.jsx)(e4, {children: s}),
        });
      }
      function e7(e) {
        let {children: t} = e;
        return (0, a.jsxs)(e0.fC, {
          children: [
            (0, a.jsx)(e0.xz, {className: 'flex items-center', children: t}),
            (0, a.jsx)(e0.Uv, {
              children: (0, a.jsxs)(e0.VY, {
                className:
                  'hidden lg:block z-50 mt-6 bg-wash border border-border dark:border-border-dark dark:bg-wash-dark rounded min-w-56 overflow-hidden shadow',
                sideOffset: 0,
                align: 'end',
                children: [
                  (0, a.jsx)(e0.__, {
                    className:
                      'ps-4 pt-2 text-base text-tertiary dark:text-tertiary-dark',
                    children: 'Dark Mode',
                  }),
                  (0, a.jsxs)(e6, {
                    fileName: 'react_logo_dark.svg',
                    href: '/images/brand/logo_dark.svg',
                    children: [
                      (0, a.jsx)('span', {
                        className: 'w-8',
                        children: (0, a.jsx)(e3.D, {}),
                      }),
                      (0, a.jsx)('span', {children: 'Logo SVG'}),
                    ],
                  }),
                  (0, a.jsxs)(e6, {
                    fileName: 'react_wordmark_dark.svg',
                    href: '/images/brand/wordmark_dark.svg',
                    children: [
                      (0, a.jsx)('span', {
                        className: 'w-8',
                        children: (0, a.jsx)(e3.D, {}),
                      }),
                      (0, a.jsx)('span', {children: 'Wordmark SVG'}),
                    ],
                  }),
                  (0, a.jsxs)(e4, {
                    onSelect: async () => {
                      await navigator.clipboard.writeText('#58C4DC');
                    },
                    children: [
                      (0, a.jsx)('span', {
                        className: 'w-8',
                        children: (0, a.jsx)(e2.v, {}),
                      }),
                      (0, a.jsx)('span', {children: 'Copy dark mode color'}),
                    ],
                  }),
                  (0, a.jsx)(e0.__, {
                    className:
                      'ps-4 text-base text-tertiary dark:text-tertiary-dark',
                    children: 'Light Mode',
                  }),
                  (0, a.jsxs)(e6, {
                    fileName: 'react_logo_light.svg',
                    href: '/images/brand/logo_light.svg',
                    children: [
                      (0, a.jsx)('span', {
                        className: 'w-8',
                        children: (0, a.jsx)(e3.D, {}),
                      }),
                      (0, a.jsx)('span', {children: 'Logo SVG'}),
                    ],
                  }),
                  (0, a.jsxs)(e6, {
                    fileName: 'react_wordmark_light.svg',
                    href: '/images/brand/wordmark_light.svg',
                    children: [
                      (0, a.jsx)('span', {
                        className: 'w-8',
                        children: (0, a.jsx)(e3.D, {}),
                      }),
                      (0, a.jsx)('span', {children: 'Wordmark SVG'}),
                    ],
                  }),
                  (0, a.jsxs)(e4, {
                    onSelect: async () => {
                      await navigator.clipboard.writeText('#087EA4');
                    },
                    children: [
                      (0, a.jsx)('span', {
                        className: 'w-8',
                        children: (0, a.jsx)(e2.v, {}),
                      }),
                      (0, a.jsx)('span', {children: 'Copy light mode color'}),
                    ],
                  }),
                  (0, a.jsxs)('div', {
                    className: 'uwu-visible flex flex-col',
                    children: [
                      (0, a.jsx)(e0.Z0, {className: ''}),
                      (0, a.jsx)(e0.__, {
                        className:
                          'ps-4 text-base text-tertiary dark:text-tertiary-dark',
                        children: 'uwu',
                      }),
                      (0, a.jsxs)(e4, {
                        onSelect: () => {
                          window.__setUwu(!1);
                        },
                        children: [
                          (0, a.jsx)('span', {
                            className: 'w-8',
                            children: (0, a.jsx)(eU, {}),
                          }),
                          (0, a.jsx)('span', {children: 'Turn off'}),
                        ],
                      }),
                      (0, a.jsxs)(e6, {
                        fileName: 'react_uwu_png',
                        href: '/images/uwu.png',
                        children: [
                          (0, a.jsx)('span', {
                            className: 'w-8',
                            children: (0, a.jsx)(e3.D, {}),
                          }),
                          (0, a.jsx)('span', {children: 'Logo PNG'}),
                        ],
                      }),
                      (0, a.jsx)(U.d, {
                        className: 'flex items-center',
                        href: 'https://github.com/SAWARATSUKI/KawaiiLogos',
                        children: (0, a.jsxs)(e4, {
                          children: [
                            (0, a.jsx)('span', {
                              className: 'w-8',
                              children: (0, a.jsx)(e5.x, {}),
                            }),
                            (0, a.jsx)('span', {
                              children: 'Logo by @sawaratsuki1004',
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }
      let e8 = (0, a.jsx)('svg', {
          xmlns: 'http://www.w3.org/2000/svg',
          width: '28',
          height: '28',
          viewBox: '0 0 32 32',
          children: (0, a.jsxs)('g', {
            fill: 'none',
            fillRule: 'evenodd',
            transform: 'translate(-440 -200)',
            children: [
              (0, a.jsx)('path', {
                fill: 'currentColor',
                fillRule: 'nonzero',
                stroke: 'currentColor',
                strokeWidth: 0.5,
                d: 'M102,21 C102,18.1017141 103.307179,15.4198295 105.51735,13.6246624 C106.001939,13.2310647 105.821611,12.4522936 105.21334,12.3117518 C104.322006,12.1058078 103.414758,12 102.5,12 C95.8722864,12 90.5,17.3722864 90.5,24 C90.5,30.6277136 95.8722864,36 102.5,36 C106.090868,36 109.423902,34.4109093 111.690274,31.7128995 C112.091837,31.2348572 111.767653,30.5041211 111.143759,30.4810139 C106.047479,30.2922628 102,26.1097349 102,21 Z M102.5,34.5 C96.7007136,34.5 92,29.7992864 92,24 C92,18.2007136 96.7007136,13.5 102.5,13.5 C102.807386,13.5 103.113925,13.5136793 103.419249,13.5407785 C101.566047,15.5446378 100.5,18.185162 100.5,21 C100.5,26.3198526 104.287549,30.7714322 109.339814,31.7756638 L109.516565,31.8092927 C107.615276,33.5209452 105.138081,34.5 102.5,34.5 Z',
                transform: 'translate(354.5 192)',
              }),
              (0, a.jsx)('polygon', {
                points: '444 228 468 228 468 204 444 204',
              }),
            ],
          }),
        }),
        e9 = (0, a.jsx)('svg', {
          xmlns: 'http://www.w3.org/2000/svg',
          width: '32',
          height: '32',
          viewBox: '0 0 32 32',
          children: (0, a.jsxs)('g', {
            fill: 'none',
            fillRule: 'evenodd',
            transform: 'translate(-442 -200)',
            children: [
              (0, a.jsxs)('g', {
                fill: 'currentColor',
                transform: 'translate(356 144)',
                children: [
                  (0, a.jsx)('path', {
                    fillRule: 'nonzero',
                    d: 'M108.5 24C108.5 27.5902136 105.590214 30.5 102 30.5 98.4097864 30.5 95.5 27.5902136 95.5 24 95.5 20.4097864 98.4097864 17.5 102 17.5 105.590214 17.5 108.5 20.4097864 108.5 24zM107 24C107 21.2382136 104.761786 19 102 19 99.2382136 19 97 21.2382136 97 24 97 26.7617864 99.2382136 29 102 29 104.761786 29 107 26.7617864 107 24zM101 12.75L101 14.75C101 15.1642136 101.335786 15.5 101.75 15.5 102.164214 15.5 102.5 15.1642136 102.5 14.75L102.5 12.75C102.5 12.3357864 102.164214 12 101.75 12 101.335786 12 101 12.3357864 101 12.75zM95.7255165 14.6323616L96.7485165 16.4038616C96.9556573 16.7625614 97.4143618 16.8854243 97.7730616 16.6782835 98.1317614 16.4711427 98.2546243 16.0124382 98.0474835 15.6537384L97.0244835 13.8822384C96.8173427 13.5235386 96.3586382 13.4006757 95.9999384 13.6078165 95.6412386 13.8149573 95.5183757 14.2736618 95.7255165 14.6323616zM91.8822384 19.0244835L93.6537384 20.0474835C94.0124382 20.2546243 94.4711427 20.1317614 94.6782835 19.7730616 94.8854243 19.4143618 94.7625614 18.9556573 94.4038616 18.7485165L92.6323616 17.7255165C92.2736618 17.5183757 91.8149573 17.6412386 91.6078165 17.9999384 91.4006757 18.3586382 91.5235386 18.8173427 91.8822384 19.0244835zM90.75 25L92.75 25C93.1642136 25 93.5 24.6642136 93.5 24.25 93.5 23.8357864 93.1642136 23.5 92.75 23.5L90.75 23.5C90.3357864 23.5 90 23.8357864 90 24.25 90 24.6642136 90.3357864 25 90.75 25zM92.6323616 30.2744835L94.4038616 29.2514835C94.7625614 29.0443427 94.8854243 28.5856382 94.6782835 28.2269384 94.4711427 27.8682386 94.0124382 27.7453757 93.6537384 27.9525165L91.8822384 28.9755165C91.5235386 29.1826573 91.4006757 29.6413618 91.6078165 30.0000616 91.8149573 30.3587614 92.2736618 30.4816243 92.6323616 30.2744835zM97.0244835 34.1177616L98.0474835 32.3462616C98.2546243 31.9875618 98.1317614 31.5288573 97.7730616 31.3217165 97.4143618 31.1145757 96.9556573 31.2374386 96.7485165 31.5961384L95.7255165 33.3676384C95.5183757 33.7263382 95.6412386 34.1850427 95.9999384 34.3921835 96.3586382 34.5993243 96.8173427 34.4764614 97.0244835 34.1177616zM103 35.25L103 33.25C103 32.8357864 102.664214 32.5 102.25 32.5 101.835786 32.5 101.5 32.8357864 101.5 33.25L101.5 35.25C101.5 35.6642136 101.835786 36 102.25 36 102.664214 36 103 35.6642136 103 35.25zM108.274483 33.3676384L107.251483 31.5961384C107.044343 31.2374386 106.585638 31.1145757 106.226938 31.3217165 105.868239 31.5288573 105.745376 31.9875618 105.952517 32.3462616L106.975517 34.1177616C107.182657 34.4764614 107.641362 34.5993243 108.000062 34.3921835 108.358761 34.1850427 108.481624 33.7263382 108.274483 33.3676384zM112.117762 28.9755165L110.346262 27.9525165C109.987562 27.7453757 109.528857 27.8682386 109.321717 28.2269384 109.114576 28.5856382 109.237439 29.0443427 109.596138 29.2514835L111.367638 30.2744835C111.726338 30.4816243 112.185043 30.3587614 112.392183 30.0000616 112.599324 29.6413618 112.476461 29.1826573 112.117762 28.9755165zM113.25 23L111.25 23C110.835786 23 110.5 23.3357864 110.5 23.75 110.5 24.1642136 110.835786 24.5 111.25 24.5L113.25 24.5C113.664214 24.5 114 24.1642136 114 23.75 114 23.3357864 113.664214 23 113.25 23zM111.367638 17.7255165L109.596138 18.7485165C109.237439 18.9556573 109.114576 19.4143618 109.321717 19.7730616 109.528857 20.1317614 109.987562 20.2546243 110.346262 20.0474835L112.117762 19.0244835C112.476461 18.8173427 112.599324 18.3586382 112.392183 17.9999384 112.185043 17.6412386 111.726338 17.5183757 111.367638 17.7255165zM106.975517 13.8822384L105.952517 15.6537384C105.745376 16.0124382 105.868239 16.4711427 106.226938 16.6782835 106.585638 16.8854243 107.044343 16.7625614 107.251483 16.4038616L108.274483 14.6323616C108.481624 14.2736618 108.358761 13.8149573 108.000062 13.6078165 107.641362 13.4006757 107.182657 13.5235386 106.975517 13.8822384z',
                    transform: 'translate(0 48)',
                    stroke: 'currentColor',
                    strokeWidth: 0.25,
                  }),
                  (0, a.jsx)('path', {
                    d: 'M98.6123,60.1372 C98.6123,59.3552 98.8753,58.6427 99.3368,58.0942 C99.5293,57.8657 99.3933,57.5092 99.0943,57.5017 C99.0793,57.5012 99.0633,57.5007 99.0483,57.5007 C97.1578,57.4747 95.5418,59.0312 95.5008,60.9217 C95.4578,62.8907 97.0408,64.5002 98.9998,64.5002 C99.7793,64.5002 100.4983,64.2452 101.0798,63.8142 C101.3183,63.6372 101.2358,63.2627 100.9478,63.1897 C99.5923,62.8457 98.6123,61.6072 98.6123,60.1372',
                    transform: 'translate(3 11)',
                  }),
                ],
              }),
              (0, a.jsx)('polygon', {
                points: '444 228 468 228 468 204 444 204',
              }),
            ],
          }),
        }),
        te = (0, a.jsx)('svg', {
          xmlns: 'http://www.w3.org/2000/svg',
          width: '24',
          height: '24',
          viewBox: '0 0 24 24',
          children: (0, a.jsx)('path', {
            fill: 'currentColor',
            d: ' M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z ',
          }),
        });
      function tt(e) {
        let {href: t, children: r, ...s} = e;
        return (0, a.jsx)(g(), {
          href: ''.concat(t),
          className:
            'inline leading-normal transition duration-100 ease-in border-b border-opacity-0 text-primary dark:text-primary-dark hover:text-link hover:dark:text-link-dark border-link hover:border-opacity-100',
          ...s,
          children: r,
        });
      }
      function tr(e) {
        let {url: t, isActive: r, children: s} = e;
        return (0, a.jsx)('div', {
          className: 'flex flex-auto sm:flex-1',
          children: (0, a.jsx)(tt, {
            href: t,
            className: o()(
              'active:scale-95 transition-transform w-full text-center outline-link py-1.5 px-1.5 xs:px-3 sm:px-4 rounded-full capitalize whitespace-nowrap',
              !r && 'hover:bg-primary/5 hover:dark:bg-primary-dark/5',
              r &&
                'bg-highlight dark:bg-highlight-dark text-link dark:text-link-dark'
            ),
            children: s,
          }),
        });
      }
      function ta(e) {
        let {wide: t, ...r} = e;
        return (0, a.jsx)('kbd', {
          className: ''.concat(
            t ? 'w-10' : 'w-5',
            ' h-5 border border-transparent me-1 bg-wash dark:bg-wash-dark text-gray-30 align-middle p-0 inline-flex justify-center items-center text-xs text-center rounded-md'
          ),
          ...r,
        });
      }
      function ts(e) {
        let {routeTree: t, breadcrumbs: r, section: n} = e,
          [i, c] = (0, s.useState)(!1),
          [x, h] = (0, s.useState)(!1),
          [m, u] = (0, s.useState)(!1),
          p = (0, s.useRef)(null),
          {asPath: f} = (0, l.useRouter)();
        1 === t.routes.length && (t = t.routes[0]),
          (0, s.useEffect)(() => {
            if (i) {
              let e = p.current;
              return (0, eJ.Qp)(e), () => (0, eJ.tG)(e);
            }
          }, [i]),
          (0, s.useEffect)(() => {
            c(!1);
          }, [f]),
          (0, s.useEffect)(() => {
            let e = window.matchMedia('(max-width: 1023px)');
            function t() {
              e.matches || c(!1);
            }
            return (
              t(),
              e.addEventListener('change', t),
              () => {
                e.removeEventListener('change', t);
              }
            );
          }, []);
        let j = (0, s.useRef)(null);
        (0, s.useEffect)(() => {
          let e = new IntersectionObserver(
            (e) => {
              e.forEach((e) => {
                u(!e.isIntersecting);
              });
            },
            {root: null, rootMargin: '0px 0px', threshold: 0}
          );
          return e.observe(j.current), () => e.disconnect();
        }, []);
        let w = (0, s.useCallback)(() => {
            (0, s.startTransition)(() => {
              h(!0);
            });
          }, []),
          C = (0, s.useCallback)(() => {
            h(!1);
          }, []);
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(e1, {isOpen: x, onOpen: w, onClose: C}),
            (0, a.jsx)('div', {ref: j}),
            (0, a.jsxs)('div', {
              className: o()(
                i
                  ? 'h-screen sticky top-0 lg:bottom-0 lg:h-screen flex flex-col shadow-nav dark:shadow-nav-dark z-20'
                  : 'z-40 sticky top-0'
              ),
              children: [
                (0, a.jsx)('nav', {
                  className: o()(
                    'duration-300 backdrop-filter backdrop-blur-lg backdrop-saturate-200 transition-shadow bg-opacity-90 items-center w-full flex justify-between bg-wash dark:bg-wash-dark dark:bg-opacity-95 px-1.5 lg:pe-5 lg:ps-4 z-40',
                    {'dark:shadow-nav-dark shadow-nav': m || i}
                  ),
                  children: (0, a.jsxs)('div', {
                    className:
                      'flex items-center justify-between w-full h-16 gap-0 sm:gap-3',
                    children: [
                      (0, a.jsxs)('div', {
                        className: 'flex flex-row 3xl:flex-1 items-centers',
                        children: [
                          (0, a.jsx)('button', {
                            type: 'button',
                            'aria-label': 'Menu',
                            onClick: () => c(!i),
                            className: o()(
                              'active:scale-95 transition-transform flex lg:hidden w-12 h-12 rounded-full items-center justify-center hover:bg-primary/5 hover:dark:bg-primary-dark/5 outline-link',
                              {'text-link dark:text-link-dark': i}
                            ),
                            children: i
                              ? (0, a.jsx)(eU, {})
                              : (0, a.jsx)(eK, {}),
                          }),
                          (0, a.jsx)(e7, {
                            children: (0, a.jsxs)('div', {
                              className: 'flex items-center',
                              children: [
                                (0, a.jsx)('div', {
                                  className:
                                    'uwu-visible flex items-center justify-center h-full',
                                  children: (0, a.jsx)(g(), {
                                    href: '/',
                                    children: (0, a.jsx)(X(), {
                                      alt: 'logo by @sawaratsuki1004',
                                      title: 'logo by @sawaratsuki1004',
                                      className: 'h-8',
                                      priority: !0,
                                      width: 63,
                                      height: 32,
                                      src: '/images/uwu.png',
                                    }),
                                  }),
                                }),
                                (0, a.jsx)('div', {
                                  className: 'uwu-hidden',
                                  children: (0, a.jsxs)(g(), {
                                    href: '/',
                                    className:
                                      'active:scale-95 overflow-hidden transition-transform relative items-center text-primary dark:text-primary-dark p-1 whitespace-nowrap outline-link rounded-full 3xl:rounded-xl inline-flex text-lg font-normal gap-2',
                                    children: [
                                      (0, a.jsx)(O, {
                                        className: o()(
                                          'text-sm me-0 w-10 h-10 text-brand dark:text-brand-dark flex origin-center transition-all ease-in-out'
                                        ),
                                      }),
                                      (0, a.jsx)('span', {
                                        className: 'sr-only 3xl:not-sr-only',
                                        children: 'React',
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          }),
                          (0, a.jsx)('div', {
                            className:
                              'flex flex-column justify-center items-center',
                            children: (0, a.jsxs)(g(), {
                              href: '/versions',
                              className:
                                ' flex py-2 flex-column justify-center items-center text-gray-50 dark:text-gray-30 hover:text-link hover:dark:text-link-dark hover:underline text-sm ms-1 cursor-pointer',
                              children: ['v', b.J.version],
                            }),
                          }),
                        ],
                      }),
                      (0, a.jsx)('div', {
                        className:
                          'items-center justify-center flex-1 hidden w-full md:flex 3xl:w-auto 3xl:shrink-0 3xl:justify-center',
                        children: (0, a.jsxs)('button', {
                          type: 'button',
                          className: o()(
                            'flex 3xl:w-[56rem] 3xl:mx-0 relative ps-4 pe-1 py-1 h-10 bg-gray-30/20 dark:bg-gray-40/20 outline-none focus:outline-link betterhover:hover:bg-opacity-80 pointer items-center text-start w-full text-gray-30 rounded-full align-middle text-base'
                          ),
                          onClick: w,
                          children: [
                            (0, a.jsx)(D, {
                              className:
                                'align-middle me-3 text-gray-30 shrink-0 group-betterhover:hover:text-gray-70',
                            }),
                            '搜索',
                            (0, a.jsxs)('span', {
                              className:
                                'hidden ms-auto sm:flex item-center me-1',
                              children: [
                                (0, a.jsx)(ta, {
                                  'data-platform': 'mac',
                                  children: '⌘',
                                }),
                                (0, a.jsx)(ta, {
                                  'data-platform': 'win',
                                  wide: !0,
                                  children: 'Ctrl',
                                }),
                                (0, a.jsx)(ta, {children: 'K'}),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, a.jsxs)('div', {
                        className:
                          'text-base justify-center items-center gap-1.5 flex 3xl:flex-1 flex-row 3xl:justify-end',
                        children: [
                          (0, a.jsx)('div', {
                            className: 'mx-2.5 gap-1.5 hidden lg:flex',
                          }),
                          (0, a.jsx)('div', {
                            className: 'flex w-full md:hidden',
                          }),
                          (0, a.jsxs)('div', {
                            className:
                              'flex items-center -space-x-2.5 xs:space-x-0 ',
                            children: [
                              (0, a.jsx)('div', {
                                className: 'flex md:hidden',
                                children: (0, a.jsx)('button', {
                                  'aria-label': 'Search',
                                  type: 'button',
                                  className:
                                    'flex items-center justify-center w-12 h-12 transition-transform rounded-full active:scale-95 md:hidden hover:bg-secondary-button hover:dark:bg-secondary-button-dark outline-link',
                                  onClick: w,
                                  children: (0, a.jsx)(D, {
                                    className: 'w-5 h-5 align-middle',
                                  }),
                                }),
                              }),
                              (0, a.jsx)('div', {
                                className: 'flex dark:hidden',
                                children: (0, a.jsx)('button', {
                                  type: 'button',
                                  'aria-label': 'Use Dark Mode',
                                  onClick: () => {
                                    window.__setPreferredTheme('dark');
                                  },
                                  className:
                                    'flex items-center justify-center w-12 h-12 transition-transform rounded-full active:scale-95 hover:bg-primary/5 hover:dark:bg-primary-dark/5 outline-link',
                                  children: e8,
                                }),
                              }),
                              (0, a.jsx)('div', {
                                className: 'hidden dark:flex',
                                children: (0, a.jsx)('button', {
                                  type: 'button',
                                  'aria-label': 'Use Light Mode',
                                  onClick: () => {
                                    window.__setPreferredTheme('light');
                                  },
                                  className:
                                    'flex items-center justify-center w-12 h-12 transition-transform rounded-full active:scale-95 hover:bg-primary/5 hover:dark:bg-primary-dark/5 outline-link',
                                  children: e9,
                                }),
                              }),
                              (0, a.jsx)('div', {
                                className: 'flex',
                                children: (0, a.jsx)(tt, {
                                  href: '/community/translations',
                                  'aria-label': 'Translations',
                                  className:
                                    'active:scale-95 transition-transform flex w-12 h-12 rounded-full items-center justify-center hover:bg-primary/5 hover:dark:bg-primary-dark/5 outline-link',
                                  children: te,
                                }),
                              }),
                              (0, a.jsx)('div', {className: 'flex'}),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                i &&
                  (0, a.jsx)('div', {
                    ref: p,
                    className:
                      'overflow-y-scroll isolate no-bg-scrollbar lg:w-[342px] grow bg-wash dark:bg-wash-dark',
                    children: (0, a.jsxs)('aside', {
                      className: o()(
                        'lg:grow lg:flex flex-col w-full pb-8 lg:pb-0 lg:max-w-custom-xs z-40',
                        i ? 'block z-30' : 'hidden lg:block'
                      ),
                      children: [
                        (0, a.jsxs)('nav', {
                          role: 'navigation',
                          style: {'--bg-opacity': '.2'},
                          className:
                            'w-full pt-4 scrolling-touch lg:h-auto grow pe-0 lg:pe-5 lg:py-6 md:pt-4 lg:pt-4 scrolling-gpu',
                          children: [
                            (0, a.jsxs)(s.Suspense, {
                              fallback: null,
                              children: [
                                (0, a.jsxs)('div', {
                                  className:
                                    'ps-3 xs:ps-5 xs:gap-0.5 xs:text-base overflow-x-auto flex flex-row lg:hidden text-base font-bold text-secondary dark:text-secondary-dark',
                                  children: [
                                    (0, a.jsx)(tr, {
                                      isActive: 'learn' === n,
                                      url: '/learn',
                                      children: '教程',
                                    }),
                                    (0, a.jsx)(tr, {
                                      isActive: 'reference' === n,
                                      url: '/reference/react',
                                      children: '参考',
                                    }),
                                    (0, a.jsx)(tr, {
                                      isActive: 'community' === n,
                                      url: '/community',
                                      children: '社区',
                                    }),
                                    (0, a.jsx)(tr, {
                                      isActive: 'blog' === n,
                                      url: '/blog',
                                      children: '博客',
                                    }),
                                  ],
                                }),
                                (0, a.jsx)('div', {
                                  role: 'separator',
                                  className:
                                    'mt-4 mb-2 border-b ms-5 border-border dark:border-border-dark',
                                }),
                                (0, a.jsx)(
                                  k,
                                  {
                                    routeTree: t,
                                    breadcrumbs: r,
                                    isForceExpanded: i,
                                  },
                                  i ? 'mobile-overlay' : 'desktop-or-hidden'
                                ),
                              ],
                            }),
                            (0, a.jsx)('div', {className: 'h-16'}),
                          ],
                        }),
                        (0, a.jsx)('div', {
                          className: 'fixed bottom-0 hidden lg:block',
                          children: (0, a.jsx)(d, {}),
                        }),
                      ],
                    }),
                  }),
              ],
            }),
          ],
        });
      }
      function tl(e) {
        let t,
          r,
          {
            children: n,
            toc: i,
            routeTree: d,
            meta: c,
            section: x,
            languages: h = null,
          } = e,
          {asPath: m} = (0, l.useRouter)(),
          u = m.split(/[\?\#]/)[0],
          {
            route: p,
            nextRoute: f,
            prevRoute: g,
            breadcrumbs: j,
            order: w,
          } = (function (e, t) {
            let r = (function e(t, r) {
                let a =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : [];
                if (r.path === t) return a;
                if (!r.routes) return [];
                for (let s of r.routes) {
                  let l = e(t, s, [...a, r]);
                  if (null == l ? void 0 : l.length) return l;
                }
                return [];
              })(e, t),
              a = {currentIndex: 0};
            !(function e(t, r, a) {
              a.currentIndex++;
              let {routes: s} = r;
              if (
                (a.route && !a.nextRoute && (a.nextRoute = r),
                r.path === t &&
                  ((a.route = r),
                  (a.order = a.currentIndex),
                  (a.nextRoute = void 0)),
                a.route || (a.prevRoute = r),
                s)
              )
                for (let r of s) e(t, r, a);
            })(e, t, a);
            let {currentIndex: s, ...l} = a;
            return {...l, breadcrumbs: r.length > 0 ? r : [t]};
          })(u, d),
          C = c.title || (null == p ? void 0 : p.title) || '',
          b = c.canary || !1,
          v = c.description || (null == p ? void 0 : p.description) || '',
          k = '/' === u,
          R = '/blog' === u;
        t = k
          ? (0, a.jsx)(en, {})
          : (0, a.jsxs)('div', {
              className: 'ps-0',
              children: [
                (0, a.jsx)('div', {
                  className: o()(
                    'blog' === x && 'mx-auto px-0 lg:px-4 max-w-5xl'
                  ),
                  children: (0, a.jsx)(W, {
                    title: C,
                    canary: b,
                    description: v,
                    tags: null == p ? void 0 : p.tags,
                    breadcrumbs: j,
                  }),
                }),
                (0, a.jsxs)('div', {
                  className: 'px-5 sm:px-12',
                  children: [
                    (0, a.jsx)('div', {
                      className: o()(
                        'max-w-7xl mx-auto',
                        'blog' === x && 'lg:flex lg:flex-col lg:items-center'
                      ),
                      children: (0, a.jsx)(z.d.Provider, {
                        value: i,
                        children: (0, a.jsx)(E.m.Provider, {
                          value: h,
                          children: n,
                        }),
                      }),
                    }),
                    !R && (0, a.jsx)(L, {route: p, nextRoute: f, prevRoute: g}),
                  ],
                }),
              ],
            });
        let H = !0,
          Z = !0,
          F = !0;
        return (
          k || R
            ? ((H = !1), (Z = !1), (F = !1))
            : 'blog' === x && ((F = !1), (H = !1), (Z = !1)),
          ('learn' !== x && ('blog' !== x || R)) || (r = w),
          (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(T, {
                title: C,
                titleForTitleTag: c.titleForTitleTag,
                isHomePage: k,
                image: '/images/og-' + x + '.png',
                searchOrder: r,
              }),
              (k || R) &&
                (0, a.jsx)(M(), {
                  children: (0, a.jsx)('link', {
                    rel: 'alternate',
                    type: 'application/rss+xml',
                    title: 'React Blog RSS Feed',
                    href: '/rss.xml',
                  }),
                }),
              (0, a.jsx)(ts, {section: x, routeTree: d, breadcrumbs: j}),
              (0, a.jsxs)('div', {
                className: o()(
                  H &&
                    'grid grid-cols-only-content lg:grid-cols-sidebar-content 2xl:grid-cols-sidebar-content-toc'
                ),
                children: [
                  Z &&
                    (0, a.jsx)('div', {
                      className: 'lg:-mt-16 z-10',
                      children: (0, a.jsx)('div', {
                        className:
                          'fixed top-0 py-0 shadow lg:pt-16 lg:sticky start-0 end-0 lg:shadow-none',
                        children: (0, a.jsx)(
                          y,
                          {routeTree: d, breadcrumbs: j},
                          x
                        ),
                      }),
                    }),
                  (0, a.jsx)(s.Suspense, {
                    fallback: null,
                    children: (0, a.jsxs)('main', {
                      className: 'min-w-0 isolate',
                      children: [
                        (0, a.jsx)(
                          'article',
                          {
                            className:
                              'font-normal break-words text-primary dark:text-primary-dark',
                            children: t,
                          },
                          m
                        ),
                        (0, a.jsxs)('div', {
                          className: o()(
                            'self-stretch w-full',
                            k && 'bg-wash dark:bg-gray-95 mt-[-1px]'
                          ),
                          children: [
                            !k &&
                              (0, a.jsx)('div', {
                                className:
                                  'w-full px-5 pt-10 mx-auto sm:px-12 md:px-12 md:pt-12 lg:pt-10',
                                children: (0, a.jsx)('hr', {
                                  className:
                                    'mx-auto max-w-7xl border-border dark:border-border-dark',
                                }),
                              }),
                            (0, a.jsx)('div', {
                              className: o()(
                                'py-12 px-5 sm:px-12 md:px-12 sm:py-12 md:py-16 lg:py-14',
                                k && 'lg:pt-0'
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, a.jsx)('div', {
                    className: 'hidden -mt-16 lg:max-w-custom-xs 2xl:block',
                    children:
                      F && i.length > 0 && (0, a.jsx)(N, {headings: i}, m),
                  }),
                ],
              }),
            ],
          })
        );
      }
      Promise.all([r.e(762), r.e(850), r.e(300)]).then(r.bind(r, 42825));
    },
    7803: function (e, t, r) {
      'use strict';
      var a = r(85893);
      r(67294);
      var s = r(41664),
        l = r.n(s);
      t.Z = function (e) {
        let {title: t, badge: r, date: s, icon: n, url: i, children: o} = e;
        return (0, a.jsx)(l(), {
          href: i,
          passHref: !0,
          className:
            'block h-full w-full rounded-2xl outline-none focus:outline-none focus-visible:outline focus-visible:outline-link focus:outline-offset-2 focus-visible:dark:focus:outline-link-dark',
          children: (0, a.jsxs)('div', {
            className:
              'justify-between p-5 sm:p-5 cursor-pointer w-full h-full flex flex-col flex-1 shadow-secondary-button-stroke dark:shadow-secondary-button-stroke-dark hover:bg-gray-40/5 active:bg-gray-40/10  hover:dark:bg-gray-60/5 active:dark:bg-gray-60/10 rounded-2xl text-xl text-primary dark:text-primary-dark leading-relaxed',
            children: [
              (0, a.jsx)('div', {
                className: 'flex flex-row gap-3 w-full',
                children: (0, a.jsx)('h2', {
                  className:
                    'font-semibold flex-1 text-2xl lg:text-3xl hover:underline leading-snug mb-4',
                  children: t,
                }),
              }),
              (0, a.jsxs)('div', {
                children: [
                  (0, a.jsxs)('div', {
                    className:
                      'flex flex-row justify-start gap-2 items-center text-base text-tertiary dark:text-tertiary-dark',
                    children: [
                      'labs' === n &&
                        (0, a.jsx)('svg', {
                          className:
                            'w-6 h-6 text-tertiary dark:text-tertiary-dark',
                          viewBox: '0 0 72 72',
                          fill: 'none',
                          xmlns: 'http://www.w3.org/2000/svg',
                          children: (0, a.jsx)('path', {
                            fillRule: 'evenodd',
                            clipRule: 'evenodd',
                            d: 'M27.4865 9C25.8297 9 24.4865 10.3431 24.4865 12C24.4865 13.6569 25.8297 15 27.4865 15V31.1087C27.4865 32.3397 27.1078 33.5409 26.4019 34.5494L13.095 53.5592C10.3114 57.5359 13.1563 63 18.0104 63H54.9626C59.8167 63 62.6616 57.5359 59.878 53.5592L46.5711 34.5494C45.8652 33.5409 45.4865 32.3397 45.4865 31.1087V15C47.1434 15 48.4865 13.6569 48.4865 12C48.4865 10.3431 47.1434 9 45.4865 9H27.4865ZM39.4865 31.1087V15H33.4865V31.1087C33.4865 33.5707 32.7292 35.9732 31.3173 37.9902L28.5104 42H44.4626L41.6557 37.9902C40.2438 35.9732 39.4865 33.5707 39.4865 31.1087ZM18.0104 57L24.3104 48H48.6626L54.9626 57H18.0104Z',
                            fill: 'currentColor',
                          }),
                        }),
                      'blog' === n &&
                        (0, a.jsx)('svg', {
                          className:
                            'w-6 h-6 text-tertiary dark:text-tertiary-dark',
                          viewBox: '0 0 72 72',
                          fill: 'none',
                          xmlns: 'http://www.w3.org/2000/svg',
                          children: (0, a.jsx)('path', {
                            fillRule: 'evenodd',
                            clipRule: 'evenodd',
                            d: 'M12.7101 56.3758C13.0724 56.7251 13.6324 57 14.3887 57H57.6113C58.3676 57 58.9276 56.7251 59.2899 56.3758C59.6438 56.0346 59.8987 55.5407 59.9086 54.864C59.9354 53.022 59.9591 50.7633 59.9756 48H12.0244C12.0409 50.7633 12.0645 53.022 12.0914 54.864C12.1013 55.5407 12.3562 56.0346 12.7101 56.3758ZM12.0024 42H59.9976C59.9992 41.0437 60 40.0444 60 39C60 29.5762 59.9327 22.5857 59.8589 17.7547C59.8359 16.2516 58.6168 15 56.9938 15L15.0062 15C13.3832 15 12.1641 16.2516 12.1411 17.7547C12.0673 22.5857 12 29.5762 12 39C12 40.0444 12.0008 41.0437 12.0024 42ZM65.8582 17.6631C65.7843 12.8227 61.8348 9 56.9938 9H15.0062C10.1652 9 6.21572 12.8227 6.1418 17.6631C6.06753 22.5266 6 29.5477 6 39C6 46.2639 6.03988 51.3741 6.09205 54.9515C6.15893 59.537 9.80278 63 14.3887 63H57.6113C62.1972 63 65.8411 59.537 65.9079 54.9515C65.9601 51.3741 66 46.2639 66 39C66 29.5477 65.9325 22.5266 65.8582 17.6631ZM39 21C37.3431 21 36 22.3431 36 24C36 25.6569 37.3431 27 39 27H51C52.6569 27 54 25.6569 54 24C54 22.3431 52.6569 21 51 21H39ZM36 33C36 31.3431 37.3431 30 39 30H51C52.6569 30 54 31.3431 54 33C54 34.6569 52.6569 36 51 36H39C37.3431 36 36 34.6569 36 33ZM24 33C27.3137 33 30 30.3137 30 27C30 23.6863 27.3137 21 24 21C20.6863 21 18 23.6863 18 27C18 30.3137 20.6863 33 24 33Z',
                            fill: 'currentColor',
                          }),
                        }),
                      s,
                      r
                        ? (0, a.jsx)('div', {
                            className:
                              'h-fit px-1 bg-highlight dark:bg-highlight-dark rounded uppercase text-link dark:text-link-dark font-bold tracking-wide text-xs whitespace-nowrap',
                            children: 'New',
                          })
                        : null,
                    ],
                  }),
                  (0, a.jsx)('span', {
                    className:
                      'text-base text-secondary dark:text-secondary-dark',
                    children: o,
                  }),
                  null != o &&
                    (0, a.jsx)('div', {
                      className:
                        'text-link text-base dark:text-link-dark hover:underline mt-4',
                      children: '阅读更多有关内容',
                    }),
                ],
              }),
            ],
          }),
        });
      };
    },
    27935: function (e, t, r) {
      'use strict';
      var a = r(85893),
        s = r(67294),
        l = r(94184),
        n = r.n(l);
      let i = (0, s.lazy)(() =>
        Promise.all([r.e(762), r.e(850), r.e(300)]).then(r.bind(r, 42825))
      );
      t.Z = (0, s.memo)(function (e) {
        let {children: t, isFromPackageImport: r} = e;
        return (0,
        a.jsx)(s.Suspense, {fallback: (0, a.jsx)('pre', {translate: 'no', dir: 'ltr', className: n()('rounded-lg leading-6 h-full w-full overflow-x-auto flex items-center bg-wash dark:bg-gray-95 shadow-lg text-[13.6px] overflow-hidden', !r && 'my-8'), children: (0, a.jsx)('div', {className: 'py-[18px] ps-5 font-normal ', children: (0, a.jsx)('p', {className: 'sp-pre-placeholder overflow-hidden', children: t})})}), children: (0, a.jsx)(i, {...e})});
      });
    },
    40186: function (e, t, r) {
      'use strict';
      r.d(t, {
        H1: function () {
          return o;
        },
        H2: function () {
          return d;
        },
        H3: function () {
          return c;
        },
        H4: function () {
          return x;
        },
        H5: function () {
          return h;
        },
      });
      var a = r(85893),
        s = r(94184),
        l = r.n(s),
        n = r(67294);
      let i = n.forwardRef(function (e, t) {
          let {
              as: r = 'div',
              className: s,
              children: n,
              id: i,
              isPageAnchor: o = !0,
              ...d
            } = e,
            c = 'Link for this heading';
          return (
            'string' == typeof n && (c = 'Link for ' + n),
            (0, a.jsxs)(r, {
              id: i,
              ...d,
              ref: t,
              className: l()('mdx-heading', s),
              children: [
                n,
                o &&
                  (0, a.jsx)('a', {
                    href: '#'.concat(i),
                    'aria-label': c,
                    title: c,
                    className: l()(
                      'mdx-header-anchor',
                      'h1' === r ? 'hidden' : 'inline-block'
                    ),
                    children: (0, a.jsx)('svg', {
                      width: '1em',
                      height: '1em',
                      viewBox: '0 0 13 13',
                      xmlns: 'http://www.w3.org/2000/svg',
                      className: 'text-gray-70 ms-2 h-5 w-5',
                      children: (0, a.jsxs)('g', {
                        fill: 'currentColor',
                        fillRule: 'evenodd',
                        children: [
                          (0, a.jsx)('path', {
                            d: 'M7.778 7.975a2.5 2.5 0 0 0 .347-3.837L6.017 2.03a2.498 2.498 0 0 0-3.542-.007 2.5 2.5 0 0 0 .006 3.543l1.153 1.15c.07-.29.154-.563.25-.773.036-.077.084-.16.14-.25L3.18 4.85a1.496 1.496 0 0 1 .002-2.12 1.496 1.496 0 0 1 2.12 0l2.124 2.123a1.496 1.496 0 0 1-.333 2.37c.16.246.42.504.685.752z',
                          }),
                          (0, a.jsx)('path', {
                            d: 'M5.657 4.557a2.5 2.5 0 0 0-.347 3.837l2.108 2.108a2.498 2.498 0 0 0 3.542.007 2.5 2.5 0 0 0-.006-3.543L9.802 5.815c-.07.29-.154.565-.25.774-.036.076-.084.16-.14.25l.842.84c.585.587.59 1.532 0 2.122-.587.585-1.532.59-2.12 0L6.008 7.68a1.496 1.496 0 0 1 .332-2.372c-.16-.245-.42-.503-.685-.75z',
                          }),
                        ],
                      }),
                    }),
                  }),
              ],
            })
          );
        }),
        o = (e) => {
          let {className: t, ...r} = e;
          return (0, a.jsx)(i, {
            as: 'h1',
            className: l()(t, 'text-5xl font-display font-bold leading-tight'),
            ...r,
          });
        },
        d = (e) => {
          let {className: t, ...r} = e;
          return (0, a.jsx)(i, {
            as: 'h2',
            className: l()(
              'text-3xl font-display leading-10 text-primary dark:text-primary-dark font-bold my-6',
              t
            ),
            ...r,
          });
        },
        c = (e) => {
          let {className: t, ...r} = e;
          return (0, a.jsx)(i, {
            as: 'h3',
            className: l()(
              t,
              'text-2xl font-display leading-9 text-primary dark:text-primary-dark font-bold my-6'
            ),
            ...r,
          });
        },
        x = (e) => {
          let {className: t, ...r} = e;
          return (0, a.jsx)(i, {
            as: 'h4',
            className: l()(t, 'text-xl font-display font-bold leading-9 my-4'),
            ...r,
          });
        },
        h = (e) => {
          let {className: t, ...r} = e;
          return (0, a.jsx)(i, {
            as: 'h5',
            className: l()(t, 'text-lg font-display font-bold leading-9 my-2'),
            ...r,
          });
        };
    },
    550: function (e, t, r) {
      'use strict';
      r.d(t, {
        m: function () {
          return s;
        },
      });
      var a = r(67294);
      let s = (0, a.createContext)(null);
    },
    39742: function (e, t, r) {
      'use strict';
      var a = r(85893),
        s = r(67294),
        l = r(41664),
        n = r.n(l),
        i = r(94184),
        o = r.n(i),
        d = r(85178);
      t.Z = function (e) {
        let {href: t, className: r, children: l, ...i} = e,
          c =
            'inline text-link dark:text-link-dark border-b border-link border-opacity-0 hover:border-opacity-100 duration-100 ease-in transition leading-normal',
          x = s.Children.toArray(l).map((e) => {
            var t, r;
            return (null === (t = e.type) || void 0 === t
              ? void 0
              : t.mdxName) &&
              (null === (r = e.type) || void 0 === r ? void 0 : r.mdxName) ===
                'inlineCode'
              ? (0, s.cloneElement)(e, {isLink: !0})
              : e;
          });
        return t
          ? (0, a.jsx)(a.Fragment, {
              children: t.startsWith('https://')
                ? (0, a.jsx)(d.d, {
                    href: t,
                    className: o()(c, r),
                    ...i,
                    children: x,
                  })
                : t.startsWith('#')
                ? (0, a.jsx)('a', {
                    className: o()(c, r),
                    href: t,
                    ...i,
                    children: x,
                  })
                : (0, a.jsx)(n(), {
                    href: t,
                    className: o()(c, r),
                    ...i,
                    children: x,
                  }),
            })
          : (0, a.jsx)('a', {href: t, className: r, ...i});
      };
    },
    64715: function (e, t, r) {
      'use strict';
      r.d(t, {
        t: function () {
          return eN;
        },
      });
      var a,
        s,
        l = r(85893),
        n = r(67294),
        i = r(94184),
        o = r.n(i),
        d = r(27935);
      let c = (0, n.memo)(function (e) {
          let {className: t} = e;
          return (0,
          l.jsx)('svg', {className: t, width: '2em', height: '2em', viewBox: '0 0 72 72', xmlns: 'http://www.w3.org/2000/svg', children: (0, l.jsx)('g', {children: (0, l.jsx)('path', {fillRule: 'evenodd', clipRule: 'evenodd', d: 'M36 63C50.9117 63 63 50.9117 63 36C63 21.0883 50.9117 9 36 9C21.0883 9 9 21.0883 9 36C9 50.9117 21.0883 63 36 63ZM36 69C54.2254 69 69 54.2254 69 36C69 17.7746 54.2254 3 36 3C17.7746 3 3 17.7746 3 36C3 54.2254 17.7746 69 36 69ZM39.7515 47.9926C39.7515 49.7926 38.5015 50.9926 36.0015 50.9926C33.5015 50.9926 32.2515 49.7926 32.2515 47.9926C32.2515 46.1926 33.5015 44.9926 36.0015 44.9926C38.5015 44.9926 39.7515 46.1926 39.7515 47.9926ZM38.6265 23.6199C38.6265 22.1701 37.4512 20.9949 36.0015 20.9949C34.5517 20.9949 33.3765 22.1701 33.3765 23.6199V38.5443C33.3765 39.9941 34.5517 41.1693 36.0015 41.1693C37.4512 41.1693 38.6265 39.9941 38.6265 38.5443V23.6199Z', fill: 'currentColor'})})});
        }),
        x = (0, n.memo)(function (e) {
          let {className: t} = e;
          return (0,
          l.jsxs)('svg', {className: t, width: '1.33em', height: '1.33em', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', children: [(0, l.jsx)('circle', {cx: '10.1626', cy: '9.99951', r: '9.47021', fill: 'currentColor'}), (0, l.jsx)('path', {d: 'M6.22705 5.95996L14.2798 14.0127', stroke: 'white'}), (0, l.jsx)('path', {d: 'M14.2798 5.95996L6.22705 14.0127', stroke: 'white'})]});
        }),
        h = (e) => {
          let {
            width: t = '60px',
            height: r = '17px',
            className: a,
            customStyles: s,
          } = e;
          return (0, l.jsx)('div', {
            className: a,
            style: {width: t, height: r, ...s},
          });
        },
        m = (0, n.memo)(function (e) {
          let {className: t} = e;
          return (0,
          l.jsxs)('svg', {className: t, width: '2em', height: '2em', viewBox: '0 0 72 72', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: [(0, l.jsxs)('g', {clipPath: 'url(#clip0_40_48064)', children: [(0, l.jsx)('path', {d: 'M24 27C24 25.3431 25.3431 24 27 24H45C46.6569 24 48 25.3431 48 27C48 28.6569 46.6569 30 45 30H27C25.3431 30 24 28.6569 24 27Z', fill: 'currentColor'}), (0, l.jsx)('path', {d: 'M24 39C24 37.3431 25.3431 36 27 36H39C40.6569 36 42 37.3431 42 39C42 40.6569 40.6569 42 39 42H27C25.3431 42 24 40.6569 24 39Z', fill: 'currentColor'}), (0, l.jsx)('path', {fillRule: 'evenodd', clipRule: 'evenodd', d: 'M12 18C12 13.0294 16.0294 9 21 9H51C55.9706 9 60 13.0294 60 18V54C60 58.9706 55.9706 63 51 63H21C16.0294 63 12 58.9706 12 54V18ZM21 15H51C52.6569 15 54 16.3431 54 18V54C54 55.6569 52.6569 57 51 57H21C19.3431 57 18 55.6569 18 54V18C18 16.3431 19.3431 15 21 15Z', fill: 'currentColor'})]}), (0, l.jsx)('defs', {children: (0, l.jsx)('clipPath', {id: 'clip0_40_48064', children: (0, l.jsx)('rect', {width: '72', height: '72', fill: 'white'})})})]});
        }),
        u = (0, n.memo)(function (e) {
          let {className: t} = e;
          return (0,
          l.jsxs)('svg', {className: t, width: '2em', height: '2em', viewBox: '0 0 72 72', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: [(0, l.jsx)('g', {clipPath: 'url(#clip0_738_836)', children: (0, l.jsx)('path', {fillRule: 'evenodd', clipRule: 'evenodd', d: 'M27 48L27 57.3409L40.0772 48L55.6975 48C57.1595 48 58.1986 47.0112 58.3851 45.8604C59.1824 40.9398 60 34.619 60 29.625C60 24.7282 59.2125 18.7546 58.4302 14.0813C58.2445 12.9721 57.2326 12 55.7805 12L16.2195 12C14.7674 12 13.7555 12.9721 13.5698 14.0813C12.7875 18.7546 12 24.7282 12 29.625C12 34.619 12.8176 40.9398 13.6149 45.8604C13.8014 47.0112 14.8404 48 16.3025 48H27ZM42 54H55.6975C59.9534 54 63.6271 51.0213 64.3078 46.8201C65.1161 41.8322 66 35.1209 66 29.625C66 24.2196 65.1449 17.8522 64.3478 13.0906C63.6513 8.93026 59.9987 6 55.7805 6H16.2195C12.0013 6 8.34867 8.93026 7.65218 13.0906C6.85505 17.8522 6 24.2196 6 29.625C6 35.1209 6.88391 41.8322 7.69215 46.8201C8.37291 51.0213 12.0466 54 16.3025 54H21L21 63.1704C21 65.6106 23.7581 67.0299 25.7437 65.6116L42 54ZM39 39.3686C39 40.9422 38 41.9912 36 41.9912C34 41.9912 33 40.9422 33 39.3686C33 37.7951 34 36.746 36 36.746C38 36.746 39 37.7951 39 39.3686ZM38.1771 20.2412C38.1771 18.9986 37.1697 17.9912 35.9271 17.9912C34.6845 17.9912 33.6771 18.9986 33.6771 20.2412V31.5956C33.6771 32.8382 34.6845 33.8456 35.9271 33.8456C37.1697 33.8456 38.1771 32.8382 38.1771 31.5956V20.2412Z', fill: 'currentColor'})}), (0, l.jsx)('defs', {children: (0, l.jsx)('clipPath', {id: 'clip0_738_836', children: (0, l.jsx)('rect', {width: '72', height: '72', fill: 'white'})})})]});
        });
      var p = r(63696);
      let f = {
        deprecated: {
          title: '已废弃',
          Icon: c,
          containerClasses: 'bg-red-5 dark:bg-red-60 dark:bg-opacity-20',
          textColor: 'text-red-50 dark:text-red-40',
          overlayGradient:
            'linear-gradient(rgba(249, 247, 243, 0), rgba(249, 247, 243, 1)',
        },
        note: {
          title: '注意',
          Icon: m,
          containerClasses:
            'bg-green-5 dark:bg-green-60 dark:bg-opacity-20 text-primary dark:text-primary-dark text-lg',
          textColor: 'text-green-60 dark:text-green-40',
          overlayGradient:
            'linear-gradient(rgba(245, 249, 248, 0), rgba(245, 249, 248, 1)',
        },
        canary: {
          title: 'Canary',
          Icon: p.t,
          containerClasses:
            'bg-gray-5 dark:bg-gray-60 dark:bg-opacity-20 text-primary dark:text-primary-dark text-lg',
          textColor: 'text-gray-60 dark:text-gray-30',
          overlayGradient:
            'linear-gradient(rgba(245, 249, 248, 0), rgba(245, 249, 248, 1)',
        },
        pitfall: {
          title: '陷阱',
          Icon: u,
          containerClasses: 'bg-yellow-5 dark:bg-yellow-60 dark:bg-opacity-20',
          textColor: 'text-yellow-50 dark:text-yellow-40',
          overlayGradient:
            'linear-gradient(rgba(249, 247, 243, 0), rgba(249, 247, 243, 1)',
        },
        wip: {
          title: '正在建设中',
          Icon: m,
          containerClasses: 'bg-yellow-5 dark:bg-yellow-60 dark:bg-opacity-20',
          textColor: 'text-yellow-50 dark:text-yellow-40',
          overlayGradient:
            'linear-gradient(rgba(249, 247, 243, 0), rgba(249, 247, 243, 1)',
        },
      };
      var g = function (e) {
          let {children: t, type: r = 'note'} = e,
            a = f[r];
          return (0, l.jsxs)('div', {
            className: o()(
              'expandable-callout',
              'pt-8 pb-4 px-5 sm:px-8 my-8 relative rounded-none shadow-inner-border -mx-5 sm:mx-auto sm:rounded-2xl',
              a.containerClasses
            ),
            children: [
              (0, l.jsxs)('h3', {
                className: o()('text-2xl font-display font-bold', a.textColor),
                children: [
                  (0, l.jsx)(a.Icon, {
                    className: o()('inline me-3 mb-1 text-lg', a.textColor),
                  }),
                  a.title,
                ],
              }),
              (0, l.jsx)('div', {
                className: 'relative',
                children: (0, l.jsx)('div', {className: 'py-2', children: t}),
              }),
            ],
          });
        },
        j = r(1255);
      let w = (0, n.memo)(function (e) {
          let {className: t} = e;
          return (0,
          l.jsx)('svg', {className: t, width: '1.5em', height: '1.5em', viewBox: '0 0 72 72', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, l.jsx)('path', {fillRule: 'evenodd', clipRule: 'evenodd', d: 'M34.7409 59.7228L32.9567 58.9094C27.2672 56.3157 20.7328 56.3157 15.0433 58.9094C12.6018 60.0224 9.39163 59.0275 8.44602 56.0621C7.45647 52.9589 5.99975 46.5898 6 35.9997C6.00029 23.5648 8.00803 18.3599 9.11099 16.4196C9.67795 15.4222 10.5255 14.8455 11.2254 14.5264L12.0179 14.1651C19.6351 10.6926 28.4011 10.6738 36 14.1733C43.5989 10.6738 52.3649 10.6926 59.9821 14.1651L60.7746 14.5264C61.4745 14.8455 62.3221 15.4222 62.889 16.4196C63.992 18.3599 65.9997 23.5648 66 35.9997C66.0002 46.5898 64.5435 52.9589 63.554 56.0621C62.6084 59.0275 59.3982 60.0224 56.9567 58.9094C51.2672 56.3157 44.7328 56.3157 39.0433 58.9094L37.2591 59.7228C37.1986 59.7508 37.1373 59.7767 37.0753 59.8004C36.4484 60.0411 35.7556 60.0653 35.1102 59.8648C34.9847 59.8258 34.8613 59.7784 34.7409 59.7228ZM14.5068 19.6246C20.3733 16.9501 27.0874 16.8775 33 19.4067V52.473C26.7613 50.32 19.9378 50.471 13.7811 52.9261C13.0005 49.9843 11.9998 44.547 12 35.9998C12.0002 25.5786 13.4879 21.1893 14.1179 19.8018L14.5068 19.6246ZM39 52.473C45.2387 50.32 52.0622 50.471 58.2189 52.9261C58.9995 49.9843 60.0002 44.547 60 35.9998C59.9998 25.5786 58.5121 21.1893 57.8821 19.8018L57.4932 19.6246C51.6267 16.9501 44.9126 16.8775 39 19.4067V52.473Z', fill: 'currentColor'})});
        }),
        C = (0, n.memo)(function (e) {
          let {className: t} = e;
          return (0,
          l.jsx)('svg', {className: t, width: '1.33em', height: '1em', viewBox: '0 0 24 18', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, l.jsx)('path', {d: 'M24 9L18.343 14.657L16.929 13.243L21.172 9L16.929 4.757L18.343 3.343L24 9ZM2.828 9L7.071 13.243L5.657 14.657L0 9L5.657 3.343L7.07 4.757L2.828 9ZM9.788 18H7.66L14.212 0H16.34L9.788 18Z', fill: 'currentColor'})});
        });
      function b(e) {
        let {
          children: t,
          onClick: r,
          active: a = !1,
          className: s,
          style: n,
        } = e;
        return (0, l.jsx)('button', {
          style: n,
          onMouseDown: (e) => {
            e.preventDefault(), e.stopPropagation();
          },
          onClick: r,
          className: o()(
            s,
            'text-base leading-tight font-bold rounded-full py-2 px-4 focus:outline focus:outline-offset-2 focus:outline-link dark:focus:outline-link-dark inline-flex items-center my-1',
            {
              'bg-link border-link text-white hover:bg-link focus:bg-link active:bg-link':
                a,
              'bg-transparent text-primary dark:text-primary-dark active:text-primary shadow-secondary-button-stroke dark:shadow-secondary-button-stroke-dark hover:bg-gray-40/5 active:bg-gray-40/10  hover:dark:bg-gray-60/5 active:dark:bg-gray-60/10':
                !a,
            }
          ),
          children: t,
        });
      }
      var v = r(40186),
        k = r(11163),
        y = function (e) {
          let {children: t, excerpt: r, type: a} = e;
          if (!Array.isArray(t) || 'h4' !== t[0].type.mdxName)
            throw Error(
              'Expandable content '.concat(
                a,
                ' is missing a corresponding title at the beginning'
              )
            );
          let s = '深入探讨' === a,
            i = '示例' === a,
            d = t[0].props.id,
            {asPath: c} = (0, k.useRouter)(),
            x = d === c.split('#')[1],
            h = (0, n.useRef)(x),
            [m, u] = (0, n.useState)(!1);
          return (
            (0, n.useEffect)(() => {
              h.current && ((h.current = !1), u(!0));
            }, []),
            (0, l.jsxs)('details', {
              open: m,
              onToggle: (e) => {
                u(e.currentTarget.open);
              },
              className: o()(
                'my-12 rounded-2xl shadow-inner-border dark:shadow-inner-border-dark relative',
                {
                  'dark:bg-opacity-20 dark:bg-purple-60 bg-purple-5': s,
                  'dark:bg-opacity-20 dark:bg-yellow-60 bg-yellow-5': i,
                }
              ),
              children: [
                (0, l.jsxs)('summary', {
                  className: 'list-none p-8',
                  tabIndex: -1,
                  onClick: (e) => {
                    e.target instanceof SVGElement || e.preventDefault();
                  },
                  children: [
                    (0, l.jsxs)('h5', {
                      className: o()(
                        'mb-4 uppercase font-bold flex items-center text-sm',
                        {
                          'dark:text-purple-30 text-purple-50': s,
                          'dark:text-yellow-30 text-yellow-60': i,
                        }
                      ),
                      children: [
                        s &&
                          (0, l.jsxs)(l.Fragment, {
                            children: [
                              (0, l.jsx)(w, {
                                className:
                                  'inline me-2 dark:text-purple-30 text-purple-40',
                              }),
                              '深入探讨',
                            ],
                          }),
                        i &&
                          (0, l.jsxs)(l.Fragment, {
                            children: [
                              (0, l.jsx)(C, {
                                className:
                                  'inline me-2 dark:text-yellow-30 text-yellow-50',
                              }),
                              '示例',
                            ],
                          }),
                      ],
                    }),
                    (0, l.jsxs)('div', {
                      className: 'mb-4',
                      children: [
                        (0, l.jsx)(v.H4, {
                          id: d,
                          className:
                            'text-xl font-bold text-primary dark:text-primary-dark',
                          children: t[0].props.children,
                        }),
                        r && (0, l.jsx)('div', {children: r}),
                      ],
                    }),
                    (0, l.jsxs)(b, {
                      active: !0,
                      className: o()({
                        'bg-purple-50 border-purple-50 hover:bg-purple-40 focus:bg-purple-50 active:bg-purple-50':
                          s,
                        'bg-yellow-50 border-yellow-50 hover:bg-yellow-40 focus:bg-yellow-50 active:bg-yellow-50':
                          i,
                      }),
                      onClick: () => u((e) => !e),
                      children: [
                        (0, l.jsx)('span', {
                          className: 'me-1',
                          children: (0, l.jsx)(j.g, {
                            displayDirection: m ? 'up' : 'down',
                          }),
                        }),
                        m ? '收起' : '显示更多',
                      ],
                    }),
                  ],
                }),
                (0, l.jsx)('div', {
                  className: o()('p-8 border-t', {
                    'dark:border-purple-60 border-purple-10 ': s,
                    'dark:border-yellow-60 border-yellow-50': i,
                  }),
                  children: t.slice(1),
                }),
              ],
            })
          );
        },
        N = function (e) {
          let {isLink: t, ...r} = e;
          return (0, l.jsx)('code', {
            dir: 'ltr',
            className: o()(
              'inline text-code text-secondary dark:text-secondary-dark px-1 rounded-md no-underline',
              {
                'bg-gray-30 bg-opacity-10 py-px': !t,
                'bg-highlight dark:bg-highlight-dark py-0': t,
              }
            ),
            ...r,
          });
        },
        L = r(7803),
        R = r(39742),
        H = r(82576);
      let M = (0, n.lazy)(() =>
          Promise.all([r.e(762), r.e(69), r.e(850), r.e(759), r.e(777)]).then(
            r.bind(r, 21851)
          )
        ),
        Z = (e) => {
          let {code: t} = e;
          return (0, l.jsx)('div', {
            className: 'sandpack sandpack--playground my-8',
            children: (0, l.jsx)('div', {
              className: 'sp-wrapper',
              children: (0, l.jsxs)('div', {
                className: 'shadow-lg dark:shadow-lg-dark rounded-lg',
                children: [
                  (0, l.jsxs)('div', {
                    className:
                      'bg-wash h-10 dark:bg-card-dark flex justify-between items-center relative z-10 border-b border-border dark:border-border-dark rounded-t-lg rounded-b-none',
                    children: [
                      (0, l.jsx)('div', {
                        className: 'px-4 lg:px-6',
                        children: (0, l.jsx)('div', {className: 'sp-tabs'}),
                      }),
                      (0, l.jsx)('div', {
                        className:
                          'px-3 flex items-center justify-end grow text-right',
                      }),
                    ],
                  }),
                  (0, l.jsxs)('div', {
                    className:
                      'sp-layout min-h-[216px] flex items-stretch flex-wrap',
                    children: [
                      (0, l.jsx)('div', {
                        className:
                          'sp-stack sp-editor max-h-[406px] h-auto overflow-auto',
                        children: (0, l.jsx)('div', {
                          className: 'sp-code-editor',
                          children: (0, l.jsx)('div', {
                            className: 'sp-cm sp-pristine',
                            children: (0, l.jsx)('div', {
                              className: 'cm-editor',
                              children: (0, l.jsx)('div', {
                                children: (0, l.jsx)('div', {
                                  className:
                                    'cm-gutters ps-9 sticky min-h-[192px]',
                                  children: (0, l.jsx)('div', {
                                    className:
                                      'cm-gutter cm-lineNumbers whitespace-pre sp-pre-placeholder',
                                    children: t,
                                  }),
                                }),
                              }),
                            }),
                          }),
                        }),
                      }),
                      (0, l.jsx)('div', {
                        className:
                          'sp-stack order-last xl:order-2 max-h-[406px] h-auto',
                        children: (0, l.jsx)('div', {
                          className:
                            'p-0 sm:p-2 md:p-4 lg:p-8 bg-card dark:bg-wash-dark h-full relative rounded-b-lg lg:rounded-b-none overflow-auto',
                        }),
                      }),
                      t.split('\n').length > 16 &&
                        (0, l.jsx)('div', {
                          className:
                            'flex h-[45px] text-base justify-between dark:border-card-dark bg-wash dark:bg-card-dark items-center z-10 rounded-t-none p-1 w-full order-2 xl:order-last border-b-1 relative top-0',
                        }),
                    ],
                  }),
                ],
              }),
            }),
          });
        };
      var F = (0, n.memo)(function (e) {
        let t;
        let r = (0, H.bX)(n.Children.toArray(e.children)),
          a = Object.keys(r).filter((e) => {
            var t, a;
            return (
              (null === (t = r[e]) || void 0 === t ? void 0 : t.active) ===
                !0 &&
              (null === (a = r[e]) || void 0 === a ? void 0 : a.hidden) === !1
            );
          });
        return (
          (t = a.length ? r[a[0]].code : r[H.pU].code),
          (0, l.jsx)(n.Suspense, {
            fallback: (0, l.jsx)(Z, {code: t}),
            children: (0, l.jsx)(M, {...e}),
          })
        );
      });
      function T(e, t) {
        return (0, l.jsx)(
          'pre',
          {
            children: (0, l.jsx)(N, {
              meta: e,
              className: 'language-js',
              children: t,
            }),
          },
          e
        );
      }
      var P = (0, n.memo)(function (e) {
          let t = [
            ...n.Children.toArray(e.children),
            T(
              'src/ShowRenderedHTML.js',
              "\nimport { renderToStaticMarkup } from 'react-dom/server';\nimport formatHTML from './formatHTML.js';\n\nexport default function ShowRenderedHTML({children}) {\n  const markup = renderToStaticMarkup(\n    <html>\n      <head />\n      <body>{children}</body>\n    </html>\n  );\n  return (\n    <>\n      <h1>Rendered HTML:</h1>\n      <pre>\n        {formatHTML(markup)}\n      </pre>\n    </>\n  );\n}"
            ),
            T(
              'src/formatHTML.js hidden',
              "\nimport format from 'html-format';\n\nexport default function formatHTML(markup) {\n  // Cheap tricks to format the HTML readably -- haven't been able to\n  // find a package that runs in browser and prettifies the HTML if it\n  // lacks line-breaks.\n  return format(markup\n    .replace('<html>', '<html>\\n')\n    .replace('<head>', '<head>\\n')\n    .replaceAll(/<\\/script>/g, '<\\/script>\\n')\n    .replaceAll(/<style([^>]*)\\/>/g, '<style $1/>\\n\\n')\n    .replaceAll(/<\\/style>/g, '\\n    <\\/style>\\n')\n    .replaceAll(/<link([^>]*)\\/>/g, '<link $1/>\\n')\n    .replaceAll(/<meta([^/]*)\\/>/g, '<meta $1/>\\n')\n    .replace('</head>', '</head>\\n')\n    .replace('<body>', '<body>\\n')\n    .replace('</body>', '\\n</body>\\n')\n    .replace('</h1>', '</h1>\\n')\n  );\n}\n"
            ),
            T(
              'package.json hidden',
              '\n{\n  "dependencies": {\n    "react": "18.3.0-canary-6db7f4209-20231021",\n    "react-dom": "18.3.0-canary-6db7f4209-20231021",\n    "react-scripts": "^5.0.0",\n    "html-format": "^1.1.2"\n  },\n  "main": "/index.js",\n  "devDependencies": {}\n}\n'
            ),
          ];
          return (0, l.jsx)(F, {...e, children: t});
        }),
        S = r(25675),
        _ = r.n(S);
      function V(e) {
        let {text: t} = e;
        return (0, l.jsx)('div', {
          className: 'w-full table',
          children: (0, l.jsx)('figcaption', {
            className:
              'p-1 sm:p-2 mt-0 sm:mt-0 text-gray-40 text-base lg:text-lg text-center leading-tight table-caption',
            children: t,
          }),
        });
      }
      var W = function (e) {
        let {title: t, children: r, className: a} = e;
        return (0, l.jsxs)('div', {
          className: o()(
            'p-6 xl:p-8 pb-4 xl:pb-6 bg-card dark:bg-card-dark rounded-2xl shadow-inner-border dark:shadow-inner-border-dark text-base text-secondary dark:text-secondary-dark my-8',
            a
          ),
          children: [
            (0, l.jsx)(v.H3, {
              className:
                'text-primary dark:text-primary-dark mt-0 mb-3 leading-tight',
              isPageAnchor: !1,
              children: t,
            }),
            r,
          ],
        });
      };
      let z = (0, n.memo)(function (e) {
        let {className: t} = e;
        return (0,
        l.jsx)('svg', {className: t, width: '1em', height: '1em', viewBox: '0 0 18 18', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, l.jsx)('path', {d: 'M2.40299 2.61279H14.403C14.5798 2.61279 14.7494 2.68303 14.8744 2.80806C14.9994 2.93308 15.0697 3.10265 15.0697 3.27946V13.9461C15.0697 14.1229 14.9994 14.2925 14.8744 14.4175C14.7494 14.5426 14.5798 14.6128 14.403 14.6128H2.40299C2.22618 14.6128 2.05661 14.5426 1.93159 14.4175C1.80657 14.2925 1.73633 14.1229 1.73633 13.9461V3.27946C1.73633 3.10265 1.80657 2.93308 1.93159 2.80806C2.05661 2.68303 2.22618 2.61279 2.40299 2.61279ZM8.403 10.6128V11.9461H12.403V10.6128H8.403ZM6.01233 8.61279L4.12699 10.4981L5.06966 11.4415L7.89833 8.61279L5.06966 5.78413L4.12699 6.72746L6.01233 8.61279Z', fill: 'currentColor'})});
      });
      var E = r(65104);
      function B(e) {
        let {type: t} = e;
        switch (t) {
          case 'warning':
            return (0, l.jsx)('span', {
              className: 'text-yellow-50 bg-none me-1',
              children: 'Warning: ',
            });
          case 'error':
            return (0, l.jsx)('span', {
              className: 'text-red-40 me-1',
              children: 'Error: ',
            });
          default:
            return null;
        }
      }
      var A = r(55611),
        I = r(59925);
      let G = (0, n.memo)(function (e) {
          let {className: t} = e;
          return (0,
          l.jsx)('svg', {className: o()('inline -mt-0.5', t), width: '12', height: '14', viewBox: '0 0 12 15', xmlns: 'http://www.w3.org/2000/svg', children: (0, l.jsx)('path', {d: 'M4.53487 11H5.21954V7.66665H6.55287V11H7.23754C7.32554 10.1986 7.7342 9.53732 8.39754 8.81532C8.47287 8.73398 8.9522 8.23732 9.00887 8.16665C9.47973 7.5784 9.77486 6.86913 9.86028 6.1205C9.9457 5.37187 9.81794 4.61434 9.4917 3.93514C9.16547 3.25594 8.65402 2.6827 8.01628 2.28143C7.37853 1.88016 6.64041 1.66719 5.88692 1.66703C5.13344 1.66686 4.39523 1.87953 3.75731 2.28052C3.11939 2.68152 2.60771 3.25454 2.28118 3.9336C1.95465 4.61266 1.82656 5.37014 1.91167 6.1188C1.99677 6.86747 2.2916 7.57687 2.7622 8.16532C2.81954 8.23665 3.3002 8.73398 3.3742 8.81465C4.0382 9.53732 4.44687 10.1986 4.53487 11ZM4.55287 12.3333V13H7.21954V12.3333H4.55287ZM1.7222 8.99998C1.09433 8.21551 0.700836 7.26963 0.587047 6.2713C0.473258 5.27296 0.643804 4.26279 1.07904 3.35715C1.51428 2.4515 2.19649 1.68723 3.04711 1.15237C3.89772 0.617512 4.88213 0.333824 5.88692 0.333984C6.89172 0.334145 7.87604 0.61815 8.72648 1.15328C9.57692 1.68841 10.2589 2.4529 10.6938 3.35869C11.1288 4.26447 11.299 5.27469 11.1849 6.27299C11.0708 7.27129 10.677 8.21705 10.0489 9.00132C9.63554 9.51598 8.55287 10.3333 8.55287 11.3333V13C8.55287 13.3536 8.41239 13.6927 8.16235 13.9428C7.9123 14.1928 7.57316 14.3333 7.21954 14.3333H4.55287C4.19925 14.3333 3.86011 14.1928 3.61006 13.9428C3.36001 13.6927 3.21954 13.3536 3.21954 13V11.3333C3.21954 10.3333 2.1362 9.51598 1.7222 8.99998Z', fill: 'currentColor'})});
        }),
        D = (0, n.memo)(function (e) {
          let {className: t} = e;
          return (0,
          l.jsx)('svg', {className: o()('inline', t), width: '0.75em', height: '0.75em', viewBox: '0 0 13 13', xmlns: 'http://www.w3.org/2000/svg', children: (0, l.jsx)('path', {d: 'M2.21908 8.74479V12.7448H0.885742V0.078125H7.14041C7.26418 0.0781911 7.3855 0.112714 7.49076 0.177827C7.59602 0.242939 7.68108 0.336071 7.73641 0.446792L8.21908 1.41146H12.2191C12.3959 1.41146 12.5655 1.4817 12.6905 1.60672C12.8155 1.73174 12.8857 1.90131 12.8857 2.07812V9.41146C12.8857 9.58827 12.8155 9.75784 12.6905 9.88286C12.5655 10.0079 12.3959 10.0781 12.2191 10.0781H7.96441C7.84063 10.0781 7.71932 10.0435 7.61406 9.97842C7.50879 9.91331 7.42374 9.82018 7.36841 9.70946L6.88574 8.74479H2.21908ZM2.21908 1.41146V7.41146H7.70974L8.37641 8.74479H11.5524V2.74479H7.39508L6.72841 1.41146H2.21908Z', fill: 'currentColor'})});
        }),
        O = (0, n.memo)(function (e) {
          let {displayDirection: t, className: r, ...a} = e,
            s = o()(r, {
              'rotate-180': 'left' === t,
              'rotate-180 rtl:rotate-0': 'start' === t,
              'rotate-90': 'down' === t,
            });
          return (0,
          l.jsx)('svg', {width: '1em', height: '1em', viewBox: '0 0 20 20', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', className: s, ...a, children: (0, l.jsx)('path', {d: 'M6.86612 13.6161C6.37796 14.1043 6.37796 14.8957 6.86612 15.3839C7.35427 15.872 8.14572 15.872 8.63388 15.3839L13.1339 10.8839C13.622 10.3957 13.622 9.60428 13.1339 9.11612L8.63388 4.61612C8.14572 4.12797 7.35427 4.12797 6.86612 4.61612C6.37796 5.10428 6.37796 5.89573 6.86612 6.38388L10.4822 10L6.86612 13.6161Z', fill: 'currentColor'})});
        });
      function q(e) {
        let {
            isRecipes: t,
            totalChallenges: r,
            currentChallenge: a,
            hasNextChallenge: s,
            handleClickNextChallenge: i,
          } = e,
          [d, c] = (0, n.useState)(!1),
          [x, h] = (0, n.useState)(!1),
          m = () => {
            x && !d && h(!1), c((e) => !e);
          },
          u = () => {
            d && !x && c(!1), h((e) => !e);
          };
        return (0, l.jsxs)('div', {
          className: 'p-5 sm:py-8 sm:px-8',
          children: [
            (0, l.jsxs)('div', {
              children: [
                (0, l.jsxs)(v.H4, {
                  className:
                    'text-xl text-primary dark:text-primary-dark mb-2 mt-0 font-medium',
                  id: a.id,
                  children: [
                    (0, l.jsxs)('div', {
                      className: 'font-bold block md:inline',
                      children: [
                        '第 ',
                        a.order,
                        ' 个',
                        t ? '示例' : '挑战',
                        ' 共',
                        ' ',
                        r,
                        ' 个挑战',
                        (0, l.jsx)('span', {
                          className: 'text-primary dark:text-primary-dark',
                          children: ': ',
                        }),
                      ],
                    }),
                    a.name,
                  ],
                }),
                a.content,
              ],
            }),
            (0, l.jsxs)('div', {
              className: 'flex justify-between items-center mt-4',
              children: [
                a.hint
                  ? (0, l.jsxs)('div', {
                      children: [
                        (0, l.jsxs)(b, {
                          className: 'me-2',
                          onClick: m,
                          active: d,
                          children: [
                            (0, l.jsx)(G, {className: 'me-1.5'}),
                            ' ',
                            d ? '隐藏提示' : '展示提示',
                          ],
                        }),
                        (0, l.jsxs)(b, {
                          className: 'me-2',
                          onClick: u,
                          active: x,
                          children: [
                            (0, l.jsx)(D, {className: 'me-1.5'}),
                            ' ',
                            x ? '隐藏答案' : '展示答案',
                          ],
                        }),
                      ],
                    })
                  : !t &&
                    (0, l.jsxs)(b, {
                      className: 'me-2',
                      onClick: u,
                      active: x,
                      children: [
                        (0, l.jsx)(D, {className: 'me-1.5'}),
                        ' ',
                        x ? '隐藏答案' : '展示答案',
                      ],
                    }),
                s &&
                  (0, l.jsxs)(b, {
                    className: o()(
                      t
                        ? 'bg-purple-50 border-purple-50 hover:bg-purple-50 focus:bg-purple-50 active:bg-purple-50'
                        : 'bg-link dark:bg-link-dark'
                    ),
                    onClick: i,
                    active: !0,
                    children: [
                      '下一个',
                      t ? '示例' : '挑战',
                      (0, l.jsx)(O, {
                        displayDirection: 'end',
                        className: 'block ms-1.5',
                      }),
                    ],
                  }),
              ],
            }),
            d && a.hint,
            x &&
              (0, l.jsxs)('div', {
                className: 'mt-6',
                children: [
                  (0, l.jsx)('h3', {
                    className:
                      'text-2xl font-bold text-primary dark:text-primary-dark',
                    children: '答案',
                  }),
                  a.solution,
                  (0, l.jsxs)('div', {
                    className: 'flex justify-between items-center mt-4',
                    children: [
                      (0, l.jsx)(b, {
                        onClick: () => h(!1),
                        children: '关闭答案',
                      }),
                      s &&
                        (0, l.jsxs)(b, {
                          className: o()(
                            t ? 'bg-purple-50' : 'bg-link dark:bg-link-dark'
                          ),
                          onClick: i,
                          active: !0,
                          children: [
                            '下一个挑战',
                            (0, l.jsx)(O, {
                              displayDirection: 'end',
                              className: 'block ms-1.5',
                            }),
                          ],
                        }),
                    ],
                  }),
                ],
              }),
          ],
        });
      }
      var J = r(20296);
      function U(e) {
        let {
            challenges: t,
            handleChange: r,
            currentChallenge: a,
            isRecipes: s,
          } = e,
          i = (0, n.useRef)(null),
          d = (0, n.useRef)(t.map(() => (0, n.createRef)())),
          c = a.order - 1,
          x = c > 0,
          h = c < t.length - 1,
          m = () => {
            if (c < t.length - 1) {
              let e = d.current[c + 1].current;
              e &&
                (i.current && (i.current.scrollLeft = e.offsetLeft), r(c + 1));
            }
          },
          u = () => {
            if (c > 0) {
              let e = d.current[c - 1].current;
              e &&
                (i.current && (i.current.scrollLeft = e.offsetLeft), r(c - 1));
            }
          },
          p = (e) => {
            let t = d.current[e].current;
            i.current &&
              (i.current.scrollLeft = (null == t ? void 0 : t.offsetLeft) || 0),
              r(e);
          },
          f = (0, n.useCallback)(() => {
            if (i.current) {
              var e;
              let t = i.current;
              t.scrollLeft =
                (null === (e = d.current[c].current) || void 0 === e
                  ? void 0
                  : e.offsetLeft) || 0;
            }
          }, [i, d, c]);
        return (
          (0, n.useEffect)(() => {
            f();
            let e = (0, J.debounce)(f, 200);
            return (
              window.addEventListener('resize', e),
              () => {
                window.removeEventListener('resize', e);
              }
            );
          }, [f]),
          (0, l.jsxs)('div', {
            className: 'flex items-center justify-between',
            children: [
              (0, l.jsx)('div', {
                className: 'overflow-hidden',
                children: (0, l.jsx)('div', {
                  ref: i,
                  className:
                    'flex relative transition-transform content-box overflow-x-auto',
                  children: t.map((e, t) => {
                    let {name: r, id: n, order: i} = e;
                    return (0, l.jsxs)(
                      'button',
                      {
                        className: o()(
                          'py-2 me-4 text-base border-b-4 duration-100 ease-in transition whitespace-nowrap text-ellipsis',
                          s &&
                            a.id === n &&
                            'text-purple-50 border-purple-50 hover:text-purple-50 dark:text-purple-30 dark:border-purple-30 dark:hover:text-purple-30',
                          !s &&
                            a.id === n &&
                            'text-link border-link hover:text-link dark:text-link-dark dark:border-link-dark dark:hover:text-link-dark'
                        ),
                        onClick: () => p(t),
                        ref: d.current[t],
                        children: [i, '. ', r],
                      },
                      'button-'.concat(n)
                    );
                  }),
                }),
              }),
              (0, l.jsxs)('div', {
                className: 'flex z-10 pb-2 ps-2',
                children: [
                  (0, l.jsx)('button', {
                    onClick: u,
                    'aria-label': 'Scroll left',
                    className: o()(
                      'bg-secondary-button dark:bg-secondary-button-dark h-8 px-2 rounded-l border-gray-20 border-r rtl:rotate-180',
                      {
                        'text-primary dark:text-primary-dark': x,
                        'text-gray-30': !x,
                      }
                    ),
                    children: (0, l.jsx)(j.g, {displayDirection: 'start'}),
                  }),
                  (0, l.jsx)('button', {
                    onClick: m,
                    'aria-label': 'Scroll right',
                    className: o()(
                      'bg-secondary-button dark:bg-secondary-button-dark h-8 px-2 rounded-e rtl:rotate-180',
                      {
                        'text-primary dark:text-primary-dark': h,
                        'text-gray-30': !h,
                      }
                    ),
                    children: (0, l.jsx)(j.g, {displayDirection: 'end'}),
                  }),
                ],
              }),
            ],
          })
        );
      }
      let K = (e) => {
        let t = [];
        if (!e) return t;
        let r = {},
          a = [];
        return (
          n.Children.forEach(e, (e) => {
            let {props: s, type: l} = e;
            switch (l.mdxName) {
              case 'Solution':
                (r.solution = e),
                  (r.content = a),
                  t.push(r),
                  (r = {}),
                  (a = []);
                break;
              case 'Hint':
                r.hint = e;
                break;
              case 'h4':
                (r.order = t.length + 1), (r.name = s.children), (r.id = s.id);
                break;
              default:
                a.push(e);
            }
          }),
          t
        );
      };
      function Y(e) {
        let {
            children: t,
            isRecipes: r,
            noTitle: a,
            titleText: i = r ? '尝试一些示例' : '尝试一些挑战',
            titleId: d = r ? 'examples' : 'challenges',
          } = e,
          c = K(t),
          x = c.length,
          h = (0, n.useRef)(null),
          m = (0, n.useRef)(s.INIT),
          [u, p] = (0, n.useState)(0),
          f = c[u],
          {asPath: g} = (0, k.useRouter)();
        (0, n.useEffect)(() => {
          if (m.current === s.INIT) {
            let e = c.findIndex((e) => e.id === g.split('#')[1]);
            -1 === e ? (m.current = void 0) : e !== u && p(e);
          }
          m.current &&
            (h.current.scrollIntoView({
              block: 'start',
              ...(m.current === s.NEXT && {behavior: 'smooth'}),
            }),
            (m.current = void 0));
        }, [u, g, c]);
        let j = (e) => {
            p(e);
          },
          w = r ? v.H4 : v.H2;
        return (0, l.jsx)('div', {
          className: 'max-w-7xl mx-auto py-4 w-full',
          children: (0, l.jsxs)('div', {
            className: o()(
              'border-gray-10 bg-card dark:bg-card-dark shadow-inner rounded-none -mx-5 sm:mx-auto sm:rounded-2xl'
            ),
            children: [
              (0, l.jsxs)('div', {
                ref: h,
                className: 'py-2 px-5 sm:px-8 pb-0 md:pb-0',
                children: [
                  !a &&
                    (0, l.jsx)(w, {
                      id: d,
                      className: o()(
                        'mb-2 leading-10 relative',
                        r
                          ? 'text-xl text-purple-50 dark:text-purple-30'
                          : 'text-3xl text-link'
                      ),
                      children: i,
                    }),
                  x > 1 &&
                    (0, l.jsx)(U, {
                      currentChallenge: f,
                      challenges: c,
                      handleChange: j,
                      isRecipes: r,
                    }),
                ],
              }),
              (0, l.jsx)(
                q,
                {
                  isRecipes: r,
                  currentChallenge: f,
                  totalChallenges: x,
                  hasNextChallenge: u < x - 1,
                  handleClickNextChallenge: () => {
                    p((e) => e + 1), (m.current = s.NEXT);
                  },
                },
                f.id
              ),
            ],
          }),
        });
      }
      ((a = s || (s = {})).INIT = 'init'), (a.NEXT = 'next');
      var X = r(58346);
      let Q = (0, n.memo)(function (e) {
          return (0,
          l.jsxs)('svg', {xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 512 512', height: '1.30em', width: '1.30em', fill: 'currentColor', ...e, children: [(0, l.jsx)('path', {fill: 'none', d: 'M0 0h24v24H0z'}), (0, l.jsx)('path', {d: 'M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z'})]});
        }),
        $ = (0, n.memo)(function (e) {
          return (0,
          l.jsx)('svg', {'aria-label': 'Threads', viewBox: '0 0 192 192', height: '1.40em', width: '1.40em', fill: 'currentColor', xmlns: 'http://www.w3.org/2000/svg', ...e, children: (0, l.jsx)('path', {className: 'x19hqcy', d: 'M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z'})});
        }),
        ee = (0, n.memo)(function (e) {
          return (0,
          l.jsx)('svg', {xmlns: 'http://www.w3.org/2000/svg', width: '1.5em', height: '1.5em', viewBox: '0 -2 24 24', fill: 'currentColor', ...e, children: (0, l.jsx)('path', {d: 'M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0'})});
        });
      var et = r(85178);
      let er = (0, n.memo)(function (e) {
        return (0,
        l.jsx)('svg', {xmlns: 'http://www.w3.org/2000/svg', width: '1.33em', height: '1.33em', viewBox: '0 -2 24 24', fill: 'currentColor', ...e, children: (0, l.jsx)('path', {strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244'})});
      });
      var ea = r(550),
        es = r(68744),
        el = r(84375);
      let en = () =>
        /((?:https?(?::\/\/))(?:www\.)?(?:[a-zA-Z\d-_.]+(?:(?:\.|@)[a-zA-Z\d]{2,})|localhost)(?:(?:[-a-zA-Z\d:%_+.~#!?&//=@]*)(?:[,](?![\s]))*)*)/g;
      function ei(e) {
        let t = e.split(en());
        return t.map((e, t) =>
          t % 2 == 1
            ? (0, l.jsx)(
                'a',
                {
                  target: '_blank',
                  className: 'underline',
                  rel: 'noopener noreferrer',
                  href: e,
                  children: e,
                },
                t
              )
            : e
        );
      }
      let eo = (e) =>
          (0, l.jsx)('p', {className: 'whitespace-pre-wrap my-4', ...e}),
        ed = (e) => (0, l.jsx)('strong', {className: 'font-bold', ...e}),
        ec = (e) =>
          (0, l.jsx)('ol', {className: 'ms-6 my-3 list-decimal', ...e}),
        ex = (e) => (0, l.jsx)('li', {className: 'leading-relaxed mb-1', ...e}),
        eh = (e) => (0, l.jsx)('ul', {className: 'ms-6 my-3 list-disc', ...e}),
        em = () =>
          (0, l.jsx)('hr', {
            className:
              'my-6 block border-b border-t-0 border-border dark:border-border-dark',
          }),
        eu = (e) => {
          let {children: t} = e;
          return (0, l.jsx)(g, {type: 'wip', children: t});
        },
        ep = (e) => {
          let {children: t} = e;
          return (0, l.jsx)(g, {type: 'pitfall', children: t});
        },
        ef = (e) => {
          let {children: t} = e;
          return (0, l.jsx)(g, {type: 'deprecated', children: t});
        },
        eg = (e) => {
          let {children: t} = e;
          return (0, l.jsx)(g, {type: 'note', children: t});
        },
        ej = (e) => {
          let {children: t} = e;
          return (0, l.jsx)(g, {type: 'canary', children: t});
        },
        ew = (e) => {
          let {title: t} = e;
          return (0, l.jsxs)('span', {
            title: t,
            className:
              'text-base font-display px-1 py-0.5 font-bold bg-gray-10 dark:bg-gray-60 text-gray-60 dark:text-gray-10 rounded',
            children: [
              (0, l.jsx)(p.t, {
                size: 's',
                className:
                  'inline me-1 mb-0.5 text-sm text-gray-60 dark:text-gray-10',
              }),
              'Canary only',
            ],
          });
        },
        eC = (e) => {
          let {children: t, ...r} = e;
          return (0, l.jsx)('blockquote', {
            className:
              'mdx-blockquote py-4 px-8 my-8 shadow-inner-border dark:shadow-inner-border-dark bg-highlight dark:bg-highlight-dark bg-opacity-50 rounded-2xl leading-6 flex relative',
            ...r,
            children: (0, l.jsx)('span', {
              className: 'block relative',
              children: t,
            }),
          });
        };
      function eb(e) {
        let {
          author: t = 'Rachel Lee Nabors',
          authorLink: r = 'https://nearestnabors.com/',
        } = e;
        return (0, l.jsx)('div', {
          className:
            'sr-only group-hover:not-sr-only group-focus-within:not-sr-only hover:sr-only',
          children: (0, l.jsx)('p', {
            className:
              "bg-card dark:bg-card-dark text-center text-sm text-secondary dark:text-secondary-dark leading-tight p-2 rounded-lg absolute start-1/2 -top-4 -translate-x-1/2 -translate-y-full group-hover:flex group-hover:opacity-100 after:content-[''] after:absolute after:start-1/2 after:top-[95%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-card after:dark:border-t-card-dark opacity-0 transition-opacity duration-300",
            children: (0, l.jsxs)('cite', {
              children: [
                r
                  ? (0, l.jsx)('a', {
                      target: '_blank',
                      rel: 'noreferrer',
                      className: 'text-link dark:text-link-dark',
                      href: r,
                      children: t,
                    })
                  : t,
                ' ',
                '绘图',
              ],
            }),
          }),
        });
      }
      let ev = n.createContext({isInBlock: !1}),
        ek = {isInBlock: !0};
      function ey(e) {
        let {items: t} = e;
        return (0, l.jsx)(eh, {
          children: t.map((e) =>
            (0, l.jsxs)(
              ex,
              {
                children: [
                  (0, l.jsx)(R.Z, {href: e.item.url, children: e.item.text}),
                  e.children.length > 0 && (0, l.jsx)(ey, {items: e.children}),
                ],
              },
              e.item.url
            )
          ),
        });
      }
      let eN = {
        p: eo,
        strong: ed,
        blockquote: eC,
        ol: ec,
        ul: eh,
        li: ex,
        h1: v.H1,
        h2: v.H2,
        h3: v.H3,
        h4: v.H4,
        h5: v.H5,
        hr: em,
        a: R.Z,
        img: function (e) {
          let {alt: t, ...r} = e;
          return (0, l.jsx)('img', {
            alt: t,
            className: 'max-w-[calc(min(700px,100%))]',
            ...r,
          });
        },
        BlogCard: L.Z,
        code: N,
        pre: d.Z,
        CodeDiagram: function (e) {
          let {children: t, flip: r = !1} = e,
            a = n.Children.toArray(t).filter((e) => 'img' === e.type),
            s = n.Children.toArray(t).map((e) => {
              var t;
              return (null === (t = e.type) || void 0 === t
                ? void 0
                : t.mdxName) === 'pre'
                ? (0, l.jsx)(d.Z, {...e.props, noMargin: !0, noMarkers: !0})
                : 'img' === e.type
                ? null
                : e;
            });
          return r
            ? (0, l.jsxs)('section', {
                className:
                  'my-8 grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4',
                children: [
                  a,
                  (0, l.jsx)('div', {
                    className: 'flex flex-col justify-center',
                    children: s,
                  }),
                ],
              })
            : (0, l.jsxs)('section', {
                className:
                  'my-8 grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4',
                children: [
                  (0, l.jsx)('div', {
                    className: 'flex flex-col justify-center',
                    children: s,
                  }),
                  (0, l.jsx)('div', {className: 'py-4', children: a}),
                ],
              });
        },
        ConsoleBlock: function (e) {
          let t,
            {level: r = 'error', children: a} = e;
          return (
            'string' == typeof a
              ? (t = a)
              : (0, n.isValidElement)(a) && (t = a.props.children),
            (0, l.jsxs)('div', {
              className:
                'console-block mb-4 text-secondary bg-wash dark:bg-wash-dark rounded-lg',
              translate: 'no',
              dir: 'ltr',
              children: [
                (0, l.jsxs)('div', {
                  className:
                    'flex w-full rounded-t-lg bg-gray-200 dark:bg-gray-80',
                  children: [
                    (0, l.jsx)('div', {
                      className:
                        'px-4 py-2 border-gray-300 dark:border-gray-90 border-r',
                      children: (0, l.jsx)(h, {
                        className: 'bg-gray-300 dark:bg-gray-70',
                        width: '15px',
                      }),
                    }),
                    (0, l.jsxs)('div', {
                      className: 'flex text-sm px-4',
                      children: [
                        (0, l.jsx)('div', {
                          className:
                            'border-b-2 border-gray-300 dark:border-gray-90 text-tertiary dark:text-tertiary-dark',
                          children: 'Console',
                        }),
                        (0, l.jsxs)('div', {
                          className: 'px-4 py-2 flex',
                          children: [
                            (0, l.jsx)(h, {
                              className: 'me-2 bg-gray-300 dark:bg-gray-70',
                            }),
                            (0, l.jsx)(h, {
                              className:
                                'me-2 hidden md:block bg-gray-300 dark:bg-gray-70',
                            }),
                            (0, l.jsx)(h, {
                              className:
                                'hidden md:block bg-gray-300 dark:bg-gray-70',
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, l.jsxs)('div', {
                  className: o()(
                    'flex px-4 pt-4 pb-6 items-center content-center font-mono text-code rounded-b-md',
                    {
                      'bg-red-30 text-red-50 dark:text-red-30 bg-opacity-5':
                        'error' === r,
                      'bg-yellow-5 text-yellow-50': 'warning' === r,
                      'bg-gray-5 text-secondary dark:text-secondary-dark':
                        'info' === r,
                    }
                  ),
                  children: [
                    'error' === r &&
                      (0, l.jsx)(x, {className: 'self-start mt-1.5'}),
                    'warning' === r &&
                      (0, l.jsx)(c, {className: 'self-start mt-1'}),
                    (0, l.jsx)('div', {className: 'px-3', children: t}),
                  ],
                }),
              ],
            })
          );
        },
        ConsoleBlockMulti: function (e) {
          let {children: t} = e;
          return (0, l.jsxs)('div', {
            className:
              'console-block mb-4 text-secondary bg-wash dark:bg-wash-dark rounded-lg',
            translate: 'no',
            dir: 'ltr',
            children: [
              (0, l.jsxs)('div', {
                className:
                  'flex w-full rounded-t-lg bg-gray-200 dark:bg-gray-80',
                children: [
                  (0, l.jsx)('div', {
                    className:
                      'px-4 py-2 border-gray-300 dark:border-gray-90 border-r',
                    children: (0, l.jsx)(h, {
                      className: 'bg-gray-300 dark:bg-gray-70',
                      width: '15px',
                    }),
                  }),
                  (0, l.jsxs)('div', {
                    className: 'flex text-sm px-4',
                    children: [
                      (0, l.jsx)('div', {
                        className:
                          'border-b-2 border-gray-300 dark:border-gray-90 text-tertiary dark:text-tertiary-dark',
                        children: 'Console',
                      }),
                      (0, l.jsxs)('div', {
                        className: 'px-4 py-2 flex',
                        children: [
                          (0, l.jsx)(h, {
                            className: 'me-2 bg-gray-300 dark:bg-gray-70',
                          }),
                          (0, l.jsx)(h, {
                            className:
                              'me-2 hidden md:block bg-gray-300 dark:bg-gray-70',
                          }),
                          (0, l.jsx)(h, {
                            className:
                              'hidden md:block bg-gray-300 dark:bg-gray-70',
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, l.jsx)('div', {
                className:
                  'grid grid-cols-1 divide-y divide-gray-300 dark:divide-gray-70 text-base',
                children: t,
              }),
            ],
          });
        },
        ConsoleLogLine: function (e) {
          let t,
            {children: r, level: a} = e;
          return (
            'string' == typeof r
              ? (t = r)
              : (0, n.isValidElement)(r)
              ? (t = r.props.children)
              : Array.isArray(r) &&
                (t = r.reduce(
                  (e, t) => (
                    'string' == typeof t
                      ? (e += t)
                      : (0, n.isValidElement)(t) && (e += t.props.children),
                    e
                  ),
                  ''
                )),
            (0, l.jsxs)('div', {
              className: o()(
                'ps-4 pe-2 pt-1 pb-2 grid grid-cols-[18px_auto] font-mono rounded-b-md',
                {
                  'bg-red-30 text-red-50 dark:text-red-30 bg-opacity-5':
                    'error' === a,
                  'bg-yellow-5 text-yellow-50': 'warning' === a,
                  'bg-gray-5 text-secondary dark:text-secondary-dark':
                    'info' === a,
                }
              ),
              children: [
                'error' === a &&
                  (0, l.jsx)(x, {
                    className: 'self-start mt-1.5 text-[.7rem] w-6',
                  }),
                'warning' === a &&
                  (0, l.jsx)(c, {
                    className: 'self-start mt-1 text-[.65rem] w-6',
                  }),
                (0, l.jsx)('div', {
                  className:
                    'px-2 pt-1 whitespace-break-spaces text-code leading-tight',
                  children: t,
                }),
              ],
            })
          );
        },
        DeepDive: (e) => (0, l.jsx)(y, {...e, type: '深入探讨'}),
        Diagram: function (e) {
          let {
            name: t,
            alt: r,
            height: a,
            width: s,
            children: n,
            captionPosition: i,
          } = e;
          return (0, l.jsxs)('figure', {
            className:
              'flex flex-col px-0 p-0 sm:p-10 first:mt-0 mt-10 sm:mt-0 justify-center items-center',
            children: [
              'top' === i && (0, l.jsx)(V, {text: n}),
              (0, l.jsx)('div', {
                className: 'dark-image',
                children: (0, l.jsx)(_(), {
                  src: '/images/docs/diagrams/'.concat(t, '.dark.png'),
                  alt: r,
                  height: a,
                  width: s,
                }),
              }),
              (0, l.jsx)('div', {
                className: 'light-image',
                children: (0, l.jsx)(_(), {
                  src: '/images/docs/diagrams/'.concat(t, '.png'),
                  alt: r,
                  height: a,
                  width: s,
                }),
              }),
              (!i || 'bottom' === i) && (0, l.jsx)(V, {text: n}),
            ],
          });
        },
        DiagramGroup: function (e) {
          let {children: t} = e;
          return (0, l.jsx)('div', {
            className:
              'flex flex-col sm:flex-row py-2 sm:p-0 sm:space-y-0 justify-center items-start sm:items-center w-full',
            children: t,
          });
        },
        FullWidth(e) {
          let {children: t} = e;
          return t;
        },
        MaxWidth(e) {
          let {children: t} = e;
          return (0, l.jsx)('div', {
            className: 'max-w-4xl ms-0 2xl:mx-auto',
            children: t,
          });
        },
        Pitfall: ep,
        Deprecated: ef,
        Wip: eu,
        Illustration: function (e) {
          let {caption: t, src: r, alt: a, author: s, authorLink: i} = e,
            {isInBlock: o} = n.useContext(ev);
          return (0, l.jsxs)('div', {
            className:
              'relative group before:absolute before:-inset-y-16 before:inset-x-0 my-16 mx-0 2xl:mx-auto max-w-4xl 2xl:max-w-6xl',
            children: [
              (0, l.jsxs)('figure', {
                className: 'my-8 flex justify-center',
                children: [
                  (0, l.jsx)('img', {
                    src: r,
                    alt: a,
                    style: {maxHeight: 300},
                    className: 'rounded-lg',
                  }),
                  t
                    ? (0, l.jsx)('figcaption', {
                        className: 'text-center leading-tight mt-4',
                        children: t,
                      })
                    : null,
                ],
              }),
              !o && (0, l.jsx)(eb, {author: s, authorLink: i}),
            ],
          });
        },
        IllustrationBlock: function (e) {
          let {sequential: t, author: r, authorLink: a, children: s} = e,
            i = n.Children.toArray(s).map((e) => e.props),
            o = i.map((e, t) =>
              (0, l.jsxs)(
                'figure',
                {
                  children: [
                    (0, l.jsx)('div', {
                      className:
                        'bg-white rounded-lg p-4 flex-1 flex xl:p-6 justify-center items-center my-4',
                      children: (0, l.jsx)('img', {
                        className: 'text-primary',
                        src: e.src,
                        alt: e.alt,
                        height: e.height,
                      }),
                    }),
                    e.caption
                      ? (0, l.jsx)('figcaption', {
                          className:
                            'text-secondary dark:text-secondary-dark text-center leading-tight mt-4',
                          children: e.caption,
                        })
                      : null,
                  ],
                },
                t
              )
            );
          return (0, l.jsx)(ev.Provider, {
            value: ek,
            children: (0, l.jsxs)('div', {
              className:
                'relative group before:absolute before:-inset-y-16 before:inset-x-0 my-16 mx-0 2xl:mx-auto max-w-4xl 2xl:max-w-6xl',
              children: [
                t
                  ? (0, l.jsx)('ol', {
                      className: 'mdx-illustration-block flex',
                      children: o.map((e, t) =>
                        (0, l.jsx)('li', {className: 'flex-1', children: e}, t)
                      ),
                    })
                  : (0, l.jsx)('div', {
                      className: 'mdx-illustration-block',
                      children: o,
                    }),
                (0, l.jsx)(eb, {author: r, authorLink: a}),
              ],
            }),
          });
        },
        Intro: function (e) {
          let {children: t} = e;
          return (0, l.jsx)('div', {
            className:
              'font-display text-xl text-primary dark:text-primary-dark leading-relaxed',
            children: t,
          });
        },
        InlineToc: function () {
          let e = (0, n.useContext)(X.d),
            t = (0, n.useMemo)(
              () =>
                (function (e) {
                  let t = new Map(),
                    r = {item: null, children: []};
                  for (let a = 1; a < e.length; a++) {
                    let s = e[a],
                      l = t.get(s.depth - 1) || r,
                      n = {item: s, children: []};
                    l.children.push(n), t.set(s.depth, n);
                  }
                  return r;
                })(e),
              [e]
            );
          return t.children.length < 2
            ? null
            : (0, l.jsx)(ey, {items: t.children});
        },
        LanguageList: function (e) {
          var t;
          let {progress: r} = e,
            a = null !== (t = n.useContext(ea.m)) && void 0 !== t ? t : [],
            s = a
              .filter((e) => {
                let {code: t} = e;
                return (
                  'en' !== t &&
                  ('complete' === r ? es.Z.includes(t) : !es.Z.includes(t))
                );
              })
              .sort((e, t) => e.enName.localeCompare(t.enName));
          return (0, l.jsx)(eh, {
            children: s.map((e) => {
              let {code: t, name: r, enName: a} = e;
              return (0, l.jsxs)(
                ex,
                {
                  children: [
                    (0, l.jsxs)(R.Z, {
                      href: 'https://'.concat(t, '.react.dev/'),
                      children: [a, ' (', r, ')'],
                    }),
                    ' ',
                    '—',
                    ' ',
                    (0, l.jsx)(R.Z, {
                      href: 'https://github.com/reactjs/'.concat(
                        t,
                        '.react.dev'
                      ),
                      children: 'Contribute',
                    }),
                  ],
                },
                t
              );
            }),
          });
        },
        LearnMore: function (e) {
          let {children: t, path: r} = e;
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)('section', {
                className:
                  'p-8 mt-16 mb-16 flex flex-row shadow-inner-border dark:shadow-inner-border-dark justify-between items-center bg-card dark:bg-card-dark rounded-2xl',
                children: (0, l.jsxs)('div', {
                  className: 'flex-col',
                  children: [
                    (0, l.jsx)('h2', {
                      className:
                        'text-primary font-display dark:text-primary-dark font-bold text-2xl leading-tight',
                      children: '想要仔细学习这个主题的内容吗？',
                    }),
                    t,
                    r
                      ? (0, l.jsxs)(A.Z, {
                          className: 'mt-1',
                          label: 'Read More',
                          href: r,
                          type: 'primary',
                          children: [
                            '阅读更多',
                            (0, l.jsx)(I.s, {
                              displayDirection: 'end',
                              className: 'inline ms-1',
                            }),
                          ],
                        })
                      : null,
                  ],
                }),
              }),
              (0, l.jsx)('hr', {
                className: 'border-border dark:border-border-dark mb-14',
              }),
            ],
          });
        },
        Math: function (e) {
          let {children: t} = e;
          return (0, l.jsx)('span', {
            style: {
              fontFamily: 'STIXGeneral-Regular, Georgia, serif',
              fontSize: '1.2rem',
            },
            children: t,
          });
        },
        MathI: function (e) {
          let {children: t} = e;
          return (0, l.jsx)('span', {
            style: {
              fontFamily: 'STIXGeneral-Italic, Georgia, serif',
              fontSize: '1.2rem',
            },
            children: t,
          });
        },
        Note: eg,
        Canary: ej,
        CanaryBadge: ew,
        PackageImport: function (e) {
          let {children: t} = e,
            r = n.Children.toArray(t).filter((e) => {
              var t;
              return (
                (null === (t = e.type) || void 0 === t ? void 0 : t.mdxName) !==
                'pre'
              );
            }),
            a = n.Children.toArray(t).map((e, t) => {
              var r;
              return (null === (r = e.type) || void 0 === r
                ? void 0
                : r.mdxName) === 'pre'
                ? (0, n.createElement)(d.Z, {
                    ...e.props,
                    isFromPackageImport: !0,
                    key: t,
                    noMargin: !0,
                    noMarkers: !0,
                  })
                : null;
            });
          return (0, l.jsxs)('section', {
            className: 'my-8 grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4',
            children: [
              (0, l.jsx)('div', {
                className: 'flex flex-col justify-center',
                children: r,
              }),
              (0, l.jsx)('div', {
                className: 'flex flex-col justify-center',
                children: a,
              }),
            ],
          });
        },
        ReadBlogPost: function (e) {
          let {path: t} = e;
          return (0, l.jsxs)(A.Z, {
            className: 'mt-1',
            label: 'Read Post',
            href: t,
            type: 'primary',
            children: [
              '阅读文章',
              (0, l.jsx)(I.s, {
                displayDirection: 'end',
                className: 'inline ms-1',
              }),
            ],
          });
        },
        Recap: function (e) {
          let {children: t} = e;
          return (0, l.jsxs)('section', {
            children: [
              (0, l.jsx)(v.H2, {
                isPageAnchor: !0,
                id: 'recap',
                children: '摘要',
              }),
              t,
            ],
          });
        },
        Recipes: function (e) {
          return (0, l.jsx)(Y, {...e, isRecipes: !0});
        },
        Sandpack: F,
        SandpackWithHTMLOutput: P,
        TeamMember: function (e) {
          let {
            name: t,
            title: r,
            permalink: a,
            children: s,
            photo: n,
            github: i,
            twitter: o,
            threads: d,
            personal: c,
          } = e;
          if (null == t || null == r || null == a || null == s) {
            var x, h;
            throw Error(
              null !==
                (h =
                  ((x =
                    'Expected name, title, permalink, and children for ' + t),
                  x)) && void 0 !== h
                ? h
                : 'unknown'
            );
          }
          return (0, l.jsx)('div', {
            className: 'pb-6 sm:pb-10',
            children: (0, l.jsxs)('div', {
              className: 'flex flex-col sm:flex-row height-auto',
              children: [
                (0, l.jsx)('div', {
                  className:
                    'hidden sm:block basis-2/5 rounded overflow-hidden relative',
                  style: {width: 300, height: 250},
                  children: (0, l.jsx)(_(), {
                    src: n,
                    layout: 'fill',
                    objectFit: 'cover',
                    alt: t,
                  }),
                }),
                (0, l.jsx)('div', {
                  style: {minHeight: 300},
                  className:
                    'block w-full sm:hidden flex-grow basis-2/5 rounded overflow-hidden relative',
                  children: (0, l.jsx)(_(), {
                    src: n,
                    layout: 'fill',
                    objectFit: 'cover',
                    alt: t,
                  }),
                }),
                (0, l.jsxs)('div', {
                  className: 'ps-0 sm:ps-6 basis-3/5 items-start',
                  children: [
                    (0, l.jsx)(v.H3, {
                      className: 'mb-1 sm:my-0',
                      id: a,
                      children: t,
                    }),
                    r && (0, l.jsx)('div', {children: r}),
                    s,
                    (0, l.jsxs)('div', {
                      className: 'sm:flex sm:flex-row flex-wrap',
                      children: [
                        o &&
                          (0, l.jsx)('div', {
                            className: 'me-4',
                            children: (0, l.jsxs)(et.d, {
                              'aria-label': 'React on Twitter',
                              href: 'https://twitter.com/'.concat(o),
                              className:
                                'hover:text-primary hover:underline dark:text-primary-dark flex flex-row items-center',
                              children: [(0, l.jsx)(Q, {className: 'pe-1'}), o],
                            }),
                          }),
                        d &&
                          (0, l.jsx)('div', {
                            className: 'me-4',
                            children: (0, l.jsxs)(et.d, {
                              'aria-label': 'React on Threads',
                              href: 'https://threads.net/'.concat(d),
                              className:
                                'hover:text-primary hover:underline dark:text-primary-dark flex flex-row items-center',
                              children: [(0, l.jsx)($, {className: 'pe-1'}), d],
                            }),
                          }),
                        i &&
                          (0, l.jsx)('div', {
                            className: 'me-4',
                            children: (0, l.jsxs)(et.d, {
                              'aria-label': 'GitHub Profile',
                              href: 'https://github.com/'.concat(i),
                              className:
                                'hover:text-primary hover:underline dark:text-primary-dark flex flex-row items-center',
                              children: [
                                (0, l.jsx)(ee, {className: 'pe-1'}),
                                ' ',
                                i,
                              ],
                            }),
                          }),
                        c &&
                          (0, l.jsxs)(et.d, {
                            'aria-label': 'Personal Site',
                            href: 'https://'.concat(c),
                            className:
                              'hover:text-primary hover:underline dark:text-primary-dark flex flex-row items-center',
                            children: [
                              (0, l.jsx)(er, {className: 'pe-1'}),
                              ' ',
                              c,
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        TerminalBlock: function (e) {
          let t,
            {level: r = 'info', children: a} = e;
          if ('string' == typeof a) t = a;
          else if (
            (0, n.isValidElement)(a) &&
            'string' == typeof a.props.children
          )
            t = a.props.children;
          else
            throw Error(
              'Expected TerminalBlock children to be a plain string.'
            );
          let [s, i] = (0, n.useState)(!1);
          return (
            (0, n.useEffect)(() => {
              if (s) {
                let e = setTimeout(() => {
                  i(!1);
                }, 2e3);
                return () => clearTimeout(e);
              }
            }, [s]),
            (0, l.jsxs)('div', {
              className: 'rounded-lg bg-secondary dark:bg-gray-50 h-full',
              children: [
                (0, l.jsx)('div', {
                  className: 'bg-gray-90 dark:bg-gray-60 w-full rounded-t-lg',
                  children: (0, l.jsxs)('div', {
                    className:
                      'text-primary-dark dark:text-primary-dark flex text-sm px-4 py-0.5 relative justify-between',
                    children: [
                      (0, l.jsxs)('div', {
                        children: [
                          (0, l.jsx)(z, {
                            className: 'inline-flex me-2 self-center',
                          }),
                          ' Terminal',
                        ],
                      }),
                      (0, l.jsx)('div', {
                        children: (0, l.jsxs)('button', {
                          className:
                            'w-full text-start text-primary-dark dark:text-primary-dark ',
                          onClick: () => {
                            window.navigator.clipboard.writeText(
                              null != t ? t : ''
                            ),
                              i(!0);
                          },
                          children: [
                            (0, l.jsx)(E.v, {
                              className: 'inline-flex me-2 self-center',
                            }),
                            ' ',
                            s ? 'Copied' : 'Copy',
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
                (0, l.jsxs)('div', {
                  className:
                    'px-8 pt-4 pb-6 text-primary-dark dark:text-primary-dark font-mono text-code whitespace-pre overflow-x-scroll',
                  translate: 'no',
                  dir: 'ltr',
                  children: [(0, l.jsx)(B, {type: r}), t],
                }),
              ],
            })
          );
        },
        YouWillLearn: function (e) {
          let {children: t, isChapter: r} = e;
          return (0, l.jsx)(W, {
            title: r ? '本章节' : '你将会学习到',
            children: t,
          });
        },
        YouWillLearnCard: function (e) {
          let {title: t, path: r, children: a} = e;
          return (0, l.jsxs)('div', {
            className:
              'flex flex-col h-full bg-card dark:bg-card-dark shadow-inner justify-between rounded-lg pb-8 p-6 xl:p-8 mt-3',
            children: [
              (0, l.jsxs)('div', {
                children: [
                  (0, l.jsx)('h4', {
                    className:
                      'text-primary dark:text-primary-dark font-bold text-2xl leading-tight',
                    children: t,
                  }),
                  (0, l.jsx)('div', {className: 'my-4', children: a}),
                ],
              }),
              (0, l.jsx)('div', {
                children: (0, l.jsxs)(A.Z, {
                  href: r,
                  className: 'mt-1',
                  type: 'primary',
                  size: 'md',
                  label: t,
                  children: [
                    '阅读更多',
                    (0, l.jsx)(I.s, {
                      displayDirection: 'end',
                      className: 'inline ms-1',
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        Challenges: Y,
        Hint: function (e) {
          let {children: t} = e;
          return (0, l.jsx)('div', {children: t});
        },
        Solution: function (e) {
          let {children: t} = e;
          return (0, l.jsx)('div', {children: t});
        },
        CodeStep: function (e) {
          let {children: t, step: r} = e;
          return (0, l.jsx)('span', {
            'data-step': r,
            className: o()(
              'code-step bg-opacity-10 dark:bg-opacity-20 relative rounded px-[6px] py-[1.5px] border-b-[2px] border-opacity-60',
              {
                'bg-blue-40 border-blue-40 text-blue-60 dark:text-blue-30':
                  1 === r,
                'bg-yellow-40 border-yellow-40 text-yellow-60 dark:text-yellow-30':
                  2 === r,
                'bg-purple-40 border-purple-40 text-purple-60 dark:text-purple-30':
                  3 === r,
                'bg-green-40 border-green-40 text-green-60 dark:text-green-30':
                  4 === r,
              }
            ),
            children: t,
          });
        },
        YouTubeIframe: function (e) {
          return (0, l.jsx)('div', {
            className: 'relative h-0 overflow-hidden pt-[56.25%]',
            children: (0, l.jsx)('iframe', {
              className: 'absolute inset-0 w-full h-full',
              frameBorder: '0',
              allow:
                'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
              allowFullScreen: !0,
              title: 'YouTube video player',
              ...e,
            }),
          });
        },
        ErrorDecoder: function () {
          let {errorMessage: e} = (0, el.C)(),
            t = null == e ? void 0 : e.includes('%s'),
            [r, a] = (0, n.useState)(() => (e ? ei(e) : null)),
            [s, i] = (0, n.useState)(null == e || !t);
          return (
            (0, n.useEffect)(() => {
              null != e &&
                t &&
                (a(
                  ei(
                    (function (e, t) {
                      let r =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : '[missing argument]',
                        a = 0;
                      return e.replace(/%s/g, function () {
                        let e = t[a++];
                        return void 0 === e || '' === e ? r : e;
                      });
                    })(
                      e,
                      (function (e) {
                        let t = e.substring(1);
                        if (!t) return [];
                        let r = [],
                          a = t.split('&');
                        for (let e = 0; e < a.length; e++) {
                          let t = decodeURIComponent(a[e]);
                          t.startsWith('args[') &&
                            r.push(t.slice(t.indexOf(']=') + 2));
                        }
                        return r;
                      })(window.location.search),
                      '[missing argument]'
                    )
                  )
                ),
                i(!0));
            }, [t, e]),
            (0, l.jsx)('code', {
              className: o()(
                'block bg-red-100 text-red-600 py-4 px-6 mt-5 rounded-lg',
                s ? 'opacity-100' : 'opacity-0'
              ),
              children: (0, l.jsx)('b', {children: r}),
            })
          );
        },
      };
      for (let e in eN)
        if (eN.hasOwnProperty(e)) {
          let t = eN[e];
          t.mdxName = e;
        }
    },
    82576: function (e, t, r) {
      'use strict';
      r.d(t, {
        _u: function () {
          return l;
        },
        bX: function () {
          return n;
        },
        pU: function () {
          return a;
        },
        xu: function () {
          return s;
        },
      });
      let a = '/src/App.js',
        s = '/src/styles.css',
        l = [a, s],
        n = (e) =>
          e.reduce((e, t) => {
            let r;
            if ('pre' !== t.type.mdxName && 'pre' !== t.type) return e;
            let {props: l} = t.props.children,
              n = !1,
              i = !1;
            if (l.meta) {
              let [e, ...t] = l.meta.split(' ');
              (r = '/' + e),
                t.includes('hidden') && (n = !0),
                t.includes('active') && (i = !0);
            } else if ('language-js' === l.className) r = a;
            else if ('language-css' === l.className) r = s;
            else
              throw Error(
                'Code block is missing a filename: '.concat(l.children)
              );
            if (e[r])
              throw Error(
                'File '.concat(
                  r,
                  ' was defined multiple times. Each file snippet should have a unique path name'
                )
              );
            return (e[r] = {code: l.children || '', hidden: n, active: i}), e;
          }, {});
    },
    58346: function (e, t, r) {
      'use strict';
      r.d(t, {
        d: function () {
          return s;
        },
      });
      var a = r(67294);
      let s = (0, a.createContext)([]);
    },
    24299: function (e, t) {
      t.J = {
        version: '18.3.1',
        languageCode: 'zh-hans',
        hasLegacySite: !0,
        isRTL: !1,
        copyright: 'Copyright \xa9 '.concat(
          new Date().getFullYear(),
          ' Facebook Inc. All Rights Reserved.'
        ),
        repoUrl: 'https://github.com/facebook/react',
        twitterUrl: 'https://twitter.com/reactjs',
        algolia: {
          appId: '1FCF9AYYAT',
          apiKey: '1b7ad4e1c89e645e351e59d40544eda1',
          indexName: 'beta-react',
        },
      };
    },
    68744: function (e, t, r) {
      'use strict';
      r.d(t, {
        Z: function () {
          return a;
        },
      });
      let a = ['en', 'zh-hans', 'es', 'fr', 'ja', 'tr', 'ko'];
    },
    78682: function (e) {
      'use strict';
      e.exports = JSON.parse(
        '{"title":"博客","path":"/blog","routes":[{"hasSectionHeader":true,"sectionHeader":"时刻了解最新动态"},{"title":"博客","path":"/blog","skipBreadcrumb":true,"routes":[{"title":"回顾 React Conf 2024","titleForHomepage":"回顾 React Conf 2024","icon":"blog","date":"May 22, 2024","path":"/blog/2024/05/22/react-conf-2024-recap"},{"title":"React 19 RC","titleForHomepage":"React 19 RC","icon":"blog","date":"April 25, 2024","path":"/blog/2024/04/25/react-19"},{"title":"React 19 RC 升级指南","titleForHomepage":"React 19 RC 升级指南","icon":"blog","date":"April 25, 2024","path":"/blog/2024/04/25/react-19-upgrade-guide"},{"title":"React Labs：我们正在努力的方向——2024 年 2 月","titleForHomepage":"React Labs: 2024 年 2 月","icon":"labs","date":"February 15, 2024","path":"/blog/2024/02/15/react-labs-what-we-have-been-working-on-february-2024"},{"title":"React Canaries：在 Meta 之外逐步推出新功能","titleForHomepage":"React Canaries：逐步推出新功能","icon":"blog","date":"May 3, 2023","path":"/blog/2023/05/03/react-canaries"},{"title":"React Labs：我们正在努力的方向——2023 年 3 月","titleForHomepage":"React Labs：2023 年 3 月","icon":"labs","date":"March 22, 2023","path":"/blog/2023/03/22/react-labs-what-we-have-been-working-on-march-2023"},{"title":"介绍 react.dev","titleForHomepage":"介绍 react.dev","icon":"blog","date":"March 16, 2023","path":"/blog/2023/03/16/introducing-react-dev"},{"title":"React Labs：我们正在努力的方向——2022 年 6 月","titleForHomepage":"React Labs：2022 年 6 月","icon":"labs","date":"June 15, 2022","path":"/blog/2022/06/15/react-labs-what-we-have-been-working-on-june-2022"},{"title":"React v18.0","titleForHomepage":"React v18.0","icon":"blog","date":"March 29, 2022","path":"/blog/2022/03/29/react-v18"},{"title":"如何升级到 React 18","titleForHomepage":"升级到 React 18","icon":"blog","date":"March 8, 2022","path":"/blog/2022/03/08/react-18-upgrade-guide"},{"title":"回顾 React Conf 2021","titleForHomepage":"回顾 React Conf 2021","icon":"blog","date":"December 17, 2021","path":"/blog/2021/12/17/react-conf-2021-recap"},{"title":"React 18 的有关计划","titleForHomepage":"React 18 的有关计划","icon":"blog","date":"June 8, 2021","path":"/blog/2021/06/08/the-plan-for-react-18"},{"title":"介绍服务器组件","titleForHomepage":"介绍服务器组件","icon":"labs","date":"December 21, 2020","path":"/blog/2020/12/21/data-fetching-with-react-server-components"},{"title":"更早的博客","path":"https://reactjs.org/blog/all.html"}]}]}'
      );
    },
    41458: function (e) {
      'use strict';
      e.exports = JSON.parse(
        '{"title":"学习 React","path":"/learn","routes":[{"hasSectionHeader":true,"sectionHeader":"起步"},{"title":"快速入门","path":"/learn","routes":[{"title":"教程：井字棋游戏","path":"/learn/tutorial-tic-tac-toe"},{"title":"React 哲学","path":"/learn/thinking-in-react"}]},{"title":"安装","path":"/learn/installation","routes":[{"title":"启动一个新的 React 项目","path":"/learn/start-a-new-react-project"},{"title":"将 React 添加到现有项目中","path":"/learn/add-react-to-an-existing-project"},{"title":"编辑器设置","path":"/learn/editor-setup"},{"title":"使用 TypeScript","path":"/learn/typescript"},{"title":"React 开发者工具","path":"/learn/react-developer-tools"},{"title":"React Compiler","path":"/learn/react-compiler","canary":true}]},{"hasSectionHeader":true,"sectionHeader":"学习 React"},{"title":"描述 UI","tags":[],"path":"/learn/describing-the-ui","routes":[{"title":"你的第一个组件","path":"/learn/your-first-component"},{"title":"组件的导入与导出","path":"/learn/importing-and-exporting-components"},{"title":"使用 JSX 书写标签语言","path":"/learn/writing-markup-with-jsx"},{"title":"在 JSX 中通过大括号使用 JavaScript","path":"/learn/javascript-in-jsx-with-curly-braces"},{"title":"将 Props 传递给组件","path":"/learn/passing-props-to-a-component"},{"title":"条件渲染","path":"/learn/conditional-rendering"},{"title":"渲染列表","path":"/learn/rendering-lists"},{"title":"保持组件纯粹","path":"/learn/keeping-components-pure"},{"title":"将 UI 视为树","path":"/learn/understanding-your-ui-as-a-tree"}]},{"title":"添加交互","path":"/learn/adding-interactivity","tags":[],"routes":[{"title":"响应事件","path":"/learn/responding-to-events"},{"title":"state：组件的记忆","path":"/learn/state-a-components-memory"},{"title":"渲染和提交","path":"/learn/render-and-commit"},{"title":"state 如同一张快照","path":"/learn/state-as-a-snapshot"},{"title":"把一系列 state 更新加入队列","path":"/learn/queueing-a-series-of-state-updates"},{"title":"更新 state 中的对象","path":"/learn/updating-objects-in-state"},{"title":"更新 state 中的数组","path":"/learn/updating-arrays-in-state"}]},{"title":"状态管理","path":"/learn/managing-state","tags":["intermediate"],"routes":[{"title":"用 State 响应输入","path":"/learn/reacting-to-input-with-state"},{"title":"选择 State 结构","path":"/learn/choosing-the-state-structure"},{"title":"在组件间共享状态","path":"/learn/sharing-state-between-components"},{"title":"对 state 进行保留和重置","path":"/learn/preserving-and-resetting-state"},{"title":"迁移状态逻辑至 Reducer 中","path":"/learn/extracting-state-logic-into-a-reducer"},{"title":"使用 Context 深层传递参数","path":"/learn/passing-data-deeply-with-context"},{"title":"使用 Reducer 和 Context 拓展你的应用","path":"/learn/scaling-up-with-reducer-and-context"}]},{"title":"脱围机制","path":"/learn/escape-hatches","tags":["advanced"],"routes":[{"title":"使用 ref 引用值","path":"/learn/referencing-values-with-refs"},{"title":"使用 ref 操作 DOM","path":"/learn/manipulating-the-dom-with-refs"},{"title":"使用 Effect 进行同步","path":"/learn/synchronizing-with-effects"},{"title":"你可能不需要 Effect","path":"/learn/you-might-not-need-an-effect"},{"title":"响应式 Effect 的生命周期","path":"/learn/lifecycle-of-reactive-effects"},{"title":"将事件从 Effect 中分开","path":"/learn/separating-events-from-effects"},{"title":"移除 Effect 依赖","path":"/learn/removing-effect-dependencies"},{"title":"使用自定义 Hook 复用逻辑","path":"/learn/reusing-logic-with-custom-hooks"}]}]}'
      );
    },
  },
]);
