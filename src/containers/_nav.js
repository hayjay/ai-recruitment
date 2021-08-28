export default [
  {
    _name: 'CSidebarNav',
    _children: [
      {
        _name: 'CSidebarNavTitle',
        _children: ['A.I Recruiter Core Modules']
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Jobs Around Me',
        to: '',
        icon: 'cil-chart-pie'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Generate CV',
        to: '',
        icon: 'cil-chart-pie'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Apply for Jobs',
        to: '',
        icon: 'cil-chart-pie'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Best Fit Jobs as Per Your CV',
        to: '',
        icon: 'cil-chart-pie'
      },
      {
        _name: 'CSidebarNavDivider',
        _class: 'm-2'
      },
      {
        _name: 'CSidebarNavTitle',
        _children: ['System Settings']
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Account Settings',
        route: '/pages',
        icon: 'cil-star',
        items: [
          {
            name: 'Profile Update',
            to: ''
          },
          {
            name: 'Notifications',
            to: ''
          },
        ]
      },
    ]
  }
]