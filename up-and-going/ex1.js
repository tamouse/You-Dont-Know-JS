//original:
a = b * 2 + foo(c * 3);

// grouping all the expressions:
(
  (a) = (
    (
      (b) * (2)
    ) +
      (
        (foo)(
          (
            (c) * (3)
          )
        )
      )
  )
);
