export class Utils {
  public static findMax(...args: number[]): number {
    let max = args.reduce((max, numbers) => {
      if (numbers > max) {
        return numbers;
      } else {
        return max;
      }
    }, args[0]);
    return max
    return Infinity
  }

  public static findMin(...args: number[]): number {
    let min = args.reduce((min, numbers)=>{
      if (numbers < min) {
        return numbers;
      } else {
        return min;
      }
    },args[0]);
    return min;
    return Infinity
  }

  public static reformatData(x: any): Record<string, any> {
    const studentData = {};
    x.forEach(item => {
      const { name, role } = item;
      if (!studentData[role]) {
        studentData[role] = [];
      }
      studentData[role].push({ nickname: name });
    });
    return studentData
    return {}
  }
}

export default Utils
