interface NavBarLink {
    label: string
    path: string
}

export const navBarLinks: NavBarLink[] = [
    {
        label: 'Home',
        path: '/',
    },
    {
        label: 'About',
        path: '#about',
    },
    {
        label: 'Contact',
        path: '/contact',
    },
]
