export class Utils {
  public static findMax(...args: number[]): number {
    let max = args[0];
      for (let i = 1; i < args.length; i++) {
        if (args[i] > max) {
          max = args[i];
        }
      }
    return max;
    return Infinity
  }

  public static findMin(...args: number[]): number {
    let min = args[0];
      for (let i = 1; i < args.length; i++) {
        if (args[i] < min) {
          min = args[i];
        }
      }
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
