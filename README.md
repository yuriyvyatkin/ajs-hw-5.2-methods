# Домашнее задание №2 к лекции «Классы, наследование»

[![Build status](https://ci.appveyor.com/api/projects/status/4766s7pnggxq0ddk?svg=true)](https://ci.appveyor.com/project/yuriyvyatkin/ajs-hw-5-2-methods)

## Методы

### Легенда

Поскольку вы создавали классы для того, чтобы хранить в одном месте свойства объекта и его поведение, то пришла пора реализовать соответствующие методы.

#### Описание

Реализуйте в классе `Character` метод `levelUp`, который работает следующим образом:
1. На 1 повышает поле `level`;
1. На 20% повышает показатели `attack` и `defence`;
1. Приводит показатель `health` к значению 100.

Метод должен работать только если показатель жизни не равен 0. В противном случае генерируется ошибка (нельзя повысить левел умершего).

Реализуйте в класса `Character` метод `damage(points)`, который меняет внутреннее состояние объекта (`points` -  это урон, наносимый персонажу). Метод `damage(points)` ничего не возвращает и рассчитывает итоговое изменение жизни персонажа (`health`) по формуле: `health -= points * (1 - defence / 100)`, учитывая, что значение `health >= 0`.

Не забудьте написать unit-тесты, которые обеспечивают 100% покрытие функций и классов, которые вы тестируете.

---