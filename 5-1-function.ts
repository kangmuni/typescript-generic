{
  // *Bad1* => 일일히 타입을 다 조건을 걸어 하는건..
  function checkNotNullBad(arg: number | null): number {
    // null이 아니라면 숫자를 리턴!
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }

  const result1 = checkNotNullBad(123);
  console.log(result1);
  checkNotNullBad(null);

  // *Bad2* => 그렇다고 any를 사용하는건 나쁜 냄새라고 배웠지..
  function checkNotNullAnyBad(arg: number | null): any {
    // null이 아니라면 숫자를 리턴!
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }

  const result2 = checkNotNullAnyBad(123); // => 타입을 보장 받을 수 없다.

  // 이 때 사용되는것이 제네릭!!!
  //function checkNotNull<GENERIC>(arg: GENERIC | null): GENERIC {
  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }
  const number = checkNotNull(123);
  const boal: boolean = checkNotNull(true);
  // => 사용하는 사람이 어떤 타입인지 결정할 수 있고 유연하지만 타입을 보장 받을 수 있다.
}
