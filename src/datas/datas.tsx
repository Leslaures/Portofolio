

const burgerLinks = [
    {
    text: "Accueil",
    icon: "Home",
    href: "#home",    
},
    {
    text: "A propos",
    icon: "Info",
    href: "#about",    
},
{
    text: "Compétences",
    icon: "Work",
    href: "#competences",    
},
{
    text: "Portfolio",
    icon: "FolderSpecial",
    href: "#portofolio",    
},
{
    text: "Contact",
    icon: "ContactPage",
    href: "#contact",    
},

]

export default burgerLinks;







// const DrawerList = (
//     <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
//       <List>
//         {['Accueil', 'A propos', 'Compétences', 'Portfolio', 'Contact'].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );