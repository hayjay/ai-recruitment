<template>
  <div>
    <WidgetsDropdown/>
    <CCard>
      <CCardBody>
      </CCardBody>
    </CCard>
    <CRow>
      <CCol md="12">
        <CCard>
          <CCardBody>
            <h4>New Job Vacancies</h4>
            <CDataTable
              class="mb-0 table-outline"
              hover
              :items="tableItems"
              :fields="tableFields"
              head-color="light"
              no-sorting
            >
              <td slot="avatar" class="text-center" slot-scope="{item}">
                <div class="c-avatar">
                  <img :src="item.avatar.url" class="c-avatar-img" alt="">
                  <span
                    class="c-avatar-status"
                    :class="`bg-${item.avatar.status || 'secondary'}`"
                  ></span>
                </div>
              </td>
              <td slot="employer" slot-scope="{item}">
                <div>{{item.employer.name}}</div>
                <div class="small text-muted">
                  <span>
                   Registered: {{item.employer.registered}}
                  </span> 
                </div>
              </td>
              <td slot="role" slot-scope="{item}">
                <div>{{ item.role.name }}</div>
              </td>
              <td slot="pay" slot-scope="{item}">
                <div>{{ item.pay.name }}</div>
              </td>
              <td
                slot="country"
                slot-scope="{item}"
                class="text-center"
              >
                <CIcon
                  :name="item.country.flag"
                  height="25"
                />
                <div class="small text-muted">
                  <span>
                    <small class="text-muted">{{ item.country.location }}</small>
                  </span> 
                </div>
              </td>
              <td slot="closing_date" slot-scope="{item}">
                <div class="clearfix">
                  <div class="float-left">
                    <strong>{{item.closing_date.value}}%</strong>
                  </div>
                  <div class="float-right">
                    <small class="text-muted">{{item.closing_date.period}}</small>
                  </div>
                </div>
                <CProgress
                  class="progress-xs"
                  v-model="item.closing_date.value"
                  :color="color(item.closing_date.value)"
                />
              </td>
              <!-- <td
                slot="payment"
                slot-scope="{item}"
                class="text-center"
              >
                <CIcon
                  :name="item.payment.icon"
                  height="25"
                />
              </td> -->
              <td slot="activity" slot-scope="{item}">
                <div class="small text-muted">Last login</div>
                <strong>{{item.activity}}</strong>
              </td>
            </CDataTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>
import MainChartExample from '../../charts/MainChartExample'
import WidgetsDropdown from '../../widgets/WidgetsDropdown'
import WidgetsBrand from '../../widgets/WidgetsBrand'

