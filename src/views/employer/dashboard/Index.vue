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
            <h4>Job Candidates In My Sector</h4>
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
              <td slot="candidate" slot-scope="{item}">
                <div>{{item.candidate.name}}</div>
              </td>
              <td slot="role" slot-scope="{item}">
                <div>{{ item.role.name }}</div>
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
                    <strong>{{item.years_of_experience.value}}</strong>
                  </div>
                  <div class="float-right">
                    <small class="text-muted">{{item.years_of_experience.period}}</small>
                  </div>
                </div>
                <CProgress
                  class="progress-xs"
                  v-model="item.years_of_experience.value"
                  :color="color(item.years_of_experience.value)"
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
import WidgetsDropdown from '../../widgets/employer/WidgetsDropdown'

export default {
  name: 'Index',
  components: {
    WidgetsDropdown,
  },
  data () {
    return {
      selected: 'Month',
      tableItems: [
        {
          avatar: { url: 'img/avatars/2.jpg', status: 'success' },
          candidate: { name: 'Olawale Adebowale.', registered: 'January 1, 2017' },
          role: { name: 'Senoir Accountant', new: true},
          country: { name: 'UK', flag: 'cif-gb', location: 'Leeds, UK' },
          years_of_experience: '4yrs'
        },
        {
          avatar: { url: 'img/avatars/me.jpeg', status: 'success' },
          candidate: { name: 'Nurudeen Ajayi.', registered: 'October 1, 2019' },
          role: { name: 'Senior Lagal Advisor', new: true},
          country: { name: 'US', flag: 'cif-us', location: 'New York, USA' },
          years_of_experience: '2yrs'
        },
        {
          avatar: { url: 'img/avatars/4.jpg', status: 'success' },
          candidate: { name: 'Ahmad Fasil Chamaruverin.', registered: 'May 1, 2018' },
          role: { name: 'Senoir Accountant', new: true},
          country: { name: 'IND', flag: 'cif-in', location: 'Bangalore, India' },
          years_of_experience: '4yrs'
        },
        {
          avatar: { url: 'img/avatars/5.jpg', status: 'success' },
          candidate: { name: 'Josua Ameen.', registered: 'August 1, 2015' },
          role: { name: 'Software Engineer', new: true},
          country: { name: 'Poland', flag: 'cif-pl', location: 'Krakow, Poland' },
          years_of_experience: '4yrs'
        },
        {
          avatar: { url: 'img/avatars/6.jpg', status: 'success' },
          candidate: { name: 'Yusuf Fijabis.', registered: 'October 1, 2019' },
          role: { name: 'Product Manager', new: true},
          country: { name: 'UK', flag: 'cif-gb', location: 'Kent, UK' },
          years_of_experience: '5yrs'
        },
      ],
      tableFields: [
        { key: 'avatar', label: '', _classes: 'text-center' },
        { key: 'candidate' },
        { key: 'role' },
        { key: 'country', _classes: 'text-center' },
        { key: 'years_of_experience', label: 'Experience' },
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
