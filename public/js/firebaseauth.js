import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'

const config = {
	apiKey: "AIzaSyC31PDyS0jn_lHPFNJ36Kw32V2CEFSPs5A",
	authDomain: "beforeandafterapplication.firebaseapp.com",
	databaseURL: "https://beforeandafterapplication.firebaseio.com",
	projectId: "beforeandafterapplication",
	storageBucket: "beforeandafterapplication.appspot.com",
	messagingSenderId: "495897903913",
	appId: "1:495897903913:web:935e90aadfbc52f787ed38",
	measurementId: "G-JJ00WXPP8M"
  }

class Firebase {
	constructor() {
		app.initializeApp(config)
		this.auth = app.auth()
		// this.db = app.firestore()
	}

	login(email, password) {
		return this.auth.signInWithEmailAndPassword(email, password)
	}

	logout() {
		return this.auth.signOut()
	}

	async register(name, email, password) {
		await this.auth.createUserWithEmailAndPassword(email, password)
		return this.auth.currentUser.updateProfile({
			displayName: name
		})
	}

	isInitialized() {
		return new Promise(resolve => {
			this.auth.onAuthStateChanged(resolve)
		})
	}

	getCurrentUsername() {
		return this.auth.currentUser && this.auth.currentUser.displayName
	}
}

export default new Firebase()