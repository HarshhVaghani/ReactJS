import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const API_URL = 'http://localhost:3001/students'

export const fetchStudents = createAsyncThunk('students/fetchStudents', async (_, { rejectWithValue }) => {
  try {
    const response = await fetch(API_URL)

    if (!response.ok) {
      throw new Error('Failed to fetch students')
    }

    return await response.json()
  } catch (error) {
    return rejectWithValue(error.message)
  }
})

export const addStudent = createAsyncThunk('students/addStudent', async (student, { rejectWithValue }) => {
  try {
    const payload = {
      ...student,
      id: student.id ?? Date.now().toString(),
    }

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      const message = await response.text()
      throw new Error(message || 'Failed to add student')
    }

    return await response.json()
  } catch (error) {
    return rejectWithValue(error.message)
  }
})

export const updateStudent = createAsyncThunk(
  'students/updateStudent',
  async ({ id, updatedData }, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_URL}/${encodeURIComponent(id)}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      })

      if (!response.ok) {
        const message = await response.text()
        throw new Error(message || 'Failed to update student')
      }

      return await response.json()
    } catch (error) {
      return rejectWithValue(error.message)
    }
  },
)

export const deleteStudent = createAsyncThunk('students/deleteStudent', async (id, { rejectWithValue }) => {
  try {
    const response = await fetch(`${API_URL}/${encodeURIComponent(id)}`, {
      method: 'DELETE',
    })

    if (!response.ok) {
      throw new Error('Failed to delete student')
    }

    return id
  } catch (error) {
    return rejectWithValue(error.message)
  }
})

const studentSlice = createSlice({
  name: 'students',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudents.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.loading = false
        state.items = action.payload
      })
      .addCase(fetchStudents.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload || 'Could not load students'
      })
      .addCase(addStudent.pending, (state) => {
        state.error = null
      })
      .addCase(addStudent.fulfilled, (state, action) => {
        state.items.push(action.payload)
      })
      .addCase(addStudent.rejected, (state, action) => {
        state.error = action.payload || 'Could not add student'
      })
      .addCase(updateStudent.pending, (state) => {
        state.error = null
      })
      .addCase(updateStudent.fulfilled, (state, action) => {
        state.items = state.items.map((student) =>
          String(student.id) === String(action.payload.id) ? action.payload : student,
        )
      })
      .addCase(updateStudent.rejected, (state, action) => {
        state.error = action.payload || 'Could not update student'
      })
      .addCase(deleteStudent.pending, (state) => {
        state.error = null
      })
      .addCase(deleteStudent.fulfilled, (state, action) => {
        state.items = state.items.filter((student) => String(student.id) !== String(action.payload))
      })
      .addCase(deleteStudent.rejected, (state, action) => {
        state.error = action.payload || 'Could not delete student'
      })
  },
})

export default studentSlice.reducer
