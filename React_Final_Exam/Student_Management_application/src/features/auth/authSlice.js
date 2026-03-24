import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const AUTH_KEY = 'sms_auth_user'
const savedUser = localStorage.getItem(AUTH_KEY)

const initialState = {
  user: savedUser ? JSON.parse(savedUser) : null,
  isAuthenticated: Boolean(savedUser),
  loading: false,
  error: null,
}

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ username, password }, { rejectWithValue }) => {
    const validUsername = 'HarshVaghani'
    const validPassword = 'harsh123'

    if (username === validUsername && password === validPassword) {
      const user = { username, role: 'Administrator' }
      localStorage.setItem(AUTH_KEY, JSON.stringify(user))
      return user
    }

    return rejectWithValue('Invalid username or password')
  },
)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.user = null
      state.isAuthenticated = false
      state.error = null
      localStorage.removeItem(AUTH_KEY)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload
        state.isAuthenticated = true
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload || 'Login failed'
      })
  },
})

export const { logoutUser } = authSlice.actions

export default authSlice.reducer
