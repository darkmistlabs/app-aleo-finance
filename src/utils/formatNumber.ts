import numeral from 'numeral'

// ----------------------------------------------------------------------

export function fCurrency(number: string | number) {
  return numeral(number).format(Number.isInteger(number) ? '$0,0' : '$0,0.00')
}

export function fPercent(number: number, fmt = '0.00%') {
  return numeral(number / 100).format(fmt)
}

export function fNumber(number: string | number, fmt = '0,0.0000') {
  return numeral(number).format(fmt)
}

export function fShortenNumber(number: string | number) {
  return numeral(number).format('0.00a').replace('.00', '')
}

export function fData(number: string | number, fmt = '0.0 b') {
  return numeral(number).format(fmt)
}
