import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import {
  Phone as PhoneIcon,
  Email as EmailIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
} from "@mui/icons-material";

const Long = () => {
  return (
    <Box>
      {/* Top Bar */}
      <AppBar position="static" color="default" sx={{ py: 1, backgroundColor: "#f5f5f5" }}>
        <Container maxWidth="lg">
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Grid container spacing={2}>
                <Grid item>
                  <Box display="flex" alignItems="center" gap={1}>
                    <PhoneIcon fontSize="small" />
                    <Typography variant="body2">(414) 857 - 0107</Typography>
                  </Box>
                </Grid>
                <Grid item>
                  <Box display="flex" alignItems="center" gap={1}>
                    <EmailIcon fontSize="small" />
                    <Typography variant="body2">happytummy@restaurant.com</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Box display="flex" gap={2}>
                <IconButton size="small"><TwitterIcon fontSize="small" /></IconButton>
                <IconButton size="small"><FacebookIcon fontSize="small" /></IconButton>
                <IconButton size="small"><InstagramIcon fontSize="small" /></IconButton>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </AppBar>

      {/* Navbar */}
      <AppBar position="static" color="transparent" elevation={0}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            <Box display="flex" alignItems="center" gap={1}>
              <img src="/japanese-food.png" alt="Logo" height="40" />
              <Typography variant="h6" component="div">
                Bistro Bliss
              </Typography>
            </Box>
            <Box display="flex" gap={2}>
              <Button>Home</Button>
              <Button variant="outlined">About</Button>
              <Button>Menu</Button>
              <Button>Pages</Button>
              <Button>Contact</Button>
            </Box>
            <Button variant="contained" color="primary">
              Book A Table
            </Button>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Main Content */}
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom fontWeight="bold" textAlign="center">
          The secret tips & tricks to prepare a perfect burger & pizza for our customers
        </Typography>

        <Box component="img" src="/images/Mask group (9).png" alt="Noodles and greens" width="100%" my={4} />

        {/* Section 1 */}
        <Box my={4}>
          <Typography variant="h5" gutterBottom>
            What do you need to prepare a home-made burger?
          </Typography>
          <Typography paragraph>
            Creating the perfect burger and pizza is an art, combining ingredients, techniques, and passion
            to craft dishes that truly delight the palate. Today, we’ll unveil some closely guarded secrets
            and insider tips for mastering these beloved staples of the culinary world.
          </Typography>
          <List>
            {[
              "Quality Beef: The heart of a perfect burger is top-notch beef. Opt for fresh, high-quality ground beef with a fat content of about 20% for the juiciest, most flavorful results.",
              "Seasoning: Simplicity is key here. A generous pinch of salt and black pepper just before cooking will enhance the beef’s natural flavors without overshadowing them.",
              "Don’t Overwork the Meat: Be gentle. Overworking can lead to dense, tough burgers.",
              "Cooking: High heat is crucial. Get a nice crust on the patty to seal in juices.",
              "Resting: Let burgers rest for a few minutes to keep them juicy and flavorful.",
            ].map((item, i) => (
              <ListItem key={i}>
                <ListItemIcon>
                  <Typography variant="body1">{i + 1}.</Typography>
                </ListItemIcon>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Section 2 */}
        <Box my={4}>
          <Typography variant="h5" gutterBottom>
            What are the right ingredients to make it delicious?
          </Typography>
          <Typography paragraph>
            Creating the perfect burger and pizza is an art, combining ingredients, techniques, and passion
            to craft dishes that truly delight the palate. Today, we’ll unveil some closely guarded secrets
            and insider tips for mastering these beloved staples of the culinary world.
          </Typography>
          <List>
            {[
              "Quality Beef: The heart of a perfect burger is top-notch beef. Opt for fresh, high-quality ground beef with a fat content of about 20% for the juiciest, most flavorful results.",
              "Seasoning: Simplicity is key here. A generous pinch of salt and black pepper just before cooking will enhance the beef’s natural flavors without overshadowing them.",
              "Don’t Overwork the Meat: Be gentle. Overworking can lead to dense, tough burgers.",
              "Cooking: High heat is crucial. Get a nice crust on the patty to seal in juices.",
              "Resting: Let burgers rest for a few minutes to keep them juicy and flavorful.",
            ].map((item, i) => (
              <ListItem key={i}>
                <ListItemIcon>
                  <Typography variant="body1">{i + 1}.</Typography>
                </ListItemIcon>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Box>

        <Box component="img" src="/images/pexels-suzy-hazelwood-2966196 1.png" alt="Salad and fries" width="100%" my={4} />

        {/* Section 3 */}
        <Box my={4}>
          <Typography variant="h5" gutterBottom>
            What are the right ingredients to make it delicious?
          </Typography>
          <Typography paragraph>
            Proin faucibus nec mauris a sodales. Sed elementum mi tincidunt. Sed eget viverra sapien nisl
            in consequat. Fusce sodales augue a accumsan. Cras sollicitudin, le ligula, porttitor eu,
            consequat vitae, eleifend ac, enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            lobortis arcu enim urna adipiscing praesent velit viverra sit semper lorem eu cursus ve at
            hendrerit elementum morbi curabitur ut etiam nibh justo, lorem aliquet donec sed sit mi
            dignissim at ante massa mattis magna sit amet purus gravida quis blandit turpis.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Long;
