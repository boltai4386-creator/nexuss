export interface Client {
  username: string;
  handle: string;
  followers: string;
  avatar: string;
  link: string;
}

export const clients: Client[] = [
  {
    username: "Envato Elements",
    handle: "Envato Elements",
    followers: "",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUosQh1I3IlzBhrO1V21w4cTtVbfO8TSAD0Q&s",
    link: "https://elements.envato.com/"
  },
  {
    username: "Skillshare",
    handle: "Skillshare",
    followers: "",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVI0Wi-E7Z4JnPsc3Gr5QBDZ5AXM1kN5FNRg&s",
    link: "https://www.skillshare.com/en/home?via=header"
  },
  {
    username: "Michael Morelli",
    handle: "Instagram",
    followers: "985K",
    avatar: "https://instagram.fisb19-1.fna.fbcdn.net/v/t51.2885-19/450798581_495315092976872_3535959948725948971_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby40OTYuYzIifQ&_nc_ht=instagram.fisb19-1.fna.fbcdn.net&_nc_cat=108&_nc_oc=Q6cZ2QHNvwsfsistEpZDgpLFTFAbJOaHymBzteD4ijIirzX_DJoNcmkg_oTo_49D5M3rpPg&_nc_ohc=rEKIbd7qsBYQ7kNvwEJ3Drq&_nc_gid=G2qa-Gc1C3lybQTRkXuGJA&edm=ALGbJPMBAAAA&ccb=7-5&oh=00_AfXy6B_gr4lH9psq1vA-iWA9Aq2tKwzA4bW1CXgSLQ9srA&oe=68AE764E&_nc_sid=7d3ac5",
    link: "https://www.instagram.com/morellifit/"
  },
  {
    username: "Second Thoughts",
    handle: "YouTube",
    followers: "1.87M",
    avatar: "https://yt3.googleusercontent.com/jFtBqUEecOwuVnfYv2ptgUx5fVp8GuMpZCcrytKlpZg82SzUY7_CrD-tI4qLqEfyBbfAjc9MLQ=s160-c-k-c0x00ffffff-no-rj",
    link: "https://www.youtube.com/@SecondThought"
  },
  {
    username: "First Thoughts",
    handle: "YouTube",
    followers: "139K",
    avatar: "https://yt3.googleusercontent.com/gv82mXTpRgEB1Zq6vT9Lb4wP9xzdG2QdKn-1qyzHlFxSFwsgAShZTCyavfQyUGTy9qGShLVInA=s160-c-k-c0x00ffffff-no-rj",
    link: "https://www.youtube.com/@firstthoughtnews"
  },
  {
    username: "Yugopnik",
    handle: "YouTube",
    followers: "252K",
    avatar: "https://yt3.googleusercontent.com/RCCix_kyGIY-CYqf1jGsU2LIW5jDDfpwo4cFgP6Lb-7ckRVaQes2yaGsxlbnQPJaStHj2h6s9A=s160-c-k-c0x00ffffff-no-rj",
    link: "https://www.youtube.com/@YUGOPNIK"
  },
  {
    username: "Jake Tran",
    handle: "YouTube",
    followers: "1.86M",
    avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&q=80&fit=crop",
    link: "https://www.youtube.com/@jaketran"
  },
  {
    username: "Louaista",
    handle: "YouTube",
    followers: "1.69M",
    avatar: "https://yt3.googleusercontent.com/SEWmuaN9FEOqK4qpTl1PBBN2uJi1dBEgHFA8uNxUYmYCTCBBKHyyoij-zm_9GGQPckpWi03jePE=s72-c-k-c0x00ffffff-no-rj",
    link: "https://www.youtube.com/@louaista"
  },
  {
    username: "Cam Meunier",
    handle: "Instagram",
    followers: "99.2K",
    avatar: "https://instagram.fisb19-1.fna.fbcdn.net/v/t51.2885-19/405274865_1162705871373419_2868646068072954854_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.fisb19-1.fna.fbcdn.net&_nc_cat=111&_nc_oc=Q6cZ2QH270fLvOGQqr5TNHI1VfFekMm7iyxcYcEZdKEoHCCAH4SKBqYwFXih7-uvLK1KKW4&_nc_ohc=T6nU5cJyN0wQ7kNvwH8mUpc&_nc_gid=oeCt6qKK0xC_6I7RQ956BA&edm=APoiHPcBAAAA&ccb=7-5&oh=00_AfU9-BbVEafFii05l4vt5jHeZQkdusyIwbaKpT5s24Pi8g&oe=68AE96B8&_nc_sid=22de04",
    link: "https://www.instagram.com/itscameracam/"
  },
  {
    username: "Onlytapa",
    handle: "Instagram",
    followers: "238K",
    avatar: "https://instagram.fisb19-1.fna.fbcdn.net/v/t51.2885-19/412464199_1099194587747670_315714071901219203_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.fisb19-1.fna.fbcdn.net&_nc_cat=1&_nc_oc=Q6cZ2QHx7-6nbcXkWVi6KYzKKrL6RjHTEv_I2F6UfgXvGXUxYuPhfXQUUwtIOLGUzi0Q4Hw&_nc_ohc=DXq4oIje7aAQ7kNvwHWxSDZ&_nc_gid=CnVWotjZCR7zfvb316pnqw&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AfX6kUhjgyzhFjcVQZv9KparATnyHteqBNPkP4ijorU7Lw&oe=68AE927F&_nc_sid=7a9f4b",
    link: "https://www.instagram.com/onlytapa.ai/"
  },
  {
    username: "Section 8 Karim",
    handle: "Instagram",
    followers: "596K",
    avatar: "https://instagram.fisb19-1.fna.fbcdn.net/v/t51.2885-19/324062855_491953156188499_6037266117919916139_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.fisb19-1.fna.fbcdn.net&_nc_cat=107&_nc_oc=Q6cZ2QGyAceilGtQ0jZk5UcwUSkDiz6gPqtg80VzZN9azfoIwJxHpILcNx8RsyLN7jE2akU&_nc_ohc=Xyzy6qlmRbIQ7kNvwFUvsSo&_nc_gid=V0lbgd9bJrX1xVA4BKweiA&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AfXdXlY6RsuEj5dHfFmn7C-VgEd2M9H2mftsjSNv2xcTMw&oe=68AEA103&_nc_sid=7a9f4b",
    link: "https://www.instagram.com/section8karim/"
  },
  {
    username: "Marshal Crews",
    handle: "Instagram",
    followers: "341K",
    avatar: "https://instagram.fisb19-1.fna.fbcdn.net/v/t51.2885-19/474232874_959152166159319_781135593094877022_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.fisb19-1.fna.fbcdn.net&_nc_cat=103&_nc_oc=Q6cZ2QE-cWOkvQDWYUrzXUknpU0KkclBEMWrD99hCjoGezVzTevK-28-WMAqhymbqF_L0a4&_nc_ohc=e1-sk9IsjykQ7kNvwHHb0N8&_nc_gid=ajX_6JZPYZnYPRWZjnM0SA&edm=ALGbJPMBAAAA&ccb=7-5&oh=00_AfWsGE9n9iNlMw_Gz1Q0YSsWzoQGa3fR41VT6RM4xOPdxQ&oe=68AEA421&_nc_sid=7d3ac5",
    link: "https://www.instagram.com/marshalcrews/"
  },
  {
    username: "Alex Chen",
    handle: "Instagram",
    followers: "119K",
    avatar: "https://instagram.fisb19-1.fna.fbcdn.net/v/t51.2885-19/483924368_655960690221967_5331672345653426973_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.fisb19-1.fna.fbcdn.net&_nc_cat=1&_nc_oc=Q6cZ2QGC-ymeXDK6dY34wZVA4Mp832GnH6cpkSI02OCyA_vRoz7trGl6V_WEMODWjPc3haE&_nc_ohc=jNR6NdOhCxkQ7kNvwH-7cgu&_nc_gid=dyxn0bAeodllrB8bdQxZlw&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AfXBhB8HNQhaxKjJ_EriLKbQkV2HMU2JE0SapYMLTfqzbg&oe=68AE7A83&_nc_sid=7a9f4b",
    link: "https://www.instagram.com/alexchen/"
  },
  {
    username: "Mike Hoffman",
    handle: "Instagram",
    followers: "205K",
    avatar: "https://instagram.fisb19-1.fna.fbcdn.net/v/t51.2885-19/461611253_374444492285567_1922841692189167005_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby43MTguYzIifQ&_nc_ht=instagram.fisb19-1.fna.fbcdn.net&_nc_cat=111&_nc_oc=Q6cZ2QECJCASERppR42QIxVyqL0pOuLw4AK8777gXz_EuXyuAP_Uewr9usFYbL57AQtQzCE&_nc_ohc=Yuycbr4LAIEQ7kNvwF8ITQC&_nc_gid=Qw977qrqabxASY-iklrbHQ&edm=ALGbJPMBAAAA&ccb=7-5&oh=00_AfXDxkEUEzwlRdUC4Cjl6J5cVo7FJs3rmvPCTpyaUW_Bng&oe=68AE9B52&_nc_sid=7d3ac5",
    link: "https://www.instagram.com/mikehoffmannofficial/"
  },
  {
    username: "Yusuftruth",
    handle: "Instagram",
    followers: "268K",
    avatar: "https://instagram.fisb19-1.fna.fbcdn.net/v/t51.2885-19/491414994_1670969966856502_9143757797676603783_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby43MzguYzIifQ&_nc_ht=instagram.fisb19-1.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2QFJg9c02qZWAqBRyfVQ5Dcg4Y6VeJ1bf7TJal8BZS9c88SWBPtZg7H0i3IIPqD7ejM&_nc_ohc=C89-iEx1vbUQ7kNvwF-L90l&_nc_gid=BdoqkpNS64pAG2ex7F3kZA&edm=ALGbJPMBAAAA&ccb=7-5&oh=00_AfW8h2paukBZbtf9KRLvpQ-DCwryweJe1BqEiUEUshBNhw&oe=68AE70B8&_nc_sid=7d3ac5",
    link: "https://www.instagram.com/yusuftruth/"
  },
  {
    username: "Frederick Pahuus",
    handle: "Instagram",
    followers: "20K",
    avatar: "https://instagram.fisb19-1.fna.fbcdn.net/v/t51.2885-19/487067436_1161096865262262_988825651891346342_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.fisb19-1.fna.fbcdn.net&_nc_cat=106&_nc_oc=Q6cZ2QGMhsvuVxZpBUtTCXlYaQL6BolS15PkaM6roDQSyS5hCGsO9NgLuNsjAXI_WM_vBhY&_nc_ohc=Pv4amrUFgYgQ7kNvwGmgxYa&_nc_gid=HPOjFFkUAEGstnvwp6jOAQ&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AfV8KHIvURFaWIws1WZo3qUxjWIXkoqij2i1jw2Q7GhzUQ&oe=68AE73E9&_nc_sid=7a9f4b",
    link: "https://www.instagram.com/frederikpahuus/"
  },
  {
    username: "Swift",
    handle: "YouTube",
    followers: "229K",
    avatar: "https://yt3.googleusercontent.com/ytc/AIdro_myekXcfPxpybJg2ypawN5t0p9tkbUgFur4s6-QgwVVn_A=s160-c-k-c0x00ffffff-no-rj",
    link: "https://www.youtube.com/@SwiftMadden"
  },
  {
    username: "Robert Rosenfeld",
    handle: "YouTube",
    followers: "69.4K",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&q=80&fit=crop",
    link: "https://yt3.googleusercontent.com/ytc/AIdro_nyCBnevO52BEDm6m7jiRndBcjj17J4bxXzPLcZcJIgLaI=s160-c-k-c0x00ffffff-no-rj"
  }
];