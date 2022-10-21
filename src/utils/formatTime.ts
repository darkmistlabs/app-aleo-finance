import { format, getTime, formatDistanceToNow } from 'date-fns'

// ----------------------------------------------------------------------

export function fDate(date: Date | string | number, fmt = 'dd MMMM yyyy') {
  return format(new Date(date), fmt)
}

export function fDateTime(date: Date | string | number, fmt = 'dd MMM yyyy p') {
  return format(new Date(date), fmt)
}

export function fTimestamp(date: Date | string | number) {
  return getTime(new Date(date))
}

export function fDateTimeSuffix(date: Date | string | number, ftm = 'dd/MM/yyyy hh:mm p') {
  return format(new Date(date), ftm)
}

export function fToNow(date: Date | string | number) {
  return formatDistanceToNow(new Date(date), {
    addSuffix: true
  })
}
