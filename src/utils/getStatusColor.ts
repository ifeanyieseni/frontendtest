export function getStatusColor(statusCode: number): string {
  if (statusCode >= 200 && statusCode < 300) return 'text-green-600'
  if (statusCode >= 300 && statusCode < 400) return 'text-yellow-600'
  if (statusCode >= 400) return 'text-red-600'
  
  return 'text-slate-500'
}
