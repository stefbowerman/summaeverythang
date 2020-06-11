// Define State defaults
export const state = () => ({
  donationModalOpened: false,
  aboutModalOpened: false,
  contactModalOpened: false
})

// Define mutations
export const mutations = {
  OPEN_DONATION_MODAL(state) {
    state.donationModalOpened = true
  },
  CLOSE_DONATION_MODAL(state) {
    state.donationModalOpened = false
  },
  OPEN_ABOUT_MODAL(state) {
    state.aboutModalOpened = true
  },
  CLOSE_ABOUT_MODAL(state) {
    state.aboutModalOpened = false
  },
  OPEN_CONTACT_MODAL(state) {
    state.contactModalOpened = true
  },
  CLOSE_CONTACT_MODAL(state) {
    state.contactModalOpened = false
  }
}
