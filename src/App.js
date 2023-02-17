import { Card, Container, Box, Paper, Typography } from "@mui/material";
import { PagePaper } from "./components/PagePaper";
import { color } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import profilePhoto from "./images/profilePhoto.png";
function App() {
  const theme = useTheme();
  console.log(theme);
  return (
    <div className="App">
      <Container>
        <Paper
          sx={{
            backgroundColor: "primary.main",
          }}
        >
          <div style={{ display: "grid", justifyItems: "center" }}>
            <div
              className="profilePhoto"
              style={{
                display: "flex",
                border: "2px solid white",
                borderRadius: "50%",
                height: "100px",
                width: "100px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <img
                src={profilePhoto}
                alt="author"
                style={{
                  alignContent: "center",
                  margin: "0 auto",
                  height: "125%",
                  width: "auto",
                }}
              />
            </div>
            <Typography variant="h4">Md. Samin Irtiza</Typography>
          </div>
          fsdfsdfd
        </Paper>
      </Container>
    </div>
  );
}

export default App;
