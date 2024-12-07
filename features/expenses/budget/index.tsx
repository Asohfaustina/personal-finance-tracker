import { AppButton } from "@/components/app-button";
import Render from "@/components/render";
import { Text, View } from "@/components/theme";
import * as React from "react";
import useBudget from "./use-budget";
import { globalStyles } from "@/styles/global.styles";
import { styles } from "./styles";
import { amountSeparator } from "@/lib/amount-separator";
import ProgressBar from "./progress-bar";
import UpdateBudget from "./update-budget";

export default React.memo(function Budget() {
	const { isFetching, isError, error, budget, open, toggle } = useBudget();

	const progressBarProps = {
		currentBudget: budget?.budget ?? 0,
		currentExpense: budget?.currentExpense ?? 0,
	};

	return (
		<React.Fragment>
			<View style={styles.container}>
				<Render isLoading={isFetching} isError={isError} error={error}>
					<View style={styles.budgetContainer}>
						<View style={styles.titleBox}>
							<Text style={[globalStyles.headers]}>Budget</Text>
							<AppButton press={toggle} style={styles.actionBox}>
								<Text style={styles.actionText}>{budget ? "Update" : "Set"} Budget</Text>
							</AppButton>
						</View>
						{budget ? (
							<View style={styles.budgetBox}>
								<View style={styles.budgetHeaderBox}>
									<Text style={styles.budgetText}>
										Duration :
										{new Date(budget.duration).toLocaleDateString("default", {
											dateStyle: "medium",
										})}
									</Text>

									<Text style={styles.amount}>
										<Text style={styles.currency}>{budget.currency.toUpperCase()}</Text>{" "}
										{amountSeparator(budget.currentExpense)}/{amountSeparator(budget.budget)}
									</Text>
								</View>
								<View style={styles.budgetProgressBox}>
									<View style={styles.progressBar}>
										<ProgressBar {...progressBarProps} />
									</View>
								</View>
							</View>
						) : (
							<View style={styles.noBudgetBox}>
								<Text style={styles.noBudgetText}>No budget set yet </Text>
							</View>
						)}
					</View>
				</Render>
			</View>
			<UpdateBudget open={open} close={toggle} />
		</React.Fragment>
	);
});
