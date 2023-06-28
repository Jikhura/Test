export class Utils {
  public static findMax(...args: number[]): number {
    let max = args.reduce((prev, numbers) =>  prev > numbers  ? prev : numbers,args[0]);
    return max;
  }

  public static findMin(...args: number[]): number {
    let min = args.reduce((prev, numbers)=> prev < numbers ? prev : numbers,args[0]);
    return min;
  }

  public static reformatData(x: any): Record<string, any> {
    const studentData = x.reduce((acc,item)=> { 
      const { name, role } = item;
        if (!acc[role]) {
          acc[role] = [];
        }
        acc[role].push({ nickname: name });
        return acc
    }, {});
    return studentData
  }
  
}

export default Utils
