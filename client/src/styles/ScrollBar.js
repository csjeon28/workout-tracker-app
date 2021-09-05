import styled from 'styled-components'

export const ScrollBar = styled.div(() => ({
    width: '100%',
    height: '50vh',
    overflowY: 'scroll',
    padding: 20,
    direction: 'ltr',
    margin: 2,
    '::-webkit-scrollbar': {
        width: '8px',
    },
}))

export default ScrollBar