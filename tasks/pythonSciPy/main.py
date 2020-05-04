import scipy.integrate as integrate

print("Anwser: %.2f\n" % integrate.quad(lambda x : 2*x+1, 0, 1)[0])
