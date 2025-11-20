import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SelectUser from './pages/user/SelectUser'
import SurveyUser from './pages/user/SurveyUser'
import PenilaianUser from './pages/user/PenilaianUser'
import DashboardAdmin from './pages/admin/DashboardAdmin'
import StatDosen from './pages/admin/StatDosen'
import StatistikPengguna from './pages/admin/StatistikPengguna'
import StatMahasiwa from './pages/admin/StatMahasiwa'
import StatTendik from './pages/admin/StatTendik'
import Pertanyaan from './pages/admin/Pertanyaan'
import Penilaian from './pages/admin/Penilaian'
import Dashboard from './pages/admin/Dashboard'
import StatistikData from './pages/admin/StatistikData'
import LoginUser from './pages/user/LoginUser'
import LoginAdmin from './pages/admin/LoginAdmin'
import LoginSuperAdmin from './pages/superadmin/LoginSuperaAdmin'
import HasilSurvey from './pages/superadmin/HasilSurvey'
const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <LoginUser />,
    },
    {
      path: '/select-user',
      element: <SelectUser />
    },
    {
      path: '/survey',
      element: <SurveyUser />
    },
    {
      path: '/penilaian',
      element: <PenilaianUser />
    },
    {
      path: '/admin',
      element: <LoginAdmin />
    },
    {
      path: '/super-admin',
      element: <LoginSuperAdmin />,
    },
    {
      path: '/hasil-survey',
      element: <HasilSurvey />
    },
    {
      path: '/dashboard',
      element: <DashboardAdmin />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: 'statistik',
          element: <StatistikPengguna />,
        },
        {
          path: 'statistik/mahasiswa',
          element: <StatMahasiwa />,
        },
        {
          path: 'statistik/dosen',
          element: <StatDosen />,
        },
        {
          path: 'statistik/tendik',
          element: <StatTendik />,
        },
        {
          path: 'pertanyaan',
          element: <Pertanyaan />,
        },
        {
          path: 'penilaian',
          element: <Penilaian />,
        },
        {
          path: 'statistik-data',
          element: <StatistikData />,
        }
      ]
    }

  ])

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App