export default {
  name: 'Index',
  components: {
    MainChartExample,
    WidgetsDropdown,
    WidgetsBrand
  },
  data () {
    return {
      selected: 'Month',
      tableItems: [
        {
          avatar: { url: 'img/kpmg.png', status: 'success' },
          employer: { name: 'Microsoft Inc.', registered: 'October 1, 2019' },
          role: { name: 'Senior Financial Analyst', new: true},
          pay: { name: '£65K/yr', new: true},
          country: { name: 'UK', flag: 'cif-gb', location: 'London, UK' },
          closing_date: { value: 50, period: 'Active Now - Expires: October 10, 2021' },
          posted_at: '10 sec ago'
        },
        {
          avatar: { url: 'img/microsoft.png', status: 'success' },
          employer: { name: 'Microsoft Inc.', registered: 'Jan 1, 2015' },
          role: { name: 'Product Manager', new: true},
          pay: { name: '£80K/yr', new: true},
          country: { name: 'USA', flag: 'cif-us', location: 'New York, USA' },
          closing_date: { value: 60, period: 'Active Now - Expires: October 10, 2021' },
          posted_at: '5 days ago'
        },
        {
          avatar: { url: 'img/mastercard.png', status: 'success' },
          employer: { name: 'Microsoft Inc.', registered: 'October 1, 2019' },
          role: { name: 'Human Resource Manager', new: true},
          pay: { name: '£52K/yr', new: true},
          country: { name: 'CA', flag: 'cif-ca', location: 'Alberta, Canada' },
          closing_date: { value: 50, period: 'Active Now - Expires: April 23, 2022' },
          posted_at: '3days ago'
        },
        {
          avatar: { url: 'img/twitter.png', status: 'success' },
          employer: { name: 'Twitter Inc.', registered: 'September 24, 2019' },
          role: { name: 'Engineering Manager', new: true},
          pay: { name: '£200K/yr', new: true},
          country: { name: 'FRANCE', flag: 'cif-fr', location: 'Paris, France' },
          closing_date: { value: 30, period: 'Active Now - Expires: April 23, 2022' },
          posted_at: '7days ago'
        },
        {
          avatar: { url: 'img/stripe.png', status: 'success' },
          employer: { name: 'Stripe Inc.', registered: 'September 24, 2019' },
          role: { name: 'Lead Data Scientist', new: true},
          pay: { name: '£120K/yr', new: true},
          country: { name: 'UK', flag: 'cif-gb', location: 'Manchester, UK' },
          closing_date: { value: 30, period: 'Active Now - Expires: April 23, 2022' },
          posted_at: '1days ago'
        },
        // {
        //   avatar: { url: 'img/avatars/2.jpg', status: 'danger' },
        //   user: { name: 'Avram Tarasios', new: false, registered: 'Jan 1, 2015' },
        //   country: { name: 'Brazil', flag: 'cif-br' },
        //   usage: { value: 22, period: 'Jun 11, 2015 - Jul 10, 2015' },
        //   payment: { name: 'Visa', icon: 'cib-cc-visa' },
        //   activity: '5 minutes ago'
        // },
        // {
        //   avatar: { url: 'img/avatars/3.jpg', status: 'warning' },
        //   user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2015' },
        //   country: { name: 'India', flag: 'cif-in' },
        //   usage: { value: 74, period: 'Jun 11, 2015 - Jul 10, 2015' },
        //   payment: { name: 'Stripe', icon: 'cib-stripe' },
        //   activity: '1 hour ago'
        // },
        // {
        //   avatar: { url: 'img/avatars/4.jpg', status: '' },
        //   user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2015' },
        //   country: { name: 'France', flag: 'cif-fr' },
        //   usage: { value: 98, period: 'Jun 11, 2015 - Jul 10, 2015' },
        //   payment: { name: 'PayPal', icon: 'cib-paypal' },
        //   activity: 'Last month'
        // },
        // {
        //   avatar: { url: 'img/avatars/5.jpg', status: 'success' },
        //   user: { name: 'Agapetus Tadeáš', new: true, registered: 'Jan 1, 2015' },
        //   country: { name: 'Spain', flag: 'cif-es' },
        //   usage: { value: 22, period: 'Jun 11, 2015 - Jul 10, 2015' },
        //   payment: { name: 'Google Wallet', icon: 'cib-google-pay' },
        //   activity: 'Last week'
        // },
        // {
        //   avatar: { url: 'img/avatars/6.jpg', status: 'danger' },
        //   user: { name: 'Friderik Dávid', new: true, registered: 'Jan 1, 2015' },
        //   country: { name: 'Poland', flag: 'cif-pl' },
        //   usage: { value: 43, period: 'Jun 11, 2015 - Jul 10, 2015' },
        //   payment: { name: 'Amex', icon: 'cib-cc-amex' },
        //   activity: 'Last week'
        // }
      ],
      tableFields: [
        { key: 'avatar', label: '', _classes: 'text-center' },
        { key: 'employer' },
        { key: 'role' },
        { key: 'pay' },
        { key: 'country', _classes: 'text-center' },
        { key: 'closing_date', label: 'Closing Date' },
        { key: 'posted_at', label: 'Posted At', _classes: 'text-center' },
        // { key: 'activity' },
      ]
    }
  },
  methods: {
    color (value) {
      let $color
      if (value <= 25) {
        $color = 'info'
      } else if (value > 25 && value <= 50) {
        $color = 'success'
      } else if (value > 50 && value <= 75) {
        $color = 'warning'
      } else if (value > 75 && value <= 100) {
        $color = 'danger'
      }
      return $color
    }
  }
}
</script>
