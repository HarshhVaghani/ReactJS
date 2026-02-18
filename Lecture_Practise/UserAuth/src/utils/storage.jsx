import { useState } from "react";


export const localStorageService = {

  setUser:(user) => {
    localStorage.setItem('user' , JSON.stringify(user))
  },

  getUser:(user) => {
    localStorage.getItem('user')
    return user ? JSON.parse(user) : null;
  },

  removeUser:() => {
    localStorage.removeItem('user')
  },

  setTasks:(userId , tasks) => {
    const allTasks = localStorageService.getAllTasks()
  }

}

export const sessionStorageService = () => {

}








