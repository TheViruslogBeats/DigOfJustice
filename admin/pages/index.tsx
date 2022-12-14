import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import MainLayout from "../layouts/MainLayout";

export default function Home() {
  return (
    <>
    <Head>
      <title>CONF | Admin Panel</title>
    </Head>
      <MainLayout>
        <Paper elevation={1} sx={{ p: 2, width: 300 }}>
          <Typography variant="h6" sx={{ textAlign: "center" }} gutterBottom>
            Зарегистрированные участники
          </Typography>
          <Paper elevation={2} sx={{ p: 1, width: 200, mx: "auto", mt: 3 }}>
            <Typography variant="h3" sx={{ textAlign: "center" }}>
              49
            </Typography>
            <Typography
              variant="h6"
              sx={{ textAlign: "center", mt: 0 }}
              gutterBottom
            >
              Участников
            </Typography>
          </Paper>
        </Paper>
        <Paper elevation={1} sx={{ p: 2, width: 300 }}>
          <Typography variant="h6" sx={{ textAlign: "center" }} gutterBottom>
            Зарегистрированные участники
          </Typography>
          <Paper elevation={2} sx={{ p: 1, width: 200, mx: "auto", mt: 3 }}>
            <Typography variant="h3" sx={{ textAlign: "center" }}>
              49
            </Typography>
            <Typography
              variant="h6"
              sx={{ textAlign: "center", mt: 0 }}
              gutterBottom
            >
              Участников
            </Typography>
          </Paper>
        </Paper>
        <Paper elevation={1} sx={{ p: 2, width: 300 }}>
          <Typography variant="h6" sx={{ textAlign: "center" }} gutterBottom>
            Зарегистрированные участники
          </Typography>
          <Paper elevation={2} sx={{ p: 1, width: 200, mx: "auto", mt: 3 }}>
            <Typography variant="h3" sx={{ textAlign: "center" }}>
              49
            </Typography>
            <Typography
              variant="h6"
              sx={{ textAlign: "center", mt: 0 }}
              gutterBottom
            >
              Участников
            </Typography>
          </Paper>
        </Paper>
      </MainLayout>
    </>
  );
}
