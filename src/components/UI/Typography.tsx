/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'

// H1 – Main page title
export const Heading1 = styled.h1(({ theme: { font, colors } }) => ({
  fontSize: font.size.h1,
  lineHeight: font.lineHeight.h1,
  fontWeight: font.weight.bold,
  color: colors.text,
  margin:'0px',
}))

// H2 – Section title
export const Heading2 = styled.h2(({ theme: { font, colors } }) => ({
  fontSize: font.size.h2,
  lineHeight: font.lineHeight.h2,
  fontWeight: font.weight.bold,
  color: colors.text,
  margin:'0px',
}))

// H3 – Card or widget title
export const Heading3 = styled.h3(({ theme: { font, colors } }) => ({
  fontSize: font.size.h3,
  lineHeight: font.lineHeight.h3,
  fontWeight: font.weight.medium,
  color: colors.text,
  margin:'0px',
}))


// Paragraph – Base text block
export const Paragraph = styled.p(({ theme: { font, colors } }) => ({
  fontSize: font.size.paragraph,
  lineHeight: font.lineHeight.paragraph,
  fontWeight: font.weight.normal,
  color: colors.text,
  margin:'0px',
}))

// Caption – Small text (e.g. timestamps, meta info)
export const Caption = styled.span(({ theme: { font, colors } }) => ({
  fontSize: font.size.caption,
  lineHeight: font.lineHeight.caption,
  fontWeight: font.weight.normal,
  color: colors.textMuted,
}))
