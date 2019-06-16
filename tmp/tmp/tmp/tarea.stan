data {
  int<lower=0> l;
  int<lower=0> q[l];
}
parameters {
  simplex[l] p;
  vector<lower=0>[l] paramDirich;
}
model {
  p ~ dirichlet(paramDirich);
  q ~ multinomial(p);
}