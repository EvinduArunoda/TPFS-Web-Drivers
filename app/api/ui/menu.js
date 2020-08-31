/* eslint-disable spaced-comment */
/* eslint-disable indent */
module.exports = [
  {
    key: 'pages',
    name: '',
    icon: 'ios-paper-outline',
    child: [
     // {
      //  key: 'other_page',
        // eslint-disable-next-line spaced-comment
        //name: 'Welcome Page',
        //title: true,
     // },
 //     {
  //      key: 'dashboard',
    //    name: 'Dashboard',
      //  link: '/app/dashboard',
       // icon: 'ios-home-outline',
     // },
     // {
      //  key: 'blank',
    //    name: 'Blank Page',
      //  link: '/app',
   //     icon: 'ios-document-outline',
    //  },
    {
      key: 'profile',
      name: 'Profile',
      link: '/app/profile',
      icon: 'ios-home-outline',
    },
      {
        key: 'form',
        name: 'Complaint',
        link: '/app/form',
        icon: 'ios-list-box-outline',
      },
      {
        key: 'table',
        name: 'Ticket',
        link: '/app/table',
        icon: 'ios-grid-outline',
      },
      {
        key: 'finedocumentation',
        name: 'View Fine',
        link: '/app/finedocumentation',
        icon: 'ios-grid-outline',
      },
      {
        key: 'complaint',
        name: 'Feedback',
        link: '/app/complaint',
        icon: 'ios-grid-outline',
      },
      {
        key: 'paymenthistory',
        name: 'Payment History',
        link: '/app/paymenthistory',
        icon: 'ios-grid-outline',
      },
    ]
  },
  {
    key: 'auth',
    name: 'Auth Page',
    icon: 'ios-contact-outline',
    child: [
      {
        key: 'auth_page',
        name: 'User Authentication',
        title: true,
      },
      {
        key: 'login',
        name: 'Login',
        link: '/login',
        icon: 'ios-person-outline'
      },
      {
        key: 'changepassword',
        name: 'Change Password',
        link: '/changepassword',
        icon: 'ios-undo-outline'
      },
      {
        key: 'reset',
        name: 'Reset Password',
        link: '/reset-password',
        icon: 'ios-undo-outline'
      },
      {
        key: 'logout',
        name: 'Logout',
        link: '/logout',
        icon: 'ios-undo-outline'
      },
    ]
  }


];
