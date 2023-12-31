interface IStudent {
  name: string
  score: number
}

interface IStore {
  subject: string
  students: IStudent[]
}

interface IStudentUpdateScore {
  name: string
  scores: Record<string, number>
}

interface IRemoveStudentScore {
  name: string
  subject: string
}
interface IStudentScore {
  [key: string]: any
}

export const updateStudentScore = (store: IStore[], update: IStudentUpdateScore): IStore[] => {
  const { name, scores } = update;
  Object.keys(scores).forEach(subject => {
    const subjectIndex = store.findIndex(item => item.subject === subject);
    if (subjectIndex !== -1) {
      const studentIndex = store[subjectIndex].students.findIndex(student => student.name === name);
      if (studentIndex !== -1) {
        store[subjectIndex].students[studentIndex].score = scores[subject];
      } else {
        store[subjectIndex].students.push({ name, score: scores[subject] });
      }
    } else {
      store.push({ subject, students: [{ name, score: scores[subject] }] });
    }
  });
  return store
}

export const removeStudentScoreBySubject = (store: IStore[], record: IRemoveStudentScore): IStore[] => {
  const {name, subject} = record;
  const updatedStore = store.map(item => {
    if (item.subject === subject) {
      item.students = item.students.filter(student => student.name !== name);
    }
    return item;
  });
  return updatedStore
}

export const getStudentScoreBySubject = (store: IStore[], subjects: string[]): IStudentScore[] => {
  const result = subjects.reduce((accumulator, subject) => {
    const data = store.find(data => data.subject === subject);
    if (data) {
      data.students.forEach(student => {
        let dataStudent = accumulator.find(s => s.name === student.name);
        if (!dataStudent) {
         dataStudent = { name: student.name };
          accumulator.push(dataStudent);
        }
        dataStudent[subject] = student.score;
      });
    }
    return accumulator;
  }, []);

  result.map(student => {
    subjects.forEach(subject => student[subject] ||= null);
    return student;
  });
  return result;
}