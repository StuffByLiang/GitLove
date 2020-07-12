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


(define (view)
        (heart)
        (send-love "arabic" 45 160))
(view)


(clock)

(define (love-everywhere n)
    (cond [(zero? n) 
           (love-emoji (random-integer 300) 
                       (random-integer 300))]
        [else (love-emoji (random-integer 300) 
                          (random-integer 300))
              (love-everywhere (- n 1))]))

(love-everywhere 100)
(color "#ffffff")
(rect 8 187 200 16) 
(color "#000000")
(text "Hey, do you have time to talk??" 
      10 
      200 
      12)

(define (frontslash x y)
    (line x (+ y 15) (+ x 10) y 1))


(define (backslash x y)
    (line x y (+ x 10) (+ y 15) 1))


(define (updateX x y)
    (cond   [(= x 0) (+ x 10)]
        [(= (mod x 300) 0) 0]
        [else (+ x 10)]))

(define (updateY x y)
    (cond   [(= x 0) y]
        [(= (mod x 300) 0) (+ y 15)]
        [else y]))

(define (randomslash x y)
    (if (> (random-integer 100) 50)
        (frontslash x y)
        (backslash x y)))

(define (maze x y n)
    (cond [(zero? n) (randomslash x y)]
        [else (randomslash x y)
              (maze
        (updateX x y)
        (updateY x y)
        (- n 1))]))

(maze 0 0 618)