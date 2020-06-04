// Define State defaults
export const state = () => ({
  donationModalOpened: false,
  aboutModalOpened: false,
  videoPlaying: false
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
  VIDEO_PLAYING(state) {
    state.videoPlaying = true
  },
  VIDEO_STOPPED(state) {
    state.videoPlaying = false
  }
}
