export const dataFormato = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("pt-PT", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export const formatCurrency = (amount: number) => {
  return `$${amount.toFixed(2)}`
}