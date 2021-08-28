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
          name: 'Post A Job',
          to: '',
          icon: 'cil-chart-pie'
        },
        {
          _name: 'CSidebarNavItem',
          name: 'Filter Candidates',
          to: '',
          icon: 'cil-chart-pie'
        },
        {
          _name: 'CSidebarNavItem',
          name: 'Candidates In My Sector',
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