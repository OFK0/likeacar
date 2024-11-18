import type { CustomFlowbiteTheme } from 'flowbite-react';

const Theme: CustomFlowbiteTheme = {
  button: {
    base: 'group relative inline-flex items-stretch justify-center py-12 px-18 text-center font-medium transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow] focus:z-10 focus:outline-none',
    color: {
      primary: 'bg-primary text-white  enabled:hover:bg-primary-400',
      text: 'bg-white text-[#959BB1] enabled:hover:text-[#4d505b]',
      'text-primary': 'bg-transparent text-primary text-primary px-0 enabled:hover:text-primary',
      dark: 'bg-gray-800 text-white focus:ring-4 focus:ring-gray-300 enabled:hover:bg-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:focus:ring-gray-800 dark:enabled:hover:bg-gray-700',
      failure:
        'bg-red-700 text-white focus:ring-4 focus:ring-red-300 enabled:hover:bg-red-800 dark:bg-red-600 dark:focus:ring-red-900 dark:enabled:hover:bg-red-700',
      gray: ':ring-cyan-700 bg-white text-gray-900 focus:text-cyan-700 focus:ring-4 enabled:hover:bg-gray-100 enabled:hover:text-cyan-700 dark:border-gray-600 dark:bg-transparent dark:text-gray-400 dark:enabled:hover:bg-gray-700 dark:enabled:hover:text-white',
      info: 'bg-cyan-700 text-white focus:ring-4 focus:ring-cyan-300 enabled:hover:bg-cyan-800 dark:bg-cyan-600 dark:focus:ring-cyan-800 dark:enabled:hover:bg-cyan-700',
      light:
        'bg-white text-gray-900 focus:ring-4 focus:ring-white/40 enabled:hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-600 dark:text-white dark:focus:ring-gray-700 dark:enabled:hover:border-gray-700 dark:enabled:hover:bg-gray-700 [&:is(a)]:hover:bg-gray-100',
      purple:
        'bg-purple-700 text-white focus:ring-4 focus:ring-purple-300 enabled:hover:bg-purple-800 dark:bg-purple-600 dark:focus:ring-purple-900 dark:enabled:hover:bg-purple-700',
      success:
        'bg-green-700 text-white focus:ring-4 focus:ring-green-300 enabled:hover:bg-green-800 dark:bg-green-600 dark:focus:ring-green-800 dark:enabled:hover:bg-green-700',
      warning:
        'bg-yellow-400 text-white focus:ring-4 focus:ring-yellow-300 enabled:hover:bg-yellow-500 dark:focus:ring-yellow-900',
      blue: 'bg-blue-700 text-white focus:ring-4 focus:ring-blue-300 enabled:hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800',
      cyan: 'bg-white text-cyan-900 focus:ring-4 focus:ring-cyan-300 enabled:hover:bg-cyan-100 dark:border-cyan-600 dark:bg-cyan-600 dark:text-white dark:focus:ring-cyan-700 dark:enabled:hover:border-cyan-700 dark:enabled:hover:bg-cyan-700',
      green:
        'bg-white text-green-900 focus:ring-4 focus:ring-green-300 enabled:hover:bg-green-100 dark:border-green-600 dark:bg-green-600 dark:text-white dark:focus:ring-green-700 dark:enabled:hover:border-green-700 dark:enabled:hover:bg-green-700',
      indigo:
        'bg-white text-indigo-900 focus:ring-4 focus:ring-indigo-300 enabled:hover:bg-indigo-100 dark:border-indigo-600 dark:bg-indigo-600 dark:text-white dark:focus:ring-indigo-700 dark:enabled:hover:border-indigo-700 dark:enabled:hover:bg-indigo-700',
      lime: 'bg-white text-lime-900 focus:ring-4 focus:ring-lime-300 enabled:hover:bg-lime-100 dark:border-lime-600 dark:bg-lime-600 dark:text-white dark:focus:ring-lime-700 dark:enabled:hover:border-lime-700 dark:enabled:hover:bg-lime-700',
      pink: 'bg-white text-pink-900 focus:ring-4 focus:ring-pink-300 enabled:hover:bg-pink-100 dark:border-pink-600 dark:bg-pink-600 dark:text-white dark:focus:ring-pink-700 dark:enabled:hover:border-pink-700 dark:enabled:hover:bg-pink-700',
      red: 'bg-white text-red-900 focus:ring-4 focus:ring-red-300 enabled:hover:bg-red-100 dark:border-red-600 dark:bg-red-600 dark:text-white dark:focus:ring-red-700 dark:enabled:hover:border-red-700 dark:enabled:hover:bg-red-700',
      teal: 'bg-white text-teal-900 focus:ring-4 focus:ring-teal-300 enabled:hover:bg-teal-100 dark:border-teal-600 dark:bg-teal-600 dark:text-white dark:focus:ring-teal-700 dark:enabled:hover:border-teal-700 dark:enabled:hover:bg-teal-700',
      yellow:
        'bg-white text-yellow-900 focus:ring-4 focus:ring-yellow-300 enabled:hover:bg-yellow-100 dark:border-yellow-600 dark:bg-yellow-600 dark:text-white dark:focus:ring-yellow-700 dark:enabled:hover:border-yellow-700 dark:enabled:hover:bg-yellow-700',
      outline:
        'py-[9px] bg-transparent text-default-400 hover:text-default-300 enabled:hover:bg-transparent border border-default-400 hover:border-default-300 dark:border-default-400 dark:bg-transparent dark:text-default-400 dark:focus:ring-gray-700 dark:enabled:hover:border-default-300 dark:enabled:hover:bg-transparent [&:is(a)]:hover:bg-transparent',
    },
    fullSized: 'w-full flex',
  },
  dropdown: {
    arrowIcon: 'ml-2 h-4 w-4',
    content: 'py-8 focus:outline-none',
    floating: {
      animation: 'transition-opacity',
      arrow: {
        base: 'absolute z-10 h-2 w-2 rotate-45',
        style: {
          dark: 'bg-gray-900 dark:bg-gray-700',
          light: 'bg-white',
          auto: 'bg-white dark:bg-gray-700',
        },
        placement: '-4px',
      },
      base: 'z-10 w-fit divide-y divide-gray-100 rounded shadow focus:outline-none',
      content: 'py-1 text-sm text-gray-700 dark:text-gray-200',
      divider: 'my-1 h-px bg-gray-100 dark:bg-gray-600',
      header: 'block px-4 py-2 text-sm text-gray-700 dark:text-gray-200',
      hidden: 'invisible opacity-0',
      item: {
        container: '',
        base: 'flex w-full cursor-pointer items-center justify-start px-16 py-8 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white transition-colors',
        icon: 'mr-2 h-4 w-4',
      },
      style: {
        dark: 'bg-gray-900 text-white dark:bg-gray-700',
        light: 'border border-gray-200 bg-white text-gray-900',
        auto: 'border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white',
      },
      target: 'w-fit',
    },
    inlineWrapper: 'flex items-center',
  },
  modal: {
    root: {
      base: 'fixed inset-x-0 top-0 z-50 h-screen overflow-y-auto overflow-x-hidden md:inset-0 md:h-full',
      show: {
        on: 'flex bg-gray-900 bg-opacity-50 dark:bg-opacity-80',
        off: 'hidden',
      },
      sizes: {
        sm: 'max-w-sm',
        md: 'max-w-md',
        lg: 'max-w-lg',
        xl: 'max-w-xl',
        '2xl': 'max-w-2xl',
        '3xl': 'max-w-3xl',
        '4xl': 'max-w-4xl',
        '5xl': 'max-w-5xl',
        '6xl': 'max-w-6xl',
        '7xl': 'max-w-7xl',
      },
      positions: {
        'top-left': 'items-start justify-start',
        'top-center': 'items-start justify-center',
        'top-right': 'items-start justify-end',
        'center-left': 'items-center justify-start',
        center: 'items-center justify-center',
        'center-right': 'items-center justify-end',
        'bottom-right': 'items-end justify-end',
        'bottom-center': 'items-end justify-center',
        'bottom-left': 'items-end justify-start',
      },
    },
    content: {
      base: 'relative h-full w-full md:h-auto',
      inner:
        'relative flex max-h-[90dvh] flex-col rounded-lg bg-white dark:bg-gray-700 px-[40px] pt-[40px] pb-[20px] m-20 md:m-0',
    },
    body: {
      base: 'flex-1 overflow-auto p-16 text-14 [&_p]:mb-16 [&_p]:leading-20 [&_p]:text-[#121212]',
      popup: 'pt-0',
    },
    header: {
      base: 'flex items-start justify-between rounded-t p-4 dark:border-gray-600',
      popup: 'border-b-0 p-2',
      title: 'text-xl font-bold text-gray-900 dark:text-white',
      close: {
        base: 'outline-0 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-white',
        icon: 'h-22 w-22 font-700',
      },
    },
    footer: {
      base: 'flex items-center space-x-2 rounded-b border-gray-200 p-6 dark:border-gray-600',
      popup: '',
    },
  },
  accordion: {
    root: {
      base: '',
      flush: {
        off: ' border-0',
        on: 'border-b-0',
      },
    },
    content: {
      base: '',
    },
    title: {
      arrow: {
        base: 'h-24 w-24 shrink-0',
        open: {
          off: '',
          on: '',
        },
      },
      base: 'border-b-0 flex w-full items-center justify-between py-20 font-500 text-left',
      flush: {
        off: '',
        on: '',
      },
      heading: 'border-b-0',
      open: {
        off: 'border-b-0 ',
        on: 'border-b-0 ',
      },
    },
  },
};

export default Theme;
