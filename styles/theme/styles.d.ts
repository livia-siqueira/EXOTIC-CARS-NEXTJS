import "styled-components";
import ThemeProvider from './index'

type theme = typeof ThemeProvider;

declare module 'styled-components' {
    export interface DefaultTheme extends theme{}
}