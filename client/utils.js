// Set colors for job status

const statusColor = {
  Scheduled: 'text-orange-900',
  Active: 'text-orange-600',
  Invoicing: 'text-blue-600',
  'To price': 'text-rose-600',
  Completed: 'text-green-500',
}

export function changeColor(status) {
  return statusColor[status]
}

export function getStatus() {
  return statusColor
}
