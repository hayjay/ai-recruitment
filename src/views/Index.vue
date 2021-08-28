<template>
  <div class="c-app flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol md="8">
          <center>
            <CRow class="align-items-center">
              <h1>WELCOME TO THE ARTIFICIAL INTELLIGENCE (A.I) RECRUITMENT PLATFORM</h1> 
            </CRow>
            <br>
            <CRow class="align-items-center">
              <CCol col="1" class="mb-4 mb-xl-0 text-center">
              </CCol>
              <CCol col="4" class="mb-3 mb-xl-0 text-center">
                <CButton @click="gotoRegisterPage('EMPLOYER')" color="info" > I AM AN EMPLOYER</CButton>
              </CCol>
              <CCol col="2" class="mb-3 mb-xl-0 text-center">
              </CCol>
              <CCol col="4" class="mb-4 mb-xl-0 text-center">
                <CButton @click="gotoRegisterPage('CANDIDATE')" color="info" >I AM A CANDIDATE</CButton>
              </CCol>
            </CRow>
          </center>          
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
export default {
  name: 'Login',

  data () {
    return {

    }
  },

  methods: {
    gotoRegisterPage(user_type) {
      if(user_type === 'EMPLOYER') {
        return this.$router.push({
          name : 'EmployerRegister'
        });
      }
      this.$router.push({
        name : 'CandidateRegister'
      });

    }
  }
}
</script>
