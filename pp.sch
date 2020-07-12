(color "#f5f5dc")
(define (pp x y s)
        (circle x y s)
        (circle (+ x (* s 2)) y s)
        (rect x y (* s 2) (* s 7))
        (circle (+ x s) (+ y (* s 8)) s))
(pp 30 30 30)

(define (penis s)
  (text "8" (- 200 (* s 10)) 100 10)
  (penis-loop (- s 1)))

(define (penis-loop s)
	(cond [(zero? s) (text "D" 200 100 10)]
        [else (text "=" (- 200 (* s 10)) 100 10)
              (penis-loop (- s 1))]))


(define (snippet)
        (clock)
        (send-love "english" 10 180))