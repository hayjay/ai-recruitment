<template>
  <div class="d-flex align-items-center min-vh-100">
    <CContainer fluid>
      <CRow class="justify-content-center">
        <CCol md="6">
          <CCard class="mx-4 mb-0">
            <CCardBody class="p-4">
              <CForm>
                <h1>EMPLOYER'S REGISTRATION</h1>
                <p class="text-muted">Create your account</p>
                <CInput
                  label="Company Name"
                  placeholder="Company Name"
                />
                <CSelect
                    label="Sector"
                    :options="this.sectors"
                    />
                <CInput
                  label="Email Address"
                  placeholder="Email Address"
                  autocomplete="email"
                  prepend="@"
                />
                <CInput
                  label="Password"
                  placeholder="Password"
                  type="password"
                  autocomplete="new-password"
                >
                  <template #prepend-content><CIcon name="cil-lock-locked"/></template>
                </CInput>
                <CInput
                  label="Confirm Password"
                  placeholder="Repeat password"
                  type="password"
                  autocomplete="new-password"
                  class="mb-4"
                >
                  <template #prepend-content><CIcon name="cil-lock-locked"/></template>
                </CInput>
                <CLink to="/pages/login">
                  Already have an account? Click here to Login.
                </CLink><br><br>
                <CButton color="primary" block>Create Account</CButton>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
export default {
  name: 'Register',

  data() {
    return {
      sectors : [
          'Finance and Accounting',
          'Agriculture',
          'Information Technology',
          'Entertainment',
          'Education',
          'Management and Business',
      ],
    }
  },

  created() {
  }
}
</script>
