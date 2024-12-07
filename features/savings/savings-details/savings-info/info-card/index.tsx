import { Text, View } from "@/components/theme";
import * as React from "react";
import { styles } from "./styles";
import { globalStyles } from "@/styles/global.styles";
import Progress from "./progress";
import Render from "@/components/render";
import useInfo from "./use-info";
import EmptyComponent from "@/components/empty-component";
import truncate from "@/lib/truncate";
import { AppButton } from "@/components/app-button";
import EditSavings from "../edit-savings";
import DissolveSavings from "../dissolve-savings";

export default React.memo(function InfoCard() {
	const { isFetching, isError, error, details, edit, dissolve, openActions, closeActions } =
		useInfo();

	return (
		<React.Fragment>
			<View style={[styles.container]}>
				<Render isLoading={isFetching} isError={isError} error={error}>
					{!details ? (
						<EmptyComponent title="Record not found" />
					) : (
						<View style={styles.cardBox}>
							<View style={styles.headerBox}>
								<View style={[globalStyles.bgNone]}>
									<Text style={styles.savingsTitle}>{details.title}</Text>
									<Text style={styles.durationText}>{truncate(details.comments ?? "", 30)}</Text>

									<View style={styles.amountBox}>
										<Text style={styles.amount}>
											<Text style={styles.currency}>{details.currency.toUpperCase()} </Text>
											{details.amount}
										</Text>
									</View>
								</View>

								<Progress amount={details.amount} targetAmount={details.targetAmount} />
							</View>
							<View style={styles.footerBox}>
								<View style={styles.durationBox}>
									<Text style={styles.durationText}>
										Ends:{" "}
										<Text style={styles.durationDate}>
											{new Date(details.duration).toLocaleDateString("default", {
												dateStyle: "medium",
											})}
										</Text>
									</Text>
								</View>
								<View style={styles.durationBox}>
									<Text style={styles.durationText}>
										Target:{" "}
										<Text style={styles.durationDate}>
											{details.currency.toUpperCase()} {details.targetAmount}
										</Text>
									</Text>
								</View>
							</View>

							<View style={styles.actionBox}>
								<AppButton press={() => openActions("edit_savings")} style={styles.editButton}>
									<Text style={styles.editText}>Edit</Text>
								</AppButton>
								<AppButton press={() => openActions("dissolve")} style={styles.dissolve}>
									<Text style={styles.dissolveText}>Dissolve savings</Text>
								</AppButton>
							</View>
						</View>
					)}
				</Render>
			</View>
			<EditSavings open={edit} close={() => closeActions("edit_savings")} />
			<DissolveSavings open={dissolve} close={() => closeActions("dissolve")} />
		</React.Fragment>
	);
});
