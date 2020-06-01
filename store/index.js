// Define State defaults
export const state = () => ({
  donationModalOpened: false
})

// Define mutations
export const mutations = {
  OPEN_DONATION_MODAL(state) {
    state.donationModalOpened = true
  },
  CLOSE_DONATION_MODAL(state) {
    state.donationModalOpened = false
  }
}
