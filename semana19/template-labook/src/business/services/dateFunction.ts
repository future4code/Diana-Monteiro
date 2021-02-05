export const checkDate = (date: string): void => {
    const userPattern = date.includes('/')

    if (!userPattern) {
        throw new Error("Please provide dates in the format DD/MM/YYYY.")
    }
}

export const formatDate = (date: string): string => {
    const [day, month, year] = date.split('/')
    return `${year}-${month}-${day}`
}

module.exports = {
    date(timestamp: Date) {
      const date = new Date(timestamp)
      const year = date.getUTCFullYear();
      const month = `0${date.getUTCMonth() + 1}`.slice(-2);
      const day = `0${date.getUTCDate()}`.slice(-2);
      return `${year}-${month}-${day}`;
    }
  }  