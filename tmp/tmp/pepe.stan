data { 
int<lower=1> Q;   
int<lower=1> N; 
int<lower=1,upper=Q> y[N];
  vector<lower=0>[Q] alpha;
} 
parameters {
  simplex[Q] p;
} 
model {
  p ~ dirichlet(alpha);
  for (i in 1:N){    
    y[i] ~ categorical(p);
    }
}